// styles/MathematiquesStyles.ts
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F8F3", // fond vert très clair
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
  pageSubtitle: {
    fontSize: 16,
    color: "#6E6E6E",
    marginTop: 5,
  },
  contentBox: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: -20, // superpose légèrement le fond blanc sur le header
  },
  lessonsInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  lessonsCount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalDuration: {
    fontSize: 14,
    color: "#888888",
  },
  description: {
    fontSize: 14,
    color: "#2D2D2D",
    marginBottom: 10,
  },
  lessonList: {
    flexGrow: 0,
  },
  lessonCard: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  lessonImage: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginRight: 15,
  },
  lessonContent: {
    flex: 1,
  },
  lessonDuration: {
    fontSize: 12,
    color: "#888888",
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 4,
  },
  lockIcon: {
    fontSize: 18,
    color: "#888888",
  },
});
