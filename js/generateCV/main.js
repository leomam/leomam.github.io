const { jsPDF } = window.jspdf;
const doc = new jsPDF();


function generateCV(theme, langue){
    //def
    if (theme){
        var primaryColor = [236,236,236]
        var secondaryColor = [190,190,190]
        var categoryText = [0,0,0]
        var linkedin = IMG_LINKEDIN_BLACK
        var textSaveTheme = "White"
    } else {
        var primaryColor = [70,70,70]
        var secondaryColor = [102,102,102]
        var categoryText = [255,255,255]
        var linkedin = IMG_LINKEDIN_WHITE
        var textSaveTheme = "Dark"
    }
    if (langue){
        //English
        var textSaveLang = "EN"
        var textBio = { age: "years old", drivelicence: "Driving licence", num: "+33 6 31 58 50 83", location: "49000 Angers (France)" }
        var textSkill = { header: "TECHNICAL\nSKILLS", progHeader: "Programming", secHeader: "Security", sysHeader: "System and networks", webHeader: "Web Front and Back", databaseHeader: "Database", projManage: "Project management", gameEngi: "Game engine" } 
        var textLang = { header: "FOREIGN\nLANGUAGES SKILLS", headerHighCorrection: -3.5, enLang: "English : Good working knowledge", esLang: "Spanish : Basic" }
        var textHobbies = { header: "HOBBIES", climb: "Climbing : In an alpine club", bad: "Badminton: 3 years of application", ski: "Skiing : Every years"}
        var textTitle = "Research work-study in cybersecurity"
    } else {
        //French
        var textSaveLang = "FR"
        var textBio = { age: "ans", drivelicence: "Permis B", num: "06 31 58 50 83", location: "49000 Angers" }
        var textSkill = { header: "COMPÉTENCES\nPROFESSIONNELLES", progHeader: "Programmation", secHeader: "Securité", sysHeader: "Systèmes et Réseaux", webHeader: "Web Front et Back", databaseHeader: "Bases de données", projManage: "Gestion de projets", gameEngi: "Moteur de Jeux" }
        var textLang = { header: "LANGUES", headerHighCorrection: 0, enLang: "Anglais : Niveau C1", esLang: "Espagnol : Niveau B1" }
        var textHobbies = { header: "LOISIRS", climb: "Escalade : En club", bad: "Badminton : 3 ans", ski: "Ski : tous les ans" }
        var textTitle = "Recherche Alternance Cybersécurité"
    }

    //Profil Photo
    let meImg = IMG_PROFILE

    let age = String(parseInt(Math.abs(new Date() - new Date("1998-04-01 12:00:00")) / 31622400000))

    //Background
    function backgroundLeft(primaryColor, secondaryColor){

        doc.setFillColor(primaryColor[0],primaryColor[1],primaryColor[2]);
        doc.rect(0, 0, 90, 297, 'F');

        doc.setFillColor(secondaryColor[0],secondaryColor[1],secondaryColor[2]);
        doc.circle(45, 35, 30, 'F');

        doc.addImage(meImg, 'JPEG', 18, 8, 54, 54)
    }

    function backgroundHeadLine(y, color){
        doc.setFillColor(color[0],color[1],color[2]);
        doc.rect(90, y, 120, 12, 'F');
    }


    function backgroundLine(y, color){
        doc.setFillColor(color[0],color[1],color[2]);
        doc.rect(90, y, 120, 1, 'F');
    }

    function backgroundCategory(y, h, color){
        doc.setFillColor(color[0],color[1],color[2]);
        doc.rect(0, y, 90, h, 'F');
    }


    /* Mise en Page */

    //Background
    backgroundLeft(primaryColor, secondaryColor);

    //Category 1
    let category1h = 0
    backgroundCategory(70 + category1h, 22, secondaryColor)
    doc.setFontSize(22);
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.text("Léo Massy", 45, 78 + category1h, 'center');
    doc.setFontSize(16);
    doc.text(age + " " + textBio.age, 45, 84 + category1h, 'center');
    doc.text(textBio.drivelicence, 45, 90 + category1h, 'center');

    //Category 2
    let category2h = 0
    doc.setFontSize(14);
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.text(textBio.num, 45, 98 + category2h, 'center');
    doc.text(textBio.location, 45, 104 + category2h, 'center');
    doc.text("leo.massy@orange.fr", 45, 110 + category2h, 'center');
    doc.textWithLink("léo massy", 45, 116 + category2h, { url: 'https://fr.linkedin.com/in/l%C3%A9o-massy', align: 'center' });
    doc.textWithLink("https://leomam.github.io", 45, 122 + category2h, { url: 'https://leomam.github.io', align: 'center' });
    doc.addImage(linkedin, 'JPEG', 28, 112, 4.5, 4.5)

    //Category 3
    let category3h = 0
    backgroundCategory(125 + category3h, 20, secondaryColor)
    doc.setFontSize(18);
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.text(textSkill.header, 45, 134 + category3h, 'center');

    //Category 4
    let category4h = 0
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.setFontSize(14);
    doc.text(textSkill.progHeader, 45, 151 + category4h, 'center');
    doc.setFontSize(8);
    doc.text("C / C++ / C# / Java / Kotlin / Python / OCaml / Yacc", 45, 154.5  + category4h, 'center');
    doc.setFontSize(14);
    doc.text(textSkill.secHeader, 45, 160 + category4h, 'center');
    doc.setFontSize(8);
    doc.text("K9s / Nmap / Wireshark", 45, 163.5  + category4h, 'center');
    doc.setFontSize(14);
    doc.text(textSkill.sysHeader, 45, 169 + category4h, 'center');
    doc.setFontSize(8);
    doc.text("Docker / K8s / Linux / Windows / Raspberry pi / Packet Tracer", 45, 172.5  + category4h, 'center');
    doc.setFontSize(14);
    doc.text(textSkill.webHeader, 45, 178 + category4h, 'center');
    doc.setFontSize(8);
    doc.text("HTML / CSS / Bootstrap / CMS / Javascript / PHP", 45, 181.5  + category4h, 'center');
    doc.setFontSize(14);
    doc.text(textSkill.databaseHeader, 45, 187 + category4h, 'center');
    doc.setFontSize(8);
    doc.text("PostgreSQL / MongoDB / Tutorial D", 45, 190.5  + category4h, 'center');
    doc.setFontSize(14);
    doc.text(textSkill.projManage, 45, 196 + category4h, 'center');
    doc.setFontSize(8);
    doc.text("Git / Notion / Jira", 45, 199.5  + category4h, 'center');
    doc.setFontSize(14);
    doc.text("Big Data", 45, 205 + category4h, 'center');
    doc.setFontSize(8);
    doc.text("Spark / Hadoop / Cassandra / ElasticSearch", 45, 208.5  + category4h, 'center');
    doc.setFontSize(14);
    doc.text(textSkill.gameEngi, 45, 214 + category4h, 'center');
    doc.setFontSize(8);
    doc.text("Unity3D", 45, 217.5  + category4h, 'center');

    //Category 5
    let category5h = 0
    backgroundCategory(220 + category5h, 20, secondaryColor)
    doc.setFontSize(18);
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.text(textLang.header, 45, 232 + textLang.headerHighCorrection + category5h, 'center');

    //Category 6
    let category6h = 0
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.setFontSize(14);
    doc.text(textLang.enLang, 45, 246 + category6h, 'center');
    doc.text(textLang.esLang, 45, 252 + category6h, 'center');

    //Category 7
    let category7h = 0
    backgroundCategory(255 + category7h, 20, secondaryColor)
    doc.setFontSize(18);
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.text(textHobbies.header, 45, 267.5 + category7h, 'center');

    //Category 8
    let category8h = 0
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.setFontSize(14);
    doc.text(textHobbies.climb, 45, 282 + category8h, 'center');
    doc.text(textHobbies.bad, 45, 288 + category8h, 'center');
    doc.text(textHobbies.ski, 45, 294 + category8h, 'center');


    //Right

    //Header
    backgroundHeadLine(0, secondaryColor);
    doc.setFontSize(18);
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.text(textTitle, 150, 8, 'center');

    //RCategory 1
    let rcategory1h = 0
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Formation", 95, 20 + rcategory1h);
    backgroundLine(22 + rcategory1h, secondaryColor);
    doc.setFontSize(14);
    doc.text("Aujourd'hui : Formation Expert en Sécurité\nDigitale", 100, 30 + rcategory1h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text("ENI École Informatique (44)", 205, 36 + rcategory1h, 'right');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text("2020 : Licence Informatique", 100, 46 + rcategory1h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text("Faculté des Sciences (49)", 205, 52 + rcategory1h, 'right');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text("2019 : DUT Informatique", 100, 62 + rcategory1h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text("IUT de Lannion (22)", 205, 68 + rcategory1h, 'right');

    //RCategory 2
    let rcategory2h = 0
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Projets", 95, 78 + rcategory2h);
    backgroundLine(80 + rcategory2h, secondaryColor);
    doc.setFontSize(14);
    doc.text("Projet C++, Yacc et Lex | 2020 - Équipe", 100, 88 + rcategory2h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text("Analyses syntaxiques de caractères pour\ndéclencher les fonctions voulues.\nOutils : Yacc et Lex", 105, 94 + rcategory2h);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text("Projet Web PHP | 2019 - Équipe", 100, 114 + rcategory2h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text("Site Projet PHP et PostgreSQL pour\nréaliser un pokédex personnel.\nOutils : VS Code et CodeIgniter", 105, 120 + rcategory2h);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text("Projet Web | 2018 - Équipe", 100, 140 + rcategory2h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text("Site Web vitrine sur la réalité augmentée.\nhttp://temangowebsite.gitlab.io/demo/\nOutils : Brackets / Atom", 105, 146 + rcategory2h);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text("Projet Java | 2017 - Équipe", 100, 166 + rcategory2h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text("Application Java basée sur le\nproblème du voyageur de commerce.\nOutils : Eclipse / Git / Java / JavaFX", 105, 172 + rcategory2h);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text("Projet Web | 2017 - Équipe", 100, 192 + rcategory2h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text("Site vitrine sur les ordinateurs quantiques.\nOutils : Brackets", 105, 198 + rcategory2h);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text("Projet Android et PC | 2016 - Équipe", 100, 212 + rcategory2h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text("Jeu de réflexion Android basé sur Java.\nOutils : Java / Processing", 105, 218 + rcategory2h);


    //RCategory 3 - Expérience Professionnelle
    let rcategory3h = 0
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Expérience Professionnelle", 95, 232 + rcategory3h);
    backgroundLine(234 + rcategory3h, secondaryColor);
    doc.setFontSize(14);
    doc.text("Développeur Unity 3D | Été 2019 - Stage", 100, 242 + rcategory3h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text("Travail en équipe, organisation avec Trello,\namélioration linguistique.\nUlster University (Irlande du Nord)", 105, 248 + rcategory3h);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text("Agent Logistique | Été 2016 et 2017 -\nTravail Saisonier", 100, 268 + rcategory3h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text("Suivi d'un mode opératoire, travail en équipe,\noptimisation du temps, organisation.\nLibrairie coopérative la Sadel (49320 Brissac-Quincé)", 105, 280 + rcategory3h);


    //210 x 297
    doc.save("Massy Léo CV " + textSaveLang + " " + textSaveTheme + " Theme " + String(new Date().getFullYear()) + ".pdf");
}

let cvendark = document.getElementById('cvendark');
if (cvendark){
    cvendark.onclick = () => {generateCV(false, true);}
}

let cvenbright = document.getElementById('cvenbright');
if (cvenbright){
    cvenbright.onclick = () => {generateCV(true, true);}
}

let cvfrdark = document.getElementById('cvfrdark');
if (cvfrdark){
    cvfrdark.onclick = () => {generateCV(false, false);}
}

let cvfrbright = document.getElementById('cvfrbright');
if (cvfrbright){
    cvfrbright.onclick = () => {generateCV(true, false);}
}
