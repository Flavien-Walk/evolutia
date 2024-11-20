import React from "react";
import { Link } from "expo-router";
import { View, Text, TouchableOpacity, Image, SafeAreaView, StatusBar } from "react-native";
import styles from "../styles/IndexScreenStyles";

const Index: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Barre de statut */}
      <StatusBar barStyle="light-content" backgroundColor="#6D57FC" />

      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require("../assets/Logo Blanc Evolut'IA.png")}
          style={styles.logo}
        />

        {/* Conteneur englobant */}
        <View style={styles.card}>
          {/* Texte de bienvenue */}
          <Text style={styles.title}>
            Bienvenue dans <Text style={styles.highlight}>Évolut'IA</Text> !
          </Text>

          {/* Sous-titre */}
          <Text style={styles.subtitle}>
            Nous sommes ravis de vous voir rejoindre notre plateforme
            d'apprentissage personnalisée. Profitez d'un parcours éducatif
            adapté à vos besoins, où chaque étape est pensée pour vous faire
            progresser à votre rythme.
          </Text>

          {/* Question */}
          <Text style={styles.question}>Prêt(e) à commencer ?</Text>

          {/* Bouton S'inscrire */}
          <View style={styles.linkWrapper}>
            <Link href="/register" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>S'inscrire</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Texte "ou" */}
          <Text style={styles.orText}>ou</Text>

          {/* Bouton Connexion */}
          <View style={styles.linkWrapper}>
            <Link href="/login" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Connexion</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
