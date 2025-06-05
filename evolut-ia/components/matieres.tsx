import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import Navbar from "../components/Navbar";
import { matieresStyles } from "../styles/matieresStyle";

const subjects = [
  {
    name: "Histoire-Géographie",
    courses: 15,
    backgroundColor: "#FFD6D6",
    emoji: "🌍",
  },
  {
    name: "Mathématiques",
    courses: 10,
    backgroundColor: "#D6FFF2",
    emoji: "📐",
  },
  {
    name: "Anglais",
    courses: 25,
    backgroundColor: "#D6E8FF",
    emoji: "🇬🇧",
  },
  {
    name: "AI Design Basic",
    courses: 35,
    backgroundColor: "#FFD6D6",
    emoji: "🤖",
  },
  {
    name: "Espagnol",
    courses: 15,
    backgroundColor: "#FFF7D6",
    emoji: "🇪🇸",
  },
  {
    name: "Français",
    courses: 25,
    backgroundColor: "#E7D6FF",
    emoji: "🇫🇷",
  },
];

const Matieres: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <View style={matieresStyles.background}>
        <View style={matieresStyles.container}>
          {/* En-tête violet */}
          <View style={matieresStyles.header}>
            <Text style={matieresStyles.title}>Prêt à apprendre ?</Text>
            <Text style={matieresStyles.subtitle}>Choisis ta matière.</Text>
          </View>

          {/* Carte blanche centrale avec les onglets et les matières */}
          <View style={matieresStyles.cardContainer}>
            <View style={matieresStyles.tabs}>
              <TouchableOpacity onPress={() => router.push("/dashboard")}>
                <Text style={matieresStyles.tabText}>Tableau de bord</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={matieresStyles.activeTabText}>Matières</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push("/recommandation")}>
                <Text style={matieresStyles.tabText}>Recommandation</Text>
              </TouchableOpacity>
            </View>

            {/* Scroll de la liste des matières */}
            <ScrollView
              style={matieresStyles.scrollContainer}
              contentContainerStyle={matieresStyles.scrollContent}
            >
              <View style={matieresStyles.cardsGrid}>
                {subjects.map((subject, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      matieresStyles.subjectCard,
                      { backgroundColor: subject.backgroundColor },
                    ]}
                    onPress={() => {
                      if (subject.name === "Anglais") {
                        router.push("/anglais");
                      } else {
                        console.warn("Page non encore disponible :", subject.name);
                      }
                    }}
                  >
                    <Text style={{ fontSize: 34 }}>{subject.emoji}</Text>
                    <Text style={matieresStyles.cardTitle}>{subject.name}</Text>
                    <Text style={matieresStyles.cardSubtitle}>
                      {subject.courses} cours
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>

        {/* Barre de navigation */}
        <View style={matieresStyles.navbarContainer}>
          <Navbar />
        </View>
        <View style={matieresStyles.footerBlock} />
      </View>
    </>
  );
};

export default Matieres;
