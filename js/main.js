// console.log(this);
// let tableausimson = ["Marge", "Homer", ["Bart", "Lisa", "Maggie"]];
// console.log(tableausimson[2][0]); // Affiche "bart"
// console.log(tableausimson[2][2]); // Affiche "maggie"
// console.log(tableausimson[2][1]); // Affiche "lisa"
// console.log(tableausimson[2][3]); // Affiche "undefined"
// console.log(tableausimson[2][0][0]); // Affiche "b"
// console.log(tableausimson[2][0][1]); // Affiche "a"
// console.log(tableausimson[2][0][2]); // Affiche "r"
// console.log(tableausimson[2][0][3]); // Affiche "t"
// console.log(tableausimson[0])// Affiche "marge"
// console.log(tableausimson[1])// Affiche "homer"

// let [mere, pere, reste] = tableausimson;
// console.log(mere);
// console.log(pere);
// console.log(reste);


let utilisateurs = {
    nom: "Daboub",
    Prenom: "Mohamed",
    parler: ()=>{
        console.log("Je suis un humain");
    }
}
console.log(utilisateurs.nom);
console.log(utilisateurs["Prenom"]);
utilisateurs.parler();
console.log(this);

let Prenom = "Mohamed";
let Nom = "Daboub";
let age = 19;
console.log(`Je m'appelle ${Prenom} ${Nom} et j'ai ${age} ans`);

const Annee_de_naissance = 2003;

let age2 = 2023 - Annee_de_naissance;

console.log(age2);

let a = 0.2;
let b = 0.1;
let c = a*10 + b*10;
console.log(c/10);

// boolean
let d = true;
let varPourlefutur = null;
let varPourlefutur1 
console.log(varPourlefutur);

// function
function direBonjour(message1, message2){
    console.log(message1);
    console.log(message2);
}
direBonjour("Bonjour", "Au revoir");

function checklavieillesse(age){
    if(age >= 100){
        console.log("Vous êtes mort non ?");
    }
    else
    if(age >= 18){
        console.log("Vous êtes majeur");
    }else{
        console.log("Vous êtes mineur");
    }
}
checklavieillesse(5);

