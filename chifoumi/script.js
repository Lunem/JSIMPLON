// Etape 1 : Faire un menu déroulant avec trois éléments (Pierre, Feuille, Ciseaux).
//
// Etape 2 : Ajouter un bouton « Go ! ». Lorsque l'on clique sur « Go ! », choisir un élément au hasard (Pierre, Feuille ou Ciseaux).
//
// Etape 3 : Le comparer à l'élément choisi par le joueur pour voir qui a gagné entre l'humain et la machine.
//
// Étape pour les plus aguerris : ajouter un compteur de victoires et de défaites et afficher le pourcentage de victoire contre l'ordinateur.
//
// Vous aurez besoin de la fonction Math.random().
function game(){
var chifoumix = document.getElementById("chifoumi").selected.Index;
var choixJoueur = document.getElementById("chifoumi").options;
}
//L'ordinateur choisit un nombre random entre 1 et 3

var aleatoire = Math.floor(Math.random() * 2);
console.log(aleatoire);

//ce nombre est affecté à pierre, feuille, ciseaux.

if(aleatoire == 0){
  aleatoire = "pierre";
}

else if(aleatoire == 1){
  aleatoire = "feuille";
}

else {
  aleatoire = "ciseaux";
}

//l'utilisateur sélectionne pierre, feuille ou ciseaux.
//Le choix est comparéà celui de l'ordinateur.

//il faut traiter les cas suivants:
//ciseaux<pierre<feuille
//pierre<feuille<ciseaux
//feuille<ciseaux<pierre
//match nul


console.log(userEnter);
  if(userEnter == aleatoire){
    document.write("Vous avez gagnÃ© !");
  }

  else if(userEnter < aleatoire) {
    alert("Le chiffre est plus grand");
  }

  else {
    alert("Le chiffre est plus petit");
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
