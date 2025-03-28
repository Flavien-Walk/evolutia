import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logoContainer: {
    flex: 1,
  },
  logoImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  headerTextContainer: {
    flex: 3,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3D3D3D",
  },
  subtitle: {
    fontSize: 16,
    color: "#7D7D7D",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    marginLeft: 10,
  },
  icon: {
    color: "#3D3D3D",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  tabText: {
    fontSize: 16,
    color: "#7D7D7D",
  },
  activeTabText: {
    fontWeight: "bold",
    color: "#4A00E0",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  matiereGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  matiereCard: {
    width: "48%",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  matiereImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  matiereTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3D3D3D",
    textAlign: "center",
  },
  matiereSubtitle: {
    fontSize: 14,
    color: "#7D7D7D",
    textAlign: "center",
  },
  cardContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  navbarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

export default styles;
