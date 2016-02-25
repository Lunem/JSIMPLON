
//Exercice 5 - Nombre de jours dans un mois
//Écrire un algorithme qui donne le nombre de jours dans un mois.
//Le mois est lu sous forme d’un entier (1 pour janvier...).
//On considère dans cet exercice que le mois de février comprend toujours 28 jours

var quelMois = function(mois){

  if(mois === 1 ||mois === 3 || mois === 5 || mois === 7 || mois === 9 || mois === 11){
    return "Ce mois est impair";
  }

  else if(mois === 4 || mois === 6 || mois === 8 || mois === 10 || mois === 12){
    return "ce mois est pair";
  }

  else if(mois === 2){
    return "c\'est le mois de fevrier, il dure 28 jours de trop";
  }

  else {
    return "Euh, vous êtes sûr d\'avoir rentré le nombre d'un mois ?";
  }
}

console.log(quelMois(2));
