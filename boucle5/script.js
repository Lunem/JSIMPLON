                        //
// Exercice 5 - Factorielle
// Écrire un algorithme qui retourne la factorielle de n (entier positif ou nul).
// Rappel : la factorielle de n, notée n!, est le produit des n premiers entiers strictement positifs. Par convention, 0 ! = 1.
//- les n premiers entiers strictement positifs ;
//
// var nombre = (prompt("Entrez un nombre"));
//  factorielle = function(nombre){
//    var compteur = 1;
//    if (nombre >= 0 && !isNaN(nombre)){
//      while(compteur <= nombre){
//        fac = fac * compteurprec;
//        fac = fac + fac;
//        compteurprec--;
//        fac++;
//        compteur++;
//      }
//      resultat = compteur;
//      console.log(resultat);
//    }
// }
// factorielle(nombre);


var nombre = parseInt(prompt("Entrez un nombre"));
 premierpositif = function(nombre){
   var resultat = 1;
   if (nombre > 0 && !isNaN(nombre)){
     while (nombre > 0){
       resultat *= nombre;
       nombre--;
       console.log(resultat);
     }
     console.log(resultat);
   }
}
premierpositif(nombre);
