import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#6D57FC", 
  },
  container: {
    flex: 1,
    justifyContent: "center",// Alignement vers le haut
    alignItems: "center", // Centrer horizontalement
    backgroundColor: "#6D57FC", // Fond violet pour le conteneur principal
  },
  logo: {
    width: 160, // Largeur du logo
    height: 130, // Hauteur du logo
    marginTop: 60, // Espacement supérieur pour éloigner le logo du bord
    marginBottom: 20, // Espacement entre le logo et le conteneur
  },
  card: {
    backgroundColor: "#FFFFFF", // Fond blanc pour l'onglet
    borderRadius: 20, // Coins arrondis
    width: "100%", // Largeur relative pour s'adapter à l'écran
    paddingVertical: 65, // Espacement interne vertical
    paddingHorizontal: 10, // Espacement interne horizontal
    shadowColor: "#000", // Ombre pour un effet de profondeur
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5, // Ombre sur Android
    alignItems: "center", // Centrer le contenu
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000", // Couleur noire pour le titre
    textAlign: "center",
    marginBottom: 15,
  },
  highlight: {
    color: "#5c34e7", // Violet pour "Évolut'IA"
  },
  subtitle: {
    fontSize: 16,
    color: "#333", // Gris foncé
    textAlign: "left", // Centrer le texte
    lineHeight: 22, // Espacement entre les lignes
    marginBottom: 30, // Espacement après le sous-titre
  },
  question: {
    fontSize: 18,
    fontWeight: "light",
    color: "#000",
    textAlign: "center",
    marginBottom: 30, // Espacement avant les boutons
  },
  linkWrapper: {
    width: "80%", // Largeur relative des boutons
    alignItems: "center",
    marginBottom: 15, // Espacement entre les boutons
  },
  button: {
    backgroundColor: "#5c34e7", // Violet pour le fond du bouton
    paddingVertical: 12, // Hauteur des boutons
    borderRadius: 10, // Coins arrondis
    alignItems: "center",
    width: "100%", // Largeur complète
    shadowColor: "#000", // Ombre
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // Ombre sur Android
  },
  buttonText: {
    color: "#fff", // Texte blanc sur le bouton
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    fontSize: 14,
    color: "#666", // Gris clair pour "ou"
    marginBottom: 15, // Espacement avec le bouton suivant
    textAlign: "center",
  },
});

export default styles;
