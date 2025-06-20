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

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Auth Google
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "372481784711-30b8l1pnokd02s441uk2l17neg7bjkf1.apps.googleusercontent.com",
    redirectUri: "https://auth.expo.io/@msxprime/evolut-ia",
  });

  const BACKEND_URL = "https://evolutia-back.onrender.com";

  // Connexion Google
  useEffect(() => {
    if (response?.type === "success") {
      const handleGoogleLogin = async () => {
        try {
          const { authentication } = response;
          const token = authentication?.accessToken;

          if (!token) {
            Alert.alert("Erreur", "Impossible d'obtenir le token Google.");
            return;
          }

          const res = await fetch(`${BACKEND_URL}/google-login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
          });

          const data = await res.json();
          console.log("Réponse Google :", data);

          if (res.ok) {
            await AsyncStorage.setItem("token", data.token || "");
            await AsyncStorage.setItem("username", data.user?.username || "");

            Alert.alert("Bienvenue", `Bonjour ${data.user.username} !`);
            router.push("/home");
          } else {
            Alert.alert("Erreur", data.error || "Connexion Google échouée.");
          }
        } catch (err) {
          console.error("Google login error:", err);
          Alert.alert("Erreur", "Une erreur est survenue.");
        }
      };

      handleGoogleLogin();
    }
  }, [response]);

  // Connexion classique
  const handleLogin = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Réponse Login :", data);

      if (res.ok) {
        await AsyncStorage.setItem("token", data.token || "");

        if (data.user) {
          const { username, role, roleColor } = data.user;
          await AsyncStorage.setItem("username", username || "");
          await AsyncStorage.setItem("role", role || "User");
          await AsyncStorage.setItem("roleColor", roleColor || "#808080");

          Alert.alert("Connexion réussie", `Bonjour ${username} !`);
          router.push("/home");
        } else {
          Alert.alert("Erreur", "Utilisateur introuvable.");
        }
      } else {
        Alert.alert("Erreur", data.error || "Identifiants incorrects.");
      }
    } catch (err) {
      console.error("Login error:", err);
      Alert.alert("Erreur", "Une erreur est survenue.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backArrow} onPress={() => router.push("/")}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Image source={require("../assets/logo_noir_evolutia.png")} style={styles.logo} />
      <Text style={styles.title}>Se connecter</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#A29BFE"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Mot de passe"
        placeholderTextColor="#A29BFE"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>ou continuer avec</Text>

      <View style={styles.socialIcons}>
        <TouchableOpacity onPress={() => request && promptAsync()}>
          <Image source={require("../assets/google.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/apple.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/Facebook.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
