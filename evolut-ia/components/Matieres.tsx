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
  const router = useRouter();

  return (
    <View style={styles.cardsGrid}>
      {/* Card 1 */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: "#FFCDD2" }]}
        onPress={() => router.push("/")}
      >
        <Image
          source={require("../assets/Logo Blanc Evolut'IA.png")}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Histoire-Géographie</Text>
        <Text style={styles.cardSubtitle}>15 Courses</Text>
      </TouchableOpacity>

      {/* Card 2 */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: "#C8E6C9" }]}
        onPress={() => router.push("/")}
      >
        <Image
          source={require("../assets/Logo Blanc Evolut'IA.png")}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Mathématiques</Text>
        <Text style={styles.cardSubtitle}>10 Courses</Text>
      </TouchableOpacity>

      {/* Card 3 */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: "#BBDEFB" }]}
        onPress={() => router.push("/anglais")}
      >
        <Image
          source={require("../assets/Logo Blanc Evolut'IA.png")}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Anglais</Text>
        <Text style={styles.cardSubtitle}>25 Courses</Text>
      </TouchableOpacity>

      {/* Card 4 */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: "#FFE0B2" }]}
        onPress={() => router.push("/")}
      >
        <Image
          source={require("../assets/Logo Blanc Evolut'IA.png")}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>AI Design Basic</Text>
        <Text style={styles.cardSubtitle}>35 Courses</Text>
      </TouchableOpacity>

      {/* Card 5 */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: "#F8BBD0" }]}
        onPress={() => router.push("/")}
      >
        <Image
          source={require("../assets/Logo Blanc Evolut'IA.png")}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Espagnol</Text>
        <Text style={styles.cardSubtitle}>15 Courses</Text>
      </TouchableOpacity>

      {/* Card 6 */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: "#D1C4E9" }]}
        onPress={() => router.push("/")}
      >
        <Image
          source={require("../assets/Logo Blanc Evolut'IA.png")}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Français</Text>
        <Text style={styles.cardSubtitle}>20 Courses</Text>
      </TouchableOpacity>
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
