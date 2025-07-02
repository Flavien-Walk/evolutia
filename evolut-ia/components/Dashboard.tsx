import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/DashboardStyles";
import Navbar from "../components/Navbar";

interface ModuleProgress {
  moduleId: string;
  score: number;
}

interface UserProgress {
  currentQuestion: number;
  score: number;
  completedModules: string[];
  completedModulesWithScore: ModuleProgress[];
}

interface UserData {
  username: string;
  email: string;
  role: string;
  roleColor: string;
  profileImage: string;
  selectedPlan: string;
}

const Header: React.FC = () => (
  <View style={styles.header}>
    <View style={styles.logoContainer}>
      <Image
        source={require("../assets/logo_noir_evolutia.png")}
        style={styles.logoImage}
      />
    </View>
    <View style={styles.headerTextContainer}>
      <Text style={styles.title}>Prêt à apprendre ?</Text>
      <Text style={styles.subtitle}>Choisis ta matière.</Text>
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
      <TouchableOpacity onPress={() => router.push("/matieres")}>
        <Text style={styles.tabText}>Matières</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/recommandation")}>
        <Text style={styles.tabText}>Recommandation</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProgressBar: React.FC<{ 
  progress: number; 
  totalModules: number; 
  averageScore: number;
  loading: boolean;
}> = ({ progress, totalModules, averageScore, loading }) => {
  if (loading) {
    return (
      <View style={styles.progressCard}>
        <View style={styles.progressWrapper}>
          <ActivityIndicator size="small" color="#4A00E0" />
          <Text style={styles.progressLabel}>Chargement...</Text>
        </View>
      </View>
    );
  }

  return (
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
        <Text style={styles.progressDetails}>
          {totalModules} modules complétés • Score moyen: {averageScore}%
        </Text>
      </View>
    </View>
  );
};

const CardsSection: React.FC<{ 
  globalProgress: number; 
  totalModules: number; 
  averageScore: number;
  totalAvailableModules: number;
}> = ({ globalProgress, totalModules, averageScore, totalAvailableModules }) => {
  const router = useRouter();
  
  return (
    <View style={styles.cardsGrid}>
      <TouchableOpacity
        style={styles.largeCard}
        onPress={() => router.push("/recap")}
      >
        <Image source={require("../assets/recap.png")} style={styles.chartImage} />
        <Text style={styles.cardTitle}>Récapitulation de l'avancement par matière</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.smallCard}
        onPress={() => router.push("/chatbot")}
      >
        <Image source={require("../assets/IAassistance.png")} style={styles.cardIcon} />
        <Text style={styles.cardTitle}>IA Assistance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.smallCard} onPress={() => router.push("/")}>
        <Image source={require("../assets/Historique.png")} style={styles.cardIcon} />
        <Text style={styles.cardTitle}>Historique</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.largeCard}
        onPress={() => router.push("/recap")}
      >
        <Text style={styles.cardTitle}>Progression globale</Text>
        <Text style={styles.progressValue}>{globalProgress}%</Text>
        <View style={styles.progressStats}>
          <Text style={styles.progressStatsText}>
            {totalModules}/{totalAvailableModules} matières • {averageScore}% moyenne
          </Text>
        </View>
        <TouchableOpacity style={styles.viewDetailsButton}>
          <Text style={styles.viewDetailsText}>Voir dans l'ensemble</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fullWidthCard}>
        <Image source={require("../assets/dernièreretranscription.png")} style={styles.cardIcon} />
        <Text style={styles.cardTitle}>Dernière retranscription</Text>
      </TouchableOpacity>
    </View>
  );
};

const Dashboard: React.FC = () => {
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchUserProgress();
  }, []);

  const fetchUserProgress = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        console.warn("Token manquant, redirection vers la connexion.");
        router.push("/login");
        return;
      }

      // Récupérer les infos utilisateur et la progression
      const [userInfoResponse, progressResponse] = await Promise.all([
        fetch("https://evolutia-back.onrender.com/user-info", {
          headers: { Authorization: `Bearer ${token}` }
        }),
        fetch("https://evolutia-back.onrender.com/get-progress", {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      if (!userInfoResponse.ok || !progressResponse.ok) {
        console.warn("Session expirée ou erreur côté serveur.");
        router.push("/login");
        return;
      }

      const userInfo = await userInfoResponse.json();
      const progressData = await progressResponse.json();

      // Construire les données utilisateur
      const userData: UserData = {
        username: userInfo.username || "Utilisateur",
        email: userInfo.email || "",
        role: userInfo.role || "User",
        roleColor: userInfo.roleColor || "#6C63FF",
        profileImage: userInfo.profileImage || "",
        selectedPlan: userInfo.selectedPlan || "Aucune",
      };

      setUserData(userData);
      setUserProgress(progressData);

      // Sauvegarder les données importantes
      await AsyncStorage.setItem("username", userData.username);
      await AsyncStorage.setItem("role", userData.role);
      await AsyncStorage.setItem("roleColor", userData.roleColor);

    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = () => {
    if (!userProgress?.completedModulesWithScore?.length) {
      return {
        globalProgress: 0,
        totalModules: 0,
        averageScore: 0,
        totalAvailableModules: 4,
      };
    }

    // ✅ Source unique de vérité: completedModulesWithScore
    const uniqueModules = userProgress.completedModulesWithScore;
    const totalModules = uniqueModules.length;
    // ✅ Nombre total de matières disponibles dans l'app
    const TOTAL_AVAILABLE_MODULES = 4; // Ajuste selon le nombre réel de matières dans ton app
    const globalProgress = Math.round((totalModules / TOTAL_AVAILABLE_MODULES) * 100);
    
    // ✅ Calcul correct du score moyen
    const scores = uniqueModules.map(m => m.score);
    const averageScore = scores.length > 0 
      ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) 
      : 0;

    // ✅ Debug logs détaillés
    console.log('📊 Dashboard Stats Calculation:');
    console.log('   - completedModulesWithScore:', uniqueModules);
    console.log('   - scores array:', scores);
    console.log('   - sum of scores:', scores.reduce((sum, score) => sum + score, 0));
    console.log('   - scores length:', scores.length);
    console.log('   - calculated average:', averageScore);
    console.log('   - totalModules:', totalModules);
    console.log('   - TOTAL_AVAILABLE_MODULES:', TOTAL_AVAILABLE_MODULES);
    console.log('   - globalProgress:', globalProgress, '%');

    // ✅ Vérification de cohérence
    if (userProgress.completedModules) {
      console.log('   - completedModules length:', userProgress.completedModules.length);
      console.log('   - completedModules:', userProgress.completedModules);
      
      if (userProgress.completedModules.length !== totalModules) {
        console.warn('⚠️ INCOHÉRENCE: completedModules.length !== completedModulesWithScore.length');
      }
    }

    return {
      globalProgress,
      totalModules,
      averageScore,
      totalAvailableModules: TOTAL_AVAILABLE_MODULES,
    };
  };

  const stats = calculateStats();

  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <View style={styles.background}>
        <View style={styles.container}>
          <Header />
          <View style={styles.cardContainer}>
            <Tabs />
            <ProgressBar 
              progress={stats.globalProgress}
              totalModules={stats.totalModules}
              averageScore={stats.averageScore}
              loading={loading}
            />
            <ScrollView
              style={styles.scrollContainer}
              contentContainerStyle={styles.scrollContent}
            >
              <CardsSection 
                globalProgress={stats.globalProgress}
                totalModules={stats.totalModules}
                averageScore={stats.averageScore}
                totalAvailableModules={stats.totalAvailableModules}
              />
            </ScrollView>
          </View>
        </View>

        <Navbar />
      </View>
    </>
  );
};

export default Dashboard;