
function init(c) {
	cj = document.getElementById("carte_joueur_1");
	cb = document.getElementById("carte_banque_1");
	cj.src = tireCarte(c);
	cb.src = tireCarte(c);
}

function tireCarte(c) {
	const rd = Math.floor(c.length*Math.random());
	return c.splice(rd,1)[0];  // Retire la carte du paquet et renvoie sa valeur
}

function creeImg(chemin) {
	var img = document.createElement("img");
	img.src = chemin;
	return img;
}

function addImg(c,quelJoueur) {
	var spanId = "cartes_"+quelJoueur;
	span = document.getElementById(spanId);
	img = creeImg(tireCarte(c));
	span.appendChild(img); 
}

function setupListeners (c) {
	
}

var cartes = [];
path="img/";
for (i=1;i<53;i++) {
	let img = path+i.toString()+".BMP";
	cartes.push(img);
} 

window.addEventListener("load",init(cartes));
var card = document.getElementById("ajout_joueur");
card.addEventListener("click",function(){addImg(cartes,"joueur")});
//window.addEventListener("load",setupListeners(cartes));

