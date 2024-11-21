import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/ChatbotStyles"; // Importation des styles

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]); // Liste des messages
  const [currentMessage, setCurrentMessage] = useState<string>(""); // Message en cours de saisie
  const router = useRouter();

  // Fonction pour envoyer un message
  const sendMessage = () => {
    if (currentMessage.trim() !== "") {
      setMessages([...messages, currentMessage]);
      setCurrentMessage("");
    }
  };

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        {/* Flèche de retour */}
        <TouchableOpacity style={styles.backArrow} onPress={() => router.push("/dashboard")}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>IA Assistance</Text>

        {/* Bouton pour switcher vers ChatGlobal */}
        <TouchableOpacity
          style={styles.switchButton}
          onPress={() => router.push("/chatglobal")}
        >
          <Text style={styles.switchButtonText}>Chat Global</Text>
        </TouchableOpacity>
      </View>

      {/* Liste des messages */}
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.messageBubble}>
            <Text style={styles.messageText}>{item}</Text>
          </View>
        )}
        contentContainerStyle={styles.chatBox}
      />

      {/* Barre de saisie */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Message"
          value={currentMessage}
          onChangeText={setCurrentMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Image source={require("../assets/send.png")} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chatbot;
