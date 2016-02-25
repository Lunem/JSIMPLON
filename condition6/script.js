var bissextile = function(annee){
  if(annee % 4 === 0 && annee % 100 != 0 || annee % 400 === 0){
    return("l\'annee est bissextile");
  }
  else {
    return("l\'annee n\'est pas bissextile");
  }
}

console.log(bissextile(2008));
