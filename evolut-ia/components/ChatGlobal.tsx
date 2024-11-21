import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import io from "socket.io-client";
import styles from "../styles/ChatGlobalStyles";

// Connexion à Socket.IO
const socket = io("http://10.76.203.251:5000"); // Remplace par l'IP de ton serveur si nécessaire

// Typage d'un message (si nécessaire)
type Message = {
  text: string;
  sender: string; // Peut être "user", "bot", ou autre
};

const ChatGlobal: React.FC = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<string[]>([]); // Liste des messages
  const [newMessage, setNewMessage] = useState<string>(""); // Message à envoyer

  // Connexion à Socket.IO
  useEffect(() => {
    socket.on("receiveMessage", (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]); // Ajouter un message reçu
    });

    return () => {
      socket.off("receiveMessage"); // Nettoyer la connexion
    };
  }, []);

  // Fonction pour envoyer un message
  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      socket.emit("sendMessage", newMessage); // Envoyer au serveur
      setNewMessage(""); // Réinitialiser l'entrée
    }
  };

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backArrow} onPress={() => router.push("/chatbot")}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Chat Global</Text>
      </View>

      {/* Boîte de messages */}
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

      {/* Barre d'entrée */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Message"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatGlobal;
