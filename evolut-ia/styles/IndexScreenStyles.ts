import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f1fd", // Couleur de fond violette claire
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5c34e7", // Couleur violette
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  linkWrapper: {
    width: "80%", // Aligné avec la largeur du bouton
    alignItems: "center",
    marginBottom: 10, // Espacement entre les boutons
  },
  button: {
    backgroundColor: "#5c34e7", // Couleur violette
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    width: "100%", // S'assurer que le bouton occupe toute la largeur du wrapper
  },
  buttonText: {
    color: "#fff", // Couleur du texte blanc
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    fontSize: 14,
    color: "#000",
    marginBottom: 10,
  },
});

export default styles;
