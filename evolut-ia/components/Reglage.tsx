import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Switch,
} from "react-native";
import * as ImagePicker from "expo-image-picker"; // Importation pour la galerie
import { useRouter } from "expo-router";
import styles from "../styles/ReglageStyles";

const Reglage: React.FC = () => {
  const router = useRouter();

  const [notifications, setNotifications] = useState<boolean>(true);
  const [language, setLanguage] = useState<string>("Français");
  const [theme, setTheme] = useState<string>("Mode lumineux");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const languages = ["Français", "Anglais", "Italien", "Chinois", "Espagnol"];

  const toggleTheme = (isEnabled: boolean) => {
    setTheme(isEnabled ? "Mode sombre" : "Mode lumineux");
    setIsDarkMode(isEnabled);
  };

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

  const pickImage = async () => {
    // Demander la permission d'accès à la galerie
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission refusée", "Vous devez autoriser l'accès à la galerie.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View
      style={[
        styles.container,
        isDarkMode && { backgroundColor: "#121212" }, // Background for dark mode
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

      {/* Profile Section */}
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
          Antoine Dupont
        </Text>
        <Text
          style={[styles.profileDetails, isDarkMode && { color: "#aaaaaa" }]}
        >
          youremail@domain.com | +33 1 23 45 67 89
        </Text>
      </View>

      {/* Settings Section */}
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
          <Text
            style={[styles.settingsText, isDarkMode && { color: "#ffffff" }]}
          >
            Modifier les informations du profil
          </Text>
        </TouchableOpacity>

        {/* Notifications */}
        <View style={styles.settingsItem}>
          <Text
            style={[styles.settingsText, isDarkMode && { color: "#ffffff" }]}
          >
            Notifications
          </Text>
          <Switch
            value={notifications}
            onValueChange={() => setNotifications(!notifications)}
            thumbColor={notifications ? "#587EFF" : "#E0E0E0"}
            trackColor={{ false: "#767577", true: "#90CAF9" }}
          />
        </View>

        {/* Language */}
        <TouchableOpacity style={styles.settingsItem} onPress={selectLanguage}>
          <Text
            style={[styles.settingsText, isDarkMode && { color: "#ffffff" }]}
          >
            Langue
          </Text>
          <Text
            style={[
              styles.settingsValue,
              isDarkMode && { color: "#90CAF9" },
            ]}
          >
            {language}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Themes Section */}
      <View
        style={[
          styles.settingsContainer,
          isDarkMode && { backgroundColor: "#1E1E1E" },
        ]}
      >
        <View style={styles.settingsItem}>
          <Text
            style={[styles.settingsText, isDarkMode && { color: "#ffffff" }]}
          >
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

      {/* Assistance Section */}
      <View
        style={[
          styles.settingsContainer,
          isDarkMode && { backgroundColor: "#1E1E1E" },
        ]}
      >
        <TouchableOpacity style={styles.settingsItem}>
          <Text
            style={[styles.settingsText, isDarkMode && { color: "#ffffff" }]}
          >
            Aide et assistance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text
            style={[styles.settingsText, isDarkMode && { color: "#ffffff" }]}
          >
            Contactez-nous
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text
            style={[styles.settingsText, isDarkMode && { color: "#ffffff" }]}
          >
            Politique de confidentialité
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Reglage;
