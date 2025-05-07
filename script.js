// Une fois que le HTML ressemble à ce que vous voulez : 
// 1. Faire une variable count, qui stockera le nombre de clics
// 2. Faire un eventListener sur le bouton



// script.js

const bouton = document.querySelector('.bouton'); // Supprimez les // ici
const scoreElement = document.querySelector('#score');
let score = 0;
let canClick = false;
const gameDuration = 5000; // Durée du jeu en millisecondes (5 secondes)

// Fonction pour démarrer le chronomètre et activer les clics
function startGame() {
  canClick = true;
  score = 0;
  scoreElement.textContent = 'Score : 0';
  console.log('Le jeu a commencé !');

  // Désactiver les clics après la durée impartie
  setTimeout(() => {
    canClick = false;
    console.log('Le temps est écoulé ! Score final :', score);
    // Vous pouvez ajouter ici un message pour indiquer que le temps est fini
  }, gameDuration);
}

// Ajouter un écouteur d'événements sur le bouton pour démarrer le jeu au premier clic
bouton.addEventListener('click', function firstClickToStart() {
  startGame();
  // Retirer cet écouteur après le premier clic pour que startGame ne soit pas appelé à chaque fois
  bouton.removeEventListener('click', firstClickToStart);

  // Ajouter l'écouteur pour incrémenter le score pendant le jeu
  bouton.addEventListener('click', incrementScore);
});

// Fonction pour incrémenter le score si canClick est vrai
function incrementScore() {
  if (canClick) {
    score++;
    scoreElement.textContent = 'Score : ' + score;
    // console.log('Score actuel :', score);
  }
}