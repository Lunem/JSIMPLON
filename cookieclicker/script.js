var button = document.getElementById("clic");
var affichage = document.getElementById("affichage");
var multiplier = document.getElementById("multiplier");
var score = 0;
var multiplicateur = 1;
var cost = 50;
console.log(cost);

//on ajoute + 1 à chaque tour de la boucle
//on fait en sorte que le bouton soit rattaché à un capteur de clic :

function buttonClick() {
  affichage.innerHTML = score;
  if(multiplicateur >= 1){
    score = score + multiplicateur;
  }
  if (score >= 20){
    autoclick();
  }
}

function augmenterMultiplicateur() {

    if(score >= cost) { // coût de 50 clics en moins
      multiplicateur++;
      score = score - cost;
      cost= cost + cost;
      multiplier.innerHTML = "Multiplier x" + multiplicateur + " (next cost : " + cost + ")";
      console.log(multiplicateur);
    }
    // else if(multiplicateur > 1 && score >= cost) {
    //   multiplicateur++;
    //   score = score - cost;
    //   cost= cost + cost;
    //   console.log(multiplicateur);
    //
    // }
      console.log(cost);
//  affichage.innerHTML = score;
}

function autoclick(){
    setInterval(function(){
      score++;
    },1000);
}

button.addEventListener('click', buttonClick);
multiplier.addEventListener('click', augmenterMultiplicateur);


// if score >=200 >> autoclick chaque seconde
