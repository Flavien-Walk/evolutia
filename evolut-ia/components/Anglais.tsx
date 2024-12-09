import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "../styles/AnglaisStyles";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.push("/matiere")} style={styles.backButton}>
        <Ionicons name="arrow-back-outline" size={24} color="#fff" />
        <Text style={styles.backText}>Retour</Text>
      </TouchableOpacity>
      <View style={styles.headerContent}>
        <Text style={styles.title}>Anglais - 3ème</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={24} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const LessonList: React.FC = () => {
  const lessons = [
    {
      title: "00 - Introduction",
      duration: "1:10min",
      locked: false,
      image: require("../assets/Logo Blanc Evolut'IA.png"),
    },
    {
      title: "01 - Verbes",
      duration: "15:10min",
      locked: true,
      image: require("../assets/Logo Blanc Evolut'IA.png"),
    },
    {
      title: "02 - Grammaire",
      duration: "22:56min",
      locked: true,
      image: require("../assets/Logo Blanc Evolut'IA.png"),
    },
    {
      title: "03 - Conjugaisons",
      duration: "22:45min",
      locked: true,
      image: require("../assets/Logo Blanc Evolut'IA.png"),
    },
  ];

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.lessonHeader}>
        <Text style={styles.lessonCount}>12 Lessons</Text>
        <Text style={styles.lessonDuration}>1hr 20min</Text>
      </View>
      <Text style={styles.lessonDescription}>
        Ce cours enseignera les bases de l'Anglais du début à la fin. 12 leçons de plus d'une heure.
      </Text>
      {lessons.map((lesson, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.lessonCard,
            lesson.locked && styles.lessonCardLocked,
          ]}
        >
          <Image source={lesson.image} style={styles.lessonImage} />
          <View style={styles.lessonContent}>
            <Text style={styles.lessonTitle}>{lesson.title}</Text>
            <Text style={styles.lessonDuration}>{lesson.duration}</Text>
          </View>
          {lesson.locked && (
            <Ionicons name="lock-closed-outline" size={20} style={styles.lockIcon} />
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const Anglais: React.FC = () => {
  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <View style={styles.background}>
        <Header />
        <LessonList />
      </View>
    </>
  );
};

export default Anglais;
