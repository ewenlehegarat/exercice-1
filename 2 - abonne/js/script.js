const icon = document.querySelector('i')
const btnButton = document.querySelector('.btn')
console.log(icon);

icon.addEventListener('click', function(){
    console.log('icône cliquée !');
    icon.classList.toggle('fa-smile-wink')
    icon.classList.toggle('happy')
})

// Je soumets le bouton à une action au clic
btnButton.addEventListener('click', function(){
    console.log('bouton cliqué');

    btnButton.classList.toggle('abonne')
    //on vérifie le texte du bouton
    if(btnButton.innerText === "Abonné"){
        // Action à réaliser si condition est vraie
        btnButton.innerText = "Abonnez-vous";
    }else{
    console.log('else');
        // Action si la condition est fausse
        btnButton.innerText = "Abonné"
    }
})