import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import styles from "../../styles/anglais/AnglaisStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://10.109.249.241:3636"; // Adapter si besoin

const initialLessons = [
  {
    id: "1",
    title: "00 - Introduction",
    duration: "1hr 10min",
    image: require("../../assets/logo_noir_evolutia.png"),
    locked: false,
   navigateTo: "/introductionanglais"
  },
  {
    id: "2",
    title: "01 - Conjugaison",
    duration: "4hr 10min",
    image: require("../../assets/logo_noir_evolutia.png"),
    locked: true,
    navigateTo: "/anglais/conjugaison",
  },
  {
    id: "3",
    title: "02 - Vocabulaire",
    duration: "3hr 56min",
    image: require("../../assets/logo_noir_evolutia.png"),
    locked: true,
    navigateTo: "/anglais/vocabulaire",
  },
  {
    id: "4",
    title: "03 - Verbes irréguliers",
    duration: "1hr 45min",
    image: require("../../assets/logo_noir_evolutia.png"),
    locked: true,
    navigateTo: "/anglais/verbes",
  },
  {
    id: "5",
    title: "04 - Compréhension orale",
    duration: "2hr 30min",
    image: require("../../assets/logo_noir_evolutia.png"),
    locked: true,
    navigateTo: "/anglais/orale",
  },
  {
    id: "6",
    title: "05 - Expression écrite",
    duration: "3hr 15min",
    image: require("../../assets/logo_noir_evolutia.png"),
    locked: true,
    navigateTo: "/anglais/ecriture",
  },
  {
    id: "7",
    title: "06 - Lecture de texte",
    duration: "2hr 05min",
    image: require("../../assets/logo_noir_evolutia.png"),
    locked: true,
    navigateTo: "/anglais/lecture",
  },
];

const Anglais: React.FC = () => {
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

          const previousId = (parseInt(lesson.id) - 1).toString();
          const isUnlocked = completedModules.includes(previousId);
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
    } catch (err) {
      console.error("Erreur progression :", err);
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
                  <Text style={{ marginLeft: 6, color: "#2E7D32", fontWeight: "bold", fontSize: 14 }}>
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
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6c63ff" translucent={false} />
      <View style={styles.background} /> {/* Fond violet en full screen */}
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.backArrow}>← Retour</Text>
          </TouchableOpacity>
          <Text style={styles.pageTitle}>Anglais</Text>
          <Text style={styles.pageSubtitle}>Prêt à comprendre</Text>
        </View>

        <View style={styles.contentBox}>
          <View style={styles.lessonsInfoContainer}>
            <Text style={styles.lessonsCount}>{lessons.length} Leçons</Text>
            <Text style={styles.totalDuration}>1hr 20min</Text>
          </View>
          <Text style={styles.description}>
            Ce cours enseignera les compléments d’anglais que tu as le moins bien compris. 7 leçons de plus d’une heure.
          </Text>

          <FlatList
            data={lessons}
            keyExtractor={(item) => item.id}
            renderItem={renderLesson}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
};

export default Anglais;
