import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTextContainer: {
    flexDirection: "column",
  },
  greetingText: {
    fontSize: 12,
    color: "#888888",
  },
  nameText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
  roleText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 4,
    color: "#808080", // Couleur par défaut (gris)
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textContainer: {
    marginBottom: 20,
  },
  mainText: {
    fontSize: 24,
    fontWeight: "300",
    marginVertical: 10,
    textAlign: "left",
  },
  highlight: {
    color: "#6C63FF",
    fontWeight: "bold",
  },
  cardContainer: {
    marginBottom: 20,
  },
  courseCard: {
    width: "100%",
    aspectRatio: 1.5, // Maintient les proportions
    borderRadius: 15,
    overflow: "hidden", // Empêche le débordement de l'image
  },
  courseImage: {
    flex: 1,
    justifyContent: "flex-end", // Positionne le texte en bas de l'image
  },
  cardImageStyle: {
    borderRadius: 15, // Coins arrondis de l'image
  },
  overlay: {
    padding: 10,
  },
  courseTitle: {
    color: "#FFF", // Texte blanc
    fontSize: 18,
    fontWeight: "bold",
  },
  quizSection: {
    marginTop: 20,
  },
  quizTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
  },
  quizCard: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row", // Dispose les éléments horizontalement
    alignItems: "center",
    shadowColor: "#000", // Ombre pour iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Ombre pour Android
    gap: 10, // Espace entre l'image et le texte
    marginTop: 10,
  },
  quizImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  quizSubject: {
    fontSize: 16,
    fontWeight: "light",
    color: "#2D2D2D",
  },
  quizDuration: {
    fontSize: 14,
    color: "#888888",
  },
});
