console.log('connecté');
document.getElementById('titre').style.color = "green"
let titre = document.getElementById('titre')
console.log(titre);

console.log(titre); // affiche 2

let score = 0 // Je stocke un combre
console.log(score, "initialisation") // Je vérifie

score = score + 1 //opétation
console.log(score, "après addition"); // Je vérifie

const cours = "Javascript" // Je stocke une chaine de caractères
console.log(cours, "cours"); // Je vérifie

const mot1 = "Hello"
const mot2 = "World !"

const phrase = mot1 + " " + mot2 //concaténation
console.log(phrase, "phrase"); // Je vérifie

let calcul = "0" // Je stocke
calcul = calcul + 1 // Addition
console.log(calcul, "calcul"); // Je vérifie




let compteur = 0

const btnRed = document.getElementById('btn-red')
btnRed.addEventListener('click', function(){
  console.log('cliqué'); // Ici l'action
  console.log(compteur, "compteur au démarage");
  
  add();
})

const btnBlue = document.getElementById('btn-blue')
btnBlue.addEventListener('click', function(){
  console.log('cliqué'); // Ici l'action
  console.log(compteur, "compteur au démarage");
  
  add();
})

function add(){
  compteur = compteur + 1
  console.log(compteur, "compteur après incrémentation");
  titre.innerText = compteur;
}

setTimeout(function(){
  // Je supprime les cercles
  console.log('fin du chrono !');
  btnRed.remove()
  btnBlue.remove()
}, 10000)