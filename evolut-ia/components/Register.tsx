import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Link, useRouter } from "expo-router";
import axios from "axios";
import styles from "../styles/RegisterStyles";

const Register: React.FC = () => {
  const router = useRouter();

  // Gestion des champs du formulaire
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  });

  // Fonction pour mettre à jour les champs du formulaire
  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  // Fonction pour gérer l'inscription
  const handleRegister = async () => {
    console.log("Bouton S'inscrire cliqué");

    // Vérification des mots de passe
    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Erreur", "Les mots de passe ne correspondent pas");
      return;
    }

    try {
      console.log("Envoi des données au backend :", formData);

      const response = await axios.post("http://10.76.203.251:5000/register", {
        email: formData.email,
        username: formData.username,
        contactNumber: formData.contactNumber,
        password: formData.password,
      });

      console.log("Réponse du serveur :", response.data);
      Alert.alert("Succès", response.data.message);
      router.push("/login");
    } catch (error: any) {
      console.error("Erreur lors de l'envoi :", error);

      const errorMessage =
        error.response?.data?.error || "Une erreur est survenue, veuillez réessayer.";
      Alert.alert("Erreur", errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      {/* Flèche retour */}
      <TouchableOpacity style={styles.backArrow} onPress={() => router.push("/")}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={{ uri: "https://via.placeholder.com/50" }}
        style={styles.logo}
      />

      {/* Titre */}
      <Text style={styles.title}>S'inscrire</Text>
      <Text style={styles.subtitle}>Lorem Ipsum is simply</Text>
      <Text style={styles.description}>
        Si vous avez déjà un compte, connectez-vous{" "}
        <Link href="/login" style={styles.link}>
          ici !
        </Link>
      </Text>

      {/* Champs de saisie */}
      <TextInput
        style={styles.input}
        placeholder="Saisir l'adresse électronique"
        onChangeText={(text) => handleInputChange("email", text)}
        value={formData.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Créer un nom d'utilisateur"
        onChangeText={(text) => handleInputChange("username", text)}
        value={formData.username}
      />
      <TextInput
        style={styles.input}
        placeholder="Numéro de contact"
        onChangeText={(text) => handleInputChange("contactNumber", text)}
        value={formData.contactNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        onChangeText={(text) => handleInputChange("password", text)}
        value={formData.password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmer le mot de passe"
        secureTextEntry={true}
        onChangeText={(text) => handleInputChange("confirmPassword", text)}
        value={formData.confirmPassword}
      />

      {/* Bouton S'inscrire */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>

      {/* Section ou continuer avec */}
      <Text style={styles.continueText}>ou continuer avec</Text>
      <View style={styles.socialIcons}>
        <Image
          source={{ uri: "https://via.placeholder.com/30" }}
          style={styles.icon}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/30" }}
          style={styles.icon}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/30" }}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default Register;
