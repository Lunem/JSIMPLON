//Exercice 8 - Le stationnement alternatif
//Dans une rue où se pratique le stationnement alternatif, du 1 au 15 du mois,
//on se gare du côté des maisons ayant un numéro impair, et le reste du mois, on se gare de l’autre côté.
//Écrire un algorithme qui, sur base de la date du jour et du numéro de maison
//devant laquelle vous vous êtes arrêté, indique si vous êtes bien stationné ou non.


var stationnement = function(maison, jour){

  if(maison%2 === 0){

    if(jour > 1 && jour <= 15){
      return "Vous etes mal garé";
    }

    else {
      return "Vous etes bien garé.";
    }
  }

  else if(maison %2 !== 0){
    if(jour > 1 && jour <= 15){
      return "Vous etes bien garé.";
    }
    else {
      return "Vous etes mal garé.";
    }
  }

  else {
    "Vous etes dans un autre espace-temps"
  }

}

console.log(stationnement(15, 56));
