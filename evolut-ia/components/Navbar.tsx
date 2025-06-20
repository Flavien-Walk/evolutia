import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const Navbar = () => {
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

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },
  navIcon: {
    color: "#888888",
  },
});

export default Navbar;