import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/NavbarStyles";

const Navbar: React.FC = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity>
        <Ionicons name="home-outline" size={24} style={styles.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="search-outline" size={24} style={styles.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="grid-outline" size={24} style={styles.navIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="person-outline" size={24} style={styles.navIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
