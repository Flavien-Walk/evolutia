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
import styles from "../styles/MatieresStyles";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/Logo Blanc Evolut'IA.png")}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.title}>Prêt à apprendre ?</Text>
        <Text style={styles.subtitle}>Choisis ta matière.</Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity>
          <Ionicons name="reload-outline" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Tabs: React.FC = () => {
  const router = useRouter();
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity onPress={() => router.push("/dashboard")}>
        <Text style={styles.tabText}>Tableau de bord</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/matiere")}>
        <Text style={[styles.tabText, styles.activeTabText]}>Matières</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={styles.tabText}>Recommandation</Text>
      </TouchableOpacity>
    </View>
  );
};

const MatiereCards: React.FC = () => {
  const cards = [
    {
      title: "Histoire-Géographie",
      courses: "15 Courses",
      image: require("../assets/Logo Blanc Evolut'IA.png"),
      backgroundColor: "#FFCDD2",
    },
    {
      title: "Mathématiques",
      courses: "10 Courses",
      image: require("../assets/Logo Blanc Evolut'IA.png"),
      backgroundColor: "#C8E6C9",
    },
    {
      title: "Anglais",
      courses: "25 Courses",
      image: require("../assets/Logo Blanc Evolut'IA.png"),
      backgroundColor: "#BBDEFB",
    },
    {
      title: "AI Design Basic",
      courses: "35 Courses",
      image: require("../assets/Logo Blanc Evolut'IA.png"),
      backgroundColor: "#FFE0B2",
    },
    {
      title: "Espagnol",
      courses: "15 Courses",
      image: require("../assets/Logo Blanc Evolut'IA.png"),
      backgroundColor: "#F8BBD0",
    },
    {
      title: "Français",
      courses: "20 Courses",
      image: require("../assets/Logo Blanc Evolut'IA.png"),
      backgroundColor: "#D1C4E9",
    },
  ];

  return (
    <View style={styles.cardsGrid}>
      {cards.map((card, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.card, { backgroundColor: card.backgroundColor }]}
        >
          <Image source={card.image} style={styles.cardImage} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardSubtitle}>{card.courses}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Matieres: React.FC = () => {
  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <View style={styles.background}>
        <View style={styles.container}>
          <Header />
          <View style={styles.cardContainer}>
            <Tabs />
            <ScrollView
              style={styles.scrollContainer}
              contentContainerStyle={styles.scrollContent}
            >
              <MatiereCards />
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
};

export default Matieres;
