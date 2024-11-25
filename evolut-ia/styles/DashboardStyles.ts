import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Dimensions de l'écran

const styles = StyleSheet.create({
  // Fond violet couvrant toute la page
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: width,
    height: height,
    backgroundColor: "#6c63ff", // Fond violet
  },

  // Conteneur principal transparent pour respecter le fond violet
  container: {
    flex: 1,
    justifyContent: "flex-start", // Aligne le contenu en haut
    alignItems: "center",
    backgroundColor: "transparent",
  },

  // Conteneur blanc englobant
  cardContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Fond blanc
    borderTopLeftRadius: 30, // Coins arrondis en haut à gauche
    borderTopRightRadius: 30, // Coins arrondis en haut à droite
    paddingTop: 20, // Espacement supérieur
    paddingHorizontal: 15, // Espacement horizontal
    shadowColor: "#000", // Ombre
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5, // Ombre pour Android
    width: "100%", // Largeur complète
    marginTop: 10, // Marge au-dessus du conteneur
  },

  // Style de l'en-tête
  header: {
    width: "100%",
    alignItems: "center", // Centre le titre et le sous-titre
    paddingTop: 70, // Espacement supérieur pour la barre de statut
    paddingBottom: 20, // Espacement inférieur
    backgroundColor: "#6c63ff", // Fond violet pour l'en-tête
  },

  logoContainer: {
    position: "absolute",
    left: 20, // Aligné à gauche
    top: 50, // Ajustez en fonction de l'espacement souhaité
  },
  logoImage: {
    width: 40, // Largeur de l'image
    height: 40, // Hauteur de l'image
    resizeMode: "contain", // Maintenir les proportions de l'image
  },

  // Conteneur pour le texte de l'en-tête
  headerTextContainer: {
    marginTop: 50,
    alignItems: "center", // Centre le titre et le sous-titre
  },

  // Style du titre principal
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff", // Blanc pour le titre
    textAlign: "center",
  },

  // Style du sous-titre
  subtitle: {
    fontSize: 16,
    color: "#ddd", // Gris clair pour le sous-titre
    textAlign: "center",
  },

  // Conteneur des icônes
  icons: {
    position: "absolute", // Position absolue pour les icônes
    right: 20, // Aligné à droite
    top: 50, // Aligné verticalement avec le logo
    flexDirection: "row", // Aligne les icônes en ligne
  },

  // Style des icônes
  icon: {
    color: "#fff", // Couleur blanche
    marginLeft: 10, // Espacement entre les icônes
  },

  // Conteneur des onglets (navigation)
  tabContainer: {
    flexDirection: "row", // Onglets alignés horizontalement
    justifyContent: "space-around", // Espacement équivalent entre les onglets
    alignItems: "center",
    paddingVertical: 10, // Espacement vertical
    marginHorizontal: 10, // Marges horizontales
  },

  // Texte des onglets
  tabText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333", // Gris pour les onglets inactifs
  },

  // Texte des onglets actifs
  activeTabText: {
    color: "#6c63ff", // Violet pour l'onglet actif
  },

  // Conteneur de la barre de progression
  progressContainer: {
    marginVertical: 20, // Espacement autour de la barre de progression
    width: "90%", // Barre occupant 90% de la largeur
    alignSelf: "center", // Centré horizontalement
  },

  // Label de la progression
  progressLabel: {
    fontSize: 14,
    color: "#333", // Gris foncé pour le texte de progression
    marginBottom: 5, // Espacement sous le label
    textAlign: "center",
  },

  // Barre de progression (fond)
  progressBar: {
    width: "100%", // Largeur complète
    height: 10,
    backgroundColor: "#ddd", // Gris clair pour le fond de la barre
    borderRadius: 5,
    overflow: "hidden",
  },

  // Remplissage de la barre de progression
  progressFill: {
    height: "100%",
    backgroundColor: "#6c63ff", // Violet pour la progression
  },

  // Conteneur pour les cartes
  cardsContainer: {
    flexDirection: "row", // Aligne les cartes horizontalement
    flexWrap: "wrap", // Permet le retour à la ligne
    justifyContent: "space-between", // Espacement équivalent entre les cartes
    paddingHorizontal: 20, // Espacement horizontal
    marginTop: 20, // Espacement supérieur
  },

  // Style des cartes normales
  card: {
    width: "48%", // Chaque carte occupe 48% de la largeur
    height: 120,
    backgroundColor: "#fff", // Fond blanc
    borderRadius: 10, // Coins arrondis
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15, // Espacement entre les cartes
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Ombre pour Android
  },

  // Style des cartes plus grandes (par exemple, graphique)
  chartCard: {
    width: "100%", // Occupe toute la largeur
    height: 150,
    backgroundColor: "#fff", // Fond blanc
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15, // Espacement sous la carte
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Ombre pour Android
  },

  // Titre des cartes
  cardTitle: {
    fontSize: 16,
    color: "#333", // Gris foncé pour le texte
    fontWeight: "bold",
  },

  // Valeur mise en évidence dans les cartes
  cardValue: {
    fontSize: 40,
    color: "#6c63ff", // Violet pour les valeurs
    fontWeight: "bold",
    marginTop: 10, // Espacement au-dessus
  },

});

export default styles;
