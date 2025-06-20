import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Switch,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import styles from "../styles/ReglageStyles";

const Reglage: React.FC = () => {
  const router = useRouter();

  const [notifications, setNotifications] = useState<boolean>(true);
  const [language, setLanguage] = useState<string>("Français");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("Utilisateur");
  const [email, setEmail] = useState<string>("youremail@domain.com");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const languages = ["Français", "Anglais", "Italien", "Chinois", "Espagnol"];

  // Récupérer les infos utilisateur
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          router.push("/login");
          return;
        }

        const response = await fetch("https://evolutia-back.onrender.com/user-info", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          router.push("/login");
          return;
        }

        const data = await response.json();
        setUsername(data.username);
        setEmail(data.email);
        setProfileImage(data.profileImage);

        const savedDarkMode = await AsyncStorage.getItem("darkMode");
        setIsDarkMode(savedDarkMode === "true");
      } catch (error) {
        console.error("Erreur lors de la récupération des informations :", error);
      }
    };

    fetchUserData();
  }, []);

  // Gérer le mode sombre en local (AsyncStorage)
  const toggleTheme = async (isEnabled: boolean) => {
    setIsDarkMode(isEnabled);
    await AsyncStorage.setItem("darkMode", isEnabled ? "true" : "false");
  };

  // Choisir la langue
  const selectLanguage = () => {
    Alert.alert(
      "Choisissez votre langue",
      "",
      languages.map((lang) => ({
        text: lang,
        onPress: () => setLanguage(lang),
      }))
    );
  };

  // Sélection d'image et mise à jour
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission refusée", "Vous devez autoriser l'accès à la galerie.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedImage = result.assets[0].uri;
      setProfileImage(selectedImage);

      // Envoie au serveur
      try {
        const token = await AsyncStorage.getItem("token");
        const response = await fetch("https://evolutia-back.onrender.com/update-profile-image", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ imageUri: selectedImage }),
        });

        const data = await response.json();
        if (response.ok) {
          console.log("✅ Photo de profil mise à jour :", data.profileImage);
          await AsyncStorage.setItem("profileImage", data.profileImage);
        } else {
          console.log("❌ Erreur lors de la mise à jour :", data.error);
          Alert.alert("Erreur", "Impossible de mettre à jour la photo de profil.");
        }
      } catch (error) {
        console.error("❌ Erreur lors de l'envoi de la photo :", error);
        Alert.alert("Erreur", "Impossible de mettre à jour la photo de profil.");
      }
    }
  };

  return (
    <View
      style={[
        styles.container,
        isDarkMode && { backgroundColor: "#121212" },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={[styles.backText, isDarkMode && { color: "#ffffff" }]}>
            ← Retour
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.menuIcon, isDarkMode && { color: "#ffffff" }]}>⋮</Text>
        </TouchableOpacity>
      </View>

      {/* Profile */}
      <View style={styles.profileSection}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={{
              uri: profileImage || "https://via.placeholder.com/100",
            }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text style={[styles.profileName, isDarkMode && { color: "#ffffff" }]}>
          {username}
        </Text>
        <Text style={[styles.profileDetails, isDarkMode && { color: "#aaaaaa" }]}>
          {email}
        </Text>
      </View>

      {/* Paramètres */}
      <View
        style={[
          styles.settingsContainer,
          isDarkMode && { backgroundColor: "#1E1E1E" },
        ]}
      >
        <TouchableOpacity
          style={styles.settingsItem}
          onPress={() => router.push("/ModifProfil")}
        >
          <Text style={[styles.settingsText, isDarkMode && { color: "#ffffff" }]}>
            Modifier les informations du profil
          </Text>
        </TouchableOpacity>

        {/* Notifications */}
        <View style={styles.settingsItem}>
          <Text style={[styles.settingsText, isDarkMode && { color: "#ffffff" }]}>
            Notifications
          </Text>
          <Switch
            value={notifications}
            onValueChange={() => setNotifications(!notifications)}
            thumbColor={notifications ? "#587EFF" : "#E0E0E0"}
            trackColor={{ false: "#767577", true: "#90CAF9" }}
          />
        </View>

        {/* Langue */}
        <TouchableOpacity style={styles.settingsItem} onPress={selectLanguage}>
          <Text style={[styles.settingsText, isDarkMode && { color: "#ffffff" }]}>
            Langue
          </Text>
          <Text style={[styles.settingsValue, isDarkMode && { color: "#90CAF9" }]}>
            {language}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Thèmes */}
      <View
        style={[
          styles.settingsContainer,
          isDarkMode && { backgroundColor: "#1E1E1E" },
        ]}
      >
        <View style={styles.settingsItem}>
          <Text style={[styles.settingsText, isDarkMode && { color: "#ffffff" }]}>
            Thèmes
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            thumbColor={isDarkMode ? "#587EFF" : "#E0E0E0"}
            trackColor={{ false: "#767577", true: "#90CAF9" }}
          />
        </View>
      </View>

      {/* Aide */}
      <View
        style={[
          styles.settingsContainer,
          isDarkMode && { backgroundColor: "#1E1E1E" },
        ]}
      >
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={[styles.settingsText, isDarkMode && { color: "#ffffff" }]}>
            Aide et assistance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={[styles.settingsText, isDarkMode && { color: "#ffffff" }]}>
            Contactez-nous
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={[styles.settingsText, isDarkMode && { color: "#ffffff" }]}>
            Politique de confidentialité
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Reglage;
