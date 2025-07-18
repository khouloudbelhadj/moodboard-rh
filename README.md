# MoodBoard RH – Module de mesure et visualisation du climat social

## Description du projet

MoodBoard RH est un outil destiné aux Ressources Humaines et managers pour mesurer en temps réel le climat social des équipes.  
Il permet aux collaborateurs de répondre anonymement à des sondages simples, tandis que les RH peuvent visualiser les résultats via des dashboards dynamiques et recevoir des alertes en cas de risques détectés.

---

## Parties principales du projet

- **Backend** (Node.js / Express)  
  API REST pour gérer les sondages, stocker les réponses dans PostgreSQL, analyser les textes libres avec NLP (OpenAI API ou équivalent).

- **Frontend** (React + Tailwind CSS)  
  Interfaces légères pour les collaborateurs (réponses aux questions) et pour les RH (dashboards, alertes, historiques).

- **Base de données** (PostgreSQL)  
  Stockage sécurisé des réponses et des données utilisateur.

- **Analyse NLP**  
  Traitement automatique des textes libres pour classification des sentiments et extraction de mots-clés.

---

## Acteurs du système
Le projet gère trois types d’utilisateurs :

**Admin** : Gère les comptes, les droits d’accès et la configuration générale.

**Manager** : Visualise les résultats de son équipe, accède aux statistiques et reçoit les alertes.

**Employé** : Répond aux sondages anonymement .

---

## Technologies utilisées

- Node.js, Express  
- React, Tailwind CSS  
- PostgreSQL  
- OpenAI API (ou modèle NLP local)  
- Docker (pour containerisation)

---

## Installation et lancement
**1. Cloner le projet :**

     - git clone https://github.com/khouloudbelhadj/moodboard-rh.git

     -  cd moodboard-rh

**2. Lancer chaque projet séparément:**

**- Backend :**

    cd backend

    npm install

    npm run dev

**- Frontoffice :**

    cd frontoffice

    npm install

    npm run dev

**- Backoffice :**

    cd backoffice 

    npm install

    npm run dev
