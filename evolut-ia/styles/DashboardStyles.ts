import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Screen dimensions

const styles = StyleSheet.create({
  // Background for the entire screen
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: width,
    height: height,
    backgroundColor: "#6c63ff", // Purple background
  },

  // Main container with transparent background
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "transparent",
  },

  // White card container for content
  cardContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF", // White background
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    width: "100%",
    marginTop: 10,
  },

  // Header container
  header: {
    width: "100%",
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 20,
    backgroundColor: "#6c63ff", // Purple background for the header
  },

  // Logo container and image
  logoContainer: {
    position: "absolute",
    left: 20,
    top: 50,
  },
  logoImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  // Header text styles
  headerTextContainer: {
    marginTop: 50,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff", // White title text
    textAlign: "left",
  },
  subtitle: {
    fontSize: 16,
    color: "#ddd", // Light gray subtitle text
    textAlign: "left",
  },

  // Icons in the header
  icons: {
    position: "absolute",
    right: 20,
    top: 50,
    flexDirection: "row",
  },
  icon: {
    color: "#fff", // White icons
    marginLeft: 10,
  },

  // Tabs container
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    marginHorizontal: 1,
  },
  tabText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#333", // Gray for inactive tabs
  },
  activeTabText: {
    color: "#6c63ff", // Purple for active tab
    textDecorationLine: "underline", // Underline for active tab
  },

  // Progress bar container
  progressWrapper: {
    marginTop: 20,
    alignItems: "center",
  },
  progressContainer: {
    width: "90%",
    height: 15,
    backgroundColor: "#f3f3f3", // Light gray background
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#6c63ff", // Purple progress
    borderRadius: 10,
  },
  progressLabel: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
    textAlign: "center",
  },

  // Cards container
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },

  // Individual card styles
  card: {
    width: "48%",
    height: 120,
    backgroundColor: "#fff", // White card
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
  },

  // Chart card style
  chartCard: {
    width: "100%",
    height: 150,
    backgroundColor: "#fff", // White background
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
  },

  // Card title
  cardTitle: {
    fontSize: 16,
    color: "#333", // Dark gray for text
    fontWeight: "bold",
  },

  // Card value (e.g., 660)
  cardValue: {
    fontSize: 40,
    color: "#6c63ff", // Purple for value
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default styles;
