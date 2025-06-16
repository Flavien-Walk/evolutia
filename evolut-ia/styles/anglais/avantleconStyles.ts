// File: avantleconStyles.ts
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const avantleconStyles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width,
    height,
    backgroundColor: "#6c63ff",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 60,
  },
  backText: {
    color: "#fff",
    marginLeft: 6,
    fontSize: 16,
  },
  illustration: {
    width: width * 1,
    height: height * 0.35,
    alignSelf: "center",
    resizeMode: "contain",
    marginVertical: 20,
  },
  whiteCard: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 50,
    paddingHorizontal: 30,
    paddingBottom: 10000,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 12,
  },
  titleWrapper: {
    alignItems: "center",
    marginBottom: 12,
  },
  mainTitleLine1: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 30,
    color: "#000",
  },
  violetWord: {
    color: "#6c63ff",
    fontWeight: "bold",
  },
  mainTitleLine2: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 30,
    color: "#000",
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 30,
    lineHeight: 20,
  },
  startButton: {
    backgroundColor: "#6c63ff",
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 16,
    marginTop: 10,
  },
  startButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
