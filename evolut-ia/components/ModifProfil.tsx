import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // Importer Picker depuis le bon module
import { useRouter } from "expo-router";
import styles from "../styles/ModifProdilStyles";

const EditProfile: React.FC = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState("Puerto Rico");
  const [username, setUsername] = useState("puerto_rico");
  const [email, setEmail] = useState("youremail@domain.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [country, setCountry] = useState<string>("France");
  const [gender, setGender] = useState<string>("Masculin");
  const [address, setAddress] = useState("45 New Avenue, New York");

  const saveProfile = () => {
    alert("Profil mis à jour avec succès !");
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* Retour */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Retour</Text>
      </TouchableOpacity>

      {/* Titre */}
      <Text style={styles.title}>Modifier les informations du profil</Text>

      {/* Nom complet */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nom entier</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
      </View>

      {/* Nom d'utilisateur */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Surnoms</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      {/* Email */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
      </View>

      {/* Numéro de téléphone */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Numéro de téléphone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
          keyboardType="phone-pad"
        />
      </View>

      {/* Sélecteur de pays */}
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pays</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={country}
              onValueChange={(itemValue: string) => setCountry(itemValue)}
            >
              <Picker.Item label="France" value="France" />
              <Picker.Item label="États-Unis" value="USA" />
              <Picker.Item label="Canada" value="Canada" />
              <Picker.Item label="Japon" value="Japon" />
            </Picker>
          </View>
        </View>

        {/* Genre */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Genre</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue: string) => setGender(itemValue)}
            >
              <Picker.Item label="Masculin" value="Masculin" />
              <Picker.Item label="Féminin" value="Féminin" />
              <Picker.Item label="Autre" value="Autre" />
            </Picker>
          </View>
        </View>
      </View>

      {/* Adresse */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Adresse postale</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
      </View>

      {/* Bouton soumettre */}
      <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
        <Text style={styles.saveButtonText}>SOUMETTRE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;
