import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Navbar from "../components/Navbar";
import Achievements from "../components/Achievements";
import Activity from "../components/Activity";
import styles from "../styles/ProfilStyles";
import { LinearGradient } from "expo-linear-gradient";

const Profil: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"stats" | "Achievements" | "Activity">("stats");

  // Fonction pour choisir une image depuis la galerie
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

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  // Données des thèmes faibles et forts
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

  // Fonction pour afficher le contenu des onglets
  const renderTabContent = () => {
    switch (activeTab) {
      case "stats":
        return (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* Section des statistiques */}
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

            {/* Thèmes faibles */}
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

            {/* Thèmes forts */}
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
        <TouchableOpacity onPress={pickImage}>
          <Image
            style={styles.profileImage}
            source={
              profileImage
                ? { uri: profileImage }
                : require("../assets/default-profile1.png")
            }
          />
        </TouchableOpacity>
        <Text style={styles.nameText}>Antoine Dupont</Text>
      </View>

      {/* Onglets */}
      <View style={styles.tabsContainer}>
        {["stats", "Achievements", "Activity"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab as typeof activeTab)}>
            <Text style={[styles.tabText, activeTab === tab && styles.activeTab]}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Contenu des onglets */}
      {renderTabContent()}

      {/* Barre de navigation */}
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
    </View>
  );
};

export default Profil;
