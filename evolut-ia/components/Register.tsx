import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Link, useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/RegisterStyles";

const Register: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    // Vérification des mots de passe
    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Erreur", "Les mots de passe ne correspondent pas");
      return;
    }

    try {
      // Appel API pour l'inscription
      const response = await axios.post("http://192.168.3.20:5000/register", {
        email: formData.email,
        username: formData.username,
        contactNumber: formData.contactNumber,
        password: formData.password,
      });

      const { token, user } = response.data;

      // Stockage des informations utilisateur
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("username", user.username);
      await AsyncStorage.setItem("role", user.role);
      await AsyncStorage.setItem("roleColor", user.roleColor);

      Alert.alert("Succès", `Bienvenue, ${user.username}!`);
      router.push("/home");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error || "Une erreur est survenue, veuillez réessayer.";
      Alert.alert("Erreur", errorMessage);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Flèche retour */}
      <TouchableOpacity style={styles.backArrow} onPress={() => router.push("/")}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={require("../assets/Logo noir Evolut'IA.png")}
        style={styles.logo}
      />

      {/* Titre */}
      <Text style={styles.title}>S'inscrire</Text>

      {/* Description */}
      <Text style={styles.description}>
        Si vous avez déjà un compte, connectez-vous{" "}
        <Link href="/login" style={styles.link}>
          ici !
        </Link>
      </Text>

      {/* Formulaire */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#A29BFE"
        onChangeText={(text) => handleInputChange("email", text)}
        value={formData.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        placeholderTextColor="#A29BFE"
        onChangeText={(text) => handleInputChange("username", text)}
        value={formData.username}
      />
      <TextInput
        style={styles.input}
        placeholder="Numéro de contact"
        placeholderTextColor="#A29BFE"
        onChangeText={(text) => handleInputChange("contactNumber", text)}
        value={formData.contactNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#A29BFE"
        secureTextEntry
        onChangeText={(text) => handleInputChange("password", text)}
        value={formData.password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmer le mot de passe"
        placeholderTextColor="#A29BFE"
        secureTextEntry
        onChangeText={(text) => handleInputChange("confirmPassword", text)}
        value={formData.confirmPassword}
      />

      {/* Bouton */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>

      {/* Texte ou */}
      <Text style={styles.orText}>ou continuer avec</Text>

      {/* Icônes des Réseaux Sociaux */}
      <View style={styles.socialIcons}>
        <TouchableOpacity>
          <Image
            source={require("../assets/Facebook.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/apple.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/google.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;
