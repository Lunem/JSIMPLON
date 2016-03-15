var retirerBaton = function(){
  var block = document.querySelector(".block");
  // Ranger tous les éléments ayant la classe 'baton' dans un tableau
  // La méthode getElementsByClassName renvoie TOUJOURS un tableau
  var batonnets = document.getElementsByClassName("baton");
  for (var i = 0; i < batonnets.length; i++) {
    // Quand on parcourt notre tableau batonnets, on ajoute un écouteur d'événements à chaque élément parcouru.
    // Quand l'événement attendu se produit (mouseover), alors un objet Event est créee, et la fonction se déclenche
    batonnets[i].addEventListener("mouseover", function(e){
      e.target.classList.add('baton-hover');
    });

    batonnets[i].addEventListener("mouseout", function(e){
      e.target.classList.remove('baton-hover');
      e.target.parentNode.removeChild(e.target);
    });


  }
} //on cree la fonciton en dehors pour la rapeller en dessous

retirerBaton();
