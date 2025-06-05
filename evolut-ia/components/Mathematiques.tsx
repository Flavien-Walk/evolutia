import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/MathematiquesStyles";
import Navbar from "./Navbar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://10.109.249.241:3636"; // Adapter si besoin

const initialLessons = [
  {
    id: "1",
    title: "00 - Introduction",
    duration: "1hr 10min",
    image: require("../assets/introduction.png"),
    locked: false,
    navigateTo: "/introduction", // Correspond à app/introduction.tsx
  },
  {
    id: "2",
    title: "01 - Statistique",
    duration: "4hr 10min",
    image: require("../assets/statistique.png"),
    locked: true,
    navigateTo: "/statistique", // Correspond à app/statistique.tsx
  },
  {
    id: "3",
    title: "02 - Puissance",
    duration: "3hr 56min",
    image: require("../assets/puissance.png"),
    locked: true,
    navigateTo: "/puissance", // Correspond à app/puissance.tsx
  },
  {
    id: "4",
    title: "03 - Algèbre",
    duration: "1hr 45min",
    image: require("../assets/algebre.png"),
    locked: true,
    navigateTo: "/algebre", // Correspond à app/algebre.tsx
  },
];

const Mathematiques: React.FC = () => {
  const router = useRouter();
  const [lessons, setLessons] = useState(initialLessons);

  const fetchCompletedModules = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) return;

      const response = await fetch(`${API_URL}/get-progress`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        const completedModules = data.completedModules || [];
        const completedModulesWithScore = data.completedModulesWithScore || [];

        const updatedLessons = initialLessons.map((lesson) => {
          if (lesson.id === "1") {
            // Introduction toujours déverrouillé, mais on affiche aussi score + check si complété
            const completedModule = completedModulesWithScore.find(
              (m: { moduleId: string; score: number }) => m.moduleId === lesson.id
            );

            return {
              ...lesson,
              locked: false,
              completed: !!completedModule,
              score: completedModule ? completedModule.score : null,
            };
          }

          // Déverrouille le module si le précédent est complété
          const previousLessonId = (parseInt(lesson.id, 10) - 1).toString();
          const isUnlocked = completedModules.includes(previousLessonId);

          // Trouve si module terminé et son score
          const completedModule = completedModulesWithScore.find(
            (m: { moduleId: string; score: number }) => m.moduleId === lesson.id
          );

          return {
            ...lesson,
            locked: !isUnlocked,
            completed: !!completedModule,
            score: completedModule ? completedModule.score : null,
          };
        });

        setLessons(updatedLessons);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des modules complétés :", error);
    }
  };

  useEffect(() => {
    fetchCompletedModules();
  }, []);

  const renderLesson = ({ item }: any) => (
    <TouchableOpacity
      onPress={() => {
        if (!item.locked && item.navigateTo) {
          router.push(item.navigateTo);
        }
      }}
    >
      <View style={styles.lessonCard}>
        <Image source={item.image} style={styles.lessonImage} />
        <View style={styles.lessonContent}>
          <Text style={styles.lessonDuration}>{item.duration}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.lessonTitle}>{item.title}</Text>
            {item.completed && (
              <>
                <Text style={{ marginLeft: 8, fontSize: 18 }}>✅</Text>
                {item.score !== null && (
                  <Text
                    style={{
                      marginLeft: 6,
                      color: "#2E7D32",
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    {item.score} pts
                  </Text>
                )}
              </>
            )}
          </View>
        </View>
        {item.locked && <Text style={styles.lockIcon}>🔒</Text>}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text style={styles.backArrow}>← Retour</Text>
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Mathématique</Text>
        <Text style={styles.pageSubtitle}>Prêt à comprendre</Text>
      </View>

      {/* Contenu principal */}
      <View style={styles.contentBox}>
        <View style={styles.lessonsInfoContainer}>
          <Text style={styles.lessonsCount}>{lessons.length} Leçons</Text>
          <Text style={styles.totalDuration}>1hr 20min</Text>
        </View>
        <Text style={styles.description}>
          Ce cours t’accompagnera pour renforcer tes connaissances en mathématiques,
          étape par étape, avec 4 modules captivants.
        </Text>

        <FlatList
          data={lessons}
          keyExtractor={(item) => item.id}
          renderItem={renderLesson}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Navbar */}
      <Navbar />
    </View>
  );
};

export default Mathematiques;
