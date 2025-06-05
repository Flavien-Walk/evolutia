import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import Navbar from "../components/Navbar";
import Achievements from "../components/Achievements";
import Activity from "../components/Activity";
import styles from "../styles/ProfilStyles";

const Profil: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [fullName, setFullName] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"stats" | "Achievements" | "Activity">("stats");
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          router.push("/login");
          return;
        }
        const response = await fetch("http://10.109.249.241:3636/user-info", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) {
          router.push("/login");
          return;
        }
        const data = await response.json();
        if (data.profileImage) setProfileImage(data.profileImage);
        if (data.username) setFullName(data.username);
      } catch (error) {
        console.error("Erreur lors du chargement des infos utilisateur :", error);
      }
    };
    fetchUserData();
  }, []);

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
      base64: true,
    });
    if (!result.canceled && result.assets.length > 0) {
      const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`;
      setProfileImage(base64Image);
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          Alert.alert("Erreur", "Vous devez être connecté pour changer la photo.");
          return;
        }
        const response = await fetch(
          "http://10.109.249.241:3636/update-profile-image",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ imageUri: base64Image }),
          }
        );
        if (!response.ok) {
          throw new Error("Erreur lors de la mise à jour de la photo de profil.");
        }
        const data = await response.json();
        setProfileImage(data.profileImage);
        Alert.alert("Succès", "Photo de profil mise à jour !");
      } catch (error) {
        console.error(error);
        Alert.alert("Erreur", "Une erreur est survenue lors de la mise à jour de la photo.");
      }
    }
  };

  const handleLogout = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        await fetch("http://10.109.249.241:3636/logout", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      await AsyncStorage.removeItem("token");
      Alert.alert("Déconnecté", "Vous avez été déconnecté avec succès.");
      router.push("/");
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
      Alert.alert("Erreur", "Une erreur est survenue lors de la déconnexion.");
    }
  };

  const weakestTopics = [
    { title: "Lorem Ipsum is simply", percent: 28, image: require("../assets/photoprofil1.png") },
    { title: "Lorem Ipsum is simply", percent: 35, image: require("../assets/photoprofil2.png") },
    { title: "Lorem Ipsum is simply", percent: 40, image: require("../assets/photoprofil3.png") },
  ];

  const strongestTopics = [
    { title: "Lorem Ipsum is simply", percent: 95, image: require("../assets/photoprofil4.png") },
    { title: "Lorem Ipsum is simply", percent: 90, image: require("../assets/photoprofil5.png") },
    { title: "Lorem Ipsum is simply", percent: 87, image: require("../assets/photoprofil6.png") },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "stats":
        return (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.statsSection}>
              <View style={styles.statRow}>
                <TouchableOpacity style={styles.statCard}>
                  <Image source={require("../assets/feu.png.png")} style={styles.statIcon} />
                  <View>
                    <Text style={styles.statValue}>55</Text>
                    <Text style={styles.statLabel}>Quizzes</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.statCard}>
                  <Image source={require("../assets/stat.png.png")} style={styles.statIcon} />
                  <View>
                    <Text style={styles.statValue}>#2</Text>
                    <Text style={styles.statLabel}>Leaderboard</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.statRow}>
                <TouchableOpacity style={styles.statCard}>
                  <Image source={require("../assets/good.png.png")} style={styles.statIcon} />
                  <View>
                    <Text style={styles.statValue}>83%</Text>
                    <Text style={styles.statLabel}>Accuracy</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.statCard}>
                  <Image source={require("../assets/level.png.png")} style={styles.statIcon} />
                  <View>
                    <Text style={styles.statValue}>86%</Text>
                    <Text style={styles.statLabel}>Recall</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.topicSection}>
              <Text style={styles.topicTitle}>Thèmes les moins forts</Text>
              {weakestTopics.map((topic, index) => (
                <View key={index} style={styles.topicCard}>
                  <Image source={topic.image} style={styles.topicImage} />
                  <View style={styles.topicContent}>
                    <Text>{topic.title}</Text>
                    <View style={styles.progressBarContainer}>
                      <LinearGradient
                        colors={["#FFA726", "#FB8C00"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={[styles.progressBar, { width: `${topic.percent}%` }]}
                      />
                    </View>
                  </View>
                  <Text style={styles.topicPercentage}>{topic.percent}% Correct</Text>
                </View>
              ))}
            </View>

            <View style={styles.topicSection}>
              <Text style={styles.topicTitle}>Thèmes les plus forts</Text>
              {strongestTopics.map((topic, index) => (
                <View key={index} style={styles.topicCard}>
                  <Image source={topic.image} style={styles.topicImage} />
                  <View style={styles.topicContent}>
                    <Text>{topic.title}</Text>
                    <View style={styles.progressBarContainer}>
                      <LinearGradient
                        colors={["#66BB6A", "#43A047"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={[styles.progressBar, { width: `${topic.percent}%` }]}
                      />
                    </View>
                  </View>
                  <Text style={styles.topicPercentage}>{topic.percent}% Correct</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        );
      case "Achievements":
        return <Achievements />;
      case "Activity":
        return <Activity />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* En-tête du profil */}
      <View style={styles.profileHeader}>
        <TouchableOpacity
          onPress={pickImage}
          accessible
          accessibilityLabel="Changer la photo de profil"
          accessibilityHint="Ouvre la galerie pour changer la photo"
        >
          {profileImage ? (
            <Image style={styles.profileImage} source={{ uri: profileImage }} />
          ) : (
            <Image
              style={styles.profileImage}
              source={require("../assets/default-profile1.png")}
            />
          )}
        </TouchableOpacity>

        <Text
          style={styles.nameText}
          accessibilityRole="header"
          accessibilityLabel={`Profil de ${fullName || "Utilisateur"}`}
        >
          {fullName || "Utilisateur"}
        </Text>

        <TouchableOpacity
          style={styles.logoutButtonUnderName}
          onPress={handleLogout}
          accessible
          accessibilityRole="button"
          accessibilityLabel="Se déconnecter"
          accessibilityHint="Déconnecte et retourne à la page d'accueil"
        >
          <Text style={styles.logoutButtonText}>Déconnexion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => router.push("/reglage")}
          accessible
          accessibilityRole="button"
          accessibilityLabel="Bouton réglages"
          accessibilityHint="Ouvre les réglages du profil"
        >
          <Image
            source={require("../assets/setting.png")}
            style={styles.settingsIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Onglets */}
      <View style={styles.tabsContainer}>
        {["stats", "Achievements", "Activity"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab as typeof activeTab)}
            accessible
            accessibilityRole="tab"
            accessibilityState={{ selected: activeTab === tab }}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTab]}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Contenu des onglets */}
      {renderTabContent()}

      {/* Navbar */}
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
    </View>
  );
};

export default Profil;
