var button = document.getElementById("bouton-valider");
var formulaire = document.getElementById("entree-utilisateur");
console.log(typeof button && button === null);

var aleatoire = Math.floor(Math.random() * 101);
console.log(aleatoire);

var deviner = function(){
  var userEnter = parseInt(formulaire.value);

console.log(userEnter);
  if(userEnter == aleatoire){
    document.write("Vous avez gagné !");
  }

  else if(userEnter < aleatoire) {
    alert("Le chiffre est plus grand");
  }

  else {
    alert("Le chiffre est plus petit");
  }
}

button.addEventListener("click", deviner);
