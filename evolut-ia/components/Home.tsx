import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/HomeScreenStyles";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur la page d'accueil !</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Naviguer ailleurs")}
      >
        <Text style={styles.buttonText}>Explorer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
