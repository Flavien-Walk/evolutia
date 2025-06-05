import React from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { anglaisStyles } from "../../styles/anglais/AnglaisStyles"; 
import Navbar from "../Navbar";

const lessons = [
    {
        id: "1",
        title: "00 - Introduction",
        duration: "1:10min",
        image: require("../../assets/fonts/Logo_noir_Evolut'IA.png"),
        locked: false,
        navigateTo: "/introductionanglais",
    },
    {
        id: "2",
        title: "01 - Verbes",
        duration: "10min",
        image: require("../../assets/Logo_noir_Evolut'IA.png"),
        locked: true,
    },
    {
        id: "3",
        title: "02 - Grammaire",
        duration: "56min",
        image: require("../../assets/Logo_noir_Evolut'IA.png"),
        locked: true,
    },
    {
        id: "4",
        title: "03 - Conjugaisons",
        duration: "45min",
        image: require("../../assets/Logo_noir_Evolut'IA.png"),
        locked: true,
    },
];

const Anglais: React.FC = () => {
    const router = useRouter();

    const renderLesson = ({ item }: any) => (
        <TouchableOpacity
            disabled={item.locked}
            onPress={() => {
                if (!item.locked && item.navigateTo) {
                    router.push(item.navigateTo);
                }
            }}
        >
            <View style={anglaisStyles.lessonCard}>
                <Image source={item.image} style={anglaisStyles.lessonImage} />
                <View style={anglaisStyles.lessonContent}>
                    <Text style={anglaisStyles.lessonDuration}>{item.duration}</Text>
                    <Text style={anglaisStyles.lessonTitle}>{item.title}</Text>
                    <View style={anglaisStyles.progressBar} />
                </View>
                {item.locked && (
                    <Ionicons name="lock-closed-outline" size={20} color="#6c63ff" />
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <>
            <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
            <View style={anglaisStyles.background}>
                <View style={anglaisStyles.container}>
                    {/* Header */}
                    <View style={anglaisStyles.header}>
                        <TouchableOpacity onPress={() => router.back()} style={anglaisStyles.backButton}>
                            <Ionicons name="arrow-back" size={20} color="#fff" />
                            <Text style={anglaisStyles.backText}>Retour</Text>
                        </TouchableOpacity>
                        <Text style={anglaisStyles.pageTitle}>Anglais – 3ème</Text>
                    </View>

                    {/* Carte blanche */}
                    <View style={anglaisStyles.cardContainer}>
                        <View style={anglaisStyles.cardHeader}>
                            <Text style={anglaisStyles.lessonsCount}>12 Lessons</Text>
                            <View style={anglaisStyles.cardTimer}>
                                <Ionicons name="time-outline" size={14} color="#999" />
                                <Text style={anglaisStyles.timerText}>1hr 20min</Text>
                            </View>
                        </View>

                        <Text style={anglaisStyles.description}>
                            Ce cours enseignera les bases de l'Anglais du début à la fin. 12 leçons de plus d'une heure.
                        </Text>

                        <FlatList
                            data={lessons}
                            renderItem={renderLesson}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 100 }}
                        />
                    </View>

                    {/* Navbar */}
                    <View style={anglaisStyles.navbarContainer}>
                        <Navbar />
                    </View>

                    <View style={anglaisStyles.footerBlock} />
                </View>
            </View>
        </>
    );
};

export default Anglais;
