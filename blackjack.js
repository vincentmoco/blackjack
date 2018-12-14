/*
script pour
le jeu blackjack
*/


//fonction
 var creer = function creerImg(chemin) {
    var img = document.createElement('img');
    img.src = chemin;
    return img;
}

 var ajout = function ajoutImgDansDiv() {
    var chemin = "img/1.BMP"
    var newImg = creerImg(chemin);
	var divJS = document.getElementById('maDiv');
    divJS.appendChild(newImg);
}


/*

 var ajout = function ajoutImgDansDiv( chemin) {
    var newImg = creerImg(chemin);
	var divJS = document.getElementById('maDiv');
    divJS.appendChild(newImg);
}

*/


//Boucle
var ext = '.BMP';
var racine = '/Users/mocovincent/Documents/2018-2019/blackjack/img/';

for (i = 1; i <= 50; i++) {	
	var chemin =( racine + i.toString() + ext);
		
}




var element = document.getElementById('carte');

element.addEventListener('click', function() {
	alert("Probleme");
});

	


        