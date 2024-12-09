import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import * as Google from "expo-auth-session/providers/google";
import styles from "../styles/LoginScreenStyles";

const Login: React.FC = () => {
  const router = useRouter();

  // Champs pour email et mot de passe
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Initialisation Google OAuth
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "372481784711-30b8l1pnokd02s441uk2l17neg7bjkf1.apps.googleusercontent.com",
    redirectUri: "https://auth.expo.io/@msxprime/evolut-ia",
  });

  // Gestion de la réponse Google OAuth
  useEffect(() => {
    if (response?.type === "success") {
      const handleGoogleLogin = async () => {
        try {
          // Extraire le token d'accès depuis la réponse
          const { authentication } = response;
          const token = authentication?.accessToken;

          if (!token) {
            Alert.alert("Erreur", "Impossible d'obtenir le token Google.");
            return;
          }

          const backendResponse = await fetch("http://10.76.203.150:3636/google-login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
          });

          const data = await backendResponse.json();
          console.log("Réponse API Google :", data); // Debug

          if (backendResponse.ok) {
            if (data.token) await AsyncStorage.setItem("token", data.token);
            if (data.user?.username) await AsyncStorage.setItem("username", data.user.username);

            Alert.alert("Connexion réussie", `Bonjour ${data.user.username} !`);
            router.push("/home");
          } else {
            Alert.alert("Erreur", data.error || "Impossible de se connecter.");
          }
        } catch (error) {
          console.error("Erreur lors de la connexion Google :", error);
          Alert.alert("Erreur", "Une erreur est survenue avec Google.");
        }
      };

      handleGoogleLogin();
    }
  }, [response]);

  // Gestion de la connexion classique (email et mot de passe)
  const handleLogin = async () => {
    try {
      const response = await fetch("http://10.76.203.150:3636/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Réponse API Login :", data); // Debug

      if (response.ok) {
        if (data.token) await AsyncStorage.setItem("token", data.token);

        if (data.user) {
          const { username, role, roleColor } = data.user;

          if (username) await AsyncStorage.setItem("username", username);
          if (role) await AsyncStorage.setItem("role", role);
          if (roleColor) await AsyncStorage.setItem("roleColor", roleColor);

          Alert.alert("Connexion réussie", `Bonjour ${username} !`);
          router.push("/home");
        } else {
          Alert.alert("Erreur", "Les données utilisateur sont absentes.");
        }
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
        <TouchableOpacity onPress={() => request && promptAsync()}>
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
