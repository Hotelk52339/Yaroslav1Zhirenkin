# Portfolio Brutaliste – Yaroslav Zhirenkin

## Présentation

Ce projet est un site web personnel réalisé dans le cadre du devoir EPITA.  
Il propose un design brutaliste, un quiz sécurisé, une calculatrice, un formulaire de contact et toutes les fonctionnalités demandées dans le sujet.

## Structure du projet

- `index.html` - Page d’accueil, présentation et navigation.
- `questionnaire.html` - Quiz sécurisé, accès à la page contact uniquement si toutes les réponses sont correctes ou via BruteForce.
- `A1_3_A2_4_A3_4.html` - Page de contact secrète, accessible uniquement après le quiz réussi.
- `erreur.html` - Page d’erreur (“Accès refusé”).
- `success.html` - Page de confirmation d’envoi du message.
- `calculatrice.html` - Calculatrice stylisée en brutaliste.
- `js/main.js` - Toute la logique JavaScript (quiz, terminal).
- `css/styles.css` - Styles custom pour le thème brutaliste.

## Fonctionnalités

- **Quiz dynamique** (questions/réponses générées depuis un tableau JS, pas en dur dans le HTML)
- **Redirection automatique** vers la page contact si bonnes réponses, sinon vers erreur.html
- **Terminal BruteForce** pour accéder à la page contact sans quiz
- **Calculatrice** sur une page dédiée
- **Formulaire de contact** (redirection vers success.html)
- **Design brutaliste** (fond noir, texte vert, police monospace, grosses bordures)

## Remarques techniques

- **Tous les fichiers sont statiques** (HTML/CSS/JS), aucune dépendance serveur.
- **Si on tente d’accéder à une page qui n’existe pas**, le navigateur affiche la 404 standard (c’est normal pour un projet statique).
- **Pour voir le site** : ouvrir `index.html` dans un navigateur ou utiliser un serveur local (Live Server, Python http.server, etc).

## Auteur

Yaroslav Zhirenkin - EPITA 2025
