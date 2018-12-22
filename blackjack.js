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

var generer = function generer_liste(){
	for (i = 1; i <= 52; i++) {	
		var chemin = i;
		liste_chemin.push(chemin)	
	}
	return liste_chemin;
}

var change = function changeImg(adresse_liste2) {
	var ext = '.BMP';
	var racine = '/Users/mocovincent/Documents/2018-2019/blackjack/img/';
	var val_carte = adresse_liste2[Math.floor(Math.random()*liste_chemin.length)];
	points.valeur = val_carte;
	var carte_joueur =(racine + val_carte.toString() + ext);
	return carte_joueur;
}

//PROGRAMME PRINCIPALE
var element1 = document.getElementById('ajout_joueur');	
var element2 = document.getElementById('ajout_banque');	
var carte_depart_banque = document.getElementById('carte_1');

var carte_depart_joueur = document.getElementById('carte_2');
var points_joueur = document.getElementById('points_joueur');
var points =  {valeur : 1};

var liste_chemin = [];
liste_chemin = generer();
var liste2 = {liste : liste_chemin};  // une alternative pour les doublons
var adresse_liste2 = liste2.liste;

//choix aleatoire des cartes au début
carte_depart_banque.src=change(adresse_liste2);
carte_depart_joueur.src=change(adresse_liste2); 


// bouton carte joueur
element1.addEventListener('click',function ajoutImgDansDiv_2() {
    var chemin = change(adresse_liste2);
    var newImg = creer(chemin);
	var divJS = document.getElementById('carte_joueur');
    divJS.appendChild(newImg);
});


// bouton carte banque	
element2.addEventListener('click',function ajoutImgDansDiv_2() {
    var chemin = change(adresse_liste2);
    var newImg = creer(chemin);
	var divJS = document.getElementById('carte_banque');
    divJS.appendChild(newImg);
});


