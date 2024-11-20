import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 16,
    color: "#888888",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  mainText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  highlight: {
    color: "#6C63FF",
  },
  courseCard: {
    backgroundColor: "#f4f4f8",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quizSection: {
    marginTop: 20,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  quizCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  quizSubject: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quizDuration: {
    fontSize: 14,
    color: "#888888",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },
  navIcon: {
    color: "#888888",
  },
});
