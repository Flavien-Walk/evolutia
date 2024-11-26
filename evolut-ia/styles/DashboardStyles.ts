import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  // Background
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

  // Main container
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "transparent",
  },

  // Card Container
  cardContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    width: "100%",
    marginTop: 10,
  },

  // Scroll Container
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
    paddingHorizontal: 15,
    overflow: "hidden",
  },

  scrollContent: {
    paddingBottom: 100,
    paddingHorizontal: 10,
  },

  // Header
  header: {
    width: "100%",
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 20,
    backgroundColor: "#6c63ff",
  },

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

  headerTextContainer: {
    marginTop: 50,
    alignItems: "flex-start",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },

  subtitle: {
    fontSize: 16,
    color: "#ddd",
  },

  // Header Icons
  icons: {
    position: "absolute",
    right: 20,
    top: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 10, // Spacing between icons
  },

  iconWrapper: {
    marginLeft: 10,
  },

  icon: {
    color: "#fff",
  },

  // Tabs
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
  },

  tabText: {
    fontSize: 13,
    color: "#333",
  },

  activeTabText: {
    color: "#6c63ff",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },

  // Progress Bar
  progressCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  progressWrapper: {
    width: "100%",
    alignItems: "center",
  },

  progressContainer: {
    width: "100%",
    height: 10,
    backgroundColor: "#f0f0f0",
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
    borderRadius: 10,
  },

  progressLabel: {
    marginTop: 8,
    fontSize: 12,
    color: "#6c63ff",
    textAlign: "right",
    alignSelf: "flex-end",
  },

  // Cards Section
  cardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 1,
    marginTop: 20,
  },

  largeCard: {
    width: "100%",
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  smallCard: {
    width: "48%",
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  fullWidthCard: {
    width: "100%",
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  cardIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginBottom: 10,
  },

  chartImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  cardTitle: {
    fontSize: 12,
    color: "#333",
    fontWeight: "light",
    textAlign: "center",
  },

  progressValue: {
    fontSize: 40,
    color: "#6c63ff",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },

  viewDetailsButton: {
    backgroundColor: "#F3F3F3",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  viewDetailsText: {
    color: "#6c63ff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },

  // Navbar
  navbarContainer: {
    position: "absolute",
    bottom: 34,
    width: "100%",
    alignItems: "center",
  },

  footerBlock: {
    width: "100%",
    height: 50, // Ajustez la hauteur selon vos besoins
    backgroundColor: "#fff", // Blanc pour correspondre au fond de la page
  },
  
});
