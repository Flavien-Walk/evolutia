import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  // === CONTAINER PRINCIPAL ===
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 80, // Espace pour la navbar
  },
  
  // === HEADER ===
  header: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    marginBottom: 15,
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#F8F8F8",
    alignSelf: "flex-start",
  },
  userInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  emptyProfileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  headerTextContainer: {
    flex: 1,
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#888888",
  },

  // === SCROLL CONTAINER ===
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 100, // Espace supplémentaire pour la navbar
  },

  // === LOADING ===
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  loadingText: {
    fontSize: 16,
    color: "#333333",
    marginTop: 15,
    textAlign: "center",
  },

  // === CARTE UTILISATEUR ===
  userCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  userCardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: "#888888",
    marginBottom: 10,
  },
  roleBadge: {
    backgroundColor: "#6C63FF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  roleText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  planText: {
    fontSize: 12,
    color: "#888888",
  },

  // === SECTIONS ===
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 15,
    marginTop: 10,
  },

  // === STATISTIQUES GÉNÉRALES ===
  statsSection: {
    marginBottom: 30,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statsCard: {
    width: (width - 50) / 2,
    marginBottom: 15,
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  statsContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  statsTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  statsValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  statsTitle: {
    fontSize: 11,
    color: "#FFFFFF",
    opacity: 0.9,
    marginTop: 2,
  },
  statsSubtitle: {
    fontSize: 9,
    color: "#FFFFFF",
    opacity: 0.7,
    marginTop: 1,
  },
  trendContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  trendText: {
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 2,
  },

  // === MATIÈRES FAVORITES ===
  favoritesSection: {
    marginBottom: 30,
  },
  favoritesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  favoriteCard: {
    width: (width - 50) / 2,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  favoriteTitle: {
    fontSize: 12,
    color: "#FFFFFF",
    opacity: 0.9,
    marginTop: 8,
    marginBottom: 5,
  },
  favoriteSubject: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 5,
    textTransform: "capitalize",
  },
  favoriteScore: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  // === GRAPHIQUES ===
  chartContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 15,
    textAlign: "center",
  },
  chart: {
    borderRadius: 16,
  },

  // === MODULES DÉTAILLÉS ===
  modulesSection: {
    marginBottom: 20,
  },
  modulesList: {
    gap: 15,
  },
  moduleDetailCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  moduleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  moduleNameContainer: {
    flex: 1,
  },
  moduleName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 3,
  },
  moduleRank: {
    fontSize: 12,
    color: "#6C63FF",
    fontWeight: "bold",
  },
  moduleEmoji: {
    fontSize: 28,
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  scoreValue: {
    fontSize: 32,
    fontWeight: "bold",
    marginRight: 15,
  },
  scoreDetails: {
    flex: 1,
  },
  scoreLabel: {
    fontSize: 12,
    color: "#888888",
    marginBottom: 3,
  },
  moduleStatus: {
    fontSize: 12,
    color: "#888888",
    fontStyle: "italic",
  },
  moduleProgressContainer: {
    marginTop: 5,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: "#F0F0F0",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 4,
  },

  // === ÉTAT VIDE ===
  emptyState: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 15,
    marginBottom: 10,
  },
  emptyStateText: {
    fontSize: 14,
    color: "#888888",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 25,
  },
  startButton: {
    borderRadius: 25,
    overflow: "hidden",
  },
  startButtonGradient: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default styles;