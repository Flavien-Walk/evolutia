import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import styles from "../styles/HomeScreenStyles";
import Navbar from "../components/Navbar";
import { MaterialIcons } from '@expo/vector-icons';

const Home: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState("Utilisateur");
  const [role, setRole] = useState("User");
  const [roleColor, setRoleColor] = useState("#808080");
  const [selectedPlan, setSelectedPlan] = useState("Aucune");
  const [profileImage, setProfileImage] = useState<string>("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");

        if (!token) {
          console.warn("Token manquant, redirection vers la connexion.");
          router.push("/login");
          return;
        }

        const response = await fetch("http://10.109.249.241:3636/user-info", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          console.warn("Session expirée ou erreur côté serveur.");
          router.push("/login");
          return;
        }

        const data = await response.json();

        if (data.username) {
          setUsername(data.username);
          await AsyncStorage.setItem("username", data.username);
        }

        if (data.role) {
          setRole(data.role);
          await AsyncStorage.setItem("role", data.role);
        }

        if (data.roleColor) {
          setRoleColor(data.roleColor);
          await AsyncStorage.setItem("roleColor", data.roleColor);
        }

        if (data.selectedPlan) {
          setSelectedPlan(data.selectedPlan);
          await AsyncStorage.setItem("selectedPlan", data.selectedPlan);
        } else {
          setSelectedPlan("Aucune");
          await AsyncStorage.setItem("selectedPlan", "Aucune");
        }

        if (data.profileImage) {
          setProfileImage(data.profileImage);
          await AsyncStorage.setItem("profileImage", data.profileImage);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des informations utilisateur :", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.greetingText}>Bonjour Bienvenue 👋</Text>
          <Text style={styles.nameText}>{username}</Text>
          <Text style={[styles.roleText, { color: roleColor }]}>
            Statut : {role}
          </Text>
          <Text style={styles.planText}>
            Offre choisie : {selectedPlan}
          </Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/profil")}>
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={styles.profileImage}
            />
          ) : (
            <View style={styles.emptyProfileImage}>
              <MaterialIcons name="add-a-photo" size={30} color="#ccc" />
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Texte principal */}
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>
          Obtenez votre {"\n"}
          <Text style={styles.highlight}>Meilleur cours</Text> aujourd'hui !
        </Text>
      </View>

      {/* Carte de cours */}
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.courseCard}
          onPress={() => router.push("/home")}
        >
          <ImageBackground
            source={require("../assets/Image Container anglais.png")}
            style={styles.courseImage}
            imageStyle={styles.cardImageStyle}
          >
            <View style={styles.overlay}>
              <Text style={styles.courseTitle}>Cours d'anglais</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>

      {/* Section Quiz */}
      <View style={styles.quizSection}>
        <Text style={styles.quizTitle}>Quiz de la semaine</Text>
        <TouchableOpacity
          style={styles.quizCard}
          onPress={() => router.push("/mathematiques")}
        >
          <Image
            source={require("../assets/Image maths.png")}
            style={styles.quizImage}
          />
          <View>
            <Text style={styles.quizSubject}>Mathématique</Text>
            <Text style={styles.quizDuration}>Durée : 20min</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Navbar */}
      <Navbar />
    </View>
  );
};

export default Home;
