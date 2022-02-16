let tabquestionrep =    [["Combien d'États membres dans l'Union Européenne (2022) ?", "L'Union européenne (UE) compte 27 États membres en 2022"],
                        ["Combien de grands fleuves en France ?", "5 : le Rhin, le Rhône, la Loire, la Seine, la Garonne"],
                        ["Quel est la taille du Burj Khalifa en mètres ?", "828 m"],
                        ["Quel est la taille de la Statue de la Liberté SANS socle en mètres ?", "46 m"],
                        ["Quel est la taille de la Statue de la Liberté AVEC socle en mètres ?", "93 m"],
                        ["Combien vaut 1 Mile en mètres ?", "1609 m"],
                        ["Combien vaut la superficie de la Ruissie en km² ?", "17,13 millions km²"],
                        ["Combien vaut la superficie de la France en km² ?", "543 940 km²"],
                        ["Combien vaut la superficie de l'Espagne en km² ?", "505 990 km²"],
                        ["Combien vaut la superficie de l'Allemagne en km² ?", "357 386 km²"],
                        ["Combien vaut la distance entre Brest et New York à vol d'oiseau ?", "5383 m"],
                        ["Combien d'arrondissements à Paris ?", "20"],
			            ["Quel est la taille de Shakira ?", "1m57"],
			            ["Quel est la taille de Shaquille O'Neal ?", "2m16"],
			            ["Quel est l'année de décès de Nelson Mandela ?", "2013 (5 décembre)"],
			            ["Quel est l'année de la création de Minecraft ?", "2009 (17 mai)"],
			            ["Quel est l'année de la Bataille de Marignan ?", "1515"],
                        ["Combien de litres dans 1 mètre cube ?", "1000L"],
                        ["En 2021, Quel était le prix d'1kg d'or 24 carat en moyenne en € ?", "En 2021, le prix d'un lingot Or un kilo valait en moyenne 50 000€."],
			            ["Quel est l'année de la mise au point du procédé de l'imprimerie ?", "1450"],
                        ["Quel est l'année où Christophe Colomb à découvert l'Amérique ?", "1492"],
                        ["Quel est la taille de la Tour Montparnasse en mètres ?", "209 m"]];


function endGame() {
    question = "FIN"
    reponse = "Il n'y a plus de question dans le jeu, veuillez recommencer le jeu"
	return [question, reponse]
}


function putquestionrep(question, reponse) {
	document.getElementById("question").innerText = question;
    document.getElementById("reponse").innerText = reponse;
}

function getRandomQuestion(tabquestionrep) {
    if (tabquestionrep.length != 0) {
        index = Math.floor(Math.random() * tabquestionrep.length)
        item = tabquestionrep[index];
        tabquestionrep.splice(index, 1)
    } else {
        item = endGame()
        document.getElementById("nextbutton").innerText = "Recommencer";
        document.getElementById("nextbutton").href = "index.html";
        document.getElementById("nextbutton").removeAttribute("onclick");
        document.getElementById("nextbutton").removeAttribute("data-bs-toggle");
    }
	return item;
}

function generateQuestion() {
    document.getElementById("collapseExample").style = "visibility: hidden;";
	questionrep = getRandomQuestion(tabquestionrep);
	putquestionrep(questionrep[0], questionrep[1]);
    setTimeout(function(){
        document.getElementById("collapseExample").style = "visibility: visible;";
    }, 400);
}

generateQuestion();
