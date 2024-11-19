import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: "center",
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
    color: "#333",
  },
  description: {
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  link: {
    color: "#5A67D8",
    textDecorationLine: "underline",
  },
  input: {
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#6B46C1",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  continueText: {
    textAlign: "center",
    marginVertical: 20,
    color: "#666",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default styles;
