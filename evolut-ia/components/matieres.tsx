// import React from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   StatusBar,
//   Image,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import styles from "../styles/matieresStyle";
// import Navbar from "./Navbar";

// const Header: React.FC = () => (
//   <View style={styles.header}>
//     <View style={styles.logoContainer}>
//       <Image source={require("../assets/Logo_noir_Evolut_IA.png")} style={styles.logoImage} />
//     </View>
//     <View style={styles.headerTextContainer}>
//       <Text style={styles.title}>Prêt à apprendre ?</Text>
//       <Text style={styles.subtitle}>Choisis ta matière.</Text>
//     </View>
//     <View style={styles.icons}>
//       <TouchableOpacity style={styles.iconWrapper}>
//         <Ionicons name="reload-outline" size={24} style={styles.icon} />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.iconWrapper}>
//         <Ionicons name="notifications-outline" size={24} style={styles.icon} />
//       </TouchableOpacity>
//     </View>
//   </View>
// );

// const Tabs: React.FC = () => {
//   const router = useRouter();
//   return (
//     <View style={styles.tabContainer}>
//       <TouchableOpacity onPress={() => router.push("/dashboard")}>
//         <Text style={styles.tabText}>Tableau de bord</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => router.push("/matieres")}>
//         <Text style={styles.tabText}>Matières</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => router.push("/")}>
//         <Text style={styles.tabText}>Recommandation</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const MatiereCard: React.FC<{ title: string; courses: number; color: string; image: any }> = ({ title, courses, color, image }) => (
//   <TouchableOpacity style={[styles.matiereCard, { backgroundColor: color }]}>
//     <Image source={image} style={styles.matiereImage} />
//     <Text style={styles.matiereTitle}>{title}</Text>
//     <Text style={styles.matiereSubtitle}>{courses} Course</Text>
//   </TouchableOpacity>
// );

// const MatiereList: React.FC = () => (
//   <View style={styles.matiereGrid}>
//     <MatiereCard title="Histoire-Géographie" courses={15} color="#FDECEC" image={require("../assets/fonts")} />
//     <MatiereCard title="Mathématiques" courses={10} color="#EAFDF4" image={require("../assets/math.png")} />
//     <MatiereCard title="Anglais" courses={25} color="#E3EDFE" image={require("../assets/english.png")} />
//     <MatiereCard title="AI Design Basic" courses={35} color="#FCE5E3" image={require("../assets/ai.png")} />
//     <MatiereCard title="Espagnol" courses={15} color="#FDF6E3" image={require("../assets/spanish.png")} />
//   </View>
// );

// const Matieres: React.FC = () => {
//   return (
//     <>
//       <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
//       <View style={styles.background}>
//         <View style={styles.container}>
//           <Header />
//           <View style={styles.cardContainer}>
//             <Tabs />
//             <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
//               <MatiereList />
//             </ScrollView>
//           </View>
//         </View>
//         <View style={styles.navbarContainer}>
//           <Navbar />
//         </View>
//       </View>
//     </>
//   );
// };

// export default Matieres;
