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
import { recommandationStyles } from "../styles/recommandationStyle";

const recommandations = [
  {
    name: "Mathématiques",
    courses: 4,
    backgroundColor: "#E6FFF3",
  },
  {
    name: "Anglais",
    courses: 7,
    backgroundColor: "#D6E8FF",
  },
  {
    name: "Espagnol",
    courses: 10,
    backgroundColor: "#FFF7D6",
  },
];

const Recommandation: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <View style={recommandationStyles.background}>
        <View style={recommandationStyles.container}>
          {/* Header */}
          <View style={recommandationStyles.header}>
            <Text style={recommandationStyles.title}>Prêt à comprendre ?</Text>
            <Text style={recommandationStyles.subtitle}>
              Ce que l'on te recommande
            </Text>
          </View>

          {/* Tabs */}
          <View style={recommandationStyles.cardContainer}>
            <View style={recommandationStyles.tabs}>
              <TouchableOpacity onPress={() => router.push("/dashboard")}>
                <Text style={recommandationStyles.tabText}>Tableau de bord</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push("/matieres")}>
                <Text style={recommandationStyles.tabText}>Matières</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={recommandationStyles.activeTabText}>
                  Recommandation
                </Text>
              </TouchableOpacity>
            </View>

            {/* Recommandations */}
            <ScrollView
              style={recommandationStyles.scrollContainer}
              contentContainerStyle={recommandationStyles.scrollContent}
            >
              <View style={recommandationStyles.stackContainer}>
                {recommandations.map((item, index) => {
                  const slug = item.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "");

                  return (
                    <TouchableOpacity
                      key={index}
                      activeOpacity={0.8}
                      style={[
                        recommandationStyles.recoCard,
                        { backgroundColor: item.backgroundColor },
                      ]}
                      onPress={() => router.push(`/matieres`)}
                    >
                      <Text style={recommandationStyles.recoTitle}>
                        {item.name}
                      </Text>
                      <Text style={recommandationStyles.recoSubtitle}>
                        {item.courses} Cours
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>

        {/* Navbar */}
        <View style={recommandationStyles.navbarContainer}>
          <Navbar />
        </View>
        <View style={recommandationStyles.footerBlock} />
      </View>
    </>
  );
};

export default Recommandation;
