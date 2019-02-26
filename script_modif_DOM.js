function changeTitles() {
	let album = document.getElementsByClassName("jumbotron-heading")[0];
	let subtitle = document.getElementsByClassName("lead text-muted")[0];
	
	album.innerHTML = "Ce que j'ai appris à THP"
	subtitle.innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}
changeTitles()


function changeCallToActions() {
	let button1 = document.getElementsByClassName("btn btn-primary my-2")[0]
	let button2 = document.getElementsByClassName("btn btn-secondary my-2")[0]

	button1.innerHTML = "OK je veux tester !"
	button1.href = "http://www.thehackingproject.org"

	button2.innerHTML = "Non Merci"
	button2.href = "https://www.pole-emploi.fr/accueil/"
}
changeCallToActions()

function changeLogoName() {
	let header = document.querySelectorAll(".navbar-brand > strong")[0]
	header.innerHTML = "The THP Experience"
 	header.style.fontSize = "2em"
}
changeLogoName()

function populateImages() {
	let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
	let imgHolder = document.querySelectorAll(".card-img-top")

	for (var i = 0; i < imgHolder.length; i++) {
		imgHolder[i].setAttribute("src",imagesArray[i])
	}
}
populateImages()

function deleteLastCards() {
	let parentCard = document.querySelectorAll(".col-md-4")

	for(var i = 1; i <= 3; i++){
	    parentCard[parentCard.length-i].remove()
	}
}
deleteLastCards()

function changeCardsText() {
	let parentCard = document.querySelectorAll(".card-text")
	let textCard = [ "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web","Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML","JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]

	for(var i = 0; i <= textCard.length-1; i++){
	    parentCard[i].innerHTML = textCard[i]
	}
}
changeCardsText()

function changeViewButtons() {
	let buttonToChange = document.querySelectorAll(".btn.btn-sm.btn-outline-secondary")
	for(var i = 0; i <= buttonToChange.length-1; i+=2){
	    buttonToChange[i].setAttribute("class", "btn btn-sm btn-success")
	}

}
changeViewButtons()

function addRow() {
	let lastNode = document.getElementsByClassName("row")[1] 
	let JSCard = document.querySelectorAll(".col-md-4")[2]
	console.log(JSCard)
  	lastNode.insertAdjacentHTML('afterend', `<div class="row"><div class="col-md-4">${JSCard.innerHTML}</div></div>`);
  	JSCard.remove()

	// <!-- beforebegin -->
	// <p>
	//   <!-- afterbegin -->
	//   foo
	//   <!-- beforeend -->
	// </p>
	// <!-- afterend -->
	

}
addRow()


