import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Permet au ScrollView de scroller sur l'ensemble du contenu
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 20, // Réduire le padding vertical pour un meilleur positionnement
    justifyContent: "flex-start",
  },
  backArrow: {
    marginBottom: 15,
  },
  backText: {
    fontSize: 20,
    color: "#000000",
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#000000",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#666666",
    marginBottom: 20,
  },
  link: {
    color: "#5C34E7",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#F4F1FD",
    color: "#5C34E7",
    fontSize: 16,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    width: "100%",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E4E4E4",
  },
  button: {
    backgroundColor: "#5C34E7",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    fontSize: 14,
    color: "#666666",
    marginBottom: 15,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
    alignSelf: "center",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default styles;
