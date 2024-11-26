import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import io from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/ChatGlobalStyles";

// Connexion à Socket.IO
const socket = io("http://10.76.204.34:3636");

// Typage d'un message
type Message = {
  id: string;
  text: string;
  sender: string;
  color: string;
};

// Fonction pour générer un identifiant unique
const generateUniqueId = () =>
  Date.now().toString() + Math.random().toString(36).substring(2);

const ChatGlobal: React.FC = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [user, setUser] = useState<{ name: string; color: string }>({
    name: "",
    color: "#" + Math.floor(Math.random() * 16777215).toString(16),
  });

  // Récupérer les informations utilisateur
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          console.error("Token manquant !");
          return;
        }

        const response = await fetch("http://10.76.204.34:3636/user-info", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUser({
          name: data.username,
          color: "#" + Math.floor(Math.random() * 16777215).toString(16),
        });

        // Informer le serveur Socket.IO du nom d'utilisateur
        socket.emit("setUsername", { username: data.username });
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de l'utilisateur :",
          error
        );
      }
    };
    fetchUser();
  }, []);

  // Réception des messages du serveur
  useEffect(() => {
    socket.on("receiveMessage", (message: Message) => {
      setMessages((prevMessages) => {
        if (prevMessages.some((m) => m.id === message.id)) {
          return prevMessages;
        }
        return [...prevMessages, message];
      });
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  // Envoi des messages
  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const message: Message = {
        id: generateUniqueId(),
        text: newMessage,
        sender: user.name || "Anonymous",
        color: user.color,
      };
      socket.emit("sendMessage", message);
      setNewMessage("");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* En-tête */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backArrow}
          onPress={() => router.push("/chatbot")}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Chat Global</Text>
      </View>

      {/* Liste des messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageBubble,
              item.sender === user.name
                ? styles.myMessage
                : styles.otherMessage,
            ]}
          >
            <Text style={[styles.senderText, { color: item.color }]}>
              {item.sender}
            </Text>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.chatBox}
      />

      {/* Barre de saisie */}
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
    </KeyboardAvoidingView>
  );
};

export default ChatGlobal;
