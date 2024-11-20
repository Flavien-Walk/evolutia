import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar";
import styles from "../styles/ProfilStyles";

const Profil: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{ uri: "https://via.placeholder.com/100" }}
        />
        <Text style={styles.nameText}>Antoine Dupont</Text>
      </View>

      {/* Stats Section */}
      <View style={styles.statsSection}>
        <TouchableOpacity style={styles.statCard}>
          <Text style={styles.statValue}>55</Text>
          <Text style={styles.statLabel}>Quizzes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statCard}>
          <Text style={styles.statValue}>#2</Text>
          <Text style={styles.statLabel}>Leaderboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statCard}>
          <Text style={styles.statValue}>83%</Text>
          <Text style={styles.statLabel}>Accuracy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statCard}>
          <Text style={styles.statValue}>86%</Text>
          <Text style={styles.statLabel}>Recall</Text>
        </TouchableOpacity>
      </View>

      {/* Weakest Topics */}
      <View style={styles.topicSection}>
        <Text style={styles.topicTitle}>Thèmes les moins forts</Text>
        <View style={styles.topicCard}>
          <Text>Lorem Ipsum is simply</Text>
          <Text>28% Correct</Text>
        </View>
        <View style={styles.topicCard}>
          <Text>Lorem Ipsum is simply</Text>
          <Text>35% Correct</Text>
        </View>
      </View>

      {/* Strongest Topics */}
      <View style={styles.topicSection}>
        <Text style={styles.topicTitle}>Les thèmes les plus forts</Text>
        <View style={styles.topicCard}>
          <Text>Lorem Ipsum is simply</Text>
          <Text>95% Correct</Text>
        </View>
        <View style={styles.topicCard}>
          <Text>Lorem Ipsum is simply</Text>
          <Text>90% Correct</Text>
        </View>
      </View>

      {/* Navbar */}
      <Navbar />
    </View>
  );
};

export default Profil;
