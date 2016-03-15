// Etape 1 : Faire un menu déroulant avec trois éléments (Pierre, Feuille, Ciseaux).
//
// Etape 2 : Ajouter un bouton « Go ! ». Lorsque l'on clique sur « Go ! », choisir un élément au hasard (Pierre, Feuille ou Ciseaux).
//
// Etape 3 : Le comparer à l'élément choisi par le joueur pour voir qui a gagné entre l'humain et la machine.
//
// Étape pour les plus aguerris : ajouter un compteur de victoires et de défaites et afficher le pourcentage de victoire contre l'ordinateur.
//
// Vous aurez besoin de la fonction Math.random().

var button = document.getElementById("bouton-valider");
var formulaire = document.getElementById("entree-utilisateur");


var aleatoire = Math.floor(Math.random() * 4);
console.log(aleatoire);

function choisir(){

break;
case "feuille";
break;
case "ciseaux";
break;
default:document.choix.texter.value="Et sinon ?";break;
}
}


// var button = document.getElementById("bouton-valider");
// var formulaire = document.getElementById("entree-utilisateur");
// console.log(typeof button && button === null);
//
// var aleatoire = Math.floor(Math.random() * 101);
// console.log(aleatoire);
//
// var deviner = function(){
//   var userEnter = parseInt(formulaire.value);
//
// console.log(userEnter);
//   if(userEnter == aleatoire){
//     document.write("Vous avez gagné !");
//   }
//
//   else if(userEnter < aleatoire) {
//     alert("Le chiffre est plus grand");
//   }
//
//   else {
//     alert("Le chiffre est plus petit");
//   }
// }
//
// button.addEventListener("click", deviner);
