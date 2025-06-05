import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../../styles/anglais/AnglaisStyles";
import Navbar from "../Navbar";

const lessons = [
  {
    id: "1",
    title: "Introduction",
    duration: "12min",
    image: require("../../assets/Logo Blanc Evolut'IA.png"),
    locked: false,
    navigateTo: "/introductionanglais",
  },
  {
    id: "2",
    title: "Grammar",
    duration: "17min",
    image: require("../../assets/Logo Blanc Evolut'IA.png"),
    locked: true,
  },
  {
    id: "3",
    title: "Vocabulary",
    duration: "20min",
    image: require("../../assets/Logo Blanc Evolut'IA.png"),
    locked: true,
  },
];

const Anglais: React.FC = () => {
  const router = useRouter();

  const renderLesson = ({ item }: any) => (
    <TouchableOpacity
      disabled={item.locked}
      onPress={() => {
        if (!item.locked && item.navigateTo) {
          router.push(item.navigateTo);
        }
      }}
    >
      <View style={styles.lessonCard}>
        <Image source={item.image} style={styles.lessonImage} />
        <View style={styles.lessonContent}>
          <Text style={styles.lessonTitle}>{item.title}</Text>
          <Text style={styles.lessonDuration}>{item.duration}</Text>
          {item.locked && <Text style={styles.lockIcon}>🔒</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Anglais</Text>
        <Text style={styles.pageSubtitle}>Prêt à apprendre ?</Text>
      </View>

      <View style={styles.contentBox}>
        <View style={styles.lessonsInfoContainer}>
          <Text style={styles.lessonsCount}>3 leçons</Text>
          <Text style={styles.totalDuration}>Total: 49min</Text>
        </View>
        <Text style={styles.description}>
          Découvre les bases essentielles de l’anglais pour progresser à ton rythme.
        </Text>

        <FlatList
          data={lessons}
          renderItem={renderLesson}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <Navbar />
    </View>
  );
};

export default Anglais;
