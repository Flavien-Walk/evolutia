import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: width,
    height: height,
    backgroundColor: "#6c63ff",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
  icons: {
    position: "absolute",
    right: 20,
    top: 50,
    flexDirection: "row",
  },
  icon: {
    color: "#fff",
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#333",
  },
  activeTabText: {
    color: "#6c63ff",
    textDecorationLine: "underline",
  },
  progressWrapper: {
    marginTop: 20,
    alignItems: "center",
  },
  progressContainer: {
    width: "90%",
    height: 15,
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#6c63ff",
    borderRadius: 10,
  },
  progressLabel: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
  scrollContainer: {
    marginBottom: 100,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  card: {
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
  chartCard: {
    width: "100%",
    height: 150,
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
  cardTitle: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  cardValue: {
    fontSize: 40,
    color: "#6c63ff",
    fontWeight: "bold",
    marginTop: 10,
  },

  navbarContainer: {
    position: "absolute", // Fixe le Navbar
    bottom: 34, // Relevé légèrement de la bordure inférieure
    width: "100%", // Occupe toute la largeur
    alignItems: "center", // Centré horizontalement
  },

});
