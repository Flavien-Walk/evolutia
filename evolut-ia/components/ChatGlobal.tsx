import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import io from "socket.io-client";
import styles from "../styles/ChatGlobalStyles";

// Connexion à Socket.IO
const socket = io("http://10.76.203.251:5000");

// Typage d'un message
type Message = {
  id: string; // Identifiant unique pour chaque message
  text: string;
  sender: string;
  color: string;
};

// Fonction pour générer un identifiant unique
const generateUniqueId = () => Date.now().toString() + Math.random().toString(36).substring(2);

const ChatGlobal: React.FC = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]); // Liste des messages
  const [newMessage, setNewMessage] = useState<string>(""); // Message à envoyer
  const [user, setUser] = useState<{ name: string; color: string }>({
    name: "Utilisateur_" + Math.floor(Math.random() * 1000),
    color: "#" + Math.floor(Math.random() * 16777215).toString(16),
  });

  // Connexion à Socket.IO
  useEffect(() => {
    // Réception des messages du serveur
    socket.on("receiveMessage", (message: Message) => {
      setMessages((prevMessages) => {
        // Vérifie si le message existe déjà pour éviter les doublons
        if (prevMessages.some((m) => m.id === message.id)) {
          return prevMessages;
        }
        return [...prevMessages, message];
      });
    });

    return () => {
      socket.off("receiveMessage"); // Nettoyer la connexion
    };
  }, []);

  // Fonction pour envoyer un message
  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const message: Message = {
        id: generateUniqueId(),
        text: newMessage,
        sender: user.name,
        color: user.color,
      };
      socket.emit("sendMessage", message); // Envoyer au serveur
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
        keyExtractor={(item) => item.id} // Utilisation de l'ID unique
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageBubble,
              item.sender === user.name ? styles.myMessage : styles.otherMessage,
            ]}
          >
            <Text style={[styles.senderText, { color: item.color }]}>{item.sender}</Text>
            <Text style={styles.messageText}>{item.text}</Text>
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
