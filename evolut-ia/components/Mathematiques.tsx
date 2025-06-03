// components/Mathematiques.tsx
import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; // Pour la navigation
import styles from "../styles/MathematiquesStyles";
import Navbar from "./Navbar"; // Navbar déjà présente

const lessons = [
  {
    id: "1",
    title: "00 - Introduction",
    duration: "1hr 10min",
    image: require("../assets/introduction.png"),
    locked: false,
  },
  {
    id: "2",
    title: "01 - Statistique",
    duration: "4hr 10min",
    image: require("../assets/statistique.png"),
    locked: true,
  },
  {
    id: "3",
    title: "02 - Puissance",
    duration: "3hr 56min",
    image: require("../assets/puissance.png"),
    locked: true,
  },
  {
    id: "4",
    title: "03 - Algèbre",
    duration: "1hr 45min",
    image: require("../assets/algebre.png"),
    locked: true,
  },
];

const Mathematiques: React.FC = () => {
  const router = useRouter();

  const renderLesson = ({ item }: any) => (
    <View style={styles.lessonCard}>
      <Image source={item.image} style={styles.lessonImage} />
      <View style={styles.lessonContent}>
        <Text style={styles.lessonDuration}>{item.duration}</Text>
        <Text style={styles.lessonTitle}>{item.title}</Text>
      </View>
      {item.locked && <Text style={styles.lockIcon}>🔒</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* En-tête avec fond vert */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text style={styles.backArrow}>← Retour</Text>
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Mathématique</Text>
        <Text style={styles.pageSubtitle}>Prêt à comprendre</Text>
      </View>

      {/* Contenu principal en blanc arrondi */}
      <View style={styles.contentBox}>
        <View style={styles.lessonsInfoContainer}>
          <Text style={styles.lessonsCount}>4 Lessons</Text>
          <Text style={styles.totalDuration}>1hr 20min</Text>
        </View>
        <Text style={styles.description}>
          Ce cours enseignera les compléments de mathématiques que tu as le moins bien compris. 4 leçons de plus d'une heure.
        </Text>

        {/* Liste des leçons */}
        <FlatList
          data={lessons}
          keyExtractor={(item) => item.id}
          renderItem={renderLesson}
          style={styles.lessonList}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Navbar */}
      <Navbar />
    </View>
  );
};

export default Mathematiques;
