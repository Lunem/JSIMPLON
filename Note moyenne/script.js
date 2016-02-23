var moyenne = function(exam1, exam2, exam3, coeff1, coeff2, coeff3){
moyenne = ((exam1 * coeff1) + (exam2 * coeff2) + (exam3 * coeff3)) / (coeff1 + coeff2 + coeff3);
var pourcentage = moyenne / 20 * 100;
return pourcentage;
}
alert(moyenne(5, 16, 11, 2, 6, 2));
