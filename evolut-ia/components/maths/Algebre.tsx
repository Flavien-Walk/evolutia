import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../../styles/maths/AlgebreStylesPage";
import Navbar from "../Navbar";
import AsyncStorage from "@react-native-async-storage/async-storage";

// ✅ URL de production
const API_URL = "https://evolutia-back.onrender.com";

const questions = [
  {
    question: "Quelle est la solution de l'équation x + 2 = 5 ?",
    options: ["3", "2", "7"],
    answer: "3",
  },
  {
    question: "Combien de solutions possède l'équation x² = 4 ?",
    options: ["1", "2", "3"],
    answer: "2",
  },
  {
    question: "Si 3x = 9, que vaut x ?",
    options: ["2", "3", "6"],
    answer: "3",
  },
];

const Algebre: React.FC = () => {
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

    if (isCorrect) setScore(updatedScore);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      await saveProgress(nextQuestion, updatedScore);
    } else {
      setShowScore(true);
      await saveProgress(nextQuestion, updatedScore);

      const successRate = (updatedScore / questions.length) * 100;
      if (successRate >= 50) {
        await validateModule("4", updatedScore); // module algèbre
      }
    }
  };

  const successRate = (score / questions.length) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/mathematiques")}>
          <Text style={styles.backArrow}>← Retour</Text>
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Algèbre</Text>
      </View>

      <View style={styles.contentBox}>
        <Text style={styles.description}>
          Bienvenue dans le module Algèbre ! Ici, tu apprendras à résoudre des équations et à comprendre les bases du calcul algébrique.
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
            <Text style={[styles.pageTitle, { fontSize: 20, textAlign: "center", marginBottom: 10 }]}>
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
        ) : (
          showScore && (
            <View style={{ marginTop: 30, alignItems: "center" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#2D2D2D", marginBottom: 10 }}>
                Tu as obtenu {score} / {questions.length} bonnes réponses !
              </Text>
              <Text style={{ fontSize: 16, color: "#2D2D2D", marginBottom: 10 }}>
                Taux de réussite : {successRate.toFixed(2)}%
              </Text>
              {successRate >= 50 && (
                <Text style={{ fontSize: 18, color: "#2D2D2D", marginVertical: 15, textAlign: "center" }}>
                  🎉 Félicitations, tu as terminé le module Maths !
                </Text>
              )}
              <TouchableOpacity
                onPress={() => router.push("/home")}
                style={{
                  backgroundColor: "#A7D8C9",
                  padding: 10,
                  borderRadius: 8,
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 16, color: "#2D2D2D" }}>
                  Retour à l'accueil
                </Text>
              </TouchableOpacity>
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
          )
        )}
      </View>

      <Navbar />
    </View>
  );
};

export default Algebre;
