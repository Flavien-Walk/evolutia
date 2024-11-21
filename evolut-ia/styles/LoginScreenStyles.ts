import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: "#ffffff",
  },
  backArrow: {
    marginBottom: 20,
  },
  backText: {
    fontSize: 18,
    color: "#000000",
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#f4f1fd",
    color: "#5c34e7",
    fontSize: 16,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    width: "100%",
    marginBottom: 20,
  },
  forgotPassword: {
    color: "#5c34e7",
    fontSize: 14,
    textAlign: "right",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#5c34e7",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
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
    marginBottom: 20,
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
