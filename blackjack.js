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
    var chemin ='/Users/mocovincent/Documents/2018-2019/blackjack/img/30.BMP' ; 
    var newImg = creerImg(chemin);
	var divJS = document.getElementById('carte_banque');
    divJS.appendChild(newImg);
}

var generer = function generer_liste(){
	for (i = 1; i <= 52; i++) {	
		var chemin = i;
		liste_chemin.push(chemin)	
	}
	return liste_chemin
}
 var change = function changeImg(liste_chemin){
	var ext = '.BMP';
	var racine = '/Users/mocovincent/Documents/2018-2019/blackjack/img/';
	var val_carte = liste_chemin[Math.floor(Math.random()*liste_chemin.length)];
	var carte_joueur =( racine + val_carte.toString() + ext);
	liste_chemin.splice(val_carte-1,1);
	return carte_joueur;
}

/*
liste_chemin.splice(val_carte-1) pour eviter les doublons mais il y a un bug quand meme
*/

//PROGRAMME PRINCIPALE
var element = document.getElementById('ajout_joueur');	
var element2 = document.getElementById('ajout_banque');	
var carte_depart_banque = document.getElementById('carte_1');
var carte_depart_joueur = document.getElementById('carte_2');

var liste_chemin = [];
liste_chemin = generer();

//choix aleatoire des cartes au début
carte_depart_banque.src=change(liste_chemin);
carte_depart_joueur.src=change(liste_chemin); 

// bouton carte joueur
element.addEventListener('click',function ajoutImgDansDiv() {
    var chemin = change(liste_chemin);
    var newImg = creer(chemin);
	var divJS = document.getElementById('carte_joueur');
    divJS.appendChild(newImg);
});

// bouton carte banque	
element2.addEventListener('click',function ajoutImgDansDiv() {
    var chemin = change(liste_chemin);
    var newImg = creer(chemin);
	var divJS = document.getElementById('carte_banque');
    divJS.appendChild(newImg);
});

        