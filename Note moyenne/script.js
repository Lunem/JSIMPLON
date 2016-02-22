var moyenne = function(exam1,exam2,exam3){

  var ponderation = exam1 + exam2 + exam3 / 3;
  moyenne = (exam1+exam2+exam3 + ponderation) / 5;
  moyenne = moyenne * 100
}

moyenne(12,14,11);
alert(Math.floor(moyenne));
