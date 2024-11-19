import { Link } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/IndexScreenStyles";

const Index: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.logo}
      />
      <Text style={styles.title}>Bienvenue dans Évolut'IA !</Text>
      <Text style={styles.subtitle}>
        Nous sommes ravis de vous voir rejoindre notre plateforme
        d'apprentissage personnalisée. Profitez d'un parcours éducatif adapté à
        vos besoins, où chaque étape est pensée pour vous faire progresser à
        votre rythme.
      </Text>
      <Text style={styles.question}>Prêt(e) à commencer ?</Text>

      {/* Bouton S'inscrire */}
      <View style={styles.linkWrapper}>
        <Link href="/register" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>S'inscrire</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <Text style={styles.orText}>ou</Text>

      {/* Bouton Connexion */}
      <View style={styles.linkWrapper}>
        <Link href="/login" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Index;
