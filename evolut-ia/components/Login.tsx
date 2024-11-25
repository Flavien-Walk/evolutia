import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import styles from "../styles/LoginScreenStyles";

const Login: React.FC = () => {
  const router = useRouter();

  // Champs pour email et mot de passe
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Initialisation Google OAuth
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "372481784711-30b8l1pnokd02s441uk2l17neg7bjkf1.apps.googleusercontent.com",
    redirectUri: "https://auth.expo.io/@msxprime/evolut-ia",
  });

  // Gestion de la réponse Google
  useEffect(() => {
    if (response?.type === "success") {
      const sendGoogleToken = async () => {
        try {
          const backendResponse = await fetch("http://192.168.3.20:3636/google-login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: response.authentication?.idToken }),
          });

          const data = await backendResponse.json();

          if (backendResponse.ok) {
            // Stocker les données utilisateur uniquement si elles existent
            if (data.token) await AsyncStorage.setItem("token", data.token);
            if (data.user?.username) await AsyncStorage.setItem("username", data.user.username);
            if (data.user?.role) await AsyncStorage.setItem("role", data.user.role);
            if (data.user?.roleColor) await AsyncStorage.setItem("roleColor", data.user.roleColor);

            Alert.alert("Bienvenue", `Bonjour ${data.user.username} !`);
            router.push("/home");
          } else {
            Alert.alert("Erreur", data.error || "Une erreur est survenue.");
          }
        } catch (error) {
          console.error("Erreur lors de l'envoi du token Google :", error);
          Alert.alert("Erreur", "Impossible de se connecter au serveur.");
        }
      };

      sendGoogleToken();
    }
  }, [response]);

  // Gestion de la connexion classique (email et mot de passe)
  const handleLogin = async () => {
    try {
      const response = await fetch("http://192.168.3.20:3636/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Stocker les données utilisateur uniquement si elles existent
        if (data.token) await AsyncStorage.setItem("token", data.token);
        if (data.user?.username) await AsyncStorage.setItem("username", data.user.username);
        if (data.user?.role) await AsyncStorage.setItem("role", data.user.role);
        if (data.user?.roleColor) await AsyncStorage.setItem("roleColor", data.user.roleColor);

        Alert.alert("Connexion réussie", `Bonjour ${data.user.username} !`);
        router.push("/home");
      } else {
        Alert.alert("Erreur", data.error || "Identifiants incorrects.");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion classique :", error);
      Alert.alert("Erreur", "Une erreur est survenue, veuillez réessayer.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Retour */}
      <TouchableOpacity style={styles.backArrow} onPress={() => router.push("/")}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={require("../assets/Logo noir Evolut'IA.png")}
        style={styles.logo}
      />

      {/* Titre */}
      <Text style={styles.title}>Se connecter</Text>

      {/* Champ email */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#A29BFE"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      {/* Champ mot de passe */}
      <TextInput
        placeholder="Mot de passe"
        placeholderTextColor="#A29BFE"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Bouton "Mot de passe oublié" */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      {/* Bouton Connexion classique */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>

      {/* Texte ou */}
      <Text style={styles.orText}>ou continuer avec</Text>

      {/* Boutons Google, Facebook et Apple */}
      <View style={styles.socialIcons}>
        <TouchableOpacity onPress={() => promptAsync()}>
          <Image
            source={require("../assets/google.png")}
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
            source={require("../assets/Facebook.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
