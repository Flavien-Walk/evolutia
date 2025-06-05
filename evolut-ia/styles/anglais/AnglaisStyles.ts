import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const anglaisStyles = StyleSheet.create({
  background: {
    position: "absolute", // ✅ Fond violet absolu
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
    alignItems: "center",
    backgroundColor: "transparent",
  },
  header: {
    width: "100%",
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 20,
    backgroundColor: "#6c63ff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  backText: {
    color: "#fff",
    fontSize: 14,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    width: "100%",
    marginTop: 10,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  lessonsCount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardTimer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  timerText: {
    fontSize: 14,
    color: "#888",
  },
  description: {
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
  },
  lessonCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  lessonImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 10,
  },
  lessonContent: {
    flex: 1,
  },
  lessonDuration: {
    fontSize: 12,
    color: "#777",
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  progressBar: {
    height: 6,
    backgroundColor: "#eee",
    borderRadius: 3,
  },
  lockIcon: {
    fontSize: 18,
    color: "#888",
  },
  navbarContainer: {
    position: "absolute",
    bottom: 34,
    width: "100%",
    alignItems: "center",
  },
  footerBlock: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
  },
});
