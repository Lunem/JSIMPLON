// Exercice 2 - Maximum de nombres
// Écrire un algorithme qui lit une série de notes d’interrogation (entiers entre 0 et 20) et affiche ensuite la plus grande.
// Pour signaler la fin de l’encodage des notes, l’utilisateur introduit un nombre négatif (valeur sentinelle).

// function sentinelle(){
//   var resultat = 0;
//   var note = 0;
// while ((note = parseInt(prompt("Entrez une note"))) > 0){
//   if (note < 21)
//     resultat = Math.max(note, resultat);
// }
// console.log(resultat);
// }
//
// sentinelle();


// Exercice 3 - Afficher les multiples de 3
// Écrire un algorithme qui lit une série de nombres entiers positifs, jusqu’à ce que l’utilisateur encode la valeur 0.
// Les nombres multiples de 3 seront affichés au fur et à mesure et
// le nombre de ces multiples sera affiché en fin de traitement.

function multiplestrois(){

  var nombre = 0;
  var compteur = 0;
while ((nombre = parseInt(prompt("Entrez un nombre"))) !== 0){
  if (nombre % 3 == 0){
    console.log(nombre);
    compteur++;
  }

}
console.log(compteur);
}

multiplestrois();
