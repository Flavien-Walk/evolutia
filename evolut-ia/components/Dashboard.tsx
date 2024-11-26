import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
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
  <View style={styles.progressCard}>
    <View style={styles.progressWrapper}>
      <View style={styles.progressContainer}>
        <LinearGradient
          colors={["#4A00E0", "#8E2DE2"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.progressFill, { width: `${progress}%` }]}
        />
      </View>
      <Text style={styles.progressLabel}>{progress}% Progression</Text>
    </View>
  </View>
);

const CardsSection: React.FC = () => {
  const router = useRouter();
  return (
    <View style={styles.cardsGrid}>
      <TouchableOpacity style={styles.largeCard}>
        <Image source={require("../assets/apple.png")} style={styles.chartImage} />
        <Text style={styles.cardTitle}>Récapitulation de l’avancement par matière</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.smallCard} onPress={() => router.push("/")}>
        <Image source={require("../assets/chat-bot.png")} style={styles.cardIcon} />
        <Text style={styles.cardTitle}>IA Assistance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.smallCard} onPress={() => router.push("/")}>
        <Image source={require("../assets/screen-share.png")} style={styles.cardIcon} />
        <Text style={styles.cardTitle}>Historique</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.largeCard}>
        <Text style={styles.cardTitle}>Progression globale</Text>
        <Text style={styles.progressValue}>660</Text>
        <TouchableOpacity style={styles.viewDetailsButton}>
          <Text style={styles.viewDetailsText}>Voir dans l'ensemble</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fullWidthCard}>
        <Image source={require("../assets/printer.png")} style={styles.cardIcon} />
        <Text style={styles.cardTitle}>Dernière retranscription</Text>
      </TouchableOpacity>
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
            <ProgressBar progress={44} />
            <ScrollView
              style={styles.scrollContainer}
              contentContainerStyle={styles.scrollContent} // Added padding
            >
              <CardsSection />
            </ScrollView>
          </View>
        </View>
        <View style={styles.navbarContainer}>
          <Navbar />
        </View>
      </View>
    </>
  );
};

export default Dashboard;
