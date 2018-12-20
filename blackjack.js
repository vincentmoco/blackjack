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


 var change = function changeImg(liste_chemin){
	var ext = '.BMP';
	var racine = '/Users/mocovincent/Documents/2018-2019/blackjack/img/';
	for (i = 1; i <= 52; i++) {	
		var chemin = i;
		liste_chemin.push(chemin)	
	}
	var val_carte = liste_chemin[Math.floor(Math.random()*liste_chemin.length)];
	var carte_joueur =( racine + val_carte.toString() + ext);
	liste_chemin.splice(val_carte-1,1);
	return carte_joueur;
}

/*
liste_chemin.splice(val_carte-1) pour eviter les doublons mais il y a un bug quand meme
*/

//PROGRAMME PRINCIPALE
var liste_chemin = [];
var element = document.getElementById('ajout_joueur');	
var element2 = document.getElementById('ajout_banque');	


element.addEventListener('click',function ajoutImgDansDiv() {
    var chemin = change(liste_chemin);
    var newImg = creer(chemin);
	var divJS = document.getElementById('carte_joueur');
    divJS.appendChild(newImg);
});

	
element2.addEventListener('click',function ajoutImgDansDiv() {
    var chemin = change(liste_chemin);
    var newImg = creer(chemin);
	var divJS = document.getElementById('carte_banque');
    divJS.appendChild(newImg);
});

        