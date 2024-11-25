import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "../styles/DashboardStyles";
import Navbar from "../components/Navbar";

// Header Component
const Header: React.FC = () => (
  <View style={styles.header}>
    {/* Logo remplacé par une image */}
    <View style={styles.logoContainer}>
      <Image
        source={require("../assets/Logo Blanc Evolut'IA.png")} // Remplacez par le chemin de votre image
        style={styles.logoImage} // Style pour l'image du logo
      />
    </View>

    {/* Texte de l'en-tête */}
    <View style={styles.headerTextContainer}>
      <Text style={styles.title}>Prêt à comprendre ?</Text>
      <Text style={styles.subtitle}>Choisis ton item.</Text>
    </View>

    {/* Icônes dans l'en-tête */}
    <View style={styles.icons}>
      <Ionicons name="reload-outline" size={24} style={styles.icon} />
      <Ionicons name="notifications-outline" size={24} style={styles.icon} />
    </View>
  </View>
);

// Tab Navigation Component
const Tabs: React.FC = () => (
  <View style={styles.tabContainer}>
    <Text style={[styles.tabText, styles.activeTabText]}>Tableau de bord</Text>
    <Text style={styles.tabText}>Matières</Text>
    <Text style={styles.tabText}>Recommandation</Text>
  </View>
);

// Progress Bar Component
const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <View style={styles.progressContainer}>
    <Text style={styles.progressLabel}>{progress}% Progression</Text>
    <View style={styles.progressBar}>
      <View style={[styles.progressFill, { width: `${progress}%` }]} />
    </View>
  </View>
);

// Cards Section Component
const CardsSection: React.FC = () => {
  const router = useRouter();
  return (
    <View style={styles.cardsContainer}>
      <View style={styles.chartCard}>
        <Text style={styles.cardTitle}>Récapitulation de l’avancement par matière</Text>
      </View>
      <TouchableOpacity style={styles.card} onPress={() => router.push("/chatbot")}>
        <Text style={styles.cardTitle}>IA Assistance</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Historique</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Dernière retranscription</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Progression globale</Text>
        <Text style={styles.cardValue}>660</Text>
      </View>
    </View>
  );
};

// Main Dashboard Component
const Dashboard: React.FC = () => {
  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <View style={styles.background}>
        <View style={styles.container}>
          <Header />
          <View style={styles.cardContainer}>
            <Tabs />
            <ScrollView>
              <ProgressBar progress={44} />
              <CardsSection />
            </ScrollView>
          </View>
          <Navbar />
        </View>
      </View>
    </>
  );
};

export default Dashboard;
