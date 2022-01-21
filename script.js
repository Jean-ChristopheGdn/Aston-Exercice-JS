// Selectors
const sectionDisplayCards = document.getElementById("displayCards");


// Exercices text
let exercices = [{
    title:"Friendship is Magic", 
    description: "Vous intégrerez une page qui listera les noms des principaux personnages de la série 'Friendship is magic', sous forme de liste non ordonnée.<br>Le texte sera écrit en blanc sous un fond 'arc-en-ciel'(gradient) du rose vers le violet.<br>       L'\affichage sera ENTIEREMENT géré par le script JS de la page : votre page HTML ne doit contenir aucune information si ce n'est un 'H1'<br>Vous insérerez un minimum de style afin que ce soit au moins agréable à regarder.Point de compensation : une image!",
    buttonEx: "Exercice 1",
    link: "./Exercices/Exercice1/Exercice1.html"
},
{
    title: "L'Horloge",
    description: "Vous créerez une page qui affichera l'heure actuelle sous forme : 'hh:mm:s' au centre de la page.<br>Vous insérerez un minimum de style afin que ce soit au moins agréable à regarder.",
    buttonEx: "Exercice 2",
    link: "./Exercices/Exercice2/Exercice2.html"
},
{
    title: "FizzBuzz",
    description: "Vous créerez une page qui affichera un champs de texte un compteur allant de 0 à 100. Il affichera : <br>Le nombre en question, <li>Fizz si c'est un multiple de 3</li>,<li>Buzz si c'est un multiple de 5</li><li>FizzBuzz si c'est un multiple de 3 et de 5.</li><br>Tout votre code sera géré exclusivement par des fonctions.",
    buttonEx: "Exercice 3",
    link: "./Exercices/Exercice3/Exercice3.html"
},
{
    title: "FizzBuzz ++",
    description: "Vous créerez un nouveau FizzBuzz, sauf que : <li>Une case affichera le chiffre,</li><li>Fizz, Buzz ou FizzBuzz s'afficheront au dessus du chiffre, en grand</li><li>Les valeurs s'afficheront une à une,</li><li>Un boutton next permettra de passer à la valeur suivante</li><li>Un bouton 'prev' permettra d'afficher la valeur précédente.</li><br>Recyclage de script : 1 point de récup <3",
    buttonEx: "Exercice 3",
    link: "./Exercices/Exercice4/Exercice4.html"
}
];


function displayExercicesCards() {
    exercices.forEach(element => {

            let container = document.createElement("div");
            let title = document.createElement("h2");
            let description = document.createElement("p");
            let buttonExercices = document.createElement("button");

            container.className = "container-card";

            title.innerHTML = element.title;
            description.innerHTML = element.description;
            buttonExercices.innerHTML = "<a href="+element.link+">"+element.buttonEx+"</a>";

            container.appendChild(title);
            container.appendChild(description);
            container.appendChild(buttonExercices);
            sectionDisplayCards.appendChild(container);
        });
    }

displayExercicesCards();