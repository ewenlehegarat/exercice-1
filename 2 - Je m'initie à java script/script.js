console.log('connecté'); // pour etre sur que le js est connecté à la page html
let titre = document.getElementById('titre') // sélection de l'id titre
titre.style.color = "green" // coloration de titre en vert
console.log(titre); // affiché le titre dans la console
console.log(titre); // renvoie 2

let score = 0 // Je stocke un nombre
console.log(score, "initialisation"); // et je verifie

score = score + 1; // opération
console.log(score, "après addition"); // et je verifie




const btnRed = document.getElementById('btn_red') // sélection de la div du bouton rouge
let compteur = 0;
console.log(compteur, "compteur au démarrage");

btnRed.addEventListener('click', function(){
    add()
})

const btnBlue = document.getElementById('btn_blue') // sélection de la div du bouton rouge
console.log(compteur, "compteur au démarrage");

btnBlue.addEventListener('click', function(){
    add()
})  

function add(){
    compteur = compteur + 1;
    console.log(compteur, "compteur près incrémentation");
    titre.innerText = compteur;
}