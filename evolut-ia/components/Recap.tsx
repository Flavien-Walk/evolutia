import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  ActivityIndicator,
  Alert,
  Dimensions,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LineChart, PieChart, BarChart } from "react-native-chart-kit";
import styles from "../styles/RecapStyles";
import Navbar from "./Navbar";

const { width } = Dimensions.get("window");

interface ModuleProgress {
  moduleId: string;
  score: number;
}

interface UserData {
  username: string;
  email: string;
  role: string;
  roleColor: string;
  profileImage: string;
  selectedPlan: string;
}

interface UserProgress {
  currentQuestion: number;
  score: number;
  completedModules: string[];
  completedModulesWithScore: ModuleProgress[];
}

const Header: React.FC<{ userData: UserData | null }> = ({ userData }) => {
  const router = useRouter();
  
  return (
    <View style={styles.header}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="#6C63FF" />
      </TouchableOpacity>
      
      <View style={styles.userInfoContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Récapitulatif de {userData?.username || 'Utilisateur'}</Text>
          <Text style={styles.subtitle}>
            Voici ton avancement complet • {userData?.role || 'User'}
          </Text>
        </View>
        
        <TouchableOpacity onPress={() => router.push("/profil")}>
          {userData?.profileImage ? (
            <Image 
              source={{ uri: userData.profileImage }} 
              style={styles.profileImage}
            />
          ) : (
            <View style={styles.emptyProfileImage}>
              <MaterialIcons name="add-a-photo" size={30} color="#ccc" />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const UserInfoCard: React.FC<{ userData: UserData }> = ({ userData }) => (
  <View style={styles.userCard}>
    <View style={styles.userCardContent}>
      <View style={styles.userDetails}>
        <Text style={styles.userName}>{userData.username}</Text>
        <Text style={styles.userEmail}>{userData.email}</Text>
        <View style={[styles.roleBadge, { backgroundColor: userData.roleColor || '#6C63FF' }]}>
          <Text style={styles.roleText}>{userData.role}</Text>
        </View>
        {userData.selectedPlan && userData.selectedPlan !== "Aucune" && (
          <Text style={styles.planText}>Plan: {userData.selectedPlan}</Text>
        )}
      </View>
    </View>
  </View>
);

const StatsCard: React.FC<{ 
  title: string; 
  value: string | number; 
  icon: string; 
  gradient: [string, string];
  subtitle?: string;
  trend?: number;
}> = ({ title, value, icon, gradient, subtitle, trend }) => (
  <LinearGradient colors={gradient} style={styles.statsCard}>
    <View style={styles.statsContent}>
      <Ionicons name={icon as any} size={28} color="#FFFFFF" />
      <View style={styles.statsTextContainer}>
        <Text style={styles.statsValue}>{value}</Text>
        <Text style={styles.statsTitle}>{title}</Text>
        {subtitle && <Text style={styles.statsSubtitle}>{subtitle}</Text>}
        {trend !== undefined && (
          <View style={styles.trendContainer}>
            <Ionicons 
              name={trend >= 0 ? "trending-up" : "trending-down"} 
              size={12} 
              color={trend >= 0 ? "#4CAF50" : "#F44336"} 
            />
            <Text style={[styles.trendText, { color: trend >= 0 ? "#4CAF50" : "#F44336" }]}>
              {trend >= 0 ? '+' : ''}{trend}%
            </Text>
          </View>
        )}
      </View>
    </View>
  </LinearGradient>
);

const ScoreDistributionChart: React.FC<{ data: ModuleProgress[] }> = ({ data }) => {
  const getScoreRange = (score: number) => {
    if (score >= 90) return "90-100%";
    if (score >= 80) return "80-89%";
    if (score >= 70) return "70-79%";
    if (score >= 60) return "60-69%";
    return "<60%";
  };

  const ranges = ["90-100%", "80-89%", "70-79%", "60-69%", "<60%"];
  const colors = ["#4CAF50", "#8BC34A", "#FFC107", "#FF9800", "#F44336"];
  
  const distribution = ranges.map(range => {
    const count = data.filter(item => getScoreRange(item.score) === range).length;
    return {
      name: range,
      count: count,
      color: colors[ranges.indexOf(range)],
      legendFontColor: "#333333",
      legendFontSize: 12,
    };
  }).filter(item => item.count > 0);

  if (distribution.length === 0) return null;

  return (
    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>📈 Distribution des Scores</Text>
      <PieChart
        data={distribution}
        width={width - 60}
        height={200}
        chartConfig={{
          color: (opacity = 1) => `rgba(108, 99, 255, ${opacity})`,
        }}
        accessor="count"
        backgroundColor="transparent"
        paddingLeft="15"
        center={[10, 0]}
        absolute
      />
    </View>
  );
};

const ProgressChart: React.FC<{ data: ModuleProgress[] }> = ({ data }) => {
  if (data.length === 0) return null;

  const moduleNames = data.map(item => {
    const names: { [key: string]: string } = {
      'math': 'Math',
      'physics': 'Phys',
      'chemistry': 'Chim',
      'biology': 'Bio',
      'french': 'FR',
      'english': 'EN',
      'history': 'Hist',
      'geography': 'Geo',
    };
    return names[item.moduleId] || item.moduleId;
  });

  const chartData = {
    labels: moduleNames,
    datasets: [{
      data: data.map(item => item.score),
      colors: data.map((item, index) => {
        const score = item.score;
        if (score >= 80) return () => "#4CAF50";
        if (score >= 60) return () => "#FF9800";
        return () => "#F44336";
      })
    }]
  };

  return (
    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>📊 Scores par Matière</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <BarChart
          data={chartData}
          width={Math.max(width - 40, data.length * 60)}
          height={220}
          yAxisLabel=""
          yAxisSuffix="%"
          chartConfig={{
            backgroundColor: "transparent",
            backgroundGradientFrom: "#FFFFFF",
            backgroundGradientTo: "#F8F8F8",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(108, 99, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForBackgroundLines: {
              strokeDasharray: "",
              stroke: "rgba(108, 99, 255, 0.2)"
            },
          }}
          style={styles.chart}
          withCustomBarColorFromData={true}
          flatColor={true}
        />
      </ScrollView>
    </View>
  );
};

const ModuleDetailCard: React.FC<{ 
  moduleId: string; 
  score: number; 
  isCompleted: boolean;
  rank: number;
}> = ({ moduleId, score, isCompleted, rank }) => {
  const getModuleName = (id: string) => {
    const modules: { [key: string]: string } = {
      'math': 'Mathématiques',
      'physics': 'Physique',
      'chemistry': 'Chimie',
      'biology': 'Biologie',
      'french': 'Français',
      'english': 'Anglais',
      'history': 'Histoire',
      'geography': 'Géographie',
    };
    return modules[id] || `Module ${id}`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return '#4CAF50';
    if (score >= 80) return '#8BC34A';
    if (score >= 70) return '#FFC107';
    if (score >= 60) return '#FF9800';
    return '#F44336';
  };

  const getScoreEmoji = (score: number) => {
    if (score >= 95) return '🏆';
    if (score >= 90) return '🥇';
    if (score >= 85) return '🥈';
    if (score >= 80) return '🥉';
    if (score >= 70) return '⭐';
    if (score >= 60) return '📚';
    return '💪';
  };

  const getRankEmoji = (rank: number) => {
    if (rank === 1) return '👑';
    if (rank === 2) return '🔥';
    if (rank === 3) return '💯';
    return '✨';
  };

  return (
    <View style={styles.moduleDetailCard}>
      <View style={styles.moduleHeader}>
        <View style={styles.moduleNameContainer}>
          <Text style={styles.moduleName}>{getModuleName(moduleId)}</Text>
          <Text style={styles.moduleRank}>#{rank} {getRankEmoji(rank)}</Text>
        </View>
        <Text style={styles.moduleEmoji}>{getScoreEmoji(score)}</Text>
      </View>
      
      <View style={styles.scoreContainer}>
        <Text style={[styles.scoreValue, { color: getScoreColor(score) }]}>
          {score}%
        </Text>
        <View style={styles.scoreDetails}>
          <Text style={styles.scoreLabel}>Score obtenu</Text>
          <Text style={styles.moduleStatus}>
            {isCompleted ? '✅ Complété' : '⏳ En cours'}
          </Text>
        </View>
      </View>

      <View style={styles.moduleProgressContainer}>
        <View style={styles.progressBarContainer}>
          <LinearGradient
            colors={[getScoreColor(score), `${getScoreColor(score)}80`]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.progressBarFill, { width: `${Math.min(score, 100)}%` }]}
          />
        </View>
      </View>
    </View>
  );
};

const Recap: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchAllUserData();
  }, []);

  const fetchAllUserData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        console.warn("Token manquant, redirection vers la connexion.");
        router.push("/login");
        return;
      }

      // Récupérer les infos utilisateur
      const userInfoResponse = await fetch("https://evolutia-back.onrender.com/user-info", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Récupérer la progression
      const progressResponse = await fetch("https://evolutia-back.onrender.com/get-progress", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

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

      // Sauvegarder en AsyncStorage
      if (userData.username) {
        await AsyncStorage.setItem("username", userData.username);
      }
      if (userData.role) {
        await AsyncStorage.setItem("role", userData.role);
      }
      if (userData.roleColor) {
        await AsyncStorage.setItem("roleColor", userData.roleColor);
      }
      if (userData.selectedPlan) {
        await AsyncStorage.setItem("selectedPlan", userData.selectedPlan);
      }
      if (userData.profileImage) {
        await AsyncStorage.setItem("profileImage", userData.profileImage);
      }

    } catch (error) {
      console.error("Erreur lors de la récupération des informations utilisateur :", error);
      Alert.alert("Erreur", "Impossible de charger vos données.");
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = () => {
    if (!userProgress?.completedModulesWithScore?.length) {
      return {
        averageScore: 0,
        bestScore: 0,
        totalModules: 0,
        globalProgress: 0,
        weakestSubject: null,
        strongestSubject: null,
      };
    }

    // ✅ Source unique de vérité: completedModulesWithScore
    const uniqueModules = userProgress.completedModulesWithScore;
    const scores = uniqueModules.map(m => m.score);
    const totalModules = uniqueModules.length; // ✅ Cohérent avec completedModulesWithScore
    
    // ✅ Nombre total de matières disponibles dans l'app (à ajuster selon tes modules)
    const TOTAL_AVAILABLE_MODULES = 4; // Remplace par le nombre réel de matières dans ton app
    
    // ✅ Calculs corrects
    const averageScore = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
    const bestScore = Math.max(...scores);
    const globalProgress = Math.round((totalModules / TOTAL_AVAILABLE_MODULES) * 100);

    const sortedModules = [...uniqueModules].sort((a, b) => b.score - a.score);
    const strongestSubject = sortedModules[0];
    const weakestSubject = sortedModules[sortedModules.length - 1];

    // ✅ Debug logs détaillés
    console.log('📊 Recap Stats Calculation:');
    console.log('   - completedModulesWithScore:', uniqueModules);
    console.log('   - scores array:', scores);
    console.log('   - sum of scores:', scores.reduce((sum, score) => sum + score, 0));
    console.log('   - scores length:', scores.length);
    console.log('   - calculated average:', averageScore);
    console.log('   - best score:', bestScore);
    console.log('   - total modules:', totalModules);
    console.log('   - global progress:', globalProgress);

    // ✅ Vérification de cohérence
    if (userProgress.completedModules) {
      console.log('   - completedModules length:', userProgress.completedModules.length);
      console.log('   - completedModules:', userProgress.completedModules);
      
      if (userProgress.completedModules.length !== totalModules) {
        console.warn('⚠️ INCOHÉRENCE DÉTECTÉE: completedModules.length !== completedModulesWithScore.length');
        console.warn(`   completedModules: ${userProgress.completedModules.length} vs completedModulesWithScore: ${totalModules}`);
      }
    }

    return {
      averageScore,
      bestScore,
      totalModules,
      globalProgress,
      weakestSubject,
      strongestSubject,
    };
  };

  const getRankedModules = () => {
    if (!userProgress?.completedModulesWithScore?.length) return [];
    
    return [...userProgress.completedModulesWithScore]
      .sort((a, b) => b.score - a.score)
      .map((module, index) => ({ ...module, rank: index + 1 }));
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6C63FF" />
        <Text style={styles.loadingText}>Chargement de tes statistiques...</Text>
      </View>
    );
  }

  const stats = calculateStats();
  const rankedModules = getRankedModules();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <Header userData={userData} />
      
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Carte Utilisateur */}
        {userData && <UserInfoCard userData={userData} />}

        {/* Section Statistiques Générales */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>📊 Vue d'ensemble</Text>
          
          <View style={styles.statsGrid}>
            <StatsCard
              title="Modules complétés"
              value={stats.totalModules}
              icon="checkmark-circle"
              gradient={['#4CAF50', '#45A049']}
              subtitle={`sur ${stats.totalModules === userProgress?.completedModulesWithScore?.length ? userProgress.completedModulesWithScore.length : 4} disponibles`}
            />
            
            <StatsCard
              title="Score moyen"
              value={`${stats.averageScore}%`}
              icon="analytics"
              gradient={['#6C63FF', '#5A52E8']}
              subtitle="performance globale"
            />
            
            <StatsCard
              title="Meilleur score"
              value={`${stats.bestScore}%`}
              icon="trophy"
              gradient={['#FF9800', '#F57C00']}
              subtitle="ton record"
            />
            
            <StatsCard
              title="Progression"
              value={`${stats.globalProgress}%`}
              icon="trending-up"
              gradient={['#9C27B0', '#7B1FA2']}
              subtitle="avancement total"
            />
          </View>
        </View>

        {/* Matières Favorites */}
        {stats.strongestSubject && stats.weakestSubject && (
          <View style={styles.favoritesSection}>
            <Text style={styles.sectionTitle}>🎯 Tes Performances</Text>
            
            <View style={styles.favoritesContainer}>
              <LinearGradient
                colors={['#4CAF50', '#45A049']}
                style={styles.favoriteCard}
              >
                <Ionicons name="trophy" size={24} color="#FFFFFF" />
                <Text style={styles.favoriteTitle}>Matière forte</Text>
                <Text style={styles.favoriteSubject}>
                  {stats.strongestSubject.moduleId}
                </Text>
                <Text style={styles.favoriteScore}>
                  {stats.strongestSubject.score}%
                </Text>
              </LinearGradient>

              <LinearGradient
                colors={['#FF9800', '#F57C00']}
                style={styles.favoriteCard}
              >
                <Ionicons name="fitness" size={24} color="#FFFFFF" />
                <Text style={styles.favoriteTitle}>À améliorer</Text>
                <Text style={styles.favoriteSubject}>
                  {stats.weakestSubject.moduleId}
                </Text>
                <Text style={styles.favoriteScore}>
                  {stats.weakestSubject.score}%
                </Text>
              </LinearGradient>
            </View>
          </View>
        )}

        {/* Graphiques */}
        {userProgress?.completedModulesWithScore?.length ? (
          <>
            <ProgressChart data={userProgress.completedModulesWithScore} />
            <ScoreDistributionChart data={userProgress.completedModulesWithScore} />
          </>
        ) : null}

        {/* Détails par Matière */}
        <View style={styles.modulesSection}>
          <Text style={styles.sectionTitle}>📚 Classement des Matières</Text>
          
          {rankedModules.length ? (
            <View style={styles.modulesList}>
              {rankedModules.map((module, index) => (
                <ModuleDetailCard
                  key={index}
                  moduleId={module.moduleId}
                  score={module.score}
                  isCompleted={userProgress?.completedModulesWithScore.some(m => m.moduleId === module.moduleId) || false}
                  rank={module.rank}
                />
              ))}
            </View>
          ) : (
            <View style={styles.emptyState}>
              <Ionicons name="book-outline" size={64} color="#CCCCCC" />
              <Text style={styles.emptyStateTitle}>Aucun module complété</Text>
              <Text style={styles.emptyStateText}>
                Commence ton apprentissage pour voir tes statistiques détaillées !
              </Text>
              <TouchableOpacity 
                style={styles.startButton}
                onPress={() => router.push("/matieres")}
              >
                <LinearGradient
                  colors={['#6C63FF', '#5A52E8']}
                  style={styles.startButtonGradient}
                >
                  <Text style={styles.startButtonText}>Commencer maintenant</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
      
      <Navbar />
    </View>
  );
};

export default Recap;