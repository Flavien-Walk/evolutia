import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "../styles/DashboardStyles";
import Navbar from "../components/Navbar";

const Header: React.FC = () => (
  <View style={styles.header}>
    <View style={styles.logoContainer}>
      <Image
        source={require("../assets/Logo Blanc Evolut'IA.png")}
        style={styles.logoImage}
      />
    </View>
    <View style={styles.headerTextContainer}>
      <Text style={styles.title}>Prêt à comprendre ?</Text>
      <Text style={styles.subtitle}>Choisis ton item.</Text>
    </View>
    <View style={styles.icons}>
      <Ionicons name="reload-outline" size={24} style={styles.icon} />
      <Ionicons name="notifications-outline" size={24} style={styles.icon} />
    </View>
  </View>
);

const Tabs: React.FC = () => {
  const router = useRouter();
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity onPress={() => router.push("/dashboard")}>
        <Text style={[styles.tabText, styles.activeTabText]}>Tableau de bord</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={styles.tabText}>Matières</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={styles.tabText}>Recommandation</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <View style={styles.progressWrapper}>
    <View style={styles.progressContainer}>
      <View style={[styles.progressFill, { width: `${progress}%` }]} />
    </View>
    <Text style={styles.progressLabel}>{progress}% Progression</Text>
  </View>
);

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

const Dashboard: React.FC = () => {
  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <View style={styles.background}>
        <View style={styles.container}>
          <Header />
          <View style={styles.cardContainer}>
            <Tabs />
            <ScrollView style={styles.scrollContainer}>
              <ProgressBar progress={44} />
              <CardsSection />
            </ScrollView>
          </View>
        </View>
        {/* Navbar fixée ici */}
        <View style={styles.navbarContainer}>
          <Navbar />
        </View>
      </View>
    </>
  );
};

export default Dashboard;
