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
//test
 var ajout = function ajoutImgDansDiv(change,element) {
    var chemin = change(liste_chemin); 
    var newImg = creerImg(chemin);
	var divJS = element;
    divJS.appendChild(newImg);
}



/*
liste_chemin.splice(val_carte-1) pour eviter les doublons mais il y a un bug quand meme
*/

//PROGRAMME PRINCIPALE
var element1 = document.getElementById('ajout_joueur');	
var element2 = document.getElementById('ajout_banque');	
var carte_depart_banque = document.getElementById('carte_1');
var carte_depart_joueur = document.getElementById('carte_2');

var liste_chemin = [];
liste_chemin = generer();

//choix aleatoire des cartes au début
carte_depart_banque.src=change(liste_chemin);
carte_depart_joueur.src=change(liste_chemin); 

// bouton carte joueur
element1.addEventListener('click',function ajoutImgDansDiv_2() {
    var chemin = change(liste_chemin);
    var newImg = creer(chemin);
	var divJS = document.getElementById('carte_joueur');
    divJS.appendChild(newImg);
});

// bouton carte banque	
element2.addEventListener('click',function ajoutImgDansDiv_2() {
    var chemin = change(liste_chemin);
    var newImg = creer(chemin);
	var divJS = document.getElementById('carte_banque');
    divJS.appendChild(newImg);
});

/*
 var liste_1 = [2-10];
 var liste_2 = [12-20];
 var liste_3 = [22-30];
 var liste_4 = [32-40];
 var liste_5 = [1,11,21,31];  //pour la gestion des points pas trouver mieux.
 var liste_6 = [41-52];
 
If  ( i in liste_1) {
	var points = i;
	}
elif ( i in liste_2) {
	var points = i - 10;
	}
elif ( i in liste_3) {
	var points = i - 20;
	}
elif ( i in liste_4) {
	var points = i - 30;	
}
elif (i in liste_5) {
	var points = 1;
	}
elif ( i in liste_6) {
	var points = 9;
*/
        