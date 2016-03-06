// Exercice 4 - Génération de suites
// Écrire un algorithme qui affiche les n premiers termes des suites suivantes :
// a) Le pas croissant : 1, 2, 4, 7, 11, 16, . . .
// b) La boiteuse : 1, 2, 4, 5, 7, 8, 10, 11, . . .
// c) La suite de Fibonacci : 0, 1, 1, 2, 3, 5, 8, 13, 21, . . .


// var pascroissant = function(nombre){
// var resultat = 1;
// var n = 1;
// while(n <= nombre){
//   console.log(resultat);
//   resultat = resultat + n;
//   n++;
// }
// }
//
// pascroissant(16);

//
// var laboiteuse = function(nombre){
//   var resultat = 1;
//   var compteur = 1;
//   while(compteur <= nombre/2){
//     compteur++;
//     console.log(resultat);
//     resultat ++;
//     console.log(resultat);
//     resultat = resultat + 2;
//   }
// }
//
// laboiteuse(15);

var fibonacci = function(nombre){
  var nb1 = 1;
  var nb2 = 0;
  var resultat = nb2;
  var compteur = 0;
  while(compteur <= nombre){
    // if(nb2 == 1 || nb2 == 0){
    //   console.log(nb2);
    //   nb2++;
    //   compteur++;
    // }
    // else {
      console.log(resultat);
      resultat = nb1 + nb2;
      nb1 = nb2;
      nb2 = resultat;
      compteur++;

  }
}

fibonacci(13);
