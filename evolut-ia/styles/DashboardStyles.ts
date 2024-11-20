import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#6c63ff",
  },
  logo: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
  },
  icon: {
    color: "#fff",
    marginLeft: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginHorizontal: 20,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  progressContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  progressLabel: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressFill: {
    width: "44%",
    height: "100%",
    backgroundColor: "#6c63ff",
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  cardLarge: {
    flex: 1,
    height: 120,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardSmall: {
    flex: 0.48,
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    fontWeight: "bold",
  },
  cardValue: {
    fontSize: 40,
    color: "#6c63ff",
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default styles;
