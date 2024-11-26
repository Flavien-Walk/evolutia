import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 120, // Plus d'espace pour éviter que le contenu soit masqué par la navbar
  },
  levelCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  levelTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
  },
  levelSubtitle: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 15,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#587EFF", // Couleur principale
    borderRadius: 5,
  },
  levelPoints: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333333",
  },

  // Médailles
  medalsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  medalCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 15,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
    width: 100, // Largeur des cartes
  },
  medalImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  medalType: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
  },
  medalCount: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#6200EA",
    textAlign: "center",
  },

  // Certifications (ajustement pour éviter le troncage)
  certificationsContainer: {
    flexDirection: "row",
    marginBottom: 20,
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  certificationCard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 15,
    marginHorizontal: 10, // Espacement entre les cartes
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
    width: 120, // Largeur de la carte
    height: 170, // Hauteur ajustée pour être mieux visible
  },
  certificationIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#e0e0e0",
    marginBottom: 10,
  },
  certificationTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
  },
  certificationLevel: {
    fontSize: 12,
    color: "#666666",
    marginTop: 8,
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    overflow: "hidden",
  },

  // Badges (marge ajustée pour laisser plus de place aux certifications)
  badgeCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 10, // Ajusté pour éviter de manger l'espace des certifications
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  badgeImage: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  badgeTitle: {
    fontSize: 14,
    color: "#333333",
    fontWeight: "bold",
    flex: 1,
  },

  // Navbar
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

