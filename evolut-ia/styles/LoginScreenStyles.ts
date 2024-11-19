import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  backArrow: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
  },
  backText: {
    fontSize: 20,
    color: "#000000",
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#7f7f7f",
    textAlign: "center",
    marginBottom: 20,
  },
  registerText: {
    fontSize: 14,
    color: "#7f7f7f",
    textAlign: "center",
    marginBottom: 30,
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
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f1fd",
    borderRadius: 8,
    marginBottom: 10,
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
    marginBottom: 20,
    alignSelf: "flex-end",
  },
  button: {
    backgroundColor: "#5c34e7",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    fontSize: 14,
    color: "#7f7f7f",
    marginBottom: 10,
    textAlign: "center",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 10,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default styles;
