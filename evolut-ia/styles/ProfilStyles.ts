import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100, // Espace supplémentaire pour la Navbar
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
  },
  statsSection: {
    marginBottom: 30,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  statCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  statIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  statLabel: {
    fontSize: 14,
    color: "#666666",
  },
  topicSection: {
    marginBottom: 30,
  },
  topicTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#444444",
  },
  topicCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  topicImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  topicContent: {
    flex: 1,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 5,
  },
  progressBar: {
    height: 8,
    borderRadius: 5,
  },
  topicPercentage: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#444444",
  },
  navbarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});
