//Exercice 1 - Afficher le n premiers chiffres
//Écrire un algorithme qui lit un nombre entier n et affiche :


//- les n premiers entiers strictement positifs ;

// var nombre = (prompt("Entrez un nombre"));
//  premierpositif = function(nombre){
//    var compteur = 0;
//    if (nombre > 0 && !isNaN(nombre)){
//      while(compteur < nombre){
//        console.log(compteur);
//        compteur++;
//      }
//    }
// }
// premierpositif(nombre);

//- les n premiers entiers strictement positifs en ordre décroissant ;

// var nombre = (prompt("Entrez un nombre"));
//  premierpositifReverse = function(nombre){
//    var compteur = nombre;
//    if (nombre > 0 && !isNaN(nombre)){
//      while(compteur > 0){
//        console.log(compteur);
//        compteur--;
//      }
//    }
// }
// premierpositifReverse(nombre);

//- les n premiers carrés parfaits ;

// var nombre = (prompt("Entrez un nombre"));
// var premiercarresparfait = function(nombre){
//   var compteur = 1;
//   if(compteur < nombre && !isNaN(nombre)){
//   while(compteur <= nombre){
//     console.log(compteur*compteur);
//     compteur++;
//   }
// }
// }
// premiercarresparfait(nombre);

// - les n premiers entiers strictement positifs impairs

// var nombre = (prompt("Entrez un nombre"));
// var premiersentiersimpairs = function(nombre){
//   var resultat = 1;
//   var compteur = 0;
//   if(compteur < nombre && !isNaN(nombre)){
//   while(compteur < nombre){
//     console.log(resultat);
//     resultat+=2;
//     compteur++;
//   }
// }
// }
// premiersentiersimpairs(nombre);

//- les entiers strictement positifs impairs qui sont inférieurs ou égaux à n.

var nombre = (prompt("Entrez un nombre"));
var premiersentiersimpairsinf = function(nombre){
  var compteur = 0;
  if(compteur % 2 == 0){
    compteur++;
  }
  else {
    while(compteur<= nombre){
    console.log(compteur);
    compteur++;
  }
  }

}
premiersentiersimpairsinf(nombre);
