import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#6C63FF",
  },
  backArrow: {
    position: "absolute",
    left: 16,
    top: 15,
  },
  backText: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 40, // Pour éviter la superposition avec la flèche
  },
  chatBox: {
    flexGrow: 1,
    padding: 16,
  },
  messageBubble: {
    backgroundColor: "#E0E0E0",
    padding: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  messageText: {
    fontSize: 16,
    color: "#333333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: "#6C63FF",
    borderRadius: 20,
    padding: 8,
  },
  sendText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default styles;
