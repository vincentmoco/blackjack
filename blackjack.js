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
    var chemin = '/Users/mocovincent/Documents/2018-2019/blackjack/img/50.BMP'
    var newImg = creerImg(chemin);
	var divJS = document.getElementById('carte_banque');
    divJS.appendChild(newImg);
}


 var change = function changeImg(){
	var ext = '.BMP';
	var racine = '/Users/mocovincent/Documents/2018-2019/blackjack/img/';
	var liste_chemin = [];
	for (i = 1; i <= 52; i++) {	
		var chemin = i;
		liste_chemin.push(chemin)	
	}
	var val_carte = liste_chemin[Math.floor(Math.random()*liste_chemin.length)];
	var carte_joueur =( racine + val_carte.toString() + ext);
	return carte_joueur;
}

//Boucle

var element = document.getElementById('vos_cartes');
var element_2 = 
	
element.addEventListener('click',function ajoutImgDansDiv() {
    var chemin = change();
    var chemin_2 = change();
    var newImg = creer(chemin);
    var newImg_2 = creer(chemin_2);
	var divJS = document.getElementById('carte_banque');
	var divJS_2 = document.getElementById('carte_joueur');
    divJS.appendChild(newImg);
    divJS_2.appendChild(newImg_2);
});

	

        