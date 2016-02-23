var fourchette = function(nb1,nb2,nb3) {
  if(nb1 > nb2 && nb1 < nb3 && nb2 < nb3){
    return "Le chiffre " + nb1.toString() + " est compris entre " + nb2.toString() + " et " + nb3.toString();
  }
  else {
    return "Le chiffre " + nb1.toString() + " n'est pas inclus entre " + nb2.toString() + " et " + nb3.toString();
  }
}

console.log(fourchette(46,45,48));
