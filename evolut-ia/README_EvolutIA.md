# ÉvolutIA – Apprendre mieux, autrement

ÉvolutIA est une application mobile éducative pensée pour accompagner collégiens, lycéens et étudiants dans leur apprentissage. Grâce à l’intelligence artificielle, des contenus adaptés, et une interface intuitive, l’élève progresse à son rythme, selon ses besoins réels.

---

## Fonctionnalités principales

### Tableau de bord

* Vue d’ensemble des progrès.
* Statistiques et avancement par matière.
* Accès rapide aux dernières activités.

### IA Assistance

* Chatbot éducatif (type GPT).
* Aide sur des notions de cours, explications, quiz, raisonnement pas à pas.

### Recommandations intelligentes

* Suggestions d’activités ciblées selon les lacunes détectées.
* Algorithme d'adaptation au niveau de l'élève.

### Navigation par matière

* Contenus interactifs classés par matière : anglais, mathématiques, etc.
* Organisation par chapitres et thèmes.
* Capsules avant-contrôle pour révision rapide.

### Suivi & progression

* Barres de progression, scores, badges.
* Feedback immédiat sur les réponses et activités.

---

## Stack technique

* Frontend mobile : React Native (Expo), TypeScript
* UI Design : NativeBase, styles modulaires par matière
* Navigation : Expo Router
* Stockage local : AsyncStorage
* Backend : Node.js + Express
* Base de données : MongoDB Atlas
* Communication en temps réel : Socket.io
* Authentification : JWT
* Hébergement backend : Render
  → https://evolutia-back.onrender.com

---

## Dépôts GitHub

* Frontend (App mobile)
  https://github.com/Flavien-Walk/evolutia.git

* Backend (API + Auth + DB)
  https://github.com/Flavien-Walk/evolutia_back

---

## Structure du projet

### Arborescence frontend (`/evolutia`)

```
/app
├── dashboard.tsx
├── chatbot.tsx
├── matieres.tsx
├── login.tsx
├── profil.tsx
├── recommandation.tsx
├── ...

/components
├── anglais/
│   ├── Anglais.tsx
│   └── avantlecon.tsx
├── maths/
│   └── Mathematiques.tsx
├── Navbar.tsx
├── ChatGlobal.tsx
├── ...

/styles
├── anglais/
│   ├── AnglaisStyles.ts
│   └── avantleconStyles.ts
├── maths/
│   ├── AlgebreStylesPage.ts
│   ├── StatistiqueStylesPage.ts
│   └── ...
├── LoginScreenStyles.ts
├── DashboardStyles.ts
├── ...

/assets
├── fonts/
│   └── SpaceMono-Regular.ttf
├── logo_noir_evolutia.png
├── apple.png
├── chat-bot.png
├── bronze.png
├── ...
```

---

## Installation & lancement

### Prérequis

* Node.js ≥ 18
* Expo CLI
* Compte MongoDB Atlas
* Expo Go (ou simulateur Android/iOS)

### Installation frontend

```bash
git clone https://github.com/Flavien-Walk/evolutia.git
cd Evolutia Front\evolutia\evolut-ia
npm install
npx expo start
```

### Installation backend

```bash
git clone https://github.com/Flavien-Walk/evolutia_back.git
cd evolutia_back
npm install
npm start
```

---

## Environnement backend (`/evolutia_back/.env`)

```
PORT=5000
MONGO_URI=mongodb+srv://flavienhypnose:nddfXBVv1uzn5FNT@cluster0.aug1e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=AooP0Pmmmojiohugiygylkbnkl988
```

---

## Roadmap v1 → v2

* [ ] IA contextuelle par matière
* [x] Interface responsive par module
* [x] Tableaux de bord dynamiques
* [ ] Système de défis personnalisés
* [ ] Capsules révisions avant contrôle
* [x] Apprentissage adaptatif complet (IA scoring)
* [x ] Mode hors-ligne + synchronisation
* [x ] Authentification OAuth
* [ ] Classements / mini-jeux / communauté apprenante

---

## À propos

Auteur : Flavien, Flavie, Yrieix

Contact : [flavien.dev@gmail.com]
LinkedIn : [linkedin.com/in/LeGrosBgDu69]

Contact : [flavie.dev@gmail.com]
LinkedIn : [linkedin.com/in/LaGrosseBlgDu69]

Contact : [Yrieix.dev@gmail.com]
LinkedIn : [linkedin.com/in/YrieixLeGrosBgDu69]

---


