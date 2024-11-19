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
import styles from "../styles/LoginScreenStyles";

const Login: React.FC = () => {
  const router = useRouter();

  // Gestion des champs de connexion
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      console.log("Tentative de connexion avec :", { email, password });

      const response = await axios.post("http://192.168.3.20:5000/login", {
        email,
        password,
      });

      console.log("Réponse du serveur :", response.data);
      Alert.alert("Succès", response.data.message);

      // Redirection vers la page Home
      router.push("/home");
    } catch (error: any) {
      console.error("Erreur lors de la connexion :", error);

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

      {/* Titre principal */}
      <Text style={styles.title}>Se connecter à</Text>
      <Text style={styles.subtitle}>Lorem Ipsum is simply</Text>

      {/* Lien d'inscription */}
      <Text style={styles.registerText}>
        Si vous n'avez pas de compte, inscrivez-vous{" "}
        <Link href="/register" style={styles.link}>
          ici !
        </Link>
      </Text>

      {/* Champs de connexion */}
      <TextInput
        placeholder="Saisir l'adresse électronique"
        placeholderTextColor="#A29BFE"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Mot de passe"
          placeholderTextColor="#A29BFE"
          style={[styles.input, { flex: 1 }]}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity>
          <Text style={styles.eyeIcon}>👁️</Text>
        </TouchableOpacity>
      </View>

      {/* Lien "Mot de passe oublié" */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      {/* Bouton Connexion */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>

      {/* Texte ou */}
      <Text style={styles.orText}>ou continuer avec</Text>

      {/* Icônes des réseaux sociaux */}
      <View style={styles.socialIcons}>
        <TouchableOpacity>
          <Image
            source={{ uri: "https://via.placeholder.com/40/3b5998" }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: "https://via.placeholder.com/40/000000" }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: "https://via.placeholder.com/40/db4437" }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
