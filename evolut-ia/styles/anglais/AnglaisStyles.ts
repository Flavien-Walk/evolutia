import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
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
  },
header: {
  paddingTop: 30,
  paddingHorizontal: 20,
  paddingBottom: 50,
  backgroundColor: "#6c63ff",
  alignItems: "flex-start", // ← important
},

  backArrow: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  pageSubtitle: {
    fontSize: 16,
    color: "#E0E0E0",
    marginTop: 5,
  },
  contentBox: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    marginTop: 1,
    marginBottom: -45,
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
  lessonCard: {
    backgroundColor: "#F7F7F7",
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
