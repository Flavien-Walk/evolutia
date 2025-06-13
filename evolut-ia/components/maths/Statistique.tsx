import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../../styles/maths/StatistiqueStylesPage";
import Navbar from "../Navbar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://10.109.249.241:3636";

const questions = [
  {
    question: "Qu'est-ce qu'une moyenne arithmétique ?",
    options: [
      "La plus grande valeur d'un ensemble",
      "La somme des valeurs divisée par leur nombre",
      "La différence entre la plus grande et la plus petite valeur",
    ],
    answer: "La somme des valeurs divisée par leur nombre",
  },
  {
    question: "Quel est le mode dans une série statistique ?",
    options: [
      "La valeur la plus fréquente",
      "La moyenne",
      "La médiane",
    ],
    answer: "La valeur la plus fréquente",
  },
  {
    question: "Comment calcule-t-on la médiane ?",
    options: [
      "Valeur la plus fréquente",
      "Valeur au milieu après tri",
      "Moyenne des valeurs",
    ],
    answer: "Valeur au milieu après tri",
  },
];

const Statistique: React.FC = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [hasProgress, setHasProgress] = useState(false);

  const fetchProgress = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) return;

      const response = await fetch(`${API_URL}/get-progress`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.currentQuestion > 0 && data.currentQuestion < questions.length) {
          setHasProgress(true);
          setCurrentQuestion(data.currentQuestion);
          setScore(data.score);
        }
      }
    } catch (error) {
      console.error("Erreur lors du chargement de la progression :", error);
    }
  };

  const saveProgress = async (question: number, score: number) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) return;

      await fetch(`${API_URL}/save-progress`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ currentQuestion: question, score }),
      });
    } catch (error) {
      console.error("Erreur lors de la sauvegarde de la progression :", error);
    }
  };

  // On envoie aussi le score à la validation
  const validateModule = async (moduleId: string, score: number) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) return;

      await fetch(`${API_URL}/complete-module`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ moduleId, score }),
      });
    } catch (error) {
      console.error("Erreur lors de la validation du module :", error);
    }
  };

  const resetProgress = async () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setHasProgress(false);
    await saveProgress(0, 0);
  };

  const handleResume = () => {
    setHasProgress(false);
    setShowScore(false);
  };

  const handleStart = () => {
    resetProgress();
  };

  useEffect(() => {
    fetchProgress();
  }, []);

  const handleAnswer = async (selectedOption: string) => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    const updatedScore = isCorrect ? score + 1 : score;

    if (isCorrect) {
      setScore(updatedScore);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      await saveProgress(nextQuestion, updatedScore);
    } else {
      setShowScore(true);
      await saveProgress(nextQuestion, updatedScore);

      const successRate = (updatedScore / questions.length) * 100;
      if (successRate >= 50) {
        await validateModule("2", updatedScore); // id module statistique + score
      }
    }
  };

  const handleNextModule = async () => {
    await validateModule("2", score);
    router.push("/puissance");
  };

  const successRate = (score / questions.length) * 100;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/mathematiques")}>
          <Text style={styles.backArrow}>← Retour</Text>
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Statistique</Text>
      </View>

      {/* Contenu principal */}
      <View style={styles.contentBox}>
        <Text style={styles.description}>
          Bienvenue dans le module Statistique ! Ici, tu approfondiras tes
          connaissances sur les notions statistiques essentielles pour mieux
          analyser et comprendre les données.
        </Text>

        {hasProgress ? (
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 16, textAlign: "center", color: "#2D2D2D", marginBottom: 10 }}>
              Souhaites-tu reprendre là où tu t'étais arrêté ?
            </Text>
            <TouchableOpacity
              onPress={handleResume}
              style={{
                backgroundColor: "#A7D8C9",
                padding: 10,
                borderRadius: 8,
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 16, textAlign: "center", color: "#2D2D2D" }}>
                Reprendre le quiz
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleStart}
              style={{
                backgroundColor: "#FFC1C1",
                padding: 10,
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 16, textAlign: "center", color: "#2D2D2D" }}>
                Recommencer depuis le début
              </Text>
            </TouchableOpacity>
          </View>
        ) : !showScore && currentQuestion < questions.length ? (
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 16, textAlign: "center", color: "#2D2D2D", marginBottom: 5 }}>
              Question {currentQuestion + 1} sur {questions.length}
            </Text>
            <Text
              style={[
                styles.pageTitle,
                { fontSize: 20, textAlign: "center", marginBottom: 10 },
              ]}
            >
              {questions[currentQuestion].question}
            </Text>
            {questions[currentQuestion].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleAnswer(option)}
                style={{
                  backgroundColor: "#DFF5ED",
                  padding: 10,
                  borderRadius: 8,
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 16, textAlign: "center", color: "#2D2D2D" }}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : showScore && (
          <View style={{ marginTop: 30, alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#2D2D2D", marginBottom: 10 }}>
              Tu as obtenu {score} / {questions.length} bonnes réponses !
            </Text>
            <Text style={{ fontSize: 16, color: "#2D2D2D", marginBottom: 10 }}>
              Taux de réussite : {successRate.toFixed(2)}%
            </Text>
            {successRate >= 50 && (
              <TouchableOpacity
                onPress={handleNextModule}
                style={{
                  backgroundColor: "#A7D8C9",
                  padding: 10,
                  borderRadius: 8,
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 16, color: "#2D2D2D" }}>
                  Passer au module suivant
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={resetProgress}
              style={{
                backgroundColor: "#A7D8C9",
                padding: 10,
                borderRadius: 8,
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 16, color: "#2D2D2D" }}>
                Recommencer le quiz
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Navbar */}
      <Navbar />
    </View>
  );
};

export default Statistique;
