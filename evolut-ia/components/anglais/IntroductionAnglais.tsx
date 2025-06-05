import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../../styles/anglais/AnglaisStylesPage";
import Navbar from "../Navbar";

const IntroductionAnglais: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/anglais")}>
          <Text style={styles.backArrow}>← Retour</Text>
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Introduction</Text>
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.description}>
          Bienvenue dans ce module d’introduction à l’anglais ! Ici, tu vas découvrir les bases
          pour comprendre et t’exprimer à l’oral comme à l’écrit.
        </Text>
      </View>

      <Navbar />
    </View>
  );
};

export default IntroductionAnglais;
