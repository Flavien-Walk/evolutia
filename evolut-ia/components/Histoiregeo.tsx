
import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/MatierehistoireStyles";
import Navbar from "./Navbar";

const lessons = [
  {
    id: "1",
    title: "00 - Introduction",
    duration: "1hr 10min",
    image: require("/"),
    locked: false,
    navigateTo: "/", // Ajout du lien
  },
  {
    id: "2",
    title: "01 - Statistique",
    duration: "4hr 10min",
    image: require("/"),
    locked: true,
    navigateTo: "/", // Ajout du lien
  },
  {
    id: "3",
    title: "02 - Puissance",
    duration: "3hr 56min",
    image: require("/"),
    locked: true,
    navigateTo: "/", // Ajout du lien
  },
  {
    id: "4",
    title: "03 - Algèbre",
    duration: "1hr 45min",
    image: require("/"),
    locked: true,
    navigateTo: "/", // Ajout du lien
  },
];

const Histoire: React.FC = () => {
  const router = useRouter();

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
          <Text style={styles.lessonTitle}>{item.title}</Text>
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
          <Text style={styles.lessonsCount}>4 Lessons</Text>
          <Text style={styles.totalDuration}>1hr 20min</Text>
        </View>
        <Text style={styles.description}>
          Ce cours enseignera les compléments de mathématiques que tu as le moins bien compris. 4 leçons de plus d'une heure.
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

export default Histoire;