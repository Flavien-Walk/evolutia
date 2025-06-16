// File: avantlecon.tsx
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { avantleconStyles } from "../../styles/anglais/avantleconStyles";

const AvantLecon: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <View style={avantleconStyles.background}>
        <View style={avantleconStyles.container}>
          {/* Bouton retour */}
          <TouchableOpacity
            style={avantleconStyles.header}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={20} color="#fff" />
            <Text style={avantleconStyles.backText}>Retour</Text>
          </TouchableOpacity>

          {/* Illustration */}
          <Image
            source={require("../../assets/introductionimage.png")}
            style={avantleconStyles.illustration}
          />

          {/* Carte blanche */}
          <View style={avantleconStyles.whiteCard}>
            <View style={avantleconStyles.titleWrapper}>
              <Text style={avantleconStyles.mainTitleLine1}>
                Commençons à <Text style={avantleconStyles.violetWord}>développer</Text>
              </Text>
              <Text style={avantleconStyles.mainTitleLine2}>Nos compétences.</Text>
            </View>

            <Text style={avantleconStyles.subtitle}>
              Casser les barrières de l’éducation{"\n"}
              pour un apprentissage au cas par cas !
            </Text>

            <TouchableOpacity
              style={avantleconStyles.startButton}
              onPress={() => router.push("/anglais")}
            >
              <Text style={avantleconStyles.startButtonText}>Commencer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default AvantLecon;
