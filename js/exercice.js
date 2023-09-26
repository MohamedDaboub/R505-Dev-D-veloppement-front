let chaussures = [
    {
    marque: 'Nike',
    titre: 'Jordan Air',
    collector: true,
    taillesDispo: [28, 29, 30],
    prix: 300,
    elements: {
      lacets: 'rouge',
      corps: 'blanc',
      semelle: 'bleu',
    },
  },
  {
    marque: 'Vans',
    titre: 'Old Skool',
    collector: false,
    taillesDispo: [34, 36, 38],
    prix: 70,
    elements: {
      lacets: 'noir',
      corps: 'marron',
    },
  },
  {
    marque: 'Adidas',
    titre: 'Stan Smith',
    collector: false,
    taillesDispo: [40, 42, 44],
    prix: 100,
    elements: {
      lacets: 'vert',
      corps: 'blanc',
    },
  },
  {
    marque: 'Nike',
    titre: 'Air Force',
    collector: true,
    taillesDispo: [36, 37, 38],
    prix: 200,
    elements: {
      lacets: 'bleu',
      corps: 'marron',
    },
  },
  {
    marque: 'Nike',
    titre: 'Air Max',
    collector: true,
    taillesDispo: [36, 38, 40],
    prix: 900,
    elements: {
      lacets: 'jaune',
      corps: 'vert',
    },
  },
  {
    marque: 'Vans',
    titre: 'Era',
    collector: false,
    taillesDispo: [30, 32, 40],
    prix: 40,
    elements: {
      lacets: 'bleu',
      corps: 'noir',
    },
  },
  {
    marque: 'Vans',
    titre: 'Sk8',
    collector: false,
    taillesDispo: [28, 30, 26],
    prix: 40,
    elements: {
      lacets: 'bleu',
      corps: 'noir',
      languette: 'rouge',
    },
  },
  {
    marque: 'Vans',
    titre: 'Old Skool',
    collector: false,
    taillesDispo: [36, 28, 60],
    prix: 60,
    elements: {
      lacets: 'blanc',
      corps: 'noir',
      languette: 'noir',
    },
  },
  {
    marque: 'Nike',
    titre: 'Nike SB',
    collector: false,
    taillesDispo: [30, 31, 32],
    prix: 50,
    elements: {
      lacets: 'blanc',
      corps: 'noir',
    },
  },
  {
    marque: 'Adidas',
    titre: 'Old Skool',
    collector: false,
    taillesDispo: [29, 30, 32],
    prix: 70,
    elements: {
      lacets: 'rouge',
      corps: 'bleu',
    },
  },
];
  
// 1. Faire une boucle sur tout le tableau et de log les chaussures une par une
console.log("Toutes les chaussures");
// for (let i = 0; i < chaussures.length; i++) {
//     console.log(chaussures[i]);
// } 
chaussures.forEach(chaussures => {
    console.log(chaussures);
});
// 2. Log un tableau de toutes les Nikes
console.log("Nike");
// for (let i = 0; i < chaussures.length; i++) {
//     if (chaussures[i].marque == "Nike") {
//         console.log(chaussures[i]);
//     }
// }
chaussures.find(chaussures => {
    if (chaussures.marque == "Nike") {
        console.log(chaussures);
    }
});
// 3. Log du prix des Vans "Old Skool"
console.log("Prix de la Vans Old Skool");
// for (let i = 0; i < chaussures.length; i++) {
//     if (chaussures[i].titre == "Old Skool") {
//         console.log(chaussures[i].prix);
//     }
// }
chaussures.find(chaussures => {
    if (chaussures.titre == "Old Skool") {
        console.log(chaussures.prix);
    }
});
// 4. Log un tableau de toutes les chaussures collector
console.log("Toutes les chaussures collector");
// for (let i = 0; i< chaussures.length; i++){
//     if (chaussures[i].collector == true){
//         console.log(chaussures[i]);
//     }
// }
let tableau = [];
chaussures.find(chaussures => {
    if (chaussures.collector == true) {
        tableau.push(chaussures);
    }
});
console.log(tableau);
// 5. Log couleur lacets de la vans Sk8
console.log("Couleur lacets de la vans Sk8");
// for (let i=0; i< chaussures.length; i++){
//     if (chaussures[i].titre == "Sk8"){
//         console.log(chaussures[i].elements.lacets);
//     }
// }  
chaussures.find(chaussures => {
    if (chaussures.titre == "Sk8") {
        console.log(chaussures.elements.lacets);
    }
});
// 6. Changer la couleur de la vans Sk8 en violet et log la chaussure
console.log("Changement de couleur de la vans Sk8");
// for (let i=0; i< chaussures.length; i++){
//     if (chaussures[i].titre == "Sk8"){
//         chaussures[i].elements.lacets = "violet";
//         console.log(chaussures[i]);
//     }
// } 
chaussures.forEach(chaussures => {
    if (chaussures.titre == "Sk8") {
        chaussures.elements.lacets = "violet";
        console.log(chaussures);
    }
});
// 7. Plus compliqué : Log le montant total de Toutes les Nike
console.log("Montant total de toutes les Nike");

// for (let i=0; i< chaussures.length; i++){
//     if (chaussures[i].marque == "Nike"){
//         montant_Total += chaussures[i].prix;
//     }
// }
// chaussures.forEach(chaussures => {
//     if (chaussures.marque == "Nike") {
//         montant_Total += chaussures.prix;
//     }
// });

const montant_Total = chaussures.reduce((acc, chaussure) => {
    if (chaussure.marque == "Nike") {
        return acc + chaussure.prix;
    }
    return acc;
}, 0);

console.log(`Le montant Total de Tous les chaussers Nike est`,montant_Total);
