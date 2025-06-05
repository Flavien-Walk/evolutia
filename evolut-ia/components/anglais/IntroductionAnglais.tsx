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
import { anglaisStylesPage } from "../../styles/anglais/AnglaisStylesPage";

const IntroductionAnglais: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <View style={anglaisStylesPage.background}>
        <View style={anglaisStylesPage.container}>
          {/* Bouton retour */}
          <TouchableOpacity
            style={anglaisStylesPage.header}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={20} color="#fff" />
            <Text style={anglaisStylesPage.backText}>Retour</Text>
          </TouchableOpacity>

          {/* Illustration */}
          <Image
            source={require("../../assets/logo_noir_evolutia.png")}
            style={anglaisStylesPage.illustration}
          />

          {/* Carte blanche */}
          <View style={anglaisStylesPage.whiteCard}>
            <View style={anglaisStylesPage.titleWrapper}>
              <Text style={anglaisStylesPage.mainTitleLine1}>
                Commençons à <Text style={anglaisStylesPage.violetWord}>développer</Text>
              </Text>
              <Text style={anglaisStylesPage.mainTitleLine2}>Nos compétences.</Text>
            </View>

            <Text style={anglaisStylesPage.subtitle}>
              Casser les barrières de l’éducation{"\n"}
              pour un apprentissage au cas par cas !
            </Text>

            <TouchableOpacity
              style={anglaisStylesPage.startButton}
              onPress={() => router.push("/anglais")}
            >
              <Text style={anglaisStylesPage.startButtonText}>Commencer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default IntroductionAnglais;
