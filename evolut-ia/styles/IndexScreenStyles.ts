import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: width,
    height: height,
    backgroundColor: "#6D57FC",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 160,
    height: 130,
    marginBottom: 20,
    marginTop: 100,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: "100%",
    paddingVertical: 65,
    paddingHorizontal: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 15,
  },
  highlight: {
    color: "#5c34e7",
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "left",
    marginBottom: 30,
    lineHeight: 22,
  },
  question: {
    fontSize: 18,
    fontWeight: "300",
    color: "#000",
    textAlign: "center",
    marginBottom: 30,
  },
  linkWrapper: {
    width: "80%",
    alignItems: "center",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#5c34e7",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
    textAlign: "center",
  },
});

export default styles;
