//selectors 

let sectionFriendship = document.getElementById("friendship")

// list infos

let mainCharacters = [
    {
        name: "Twilight Sparkle",
        description: "Twilight Sparkle est le personnage principal de la série, c’est une licorne violette avec une crinière rose, indigo et violette ; sa marque de beauté est une étoile à 6 branches rose avec cinq autres petites étoiles blanches."
    },
    {
        name: "Rainbow Dash",
        description: "Rainbow Dash est une pégase bleue avec une crinière de couleur d’arc-en-ciel, sa marque de beauté est un éclair rouge jaune et bleu sortant d’un nuage blanc. Elle s’occupe du ciel de Poneyville et peut le nettoyer en dix secondes.",
    },
    {
        name: "Spike",
        description: "c'est un bébé dragon violet et vert et l'un des personnages principaux de la série. Il est le meilleur ami et l'assistant numéro un de Twilight Sparkle. Il a la capacité de livrer des lettres à la Princesse Celestia par magie en soufflant dessus.",
    },
    {
        name: "Applejack",
        description: "Applejack est un poney terrestre orange aux crins blonds avec une marque de beauté qui a la forme de trois pommes rouges, elle porte toujours un chapeau de cowgirl. Elle s’occupe des récoltes de pommes, du tri et de la cuisine à la ferme de la Douce Pomme avec son grand frère Big McIntosh, sa petite sœur Apple Bloom et sa grand-mère Granny Smith.",
    },
    {
        name: "Fluttershy",
        description: "Fluttershy est une pégase jaune avec une crinière et une queue rose, et une marque de beauté qui représente trois papillons ; elle est timide et peureuse, mais se montre en colère lorsque les animaux ou ses amies sont en danger.",
    },
    {
        name: "Rarity",
        description: "Rarity est une licorne blanche avec une crinière violette et une marque de beauté en forme de trois diamants bleus, elle est la sœur aînée de Sweetie Belle. Rarity vit et travaille dans son propre magasin, la Boutique Carrousel où elle crée, fabrique et vend des habits.",
    }
];

function displayMainCharacters(){
    mainCharacters.forEach(element =>{
        let container = document.createElement("ul");
        let name = document.createElement("h2");
        let description = document.createElement("p");

        container.className = "container-card";

        name.innerHTML = element.name;
        description.innerHTML = element.description;

        container.appendChild(name);
        container.appendChild(description);
        sectionFriendship.appendChild(container);
    })
}
displayMainCharacters();