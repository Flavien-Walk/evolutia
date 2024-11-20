import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/DashboardStyles"; // Importation des styles
import Navbar from "../components/Navbar"; // Importation de la Navbar

const Dashboard: React.FC = () => {
  console.log("Rendering Dashboard...");
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* En-tête */}
        <View style={styles.header}>
          <Text style={styles.logo}>A</Text>
          <View style={styles.icons}>
            <Ionicons name="reload-outline" size={24} style={styles.icon} />
            <Ionicons name="notifications-outline" size={24} style={styles.icon} />
          </View>
        </View>

        {/* Titre principal */}
        <Text style={styles.title}>Prêt à comprendre ?</Text>
        <Text style={styles.subtitle}>Choisis ton item.</Text>

        {/* Barre de progression */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressLabel}>44% Progression</Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Cartes */}
        <View style={styles.cardsContainer}>
          <View style={styles.cardLarge}>
            <Text style={styles.cardTitle}>Option A</Text>
          </View>
          <View style={styles.cardSmall}>
            <Text style={styles.cardTitle}>IA Assistance</Text>
          </View>
          <View style={styles.cardSmall}>
            <Text style={styles.cardTitle}>Historique</Text>
          </View>
        </View>

        <View style={styles.cardsContainer}>
          <View style={styles.cardSmall}>
            <Text style={styles.cardTitle}>Dernière retranscription</Text>
          </View>
          <View style={styles.cardLarge}>
            <Text style={styles.cardTitle}>Progression globale</Text>
            <Text style={styles.cardValue}>660</Text>
          </View>
        </View>
      </ScrollView>

      {/* Navbar */}
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
    </View>
  );
};

export default Dashboard;
