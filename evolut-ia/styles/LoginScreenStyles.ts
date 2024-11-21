import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: "#ffffff",
  },
  backArrow: {
    marginBottom: 20, // Espacement sous la flèche
  },
  backText: {
    fontSize: 18,
    color: "#000000",
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginBottom: 30, // Espacement sous le logo
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 20, // Espacement sous le titre
  },
  textContainer: {
    marginBottom: 20, // Espacement entre les textes et les champs
  },
  registerText: {
    fontSize: 14,
    color: "#7f7f7f",
    textAlign: "center",
  },
  link: {
    color: "#5c34e7",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f4f1fd",
    color: "#5c34e7",
    fontSize: 16,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    width: "100%",
    marginBottom: 20, // Espacement entre les champs
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f1fd",
    borderRadius: 8,
    marginBottom: 20, // Espacement avant le bouton
    width: "100%",
  },
  eyeIcon: {
    paddingHorizontal: 10,
    color: "#A29BFE",
  },
  forgotPassword: {
    color: "#5c34e7",
    fontSize: 14,
    textAlign: "right",
    marginBottom: 30, // Espacement avant le bouton Connexion
  },
  button: {
    backgroundColor: "#5c34e7",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginBottom: 30, // Espacement avant le texte "ou continuer avec"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    fontSize: 14,
    color: "#7f7f7f",
    textAlign: "center",
    marginBottom: 20, // Espacement avant les icônes des réseaux sociaux
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
