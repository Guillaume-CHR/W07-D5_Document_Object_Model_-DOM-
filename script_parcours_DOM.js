console.log(document.querySelectorAll("p").length);
console.log(document.getElementById("coucou").textContent);
console.log(document.querySelectorAll("a")[2].href);
console.log(document.getElementsByClassName("compte-moi").length);
console.log(document.querySelectorAll("li.compte-moi").length);
console.log(document.querySelectorAll("ul > li.compte-moi").length);

console.log(document.querySelector("div").querySelectorAll("ul")[1].querySelectorAll("li")[0].innerHTML);