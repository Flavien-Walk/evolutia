// components/maths/Introduction.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../../styles/maths/MathematiquesStylesPage";
import Navbar from "../Navbar";

const Introduction: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/mathematiques")}>
          <Text style={styles.backArrow}>← Retour</Text>
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Introduction</Text>
      </View>

      {/* Contenu principal */}
      <View style={styles.contentBox}>
        <Text style={styles.description}>
          Bienvenue dans le cours d'introduction aux mathématiques ! Ici, tu
          découvriras les bases essentielles pour progresser sereinement.
        </Text>
      </View>

      {/* Navbar */}
      <Navbar />
    </View>
  );
};

export default Introduction;
