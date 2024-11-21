import React from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter pour la navigation
import styles from "../styles/HomeScreenStyles";
import Navbar from "../components/Navbar"; // Import du composant Navbar

const HomeScreen: React.FC = () => {
  const router = useRouter(); // Hook pour gérer la navigation

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.greetingText}>Bonjour Bienvenue 👋</Text>
          <Text style={styles.nameText}>Antoine Dupont</Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/profil")}>
          <Image
            source={require("../assets/Profile.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* Texte principal */}
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>
          Obtenez votre {"\n"}<Text style={styles.highlight}>Meilleur cours</Text>{" "}
          aujourd'hui !
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
            imageStyle={styles.cardImageStyle} // Arrondir les coins
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
        <TouchableOpacity style={styles.quizCard}>
          <Image
            source={require("../assets/Image maths.png")} // Remplacez par votre image
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

export default HomeScreen;
