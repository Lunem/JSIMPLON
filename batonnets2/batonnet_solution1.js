//creer une variable qui correspond au bouton.
var button = document.getElementById("button-valider");
var formulaire = document.getElementById("entree-utilisateur");

//determiner le nombre d'entrées utilisateur

// quanbd ecrit dans un input stockée dans un value
var retirerBaton = function(){
  var userEnter = parseInt(formulaire.value); //value récupère uniquement le texte à l'interieur de la balise (ici l'input
  if(userEnter>=1 && userEnter<=3) {
    for (var i = 0; i < userEnter; i++) {
      var batonnet = document.querySelector('.baton');
      // batonnet.parentNode.removeChild(batonnet); //On remonte au parent de batonnet (block), pour redescendre/supprimer  batonnet avec remove.Child
      batonnet.remove();
    }
    var endTest = document.querySelector('.baton');
    if(!endTest) {
      alert('GAME OVER');
    }
  }

  else {
    alert("Entrez un nombre compris entre 1 et 3, cordialement maggle");
  }

} //on cree la fonciton en dehors pour la rapeller en dessous
button.addEventListener("click", retirerBaton);
