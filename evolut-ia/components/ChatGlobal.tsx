import React from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/ChatGlobalStyles"; // Importation des styles

const ChatGlobal: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        {/* Flèche retour */}
        <TouchableOpacity style={styles.backArrow} onPress={() => router.push("/chatbot")}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Chat Global</Text>
      </View>

      {/* Boîte de chat */}
      <FlatList
        data={[]} // Liste de messages (peut être connectée à une API)
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
        <TextInput style={styles.input} placeholder="Message" />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatGlobal;
