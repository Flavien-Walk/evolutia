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
    paddingHorizontal: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    width: "100%",
    marginTop: 10,
  },
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
    gap: 10,
  },
  icon: {
    color: "#fff",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 12,
    color: "#333",
  },
  activeTabText: {
    color: "#6c63ff",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  cardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  card: {
    width: "48%",
    height: 150,
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginBottom: 10,
  },
  cardTextContainer: {
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
  },
});
