import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "../styles/DashboardStyles";
import Navbar from "../components/Navbar";

// Header Component
const Header: React.FC = () => (
  <View style={styles.header}>
    {/* Logo Container */}
    <View style={styles.logoContainer}>
      <Image
        source={require("../assets/Logo Blanc Evolut'IA.png")} // Replace with your image path
        style={styles.logoImage}
      />
    </View>

    {/* Header Text */}
    <View style={styles.headerTextContainer}>
      <Text style={styles.title}>Prêt à comprendre ?</Text>
      <Text style={styles.subtitle}>Choisis ton item.</Text>
    </View>

    {/* Header Icons */}
    <View style={styles.icons}>
      <Ionicons name="reload-outline" size={24} style={styles.icon} />
      <Ionicons name="notifications-outline" size={24} style={styles.icon} />
    </View>
  </View>
);

// Tab Navigation Component
const Tabs: React.FC = () => {
  const router = useRouter(); // Hook for navigation

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity onPress={() => router.push("/dashboard")}>
        <Text style={[styles.tabText, styles.activeTabText]}>Tableau de bord</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/matieres")}>
        <Text style={styles.tabText}>Matières</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/recommandation")}>
        <Text style={styles.tabText}>Recommandation</Text>
      </TouchableOpacity>
    </View>
  );
};

// Progress Bar Component
const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <View style={styles.progressWrapper}>
    <View style={styles.progressContainer}>
      <View style={[styles.progressFill, { width: `${progress}%` }]} />
    </View>
    <Text style={styles.progressLabel}>{progress}% Progression</Text>
  </View>
);

// Cards Section Component
const CardsSection: React.FC = () => {
  const router = useRouter(); // Hook for navigation
  return (
    <View style={styles.cardsContainer}>
      {/* Chart Card */}
      <View style={styles.chartCard}>
        <Text style={styles.cardTitle}>Récapitulation de l’avancement par matière</Text>
      </View>

      {/* Individual Cards */}
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
      {/* Transparent StatusBar */}
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />

      {/* Main Background */}
      <View style={styles.background}>
        <View style={styles.container}>
          {/* Header */}
          <Header />

          {/* White Card Container */}
          <View style={styles.cardContainer}>
            {/* Tabs */}
            <Tabs />

            {/* Scrollable Content */}
            <ScrollView>
              {/* Progress Bar */}
              <ProgressBar progress={44} />

              {/* Cards Section */}
              <CardsSection />
            </ScrollView>
          </View>

          {/* Navbar */}
          <Navbar />
        </View>
      </View>
    </>
  );
};

export default Dashboard;