import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import styles from "../styles/ProfilStyles";

const Profil: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Contenu défilable */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
          <View style={styles.statRow}>
            <TouchableOpacity style={styles.statCard}>
              <Image
                source={{ uri: "https://via.placeholder.com/30/FF0000/FFFFFF?text=⚡" }}
                style={styles.statIcon}
              />
              <View>
                <Text style={styles.statValue}>55</Text>
                <Text style={styles.statLabel}>Quizzes</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.statCard}>
              <Image
                source={{ uri: "https://via.placeholder.com/30/0000FF/FFFFFF?text=📊" }}
                style={styles.statIcon}
              />
              <View>
                <Text style={styles.statValue}>#2</Text>
                <Text style={styles.statLabel}>Leaderboard</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.statRow}>
            <TouchableOpacity style={styles.statCard}>
              <Image
                source={{ uri: "https://via.placeholder.com/30/00FF00/FFFFFF?text=✔" }}
                style={styles.statIcon}
              />
              <View>
                <Text style={styles.statValue}>83%</Text>
                <Text style={styles.statLabel}>Accuracy</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.statCard}>
              <Image
                source={{ uri: "https://via.placeholder.com/30/FFA500/FFFFFF?text=⚙" }}
                style={styles.statIcon}
              />
              <View>
                <Text style={styles.statValue}>86%</Text>
                <Text style={styles.statLabel}>Recall</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Weakest Topics */}
        <View style={styles.topicSection}>
          <Text style={styles.topicTitle}>Thèmes les moins forts</Text>
          {[28, 35, 40].map((percent, index) => (
            <View key={index} style={styles.topicCard}>
              <Image
                source={{ uri: "https://via.placeholder.com/50" }}
                style={styles.topicImage}
              />
              <View style={styles.topicContent}>
                <Text>Lorem Ipsum is simply</Text>
                <View style={styles.progressBarContainer}>
                  <View style={[styles.progressBar, { width: `${percent}%` }]} />
                </View>
              </View>
              <Text style={styles.topicPercentage}>{percent}% Correct</Text>
            </View>
          ))}
        </View>

        {/* Strongest Topics */}
        <View style={styles.topicSection}>
          <Text style={styles.topicTitle}>Thèmes les plus forts</Text>
          {[95, 90, 87].map((percent, index) => (
            <View key={index} style={styles.topicCard}>
              <Image
                source={{ uri: "https://via.placeholder.com/50" }}
                style={styles.topicImage}
              />
              <View style={styles.topicContent}>
                <Text>Lorem Ipsum is simply</Text>
                <View style={styles.progressBarContainer}>
                  <View style={[styles.progressBar, { width: `${percent}%`, backgroundColor: "#4caf50" }]} />
                </View>
              </View>
              <Text style={styles.topicPercentage}>{percent}% Correct</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Navbar fixée */}
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
    </View>
  );
};

export default Profil;
