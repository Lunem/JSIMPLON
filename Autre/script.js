//maxmin tableau - Harysson

function max_min(tab) {
	// body...
	var max;
	var min;

	max = min = tab[0];
	for (var i = 0; i < tab.length; i++) {
		if (tab[i]<min) {
			min = tab[i];
		}
		else if (tab[i]>max) {
			max = tab[i];
		}
	}
	var res = [max, min];
	return res;
}

var tab = [1, 1585, 15, 649, 547, 364, 48];
console.log(max_min(tab));

// Code pour les occurences de chiffres dans un nombre - Harysson

function occurence(num) {
	// body...
	var n = num.toString();
	var tab = n.split("");
	var res = [];
	for (var i = 0; i < 10; i++) {
		res[i] = 0;
	}

	for (var i = 0; i < tab.length; i++) {
		let a = parseInt(tab[i]);
		res[a] += 1;
		console.log(res);
	}
	console.log(res);
	return res;
}

var n = 15549;
var tab = occurence(n);
for (var i = 0; i < tab.length; i++) {
	if(tab[i]>0) {
		console.log("Le nombre "+ i +" apparaît "+ tab[i]+ " fois.");
	}
}

// Validité d’une date en appelant plusieurs fonctions - Nicholas

function biss(input) {
	if (((input % 4 == 0) && (input % 100 != 0)) || ((input % 4 == 0) && (input % 100 == 0) && (input % 400 == 0))) {
		return true;
	} else {
		return false;
	}
}

function mois2(input,annee) {
	if (input == 1 || input == 3 || input == 5 || input == 7 || input == 8 || input == 10 ||input == 12) {
		return 31;
	} else if (input == 2 && biss(annee)) {
		return 29;
	} else if (input == 2 && !biss(annee)) {
		return 28;
	} else {
		return 30;
	}
}




function date() {
	var jour = parseInt(prompt("Jour ?"));
	var mois = parseInt(prompt("Mois ?"));
	var annee = parseInt(prompt("Année"));
	if (jour <= mois2(mois,annee) && mois <= 12 && mois >= 0 && annee >=0) {
		alert("Valide!");
	} else {
		alert("Pas valide");
	}
}

//La boiteuse - Imanou

function boiteuse(value) {
  return Array
    .apply(0, Array(value))
    .map(function(item, index) {
      return ++index;
    })
    .filter(function(value) {
      return value % 3 !== 0;
    });
}

console.log(boiteuse(20)); // returns [1, 2, 4, 7, 11, 16, 22, 29, 37, 46]

//La fourchette en conditions - Jeremie
var a = 0;
var b = 0;
var c = 0;

var a = Number(prompt("Entre un chiffre stp : "));
var b = Number(prompt("Entre un autre chiffre stp : "));
var c = Number(prompt("Entre encore un chiffre stp : "));

function fourchette(a,b,c) {
	if ((a > b) && (a < c)) {
		alert("Ton premier chiffre est compris entre " + b + " et " + c);
	}
	else if((a < b) && (a > c)) {
		alert("Ton premier chiffre est compris entre " + c + " et " + b);
	}
	else
		alert("Ton chiffre n'est pas compris entre " + b + " et " + c);
}

fourchette(a,b,c);
