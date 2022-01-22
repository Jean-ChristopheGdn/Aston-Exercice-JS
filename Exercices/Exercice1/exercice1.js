//selectors 

const sectionFriendship = document.getElementById("friendship")

// list main characters

let mainCharacters = [
    {
        name: "Twilight Sparkle",
        description: "Twilight Sparkle est le personnage principal de la série, c’est une licorne violette avec une crinière rose, indigo et violette ; sa marque de beauté est une étoile à 6 branches rose avec cinq autres petites étoiles blanches.",
        image: "https://static.wikia.nocookie.net/mlp/images/b/bc/Princess_Twilight_Sparkle_ID_S4E26.png",
    },
    {
        name: "Rainbow Dash",
        description: "Rainbow Dash est une pégase bleue avec une crinière de couleur d’arc-en-ciel, sa marque de beauté est un éclair rouge jaune et bleu sortant d’un nuage blanc. Elle s’occupe du ciel de Poneyville et peut le nettoyer en dix secondes.",
        image: "https://static.wikia.nocookie.net/mlp/images/4/4b/Rainbow_Dash_Wonderbolt_fantasy_cropped_S1E3.png",
    },
    {
        name: "Spike",
        description: "c'est un bébé dragon violet et vert et l'un des personnages principaux de la série. Il est le meilleur ami et l'assistant numéro un de Twilight Sparkle. Il a la capacité de livrer des lettres à la Princesse Celestia par magie en soufflant dessus.",
        image: "https://i.pinimg.com/originals/19/b4/32/19b43295e7abee3f2bfa2dc981b2d6ad.png",
    },
    {
        name: "Applejack",
        description: "Applejack est un poney terrestre orange aux crins blonds avec une marque de beauté qui a la forme de trois pommes rouges, elle porte toujours un chapeau de cowgirl. Elle s’occupe des récoltes de pommes, du tri et de la cuisine à la ferme de la Douce Pomme avec son grand frère Big McIntosh, sa petite sœur Apple Bloom et sa grand-mère Granny Smith.",
        image: "https://img.pixers.pics/pho(s3:700/PI/12/30/700_PI1230_9139fa6fe30ff472c941429985d80ad5_5b7abe9dc56a5_.,700,654,jpg)/papiers-peints-applejack.jpg.jpg",
    },
    {
        name: "Fluttershy",
        description: "Fluttershy est une pégase jaune avec une crinière et une queue rose, et une marque de beauté qui représente trois papillons ; elle est timide et peureuse, mais se montre en colère lorsque les animaux ou ses amies sont en danger.",
        image: "https://static.wikia.nocookie.net/mlp/images/d/d6/Fluttershy_ID_S1E17.png",
    },
    {
        name: "Rarity",
        description: "Rarity est une licorne blanche avec une crinière violette et une marque de beauté en forme de trois diamants bleus, elle est la sœur aînée de Sweetie Belle. Rarity vit et travaille dans son propre magasin, la Boutique Carrousel où elle crée, fabrique et vend des habits.",
        image: "https://static.wikia.nocookie.net/mlp/images/d/d1/Rarity_standing_S1E19_CROPPED.png",
    }
];


/**
 * Display each objects from list of main characters of "FriendShip"
 * Create cards who contain title, image and some description
 */
function displayMainCharacters() {
    mainCharacters.forEach(element => {
        let container = document.createElement("ul");
        let name = document.createElement("h2");
        let image = document.createElement("img");
        let description = document.createElement("p");

        container.className = "container-card";

        name.innerHTML = element.name;
        image.src = element.image;
        description.innerHTML = element.description;

        container.appendChild(name);
        container.appendChild(image);
        container.appendChild(description);
        sectionFriendship.appendChild(container);
    })
}
displayMainCharacters();