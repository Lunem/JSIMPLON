// Exercice 2 - Maximum de nombres
// Écrire un algorithme qui lit une série de notes d’interrogation (entiers entre 0 et 20) et affiche ensuite la plus grande.
// Pour signaler la fin de l’encodage des notes, l’utilisateur introduit un nombre négatif (valeur sentinelle).

function sentinelle(notes){
while (notes > 0){
  console.log(notes);
}
}

sentinelle(12, 13, -2);
