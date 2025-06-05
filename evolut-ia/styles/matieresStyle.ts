// matieresStyle.ts
import { StyleSheet, Dimensions } from "react-native";

// Récupère les dimensions de l'écran
const { width, height } = Dimensions.get("window");

export const matieresStyles = StyleSheet.create({
  // Fond violet couvrant tout l'écran
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width,
    height,
    backgroundColor: "#6c63ff",
  },

  // Conteneur principal
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  header: {
    width: "100%",
    alignItems: "center",
    paddingTop: 100,
    paddingBottom: 20,
    backgroundColor: "#6c63ff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#ddd",
    marginTop: 5,
    textAlign: "center",
  },
  // Onglets de navigation (Tableau de bord / Matières / Recommandation)
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: 14,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 1,
  },

  // Texte des onglets inactifs
  tabText: {
    fontSize: 13,
    color: "#999",
  },

  // Texte de l'onglet actif
  activeTabText: {
    color: "#6c63ff",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  // Conteneur de la carte englobant le contenu principal
  cardContainer: {
    position: "absolute",
    top: 200, // 👈 même valeur partout pour aligner les cartes
    left: 0,
    right: 0,
    bottom: 0,
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
    zIndex: 0,
  },

  // Conteneur Scroll principal
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
    paddingHorizontal: 15,
    overflow: "hidden",
  },

  // Contenu scrollable
  scrollContent: {
    paddingBottom: 100,
    paddingHorizontal: 10,
  },

  // Grille de cartes de matières
  cardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 100,
    paddingHorizontal: 1,
    marginTop: 20,
  },

  // Carte de matière individuelle
  subjectCard: {
    width: "48%",
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

  // Image dans la carte (non utilisée ici mais définie)
  cardImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },

  // Titre de la carte de matière
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
    marginTop: 10,
  },

  // Sous-titre de la carte de matière
  cardSubtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#666",
    marginTop: 2,
    textAlign: "center",
  },

  // Conteneur de la barre de navigation (bas de page)
  navbarContainer: {
    position: "absolute",
    bottom: 34,
    width: "100%",
    alignItems: "center",
  },

  // Bloc blanc en bas pour compenser l’espace visuel
  footerBlock: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
  },
});
