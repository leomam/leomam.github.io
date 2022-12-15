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
        var textBio = { age: "years old", drivelicence: "Driving licence", num: "+33 6 XX XX XX XX", location: "49300 Cholet (France)" }
        var textSkill = { header: "TECHNICAL\nSKILLS", progHeader: "Programming", secHeader: "Security", sysHeader: "System and networks", webHeader: "Web Front and Back", databaseHeader: "Database", projManage: "Project management", bigData: "Big Data", gameEngi: "Game engine" } 
        var textLang = { header: "FOREIGN\nLANGUAGES SKILLS", headerHighCorrection: -3.5, enLang: "English : Good working knowledge", esLang: "Spanish : Basic" }
        var textHobbies = { header: "HOBBIES", climb: "Climbing : In an alpine club", bad: "Badminton: 3 years of application", ski: "Skiing : Every years"}
        var textTitle = "Looking for work in Cybersecurity"
        var textEduc = { header: "Education and Qualifications", today: "2022 : Digital Security Expert training", todaysub: "ENI Informatique (France)", past1: "2020 : Bachelor in computer science", past1sub: "Faculty of Sciences (France)", past2: "2019 : A 2 years Dipl. T in Computer Science", past2sub: "IUT of Lannion (France)" }
        var textProj = { header: "Projects", firstProj: "C++ Project | 2020 - Team Work", firstProjsub: "Character syntax analysis to\ntrigger the desired functions.\nTools : Yacc and Lex", secondProj: "Web Project | 2019 - Team Work", secondProjsub: "PHP and PostgreSQL project with a\npersonal web pokédex for each user.\nTools : VS Code and CodeIgniter", thirdProj: "Web Project | 2018 - Team Work", thirdProjsub: "Website based on augmented reality.\nhttp://temangowebsite.gitlab.io/demo/\nTools : Brackets / Atom", fourthProj: "Java Project | 2017 - Team Work", fourthProjsub: "Based on the Travelling salesman problem.\nOptimization of working time of the Mailmen.\nTools : Eclipse / Git / Java / JavaFX", fifthProj: "Web Project | 2017 - Team Work", fifthProjsub: "Website based on quantum computers.\nTools : Brackets / HTML / CSS", sixthProj: "Android and PC Project | 2016 - Team Work", sixthProjsub: "Puzzle Game Android based on Java.\nTools : Java / Processing" }
        var textWork = { header: "Work Experience", firstWork: "Product security at Saagie | 2020/2021 -\nWork-Study", firstWorksub: "Pair work, organization with Jira tickets,\nIncrease in IT security skills.\nSaagie (France)", secondWork: "Unity 3D Developer | Summer 2019 - Internship", secondWorksub: "Team work, organization with Trello,\nlinguistic improvement.\nUlster University (Northern Ireland)", thirdWork: "Logistics Officer | 2016 and 2017 - Summer Job", thirdWorksub: "Organized, ability to follow orders, team\nwork, Optimization of working time.\nCooperative bookshop \"la Sadel\" (France)" }
    } else {
        //French
        var textSaveLang = "FR"
        var textBio = { age: "ans", drivelicence: "Permis B", num: "06 XX XX XX XX", location: "49300 Cholet" }
        var textSkill = { header: "COMPÉTENCES\nPROFESSIONNELLES", progHeader: "Programmation", secHeader: "Securité", sysHeader: "Systèmes et Réseaux", webHeader: "Web Front et Back", databaseHeader: "Bases de données", projManage: "Gestion de projets", bigData: "Big Data", gameEngi: "Moteur de Jeux" }
        var textLang = { header: "LANGUES", headerHighCorrection: 0, enLang: "Anglais : Niveau C1", esLang: "Espagnol : Niveau B1" }
        var textHobbies = { header: "LOISIRS", climb: "Escalade : En club", bad: "Badminton : 3 ans", ski: "Ski : tous les ans" }
        var textTitle = "Recherche CDI Cybersécurité"
        var textEduc = { header: "Formation", today: "2022 : Formation Expert en Sécurité Digitale", todaysub: "ENI École Informatique (44)", past1: "2020 : Licence Informatique", past1sub: "Faculté des Sciences (49)", past2: "2019 : DUT Informatique", past2sub: "IUT de Lannion (22)"}
        var textProj = { header: "Projets", firstProj: "Projet C++, Yacc et Lex | 2020 - Équipe", firstProjsub: "Analyses syntaxiques de caractères pour\ndéclencher les fonctions voulues.\nOutils : Yacc et Lex", secondProj: "Projet Web PHP | 2019 - Équipe", secondProjsub: "Site Projet PHP et PostgreSQL pour\nréaliser un pokédex personnel.\nOutils : VS Code et CodeIgniter", thirdProj: "Projet Web | 2018 - Équipe", thirdProjsub: "Site Web vitrine sur la réalité augmentée.\nhttp://temangowebsite.gitlab.io/demo/\nOutils : Brackets / Atom", fourthProj: "Projet Java | 2017 - Équipe", fourthProjsub: "Application Java basée sur le\nproblème du voyageur de commerce.\nOutils : Eclipse / Git / Java / JavaFX", fifthProj: "Projet Web | 2017 - Équipe", fifthProjsub: "Site vitrine sur les ordinateurs quantiques.\nOutils : Brackets / HTML / CSS", sixthProj: "Projet Android et PC | 2016 - Équipe", sixthProjsub: "Jeu de réflexion Android basé sur Java.\nOutils : Java / Processing" }
        var textWork = { header: "Expérience Professionnelle", firstWork: "Sécurité produit chez Meteodyn | 2021/2022 -\nAlternance", firstWorksub: "Travail en équipe, organisation avec tickets Git,\nMontée en compétences sur l'aspect sécurité.\nMeteodyn (Saint-Herblain)", secondWork: "Sécurité produit chez Saagie | 2020/2021 -\nAlternance", secondWorksub: "Travail en binôme, organisation avec tickets Jira,\nMontée en compétences sur l'aspect sécurité.\nSaagie (Rouen)", thirdWork: "Développeur Unity 3D | Été 2019 - Stage", thirdWorksub: "Travail en équipe, amélioration linguistique.\nUlster University (Irlande du Nord)" }
    }

    //Profil Photo
    let meImg = IMG_PROFILE

    //Age calculation
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


    /* Layout */
    //Background
    backgroundLeft(primaryColor, secondaryColor);

    //LCategory 1
    let lcategory1h = 0
    backgroundCategory(70 + lcategory1h, 22, secondaryColor)
    doc.setFontSize(22);
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.text("Léo Massy", 45, 78 + lcategory1h, 'center');
    doc.setFontSize(16);
    doc.text(age + " " + textBio.age, 45, 84 + lcategory1h, 'center');
    doc.text(textBio.drivelicence, 45, 90 + lcategory1h, 'center');

    //LCategory 2
    let lcategory2h = 0
    doc.setFontSize(14);
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.text(textBio.num, 45, 98 + lcategory2h, 'center');
    doc.text(textBio.location, 45, 104 + lcategory2h, 'center');
    doc.text("leo.massy@orange.fr", 45, 110 + lcategory2h, 'center');
    doc.textWithLink("léo massy", 45, 116 + lcategory2h, { url: 'https://fr.linkedin.com/in/l%C3%A9o-massy', align: 'center' });
    doc.textWithLink("https://leomam.github.io", 45, 122 + lcategory2h, { url: 'https://leomam.github.io', align: 'center' });
    doc.addImage(linkedin, 'JPEG', 28, 112, 4.5, 4.5)

    //LCategory 3
    let lcategory3h = 0
    backgroundCategory(125 + lcategory3h, 20, secondaryColor)
    doc.setFontSize(18);
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.text(textSkill.header, 45, 134 + lcategory3h, 'center');

    //LCategory 4
    let lcategory4h = 0
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.setFontSize(14);
    doc.text(textSkill.progHeader, 45, 151 + lcategory4h, 'center');
    doc.setFontSize(8);
    doc.text("C / C++ / C# / Java / Kotlin / Python / OCaml / Yacc", 45, 154.5  + lcategory4h, 'center');
    doc.setFontSize(14);
    doc.text(textSkill.secHeader, 45, 160 + lcategory4h, 'center');
    doc.setFontSize(8);
    doc.text("K9s / Hashcat / DonPAPI / Autopsy / Nmap / Wireshark", 45, 163.5  + lcategory4h, 'center');
    doc.setFontSize(14);
    doc.text(textSkill.sysHeader, 45, 169 + lcategory4h, 'center');
    doc.setFontSize(8);
    doc.text("Docker / K8s / Linux / Windows / Raspberry pi / Packet Tracer", 45, 172.5  + lcategory4h, 'center');
    doc.setFontSize(14);
    doc.text(textSkill.webHeader, 45, 178 + lcategory4h, 'center');
    doc.setFontSize(8);
    doc.text("HTML / CSS / Bootstrap / CMS / Javascript / PHP", 45, 181.5  + lcategory4h, 'center');
    doc.setFontSize(14);
    doc.text(textSkill.databaseHeader, 45, 187 + lcategory4h, 'center');
    doc.setFontSize(8);
    doc.text("PostgreSQL / MongoDB / Tutorial D", 45, 190.5  + lcategory4h, 'center');
    doc.setFontSize(14);
    doc.text(textSkill.projManage, 45, 196 + lcategory4h, 'center');
    doc.setFontSize(8);
    doc.text("Git / Notion / Jira", 45, 199.5  + lcategory4h, 'center');
    doc.setFontSize(14);
    doc.text(textSkill.bigData, 45, 205 + lcategory4h, 'center');
    doc.setFontSize(8);
    doc.text("Spark / Hadoop / Cassandra / ElasticSearch", 45, 208.5  + lcategory4h, 'center');
    doc.setFontSize(14);
    doc.text(textSkill.gameEngi, 45, 214 + lcategory4h, 'center');
    doc.setFontSize(8);
    doc.text("Unity3D", 45, 217.5  + lcategory4h, 'center');

    //LCategory 5
    let lcategory5h = 0
    backgroundCategory(220 + lcategory5h, 20, secondaryColor)
    doc.setFontSize(18);
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.text(textLang.header, 45, 232 + textLang.headerHighCorrection + lcategory5h, 'center');

    //LCategory 6
    let lcategory6h = 0
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.setFontSize(14);
    doc.text(textLang.enLang, 45, 246 + lcategory6h, 'center');
    doc.text(textLang.esLang, 45, 252 + lcategory6h, 'center');

    //LCategory 7
    let lcategory7h = 0
    backgroundCategory(255 + lcategory7h, 20, secondaryColor)
    doc.setFontSize(18);
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.text(textHobbies.header, 45, 267.5 + lcategory7h, 'center');

    //LCategory 8
    let lcategory8h = 0
    doc.setTextColor(categoryText[0],categoryText[1],categoryText[2]);
    doc.setFontSize(14);
    doc.text(textHobbies.climb, 45, 282 + lcategory8h, 'center');
    doc.text(textHobbies.bad, 45, 288 + lcategory8h, 'center');
    doc.text(textHobbies.ski, 45, 294 + lcategory8h, 'center');


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
    doc.text(textEduc.header, 95, 19 + rcategory1h);
    backgroundLine(21 + rcategory1h, secondaryColor);
    doc.setFontSize(14);
    doc.text(textEduc.today, 100, 29 + rcategory1h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text(textEduc.todaysub, 205, 34 + rcategory1h, 'right');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(textEduc.past1, 100, 43 + rcategory1h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text(textEduc.past1sub, 205, 48 + rcategory1h, 'right');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(textEduc.past2, 100, 57 + rcategory1h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text(textEduc.past2sub, 205, 62 + rcategory1h, 'right');

    //RCategory 2
    let rcategory2h = -10
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(textProj.header, 95, 78 + rcategory2h);
    backgroundLine(80 + rcategory2h, secondaryColor);
    doc.setFontSize(14);
    doc.text(textProj.firstProj, 100, 88 + rcategory2h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text(textProj.firstProjsub, 105, 94 + rcategory2h);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(textProj.secondProj, 100, 113 + rcategory2h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text(textProj.secondProjsub, 105, 119 + rcategory2h);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(textProj.thirdProj, 100, 138 + rcategory2h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text(textProj.thirdProjsub, 105, 144 + rcategory2h);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(textProj.fourthProj, 100, 163 + rcategory2h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text(textProj.fourthProjsub, 105, 169 + rcategory2h);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(textProj.fifthProj, 100, 188 + rcategory2h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text(textProj.fifthProjsub, 105, 194 + rcategory2h);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(textProj.sixthProj, 100, 207 + rcategory2h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text(textProj.sixthProjsub, 105, 213 + rcategory2h);


    //RCategory 3 - Expérience Professionnelle
    let rcategory3h = -14
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(textWork.header, 95, 232 + rcategory3h);
    backgroundLine(234 + rcategory3h, secondaryColor);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(textWork.firstWork, 100, 242 + rcategory3h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text(textWork.firstWorksub, 105, 253 + rcategory3h);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(textWork.secondWork, 100, 270 + rcategory3h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text(textWork.secondWorksub, 105, 281 + rcategory3h);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text(textWork.thirdWork, 100, 298 + rcategory3h);
    doc.setTextColor(secondaryColor[0]/2,secondaryColor[1]/2,secondaryColor[2]/2);
    doc.setFontSize(12);
    doc.text(textWork.thirdWorksub, 105, 303 + rcategory3h);

    //Save A4 Format
    //210 x 297
    doc.save("Massy Léo CV " + textSaveLang + " " + textSaveTheme + " Theme " + String(new Date().getFullYear()) + ".pdf");
}


//Onclick Triggers

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
