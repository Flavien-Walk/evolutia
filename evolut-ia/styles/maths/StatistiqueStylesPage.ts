// styles/maths/StatistiqueStylesPage.ts
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F8F3", // même fond que Introduction
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backArrow: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 10,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
  },
  contentBox: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: -20,
  },
  description: {
    fontSize: 16,
    color: "#2D2D2D",
    textAlign: "center",
  },
});
