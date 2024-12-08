import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "../styles/ChatbotStyles";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <View style={styles.header}>
      {/* Logo Évolut'IA */}
      <Image
        source={require("../assets/Logo Blanc Evolut'IA.png")}
        style={styles.logoImage}
      />

      {/* Texte centré */}
      <Text style={styles.headerText}>IA Assistance</Text>

      {/* Icônes à droite */}
      <View style={styles.icons}>
        <TouchableOpacity>
          <Ionicons name="refresh-outline" size={24} color="#FFFFFF" style={styles.iconSpacing} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const EspaceEchange: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const router = useRouter();

  const sendMessage = () => {
    if (currentMessage.trim() !== "") {
      setMessages([...messages, currentMessage]);
      setCurrentMessage("");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* Flèche de retour en haut à gauche */}
          <TouchableOpacity style={styles.backArrow} onPress={() => router.push("/dashboard")}>
            <Ionicons name="arrow-back-outline" size={24} color="#000000" />
            <Text style={styles.backText}>Retour</Text>
          </TouchableOpacity>

          <ScrollView contentContainerStyle={styles.chatBox}>
            {/* Message de bienvenue */}
            <View style={styles.messageBubbleContainer}>
              <View style={styles.assistantMessageBubble}>
                <Image source={require("../assets/chat-bot.png")} style={styles.assistantIcon} />
                <Text style={styles.messageBubbleText}>
                  Bonjour, je suis Mentoria ! 👋 Ton assistant scolaire personnel. Comment puis-je
                  t'aider ?
                </Text>
              </View>
            </View>

            {/* Messages envoyés par l'utilisateur */}
            {messages.map((msg, index) => (
              <View key={index} style={styles.userMessage}>
                <Text style={styles.messageText}>{msg}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Barre d'entrée de texte */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Message"
              value={currentMessage}
              onChangeText={setCurrentMessage}
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Ionicons name="send" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const Chatbot: React.FC = () => {
  return (
    <View style={styles.background}>
      <Header />
      <EspaceEchange />
    </View>
  );
};

export default Chatbot;
