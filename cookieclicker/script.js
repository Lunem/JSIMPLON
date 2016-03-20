// Étape 1 : structure de base
// Faire une structure de base HTML / CSS / JS. Dans le HTML, mettre un bouton avec un identifiant « clic » et une div avec un identifiant « affichage », dont la valeur initiale sera 0.
//
// Étape 2 : préparer le JS
// Préparez les variables en tête du JS qui nous permettront de manipuler notre bouton et notre div. Nous aurons également besoin d'une variable score que nous initialiserons à 0.



var button = document.getElementById("clic");
var affichage = document.getElementById("affichage");
var multiplier = document.getElementById("multiplier");
var autoclicker = document.getElementById("autoclick");
var bonus = document.getElementById("bonus");
var score = 4999;
var multiplicateur = 1;
var cost = 50;


// Étape 3 : augmenter le score
// Quand on clique sur le bouton, faire augmenter la variable score de 1, puis afficher ce score dans la div affichage.

function buttonClick() {
  affichage.innerHTML = score;
  if(multiplicateur > 1){
    score = score + multiplicateur;
  }

  else{
    score++;
  }
}

// Étape 4 : préparation du multiplicateur
// Ajouter un bouton dont l'identifiant est multiplier. Préparer sa variable à coté de l'affichage et du bouton dans le JS. Entretenir un compteur de clics (dont la variable s'appellera multiplicateur et sera initialisée à 1) sur ce bouton. La fonction associée au clic du multiplicateur s'appellera augmenterMultiplicateur.
//
// Étape 5 : utilisation du multiplicateur
// Faire en sorte que l'augmentation du score via le clic du premier bouton ne soit plus de 1 mais de la valeur du multiplicateur. Par exemple, si j'ai cliqué une fois sur le bouton multiplicateur, chaque clic sur le premier bouton ajoutera désormais 2 au lieu de 1.
//
// Étape 6 : prix du multiplicateur
// Le multiplicateur vous permet de gagner du score plus rapidement. Ça ne devrait pas être gratuit ! Faites en sorte que cliquer sur le bouton multiplicateur diminue de 50 votre score.
//
// Étape 7 : on ne fait pas crédit
// On ne peut pas faire crédit et on ne veut pas de score négatif. Pensez à mettre à jour l'affichage du score après l'achat !
//
// Étape 8 : affichage du compteur
// Affichez le compteur de multiplicateur à l'intérieur du bouton. Par exemple, si compteur vaut 5, il faut que le texte du bouton soit « Multiplicateur x5 ».
//
// Étape 9 : augmentation du prix
// Acheter plein de multiplicateurs est trop facile. Essayez à partir de l'étape 6, vous comprendrez pourquoi :wink: Il faudrait que plus on achète de multiplicateurs, plus ceux-ci soit chers.
//
// Par exemple, le premier vaudrait 50, le suivant 100, le suivant 200, etc. Pas la peine de vous compliquer la vie, ne faites pas pleins de conditions :simple_smile: Trouvez une autre façon de faire évoluer le prix !
//
// Étape 10 : affichage du prix
// Dans le texte du bouton, en plus du « x5 », ajouter le coût du prochain achat.


function augmenterMultiplicateur() {
  if(score >= cost) { // coût de 50 clics en moins
      multiplicateur++;
      score = score - cost;
      cost= cost + cost;
      multiplier.innerHTML = "Multiplier x" + multiplicateur + " (next cost : " + cost + ")";
      console.log(multiplicateur);
      affichage.innerHTML = score; //Pourquoi 51????
    }
    console.log(cost);
}

// Étape 11 : autoclicker
// Nouvelle amélioration à acheter : Autoclick. Dès que vous avez un score de 200, un clic est fait automatiquement chaque seconde. (setInterval est ton ami)

// Etape 12: achat d'autoclicker
// L'autoclicker ne sera plus automatique. Il faut dorénavant acheter l'autoclicker. Vous ajouterez un bouton avec l'id autoclic. Il coutera 500. Une fois que l'autoclicker a été acheté, il faudra désactiver le bouton d'achat de l'autoclic. (edited)

function autoclick(){
  if(score >= 500){
  score = score - 500; //encore une fois, il reste 1...
  affichage.innerHTML = score;
  document.getElementById("autoclick").disabled = true;
  setInterval(function(){score++; affichage.innerHTML = score;},1000);
  console.log(score);
  }
}

// Etape 13: achat d'un bonus
// Désormais, on doit pouvoir acheter un bonus qui augmente le score de 200% à chaque clic pendant 30 secondes. C'est à dire que si à chaque clic, le score augmente de 3, pendant les 30 secondes de bonus le score augmentera de 6 a chaque clic, au bout des 30 secondes le score augmentera à nouveau de 3 par clic.
// Vous créerez le bouton "BONUS" avec l'id bonus, et le bonus coutera 5000. Lorsque le bonus est acheté, le nombre de seconde s'affichera dans le bouton avec le décompte et le bouton devra etre désactivé pendant le temps du bonus. Quand le bonus est fini, le bouton est réactivé et retrouve son texte d'origine.

function groBonus(){
  var decompte = 30;
  var i;
  if(score >= 5000){
      if(decompte > 0) {
        document.getElementById("bonus").innerHTML = "Le bonus se termine dans " + decompte + " secondes";
        decompte--;
        document.getElementById("autoclick").disabled = true;
        i = setTimeout("groBonus()"),1000;
        }
      else {
        clearTimeout(i);
      }
    }


  }


// Etape 14: désactiver les boutons si j'ai pas le score pour acheter les améliorations
// Faire en sorte que les boutons multiplicateur, autoclic et bonus ne soient clicables QUE si j'ai le score nécessaire pour les acheter.
//
// Etape 15: du CSS
// Que ce soit jouli! Pas d'images!

button.addEventListener('click', buttonClick);
multiplier.addEventListener('click', augmenterMultiplicateur);
autoclicker.addEventListener('click', autoclick);
bonus.addEventListener('click', groBonus);
