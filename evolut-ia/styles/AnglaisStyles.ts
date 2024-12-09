import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#6c63ff",
  },
  header: {
    backgroundColor: "#6c63ff",
    paddingTop: 50,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 5,
  },
  headerContent: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    color: "#fff",
    marginLeft: 10,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: -20,
  },
  lessonHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  lessonCount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  lessonDuration: {
    fontSize: 14,
    color: "#666",
  },
  lessonDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  lessonCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  lessonCardLocked: {
    opacity: 0.6,
  },
  lessonImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  lessonContent: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  lockIcon: {
    color: "#999",
  },
});
