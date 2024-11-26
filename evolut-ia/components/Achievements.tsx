import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import Navbar from "./Navbar";
import styles from "../styles/AchievementsStyles";

const Achievements: React.FC = () => {
  const medals = [
    { id: 1, type: "Gold", count: 24, image: require("../assets/or.png") },
    { id: 2, type: "Silver", count: 18, image: require("../assets/argent.png") },
    { id: 3, type: "Bronze", count: 11, image: require("../assets/bronze.png") },
  ];

  const certifications = [
    { id: 1, title: "Lorem Ipsum is simply", level: "Bronze Certified", image: require("../assets/bronzebrillant.png") },
    { id: 2, title: "Lorem Ipsum is simply", level: "Silver Certified", image: require("../assets/silverbrillant.png") },
    { id: 3, title: "Lorem Ipsum is simply", level: "Gold Certified", image: require("../assets/orbrillant.png") },
  ];

  const badges = [
    { id: 1, title: "Passe 500 Quizzs", image: require("../assets/badge1.png") },
    { id: 2, title: "Gagne 25 Quizzs avec un score parfait", image: require("../assets/badge2.png") },
    { id: 3, title: "Gagne 2000 points", image: require("../assets/badge3.png") },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Level Section */}
        <View style={styles.levelCard}>
          <Text style={styles.levelTitle}>Level 2</Text>
          <Text style={styles.levelSubtitle}>800 points pour accéder au level suivant</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: "86%" }]} />
          </View>
          <Text style={styles.levelPoints}>5200/6000</Text>
        </View>

        {/* Medals Section */}
        <View>
          <Text style={styles.sectionTitle}>Médailles</Text>
          <View style={styles.medalsContainer}>
            {medals.map((medal) => (
              <View key={medal.id} style={styles.medalCard}>
                <Image source={medal.image} style={styles.medalImage} />
                <Text style={styles.medalType}>{medal.type}</Text>
                <Text style={styles.medalCount}>{medal.count}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Certifications Section */}
        <View>
          <Text style={styles.sectionTitle}>Certifications</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.certificationsContainer}>
            {certifications.map((cert) => (
              <View key={cert.id} style={styles.certificationCard}>
                <Image source={cert.image} style={styles.certificationIcon} />
                <Text style={styles.certificationTitle}>{cert.title}</Text>
                <Text style={styles.certificationLevel}>{cert.level}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Badges Section */}
        <View>
          <Text style={styles.sectionTitle}>Badges</Text>
          {badges.map((badge) => (
            <View key={badge.id} style={styles.badgeCard}>
              <Image source={badge.image} style={styles.badgeImage} />
              <Text style={styles.badgeTitle}>{badge.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Navbar */}
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
    </View>
  );
};

export default Achievements;
