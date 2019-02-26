function infosLiens(node) {
	nbrNode = document.querySelectorAll(node).length;
	console.log(nbrNode);
	console.log(document.querySelectorAll(node)[0].href);
	console.log(document.querySelectorAll(node)[nbrNode-1].href);
}

infosLiens("a")

function possede(idName, className) {
	if (document.getElementById(idName) !== null) {
		console.log(document.getElementById(idName).classList.contains(className));
	} else {
		console.log(`Aucun élément ne possède l'id ${idName}`)
	}
	
}

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur