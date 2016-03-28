//
// var tab;
//
//
// var search;
//
//
// tab = array(
//         array('1','lydia','detienne','20'),
//         array('A','B','C','D'),
//         array('X','Y','Z','W')
//       );
//
//       for (var i = 0; i < tab.length; i++)
//       {
//         if (search == tab[i][2])
//         {
//           console.log(tab[i][3]);
//         }
//       }
//
// //pour parcourir case par case un tab a deux dimensions
//       for (var i = 0; i < tab.length; i++)
//       {
//         for (var j = 0; j < tab[i].length; j++)
//         {
//           console.log(tab[i][j]);
//         }
//
//       }
// Exercice 1 - Somme
// Écrire un algorithme qui calcule et affiche la somme des entiers d'un tableau.

//var myArray = new Array(); <- ancienne syntaxe
var myArray = [3, 5, 5, 1];
var somme = 0;
for (var i = 0; i < myArray.length; i++) {
  somme+=myArray;
}

console.log(somme);
