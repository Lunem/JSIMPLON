//Exercice 7 - Valider une date
//Écrire un algorithme qui valide une date donnée par trois entiers : l’année, le mois et le jour.

var date = function(jour,mois,annee){
  if((jour >= 1 && jour < 31) && (mois >=1 && mois <= 12)) {
    return "Nous sommes le  " + jour.toString() + "/" + mois.toString() + "/" + annee.toString();
  }
  else {
    return "Cette date n\'est pas valide";
  }
}

console.log(date(03,03,2003));
