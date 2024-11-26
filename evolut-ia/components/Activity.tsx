import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import Navbar from "./Navbar";
import styles from "../styles/ActivityStyles";

const Activity: React.FC = () => {
  const activityLog = [
    {
      id: 1,
      date: "May 1, 2022",
      description: "Earned Gold Certification in Change Management",
      badge: "gold",
      score: "5/5 Correct",
    },
    {
      id: 2,
      date: "May 1, 2022",
      description: "Completed Drive-Thru",
      badge: "silver",
      score: "5/10 Correct",
    },
    {
      id: 3,
      date: "May 1, 2022",
      description: "Earned Bronze in Drive-Thru",
      badge: "bronze",
      score: "8/10 Correct",
    },
    {
      id: 4,
      date: "May 1, 2022",
      description: "Earned Silver in Drive-Thru",
      badge: "silver",
      score: "9/10 Correct",
    },
    {
      id: 5,
      date: "May 1, 2022",
      description: "Earned Gold in Drive-Thru",
      badge: "gold",
      score: "10/10 Correct",
    },
    {
      id: 6,
      date: "May 1, 2022",
      description: "Completed Pre-Test in Customer Experience 101",
      badge: "check",
      score: "5/7 Correct",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {activityLog.map((activity) => (
          <View key={activity.id} style={styles.activityCard}>
            <View style={styles.badgeContainer}>
              <Image
                source={
                  activity.badge === "gold"
                    ? require("../assets/or.png")
                    : activity.badge === "silver"
                    ? require("../assets/argent.png")
                    : activity.badge === "bronze"
                    ? require("../assets/bronze.png")
                    : require("../assets/or.png")
                }
                style={styles.badgeIcon}
              />
            </View>
            <View style={styles.activityDetails}>
              <Text style={styles.description}>{activity.description}</Text>
              <Text style={styles.date}>{activity.date}</Text>
              <Text style={styles.score}>{activity.score}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Navbar */}
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
    </View>
  );
};

export default Activity;
