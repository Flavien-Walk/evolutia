import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router"; // Utilisation de Link pour Expo Router
import styles from "../styles/NavbarStyles";

const Navbar: React.FC = () => {
  console.log("Rendering Navbar...");
  return (
    <View style={styles.navbar}>
      <Link href="/home" asChild>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={24} style={styles.navIcon} />
        </TouchableOpacity>
      </Link>
      <Link href="/search" asChild>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} style={styles.navIcon} />
        </TouchableOpacity>
      </Link>
      <Link href="/dashboard" asChild>
        <TouchableOpacity>
          <Ionicons name="grid-outline" size={24} style={styles.navIcon} />
        </TouchableOpacity>
      </Link>
      <Link href="/profil" asChild>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} style={styles.navIcon} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Navbar;
