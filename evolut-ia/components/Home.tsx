import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter pour la navigation
import styles from "../styles/HomeScreenStyles";
import Navbar from "../components/Navbar"; // Import du composant Navbar

const HomeScreen: React.FC = () => {
  const router = useRouter(); // Hook pour gérer la navigation

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greetingText}>Bonjour, Bienvenue 👋</Text>
          <Text style={styles.nameText}>Antoine Dupont</Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/profil")}>
          <Image
            style={styles.profileImage}
            source={{
              uri: "https://via.placeholder.com/50",
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <Text style={styles.mainText}>
        Obtenez votre <Text style={styles.highlight}>Meilleur cours</Text>{" "}
        aujourd'hui !
      </Text>
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Cours d'anglais</Text>
      </View>

      {/* Weekly Quiz Section */}
      <View style={styles.quizSection}>
        <Text style={styles.quizTitle}>Quiz de la semaine</Text>
        <TouchableOpacity style={styles.quizCard}>
          <Text style={styles.quizSubject}>Mathématique</Text>
          <Text style={styles.quizDuration}>Durée : 20min</Text>
        </TouchableOpacity>
      </View>

      {/* Appel du composant Navbar */}
      <Navbar />
    </View>
  );
};

export default HomeScreen;
