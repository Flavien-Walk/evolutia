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
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  backArrow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15, // Espace sous la flèche
  },
  backText: {
    fontSize: 16,
    color: "#000000",
    marginLeft: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 20,
    backgroundColor: "#6c63ff",
  },
  logoImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    flex: 1,
    textAlign: "center",
  },
  icons: {
    flexDirection: "row",
  },
  iconSpacing: {
    marginRight: 10,
  },
  chatBox: {
    flexGrow: 1,
    padding: 15,
  },
  messageBubbleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 15,
  },
  assistantMessageBubble: {
    maxWidth: "95%",
    backgroundColor: "#F3F3F3",
    padding: 15,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  assistantIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  messageBubbleText: {
    fontSize: 14,
    color: "#333333",
    flexShrink: 1,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: "80%",
  },
  messageText: {
    fontSize: 14,
    color: "#333333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingHorizontal: 15,
    fontSize: 14,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#6C63FF",
    borderRadius: 20,
    padding: 10,
  },
});
