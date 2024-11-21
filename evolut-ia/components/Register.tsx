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
    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Erreur", "Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const response = await axios.post("http://10.76.203.251:5000/register", {
        email: formData.email,
        username: formData.username,
        contactNumber: formData.contactNumber,
        password: formData.password,
      });

      Alert.alert("Succès", response.data.message);
      router.push("/login");
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

      {/* Adresse Email */}
      <TextInput
        style={styles.input}
        placeholder="Saisir l'adresse électronique"
        placeholderTextColor="#A29BFE"
        onChangeText={(text) => handleInputChange("email", text)}
        value={formData.email}
      />

      {/* Nom d'utilisateur */}
      <TextInput
        style={styles.input}
        placeholder="Créer un nom d'utilisateur"
        placeholderTextColor="#A29BFE"
        onChangeText={(text) => handleInputChange("username", text)}
        value={formData.username}
      />

      {/* Numéro de contact */}
      <TextInput
        style={styles.input}
        placeholder="Numéro de contact"
        placeholderTextColor="#A29BFE"
        onChangeText={(text) => handleInputChange("contactNumber", text)}
        value={formData.contactNumber}
      />

      {/* Mot de passe */}
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#A29BFE"
        secureTextEntry
        onChangeText={(text) => handleInputChange("password", text)}
        value={formData.password}
      />

      {/* Confirmation du mot de passe */}
      <TextInput
        style={styles.input}
        placeholder="Confirmer le mot de passe"
        placeholderTextColor="#A29BFE"
        secureTextEntry
        onChangeText={(text) => handleInputChange("confirmPassword", text)}
        value={formData.confirmPassword}
      />

      {/* Bouton S'inscrire */}
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
