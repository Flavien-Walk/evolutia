import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../../styles/maths/PuissanceStylesPage";
import Navbar from "../Navbar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://10.109.249.241:3636";

const questions = [
  {
    question: "Combien vaut 2 puissance 3 ?",
    options: ["6", "8", "9"],
    answer: "8",
  },
  {
    question: "Combien vaut 5² ?",
    options: ["10", "20", "25"],
    answer: "25",
  },
  {
    question: "Combien vaut 10 puissance 0 ?",
    options: ["0", "1", "10"],
    answer: "1",
  },
];

const Puissance: React.FC = () => {
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

  // Important : on envoie aussi le score
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
        await validateModule("3", updatedScore); // <-- on passe bien le score ici
      }
    }
  };

  const handleNextModule = async () => {
    await validateModule("3", score);
    router.push("/algebre");
  };

  const successRate = (score / questions.length) * 100;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/mathematiques")}>
          <Text style={styles.backArrow}>← Retour</Text>
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Puissance</Text>
      </View>

      {/* Contenu principal */}
      <View style={styles.contentBox}>
        <Text style={styles.description}>
          Bienvenue dans le module Puissance ! Ici, tu maîtriseras les
          opérations de puissance et tu comprendras leur utilité.
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

export default Puissance;
