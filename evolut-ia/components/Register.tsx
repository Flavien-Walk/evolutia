import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router"; // Import du composant Link
import styles from "../styles/RegisterStyles"; // Importez les styles

const Register: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/50" }} // Remplacez par le logo réel
        style={styles.logo}
      />
      <Text style={styles.title}>S'inscrire</Text>
      <Text style={styles.subtitle}>Lorem Ipsum is simply</Text>
      <Text style={styles.description}>
        Si vous avez déjà un compte, connectez-vous{" "}
        <Link href="/login" style={styles.link}>
          ici !
        </Link>
      </Text>

      {/* Champs de saisie */}
      <TextInput style={styles.input} placeholder="Saisir l'adresse électronique" />
      <TextInput style={styles.input} placeholder="Créer un nom d'utilisateur" />
      <TextInput style={styles.input} placeholder="Numéro de contact" />
      <TextInput style={styles.input} placeholder="Mot de passe" secureTextEntry={true} />
      <TextInput
        style={styles.input}
        placeholder="Confirmer le mot de passe"
        secureTextEntry={true}
      />

      {/* Bouton S'inscrire */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>

      {/* Section ou continuer avec */}
      <Text style={styles.continueText}>ou continuer avec</Text>
      <View style={styles.socialIcons}>
        <Image
          source={{ uri: "https://via.placeholder.com/30" }} // Remplacez par l'icône Facebook
          style={styles.icon}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/30" }} // Remplacez par l'icône Apple
          style={styles.icon}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/30" }} // Remplacez par l'icône Google
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default Register;
