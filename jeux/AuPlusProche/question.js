let tabquestionrep =    [["Combien d'États membres dans l'Union Européenne (2022) ?", "L'Union européenne (UE) compte 27 États membres en 2022"],
                        ["Combien de grands fleuves en France ?", "5 : le Rhin, le Rhône, la Loire, la Seine, la Garonne"],
                        ["Quel est la taille du Burj Khalifa en mètres ?", "828 m"],
                        ["Quel est la taille de l'Empire State Building en mètres ?", "381 m"],
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
                        ["Quel est la longueur du plus grand paquebot au monde \"Wonder of the Seas\" (2021) en mètres ?", "362 m"],
                        ["Quel est l'année où Christophe Colomb à découvert l'Amérique ?", "1492"],
                        ["Quel est l'année du premier pas de l'Homme sur la lune ?", "1969 (21 juillet)"],
                        ["Quel est la distance à vol d'oiseau entre Paris et Marseille en km ?", "661 km"],
                        ["Combien y-a-t'il eu de naissance en France en 2021 ?", "738 000 bébés"],
                        ["Combien y-a-t'il eu de mort en France en 2021 toutes causes confondues ?", "367 665 décès"],
                        ["Combien y-a-t'il de régions en France Métropolitaine en 2021 ?", "13 régions métropolitaines (et 5 régions d'outre mer.)"],
                        ["Combien y-a-t'il de départements en France Métropolitaine en 2021 ?", "96 départements métropolitains"],
                        ["Combien y-avait-il d'habitants en Chine fin 2021 ?", "Fin 2021, le pays comptait 1,4126 milliard d'habitants"],
                        ["Combien y-avait-il d'habitants en France fin 2021 ?", "Fin 2021, le pays comptait 67,8 millions d'habitants"],
                        ["Combien y-a-t'il de Pokémon dans la 1ère génération de Pokémon ?", "151"],
                        ["Combien y-a-t'il de galaxies dans l'univers selon les estimations ?", "2000 milliards de galaxies ou 2 billions de galaxies"],
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
