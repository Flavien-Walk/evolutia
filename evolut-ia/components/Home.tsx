import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/HomeScreenStyles";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greetingText}>Bonjour, Bienvenue 👋</Text>
          <Text style={styles.nameText}>Antoine Dupont</Text>
        </View>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://via.placeholder.com/50",
          }}
        />
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
          <Ionicons name="chevron-forward-outline" size={20} />
        </TouchableOpacity>
      </View>

      {/* Bottom Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={24} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="grid-outline" size={24} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
