var donne1 = 50 ;
var donne2 = 50 ;
var donne3 = "#500000" ;
var donne4 = 50 ;
var donne5 = 50 ;
var donne6 = 50 ;
var donne7 = 50 ;
var donne8 = 50 ;
var donne9 = 50 ;
var donne10 = 50 ;
var donne11 = 50 ;
var donne12 = 50 ;
var donne13 = 10 ;
var FichierAudioJo=[];
var position = [];
var gestiondu12 = 1;
var gestiondu15 = 1;


function regarde() {
/*********met en memoire valeur css 1*****/
var input1 = document.getElementById("Nb1");
localStorage.removeItem("nb1", input1.value);
localStorage.setItem("nb1", input1.value);
donne1 = localStorage.getItem("nb1");

/*********met en memoire valeur css 2*****/
var input2 = document.getElementById("Nb2");
localStorage.removeItem("nb2", input2.value);
localStorage.setItem("nb2", input2.value);
donne2 = localStorage.getItem("nb2");

/*********met en memoire valeur css 3 background-color*****/
var input3 = document.getElementById("Nb3");
localStorage.removeItem("nb3", input3.value);
localStorage.setItem("nb3", input3.value);
donne3 = localStorage.getItem("nb3");

/*********met en memoire valeur css 4 *****/
var input4 = document.getElementById("Nb4");
localStorage.removeItem("nb4", input4.value);
localStorage.setItem("nb4", input4.value);
donne4 = localStorage.getItem("nb4");

/*********met en memoire valeur css 5 *****/
var input5 = document.getElementById("Nb5");
localStorage.removeItem("nb5", input5.value);
localStorage.setItem("nb5", input5.value);
donne5 = localStorage.getItem("nb5");

/*********met en memoire valeur css 6 *****/
var input6 = document.getElementById("Nb6");
localStorage.removeItem("nb6", input6.value);
localStorage.setItem("nb6", input6.value);
donne6 = localStorage.getItem("nb6");

/*********met en memoire valeur css 7 *****/
var input7 = document.getElementById("Nb7");
localStorage.removeItem("nb7", input7.value);
localStorage.setItem("nb7", input7.value);
donne7 = localStorage.getItem("nb7");

/*********met en memoire valeur css 8 *****/
var input8 = document.getElementById("Nb8");
localStorage.removeItem("nb8", input8.value);
localStorage.setItem("nb8", input8.value);
donne8 = localStorage.getItem("nb8");

/*********met en memoire valeur css 9 *****/
var input9 = document.getElementById("Nb9");
localStorage.removeItem("nb9", input9.value);
localStorage.setItem("nb9", input9.value);
donne9 = localStorage.getItem("nb9");

/*********met en memoire valeur css 10 *****/
var input10 = document.getElementById("Nb10");
localStorage.removeItem("nb10", input10.value);
localStorage.setItem("nb10", input10.value);
donne10 = localStorage.getItem("nb10");

/*********met en memoire valeur css 11 *****/
var input11 = document.getElementById("Nb11");
localStorage.removeItem("nb11", input11.value);
localStorage.setItem("nb11", input11.value);
donne11 = localStorage.getItem("nb11");


/*********met en memoire valeur css 12 *****/
gestiondu12 = gestiondu12 + 1;
switch(gestiondu12) {
    case 2:	

        break;
    default:	

}

var input12 = document.getElementById("Nb12");
localStorage.removeItem("nb12", input12.value);
localStorage.setItem("nb12", input12.value);
donne12 = localStorage.getItem("nb12");

/****/


/*********met en memoire valeur css 13 *****/
var input13 = document.getElementById("Nb13");
localStorage.removeItem("nb13", input13.value);
localStorage.setItem("nb13", input13.value);
donne13 = localStorage.getItem("nb13");

/*********met en memoire valeur css 14 *****/

var input14 = document.getElementById("Nb14").value;

switch(input14) {
    case "1":	position = ["static"];
        break;
    case "2":	position = ["relative"];
        break;
    case "3":	position = ["fixed"];
        break;
    default:	position = ["absolute"];
}


/*********met en memoire valeur css 15 *****/
var input15 = document.getElementById("Nb15");
localStorage.removeItem("nb15", input15.value);
localStorage.setItem("nb15", input15.value);
donne15 = localStorage.getItem("nb15");


/*********met en memoire valeur css 16 *****/
var input16 = document.getElementById("Nb16");
localStorage.removeItem("nb16", input16.value);
localStorage.setItem("nb16", input16.value);
donne16 = localStorage.getItem("nb16");


/*********met en memoire valeur css 17 *****/
var input17 = document.getElementById("Nb17");
localStorage.removeItem("nb17", input17.value);
localStorage.setItem("nb17", input17.value);
donne17 = localStorage.getItem("nb17");


/***************/
//debut gestion rotation
function ens17() {

var pens17 = null;
var injections17 = null;

function ajouteElements17() {
  // crée un nouvel élément audio
  injections17 = document.createElement("pre");
  injections17.textContent =".tourne" + donne12 + " { float: left; transform: rotate(" + donne12 + "deg);}" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens17 = document.getElementById("repere_tourne");
  document.body.insertBefore(injections17, pens17);
}
ajouteElements17();
}
ens17();

} // fin regarde

// selection bande son
var donneson = 1 ;
function regarde1() {
/*********met en memoire valeur son  *****/
var inputson = document.getElementById("Nbson");
localStorage.removeItem("nbson", inputson.value);
localStorage.setItem("nbson", inputson.value);
donneson = localStorage.getItem("nbson");

} // fin function regarde1

/*********debut generateur images css*****/

//button 1
document.getElementById("tet1").onclick = function() {en1()};
function en1() {
regarde();
var pen1 = null;
var injection1 = null;

function ajouteElement1() {
  // crée un nouvel élément audio
  injection1 = document.createElement("pre");
  injection1.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:" + position + "; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pen1 = document.getElementById("repere_injection_monde1_img1");
  document.body.insertBefore(injection1, pen1);
}
ajouteElement1();
}
//fin button 1
//button 2
document.getElementById("tet2").onclick = function() {en2()};
function en2() {
regarde();
var pen2 = null;
var injection2 = null;

function ajouteElement2() {
  // crée un nouvel élément audio
  injection2 = document.createElement("pre");
  injection2.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pen2 = document.getElementById("repere_injection_monde1_img2");
  document.body.insertBefore(injection2, pen2);
}
ajouteElement2();
}
//fin button 2
//button 3
document.getElementById("tet3").onclick = function() {en3()};
function en3() {
regarde();
var pen3 = null;
var injection3 = null;

function ajouteElement3() {
  // crée un nouvel élément audio
  injection3 = document.createElement("pre");
  injection3.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pen3 = document.getElementById("repere_injection_monde1_img3");
  document.body.insertBefore(injection3, pen3);
}
ajouteElement3();
}
//fin button 3
//button 4
document.getElementById("tet4").onclick = function() {en4()};
function en4() {
regarde();
var pen4 = null;
var injection4 = null;

function ajouteElement4() {
  // crée un nouvel élément audio
  injection4 = document.createElement("pre");
  injection4.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pen4 = document.getElementById("repere_injection_monde1_img4");
  document.body.insertBefore(injection4, pen4);
}
ajouteElement4();
}
//fin button 4
//button 5
document.getElementById("tet5").onclick = function() {en5()};
function en5() {
regarde();
var pen5 = null;
var injection5 = null;

function ajouteElement5() {
  // crée un nouvel élément audio
  injection5 = document.createElement("pre");
  injection5.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pen5 = document.getElementById("repere_injection_monde1_img5");
  document.body.insertBefore(injection5, pen5);
}
ajouteElement5();
}
//fin button 5
//button 6
document.getElementById("tet6").onclick = function() {en6()};
function en6() {
regarde();
var pen6 = null;
var injection6 = null;

function ajouteElement6() {
  // crée un nouvel élément audio
  injection6 = document.createElement("pre");
  injection6.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pen6 = document.getElementById("repere_injection_monde1_img6");
  document.body.insertBefore(injection6, pen6);
}
ajouteElement6();
}
//fin button 6
//button 7
document.getElementById("tet7").onclick = function() {en7()};
function en7() {
regarde();
var pen7 = null;
var injection7 = null;

function ajouteElement7() {
  // crée un nouvel élément audio
  injection7 = document.createElement("pre");
  injection7.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pen7 = document.getElementById("repere_injection_monde1_img7");
  document.body.insertBefore(injection7, pen7);
}
ajouteElement7();
}
//fin button 7
//button 8
document.getElementById("tet8").onclick = function() {en8()};
function en8() {
regarde();
var pen8 = null;
var injection8 = null;

function ajouteElement8() {
  // crée un nouvel élément audio
  injection8 = document.createElement("pre");
  injection8.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pen8 = document.getElementById("repere_injection_monde1_img8");
  document.body.insertBefore(injection8, pen8);
}
ajouteElement8();
}
//fin button 8
//button 9
document.getElementById("tet9").onclick = function() {en9()};
function en9() {
regarde();
var pen9 = null;
var injection9 = null;

function ajouteElement9() {
  // crée un nouvel élément audio
  injection9 = document.createElement("pre");
  injection9.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pen9 = document.getElementById("repere_injection_monde1_img9");
  document.body.insertBefore(injection9, pen9);
}
ajouteElement9();
}
//fin button 9
//button 10
document.getElementById("tet10").onclick = function() {en10()};
function en10() {
regarde();
var pen10 = null;
var injection10 = null;

function ajouteElement10() {
  // crée un nouvel élément audio
  injection10 = document.createElement("pre");
  injection10.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pen10 = document.getElementById("repere_injection_monde1_img10");
  document.body.insertBefore(injection10, pen10);
}
ajouteElement10();
}
//fin button 10
//button 11
document.getElementById("tet11").onclick = function() {en11()};
function en11() {
regarde();
var pen11 = null;
var injection11 = null;

function ajouteElement11() {
  // crée un nouvel élément audio
  injection11 = document.createElement("pre");
  injection11.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pen11 = document.getElementById("repere_injection_monde1_img11");
  document.body.insertBefore(injection11, pen11);
}
ajouteElement11();
}
//fin button 11
//button 12
document.getElementById("tet12").onclick = function() {en12()};
function en12() {
regarde();
var pen12 = null;
var injection12 = null;

function ajouteElement12() {
  // crée un nouvel élément audio
  injection12 = document.createElement("pre");
  injection12.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pen12 = document.getElementById("repere_injection_monde1_img12");
  document.body.insertBefore(injection12, pen12);
}
ajouteElement12();
}
//fin button 12
//button 13
document.getElementById("tet13").onclick = function() {en13()};
function en13() {
regarde();
var pen13 = null;
var injection13 = null;

function ajouteElement13() {
  // crée un nouvel élément audio
  injection13 = document.createElement("pre");
  injection13.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pen13 = document.getElementById("repere_injection_monde1_img13");
  document.body.insertBefore(injection13, pen13);
}
ajouteElement13();
}
//fin button 13
//button 14
document.getElementById("tet14").onclick = function() {en14()};
function en14() {
regarde();
var pen14 = null;
var injection14 = null;

function ajouteElement14() {
  // crée un nouvel élément audio
  injection14 = document.createElement("pre");
  injection14.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pen14 = document.getElementById("repere_injection_monde1_img14");
  document.body.insertBefore(injection14, pen14);
}
ajouteElement14();
}
//fin button 14
//button 15
document.getElementById("tet15").onclick = function() {en15()};
function en15() {
regarde();
var pen15 = null;
var injection15 = null;

function ajouteElement15() {
  // crée un nouvel élément audio
  injection15 = document.createElement("pre");
  injection15.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pen15 = document.getElementById("repere_injection_monde1_img15");
  document.body.insertBefore(injection15, pen15);
}
ajouteElement15();
}
//fin button 15
//button 16
document.getElementById("tet16").onclick = function() {en16()};
function en16() {
regarde();
var pen16 = null;
var injection16 = null;

function ajouteElement16() {
  // crée un nouvel élément audio
  injection16 = document.createElement("pre");
  injection16.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pen16 = document.getElementById("repere_injection_monde1_img16");
  document.body.insertBefore(injection16, pen16);
}
ajouteElement16();
}
//fin button 16
//button b1
document.getElementById("tetb1").onclick = function() {enb1()};
function enb1() {
regarde();
var penb1 = null;
var injectionb1 = null;

function ajouteElementb() {
  // crée un nouvel élément audio
  injectionb1 = document.createElement("pre");
  injectionb1.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penb1 = document.getElementById("repere_injection_monde2_img1");
  document.body.insertBefore(injectionb1, penb1);
}
ajouteElementb();
}
//fin button b1


//button b2
document.getElementById("tetb2").onclick = function() {enb2()};
function enb2() {
regarde();
var penb2 = null;
var injectionb2 = null;

function ajouteElementb2() {
  // crée un nouvel élément audio
  injectionb2 = document.createElement("pre");
  injectionb2.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penb2 = document.getElementById("repere_injection_monde2_img2");
  document.body.insertBefore(injectionb2, penb2);
}
ajouteElementb2();
}
//fin button b2
//button b3
document.getElementById("tetb3").onclick = function() {enb3()};
function enb3() {
regarde();
var penb3 = null;
var injectionb3 = null;

function ajouteElementb3() {
  // crée un nouvel élément audio
  injectionb3 = document.createElement("pre");
  injectionb3.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penb3 = document.getElementById("repere_injection_monde2_img3");
  document.body.insertBefore(injectionb3, penb3);
}
ajouteElementb3();
}
//fin button b3
//button b4
document.getElementById("tetb4").onclick = function() {enb4()};
function enb4() {
regarde();
var penb4 = null;
var injectionb4 = null;

function ajouteElementb4() {
  // crée un nouvel élément audio
  injectionb4 = document.createElement("pre");
  injectionb4.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penb4 = document.getElementById("repere_injection_monde2_img4");
  document.body.insertBefore(injectionb4, penb4);
}
ajouteElementb4();
}
//fin button b4
//button b5
document.getElementById("tetb5").onclick = function() {enb5()};
function enb5() {
regarde();
var penb5 = null;
var injectionb5 = null;

function ajouteElementb5() {
  // crée un nouvel élément audio
  injectionb5 = document.createElement("pre");
  injectionb5.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penb5 = document.getElementById("repere_injection_monde2_img5");
  document.body.insertBefore(injectionb5, penb5);
}
ajouteElementb5();
}
//fin button b5
//button b6
document.getElementById("tetb6").onclick = function() {enb6()};
function enb6() {
regarde();
var penb6 = null;
var injectionb6 = null;

function ajouteElementb6() {
  // crée un nouvel élément audio
  injectionb6 = document.createElement("pre");
  injectionb6.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penb6 = document.getElementById("repere_injection_monde2_img6");
  document.body.insertBefore(injectionb6, penb6);
}
ajouteElementb6();
}
//fin button b6
//button b7
document.getElementById("tetb7").onclick = function() {enb7()};
function enb7() {
regarde();
var penb7 = null;
var injectionb7 = null;

function ajouteElementb7() {
  // crée un nouvel élément audio
  injectionb7 = document.createElement("pre");
  injectionb7.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penb7 = document.getElementById("repere_injection_monde2_img7");
  document.body.insertBefore(injectionb7, penb7);
}
ajouteElementb7();
}
//fin button b7
//button b8
document.getElementById("tetb8").onclick = function() {enb8()};
function enb8() {
regarde();
var penb8 = null;
var injectionb8 = null;

function ajouteElementb8() {
  // crée un nouvel élément audio
  injectionb8 = document.createElement("pre");
  injectionb8.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penb8 = document.getElementById("repere_injection_monde2_img8");
  document.body.insertBefore(injectionb8, penb8);
}
ajouteElementb8();
}
//fin button b8
//button b9
document.getElementById("tetb9").onclick = function() {enb9()};
function enb9() {
regarde();
var penb9 = null;
var injectionb9 = null;

function ajouteElementb9() {
  // crée un nouvel élément audio
  injectionb9 = document.createElement("pre");
  injectionb9.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penb9 = document.getElementById("repere_injection_monde2_img9");
  document.body.insertBefore(injectionb9, penb9);
}
ajouteElementb9();
}
//fin button b9
//button b10
document.getElementById("tetb10").onclick = function() {enb10()};
function enb10() {
regarde();
var penb10 = null;
var injectionb10 = null;

function ajouteElementb10() {
  // crée un nouvel élément audio
  injectionb10 = document.createElement("pre");
  injectionb10.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penb10 = document.getElementById("repere_injection_monde2_img10");
  document.body.insertBefore(injectionb10, penb10);
}
ajouteElementb10();
}
//fin button b10
//button b11
document.getElementById("tetb11").onclick = function() {enb11()};
function enb11() {
regarde();
var penb11 = null;
var injectionb11 = null;

function ajouteElementb11() {
  // crée un nouvel élément audio
  injectionb11 = document.createElement("pre");
  injectionb11.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penb11 = document.getElementById("repere_injection_monde2_img11");
  document.body.insertBefore(injectionb11, penb11);
}
ajouteElementb11();
}
//fin button b11


//button b12



/********/
document.getElementById("tetb12").onclick = function() {enb12()};
function enb12() {
regarde();
var penb12 = null;
var injectionb12 = null;

function ajouteElementb12() {
  // crée un nouvel élément audio
  injectionb12 = document.createElement("pre");
  injectionb12.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penb12 = document.getElementById("repere_injection_monde2_img12");
  document.body.insertBefore(injectionb12, penb12);
}
ajouteElementb12();

}
//fin button b12
//button b13
document.getElementById("tetb13").onclick = function() {enb13()};
function enb13() {
regarde();
var penb13 = null;
var injectionb13 = null;

function ajouteElementb13() {
  // crée un nouvel élément audio
  injectionb13 = document.createElement("pre");
  injectionb13.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penb13 = document.getElementById("repere_injection_monde2_img13");
  document.body.insertBefore(injectionb13, penb13);
}
ajouteElementb13();
}
//fin button b13
//button b14
document.getElementById("tetb14").onclick = function() {enb14()};
function enb14() {
regarde();
var penb14 = null;
var injectionb14 = null;

function ajouteElementb14() {
  // crée un nouvel élément audio
  injectionb14 = document.createElement("pre");
  injectionb14.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penb14 = document.getElementById("repere_injection_monde2_img14");
  document.body.insertBefore(injectionb14, penb14);
}
ajouteElementb14();
}
//fin button b14
//button b15
document.getElementById("tetb15").onclick = function() {enb15()};
function enb15() {
regarde();
var penb15 = null;
var injectionb15 = null;

function ajouteElementb15() {
  // crée un nouvel élément audio
  injectionb15 = document.createElement("pre");
  injectionb15.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penb15 = document.getElementById("repere_injection_monde2_img15");
  document.body.insertBefore(injectionb15, penb15);
}
ajouteElementb15();
}
//fin button b15
//button b16
document.getElementById("tetb16").onclick = function() {enb16()};
function enb16() {
regarde();
var penb16 = null;
var injectionb16 = null;

function ajouteElementb16() {
  // crée un nouvel élément audio
  injectionb16 = document.createElement("pre");
  injectionb16.textContent ="<div class=\"tourne" + donne12 + "\" style=\"position:absolute; margin-left:" + donne16 + "px ; margin-top:" + donne17 + "px ; width:"+ donne1 + "px; height:" +  donne2 + "px  ; background-color:" + donne3 + " ;opacity:0." + donne13 + " ; border-radius:" + donne4 + "% " + donne5 + "% " + donne6 + "% " + donne7 + "% / " + donne8 + "% " + donne9 + "% " + donne10 + "% " + donne11+ "% \"> </div>";
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penb16 = document.getElementById("repere_injection_monde2_img16");
  document.body.insertBefore(injectionb16, penb16);
}
ajouteElementb16();
}
//fin button b16
//fin generateur images css

/****************************/

//button v1
document.getElementById("v1").onclick = function() {env1()};
function env1() {

if (gestiondu15 <2)
{
regarde();
var penv1 = null;
var injectionv1 = null;

function ajouteElementv1() {
  // crée un nouvel élément audio
  injectionv1 = document.createElement("pre");
  injectionv1.textContent = "var vitesseDuVent = " + donne15 +";" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  penv1 = document.getElementById("vitesse");
  document.body.insertBefore(injectionv1, penv1);
}
ajouteElementv1();

gestiondu15 = gestiondu15 +1;
}//fin du if gestion15
}
//fin button v1
//fin gestion vitesse initiale

/************************************/
//debut placement des fichiers son dans la video pour le grand mixe
//button s1
document.getElementById("snd1").onclick = function() {ens1()};
function ens1() {
regarde1();
var pens1 = null;
var injections1 = null;

function ajouteElements1() {
  // crée un nouvel élément audio
  injections1 = document.createElement("pre");
  injections1.textContent ="JoueLeSon" + donneson + "();" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens1 = document.getElementById("repere_son1");
  document.body.insertBefore(injections1, pens1);
}
ajouteElements1();
}
//button s2
document.getElementById("snd2").onclick = function() {ens2()};
function ens2() {
regarde1();
var pens2 = null;
var injections2 = null;

function ajouteElements2() {
  // crée un nouvel élément audio
  injections2 = document.createElement("pre");
  injections2.textContent ="JoueLeSon" + donneson + "();" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens2 = document.getElementById("repere_son2");
  document.body.insertBefore(injections2, pens2);
}
ajouteElements2();
}
//button s3
document.getElementById("snd3").onclick = function() {ens3()};
function ens3() {
regarde1();
var pens3 = null;
var injections3 = null;

function ajouteElements3() {
  // crée un nouvel élément audio
  injections3 = document.createElement("pre");
  injections3.textContent ="JoueLeSon" + donneson + "();" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens3 = document.getElementById("repere_son3");
  document.body.insertBefore(injections3, pens3);
}
ajouteElements3();
}
//button s4
document.getElementById("snd4").onclick = function() {ens4()};
function ens4() {
regarde1();
var pens4 = null;
var injections4 = null;

function ajouteElements4() {
  // crée un nouvel élément audio
  injections4 = document.createElement("pre");
  injections4.textContent ="JoueLeSon" + donneson + "();" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens4 = document.getElementById("repere_son4");
  document.body.insertBefore(injections4, pens4);
}
ajouteElements4();
}
//button s5
document.getElementById("snd5").onclick = function() {ens5()};
function ens5() {
regarde1();
var pens5 = null;
var injections5 = null;

function ajouteElements5() {
  // crée un nouvel élément audio
  injections5 = document.createElement("pre");
  injections5.textContent ="JoueLeSon" + donneson + "();" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens5 = document.getElementById("repere_son5");
  document.body.insertBefore(injections5, pens5);
}
ajouteElements5();
}
//button s6
document.getElementById("snd6").onclick = function() {ens6()};
function ens6() {
regarde1();
var pens6 = null;
var injections6 = null;

function ajouteElements6() {
  // crée un nouvel élément audio
  injections6 = document.createElement("pre");
  injections6.textContent ="JoueLeSon" + donneson + "();" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens6 = document.getElementById("repere_son6");
  document.body.insertBefore(injections6, pens6);
}
ajouteElements6();
}
//button s7
document.getElementById("snd7").onclick = function() {ens7()};
function ens7() {
regarde1();
var pens7 = null;
var injections7 = null;

function ajouteElements7() {
  // crée un nouvel élément audio
  injections7 = document.createElement("pre");
  injections7.textContent ="JoueLeSon" + donneson + "();" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens7 = document.getElementById("repere_son7");
  document.body.insertBefore(injections7, pens7);
}
ajouteElements7();
}
//button s8
document.getElementById("snd8").onclick = function() {ens8()};
function ens8() {
regarde1();
var pens8 = null;
var injections8 = null;

function ajouteElements8() {
  // crée un nouvel élément audio
  injections8 = document.createElement("pre");
  injections8.textContent ="JoueLeSon" + donneson + "();" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens8 = document.getElementById("repere_son8");
  document.body.insertBefore(injections8, pens8);
}
ajouteElements8();
}
//button s9
document.getElementById("snd9").onclick = function() {ens9()};
function ens9() {
regarde1();
var pens9 = null;
var injections9 = null;

function ajouteElements9() {
  // crée un nouvel élément audio
  injections9 = document.createElement("pre");
  injections9.textContent ="JoueLeSon" + donneson + "();" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens9 = document.getElementById("repere_son9");
  document.body.insertBefore(injections9, pens9);
}
ajouteElements9();
}
//button s10
document.getElementById("snd10").onclick = function() {ens10()};
function ens10() {
regarde1();
var pens10 = null;
var injections10 = null;

function ajouteElements10() {
  // crée un nouvel élément audio
  injections10 = document.createElement("pre");
  injections10.textContent ="JoueLeSon" + donneson + "();" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens10 = document.getElementById("repere_son10");
  document.body.insertBefore(injections10, pens10);
}
ajouteElements10();
}
//button s11
document.getElementById("snd11").onclick = function() {ens11()};
function ens11() {
regarde1();
var pens11 = null;
var injections11 = null;

function ajouteElements11() {
  // crée un nouvel élément audio
  injections11 = document.createElement("pre");
  injections11.textContent ="JoueLeSon" + donneson + "();" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens11 = document.getElementById("repere_son11");
  document.body.insertBefore(injections11, pens11);
}
ajouteElements11();
}
//button s12
document.getElementById("snd12").onclick = function() {ens12()};
function ens12() {
regarde1();
var pens12 = null;
var injections12 = null;

function ajouteElements12() {
  // crée un nouvel élément audio
  injections12 = document.createElement("pre");
  injections12.textContent ="JoueLeSon" + donneson + "();" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens12 = document.getElementById("repere_son12");
  document.body.insertBefore(injections12, pens12);
}
ajouteElements12();
}
//button s13
document.getElementById("snd13").onclick = function() {ens13()};
function ens13() {
regarde1();
var pens13 = null;
var injections13 = null;

function ajouteElements13() {
  // crée un nouvel élément audio
  injections13 = document.createElement("pre");
  injections13.textContent ="JoueLeSon" + donneson + "();" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens13 = document.getElementById("repere_son13");
  document.body.insertBefore(injections13, pens13);
}
ajouteElements13();
}
//button s14
document.getElementById("snd14").onclick = function() {ens14()};
function ens14() {
regarde1();
var pens14 = null;
var injections14 = null;

function ajouteElements14() {
  // crée un nouvel élément audio
  injections14 = document.createElement("pre");
  injections14.textContent ="JoueLeSon" + donneson + "();" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens14 = document.getElementById("repere_son14");
  document.body.insertBefore(injections14, pens14);
}
ajouteElements14();
}
//button s15
document.getElementById("snd15").onclick = function() {ens15()};
function ens15() {
regarde1();
var pens15 = null;
var injections15 = null;

function ajouteElements15() {
  // crée un nouvel élément audio
  injections15 = document.createElement("pre");
  injections15.textContent ="JoueLeSon" + donneson + "();" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens15 = document.getElementById("repere_son15");
  document.body.insertBefore(injections15, pens15);
}
ajouteElements15();
}
//button s16
document.getElementById("snd16").onclick = function() {ens16()};
function ens16() {
regarde1();
var pens16 = null;
var injections16 = null;

function ajouteElements16() {
  // crée un nouvel élément audio
  injections16 = document.createElement("pre");
  injections16.textContent ="JoueLeSon" + donneson + "();" ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  pens16 = document.getElementById("repere_son16");
  document.body.insertBefore(injections16, pens16);
}
ajouteElements16();
}

/************************************/

//debut introduction des fichiers son en mémoire dans le head de la video

//input 1
function PrendTout1(file) 
{
    var name1 = file.name;
    var reader1 = new FileReader();  
    reader1.onload = function(e1) 
	{ 
text1 = e1.target.result.split(""); 

function convertit(text1)

{

var MiseEnMemoire_Def_Lecture;

    			for (var i = 0; i < text1.length; i++)
			{

switch(text1[i]) {
    case "\x00":        FichierAudioJo[i] = 0;        break;
    case "\x01":        FichierAudioJo[i] = 1;        break;
    case "\x02":        FichierAudioJo[i] = 2;        break;
    case "\x03":        FichierAudioJo[i] = 3;        break;
    case "\x04":        FichierAudioJo[i] = 4;        break;
    case "\x05":        FichierAudioJo[i] = 5;        break;
    case "\x06":        FichierAudioJo[i] = 6;        break;
    case "\x07":        FichierAudioJo[i] = 7;        break;
    case "\x08":        FichierAudioJo[i] = 8;        break;
    case "\x09":        FichierAudioJo[i] = 9;        break;
    case "\x0A":        FichierAudioJo[i] = 10;        break;
    case "\x0B":        FichierAudioJo[i] = 11;        break;
    case "\x0C":        FichierAudioJo[i] = 12;        break;
    case "\x0D":        FichierAudioJo[i] = 13;        break;
    case "\x0E":        FichierAudioJo[i] = 14;        break;
    case "\x0F":        FichierAudioJo[i] = 15;        break;
/**caractere indefini debut a 30***********/
    case "\x10":        FichierAudioJo[i] = 16;        break;
    case "\x11":        FichierAudioJo[i] = 17;        break;
    case "\x12":        FichierAudioJo[i] = 18;        break;
    case "\x13":        FichierAudioJo[i] = 19;        break;
    case "\x14":        FichierAudioJo[i] = 20;        break;
    case "\x15":        FichierAudioJo[i] = 21;        break;
    case "\x16":        FichierAudioJo[i] = 22;        break;
    case "\x17":        FichierAudioJo[i] = 23;        break;
    case "\x18":        FichierAudioJo[i] = 24;        break;
    case "\x19":        FichierAudioJo[i] = 25;        break;
    case "\x1A":        FichierAudioJo[i] = 26;        break;
    case "\x1B":        FichierAudioJo[i] = 27;        break;
    case "\x1C":        FichierAudioJo[i] = 28;        break;
    case "\x1D":        FichierAudioJo[i] = 29;        break;
    case "\x1E":        FichierAudioJo[i] = 30;        break;
    case "\x1F":        FichierAudioJo[i] = 31;        break;
/************/
    case "\x20":        FichierAudioJo[i] = 32;        break;
    case "\x21":        FichierAudioJo[i] = 33;        break;
    case "\x22":        FichierAudioJo[i] = 34;        break;
    case "\x23":        FichierAudioJo[i] = 35;        break;
    case "\x24":        FichierAudioJo[i] = 36;        break;
    case "\x25":        FichierAudioJo[i] = 37;        break;
    case "\x26":        FichierAudioJo[i] = 38;        break;
    case "\x27":        FichierAudioJo[i] = 39;        break;
    case "\x28":        FichierAudioJo[i] = 40;        break;
    case "\x29":        FichierAudioJo[i] = 41;        break;
    case "\x2A":        FichierAudioJo[i] = 42;        break;
    case "\x2B":        FichierAudioJo[i] = 43;        break;
    case "\x2C":        FichierAudioJo[i] = 44;        break;
    case "\x2D":        FichierAudioJo[i] = 45;        break;
    case "\x2E":        FichierAudioJo[i] = 46;        break;
    case "\x2F":        FichierAudioJo[i] = 47;        break;
/*****************/
    case "\x30":        FichierAudioJo[i] = 48;        break;
    case "\x31":        FichierAudioJo[i] = 49;        break;
    case "\x32":        FichierAudioJo[i] = 50;        break;
    case "\x33":        FichierAudioJo[i] = 51;        break;
    case "\x34":        FichierAudioJo[i] = 52;        break;
    case "\x35":        FichierAudioJo[i] = 53;        break;
    case "\x36":        FichierAudioJo[i] = 54;        break;
    case "\x37":        FichierAudioJo[i] = 55;        break;
    case "\x38":        FichierAudioJo[i] = 56;        break;
    case "\x39":        FichierAudioJo[i] = 57;        break;
    case "\x3A":        FichierAudioJo[i] = 58;        break;
    case "\x3B":        FichierAudioJo[i] = 59;        break;
    case "\x3C":        FichierAudioJo[i] = 60;        break;
    case "\x3D":        FichierAudioJo[i] = 61;        break;
    case "\x3E":        FichierAudioJo[i] = 62;        break;
    case "\x3F":        FichierAudioJo[i] = 63;        break;
/*************/
    case "\x40":        FichierAudioJo[i] = 64;        break;
    case "\x41":        FichierAudioJo[i] = 65;        break;
    case "\x42":        FichierAudioJo[i] = 66;        break;
    case "\x43":        FichierAudioJo[i] = 67;        break;
    case "\x44":        FichierAudioJo[i] = 68;        break;
    case "\x45":        FichierAudioJo[i] = 69;        break;
    case "\x46":        FichierAudioJo[i] = 70;        break;
    case "\x47":        FichierAudioJo[i] = 71;        break;
    case "\x48":        FichierAudioJo[i] = 72;        break;
    case "\x49":        FichierAudioJo[i] = 73;        break;
    case "\x4A":        FichierAudioJo[i] = 74;        break;
    case "\x4B":        FichierAudioJo[i] = 75;        break;
    case "\x4C":        FichierAudioJo[i] = 76;        break;
    case "\x4D":        FichierAudioJo[i] = 77;        break;
    case "\x4E":        FichierAudioJo[i] = 78;        break;
    case "\x4F":        FichierAudioJo[i] = 79;        break;
/***************/
    case "\x50":        FichierAudioJo[i] = 80;        break;
    case "\x51":        FichierAudioJo[i] = 81;        break;
    case "\x52":        FichierAudioJo[i] = 82;        break;
    case "\x53":        FichierAudioJo[i] = 83;        break;
    case "\x54":        FichierAudioJo[i] = 84;        break;
    case "\x55":        FichierAudioJo[i] = 85;        break;
    case "\x56":        FichierAudioJo[i] = 86;        break;
    case "\x57":        FichierAudioJo[i] = 87;        break;
    case "\x58":        FichierAudioJo[i] = 88;        break;
    case "\x59":        FichierAudioJo[i] = 89;        break;
    case "\x5A":        FichierAudioJo[i] = 90;        break;
    case "\x5B":        FichierAudioJo[i] = 91;        break;
    case "\x5C":        FichierAudioJo[i] = 92;        break;
    case "\x5D":        FichierAudioJo[i] = 93;        break;
    case "\x5E":        FichierAudioJo[i] = 94;        break;
    case "\x5F":        FichierAudioJo[i] = 95;        break;
/***************/
    case "\x60":        FichierAudioJo[i] = 96;        break;
    case "\x61":        FichierAudioJo[i] = 97;        break;
    case "\x62":        FichierAudioJo[i] = 98;        break;
    case "\x63":        FichierAudioJo[i] = 99;        break;
    case "\x64":        FichierAudioJo[i] = 100;        break;
    case "\x65":        FichierAudioJo[i] = 101;        break;
    case "\x66":        FichierAudioJo[i] = 102;        break;
    case "\x67":        FichierAudioJo[i] = 103;        break;
    case "\x68":        FichierAudioJo[i] = 104;        break;
    case "\x69":        FichierAudioJo[i] = 105;        break;
    case "\x6A":        FichierAudioJo[i] = 106;        break;
    case "\x6B":        FichierAudioJo[i] = 107;        break;
    case "\x6C":        FichierAudioJo[i] = 108;        break;
    case "\x6D":        FichierAudioJo[i] = 109;        break;
    case "\x6E":        FichierAudioJo[i] = 110;        break;
    case "\x6F":        FichierAudioJo[i] = 111;        break;
/**********/
    case "\x70":        FichierAudioJo[i] = 112;        break;
    case "\x71":        FichierAudioJo[i] = 113;        break;
    case "\x72":        FichierAudioJo[i] = 114;        break;
    case "\x73":        FichierAudioJo[i] = 115;        break;
    case "\x74":        FichierAudioJo[i] = 116;        break;
    case "\x75":        FichierAudioJo[i] = 117;        break;
    case "\x76":        FichierAudioJo[i] = 118;        break;
    case "\x77":        FichierAudioJo[i] = 119;        break;
    case "\x78":        FichierAudioJo[i] = 120;        break;
    case "\x79":        FichierAudioJo[i] = 121;        break;
    case "\x7A":        FichierAudioJo[i] = 122;        break;
    case "\x7B":        FichierAudioJo[i] = 123;        break;
    case "\x7C":        FichierAudioJo[i] = 124;        break;
    case "\x7D":        FichierAudioJo[i] = 125;        break;
    case "\x7E":        FichierAudioJo[i] = 126;        break;
    case "\x7F":        FichierAudioJo[i] = 127;        break;
/*****8**debut caractere indefini****/
    case "\x80":        FichierAudioJo[i] = 128;        break;
    case "\x81":        FichierAudioJo[i] = 129;        break;
    case "\x82":        FichierAudioJo[i] = 130;        break;
    case "\x83":        FichierAudioJo[i] = 131;        break;
    case "\x84":        FichierAudioJo[i] = 132;        break;
    case "\x85":        FichierAudioJo[i] = 133;        break;
    case "\x86":       FichierAudioJo[i] = 134;        break;
    case "\x87":       FichierAudioJo[i] = 135;        break;
    case "\x88":        FichierAudioJo[i] = 136;        break;
    case "\x89":       FichierAudioJo[i] = 137;        break;
    case "\x8A":        FichierAudioJo[i] = 138;        break;
    case "\x8B":       FichierAudioJo[i] = 139;        break;
    case "\x8C":      FichierAudioJo[i] = 140;        break;
    case "\x8D":        FichierAudioJo[i] = 141;        break;
    case "\x8E":       FichierAudioJo[i] = 142;        break;
    case "\x8F":        FichierAudioJo[i] = 143;        break;
/********9**********/
    case "\x90":        FichierAudioJo[i] = 144;        break;
    case "\x91":       FichierAudioJo[i] = 145;        break;
    case "\x92":       FichierAudioJo[i] = 146;        break;
    case "\x93":        FichierAudioJo[i] = 147;        break;
    case "\x94":        FichierAudioJo[i] = 148;        break;
    case "\x95":       FichierAudioJo[i] = 149;        break;
    case "\x96":      FichierAudioJo[i] = 150;        break;
    case "\x97":      FichierAudioJo[i] = 151;        break;
    case "\x98":       FichierAudioJo[i] = 152;        break;
    case "\x99":       FichierAudioJo[i] = 153;        break;
    case "\x9A":       FichierAudioJo[i] = 154;        break;
    case "\x9B":       FichierAudioJo[i] = 155;        break;
    case "\x9C":      FichierAudioJo[i] = 156;        break;
    case "\x9D":      FichierAudioJo[i] = 157;        break;
    case "\x9E":      FichierAudioJo[i] = 158;        break;
    case "\x9F":       FichierAudioJo[i] = 159;        break;
/**fin caractere indefini*A**/
    case "\xA0":        FichierAudioJo[i] = 160;        break;
    case "\xA1":        FichierAudioJo[i] = 161;        break;
    case "\xA2":        FichierAudioJo[i] = 162;        break;
    case "\xA3":        FichierAudioJo[i] = 163;        break;
    case "\xA4":        FichierAudioJo[i] = 164;        break;
    case "\xA5":        FichierAudioJo[i] = 165;        break;
    case "\xA6":        FichierAudioJo[i] = 166;        break;
    case "\xA7":        FichierAudioJo[i] = 167;        break;
    case "\xA8":        FichierAudioJo[i] = 168;        break;
    case "\xA9":        FichierAudioJo[i] = 169;        break;
    case "\xAA":        FichierAudioJo[i] = 170;        break;
    case "\xAB":        FichierAudioJo[i] = 171;        break;
    case "\xAC":        FichierAudioJo[i] = 172;        break;
    case "\xAD":        FichierAudioJo[i] = 173;        break;
    case "\xAE":        FichierAudioJo[i] = 174;        break;
    case "\xAF":        FichierAudioJo[i] = 175;        break;
/*******B******/
    case "\xB0":        FichierAudioJo[i] = 176;        break;
    case "\xB1":        FichierAudioJo[i] = 177;        break;
    case "\xB2":        FichierAudioJo[i] = 178;        break;
    case "\xB3":        FichierAudioJo[i] = 179;        break;
    case "\xB4":        FichierAudioJo[i] = 180;        break;
    case "\xB5":        FichierAudioJo[i] = 181;        break;
    case "\xB6":        FichierAudioJo[i] = 182;        break;
    case "\xB7":        FichierAudioJo[i] = 183;        break;
    case "\xB8":        FichierAudioJo[i] = 184;        break;
    case "\xB9":        FichierAudioJo[i] = 185;        break;
    case "\xBA":        FichierAudioJo[i] = 186;        break;
    case "\xBB":        FichierAudioJo[i] = 187;        break;
    case "\xBC":        FichierAudioJo[i] = 188;        break;
    case "\xBD":        FichierAudioJo[i] = 189;        break;
    case "\xBE":        FichierAudioJo[i] = 190;        break;
    case "\xBF":        FichierAudioJo[i] = 191;        break;
/*******C*******/
    case "\xC0":        FichierAudioJo[i] = 192;        break;
    case "\xC1":        FichierAudioJo[i] = 193;        break;
    case "\xC2":        FichierAudioJo[i] = 194;        break;
    case "\xC3":        FichierAudioJo[i] = 195;        break;
    case "\xC4":        FichierAudioJo[i] = 196;        break;
    case "\xC5":        FichierAudioJo[i] = 197;        break;
    case "\xC6":        FichierAudioJo[i] = 198;        break;
    case "\xC7":        FichierAudioJo[i] = 199;        break;
    case "\xC8":        FichierAudioJo[i] = 200;        break;
    case "\xC9":        FichierAudioJo[i] = 201;        break;
    case "\xCA":        FichierAudioJo[i] = 202;        break;
    case "\xCB":        FichierAudioJo[i] = 203;        break;
    case "\xCC":        FichierAudioJo[i] = 204;        break;
    case "\xCD":        FichierAudioJo[i] = 205;        break;
    case "\xCE":        FichierAudioJo[i] = 206;        break;
    case "\xCF":        FichierAudioJo[i] = 207;        break;
/**********D*************/
    case "\xD0":        FichierAudioJo[i] = 208;        break;
    case "\xD1":        FichierAudioJo[i] = 209;        break;
    case "\xD2":        FichierAudioJo[i] = 210;        break;
    case "\xD3":        FichierAudioJo[i] = 211;        break;
    case "\xD4":        FichierAudioJo[i] = 212;        break;
    case "\xD5":        FichierAudioJo[i] = 213;        break;
    case "\xD6":        FichierAudioJo[i] = 214;        break;
    case "\xD7":        FichierAudioJo[i] = 215;        break;
    case "\xD8":        FichierAudioJo[i] = 216;        break;
    case "\xD9":        FichierAudioJo[i] = 217;        break;
    case "\xDA":        FichierAudioJo[i] = 218;        break;
    case "\xDB":        FichierAudioJo[i] = 219;        break;
    case "\xDC":        FichierAudioJo[i] = 220;        break;
    case "\xDD":        FichierAudioJo[i] = 221;        break;
    case "\xDE":        FichierAudioJo[i] = 222;        break;
    case "\xDF":        FichierAudioJo[i] = 223;        break;
/**********E********/
    case "\xE0":        FichierAudioJo[i] = 224;        break;
    case "\xE1":        FichierAudioJo[i] = 225;        break;
    case "\xE2":        FichierAudioJo[i] = 226;        break;
    case "\xE3":        FichierAudioJo[i] = 227;        break;
    case "\xE4":        FichierAudioJo[i] = 228;        break;
    case "\xE5":        FichierAudioJo[i] = 229;        break;
    case "\xE6":        FichierAudioJo[i] = 230;        break;
    case "\xE7":        FichierAudioJo[i] = 231;        break;
    case "\xE8":        FichierAudioJo[i] = 232;        break;
    case "\xE9":        FichierAudioJo[i] = 233;        break;
    case "\xEA":        FichierAudioJo[i] = 234;        break;
    case "\xEB":        FichierAudioJo[i] = 235;        break;
    case "\xEC":        FichierAudioJo[i] = 236;        break;
    case "\xED":        FichierAudioJo[i] = 237;        break;
    case "\xEE":        FichierAudioJo[i] = 238;        break;
    case "\xEF":        FichierAudioJo[i] = 239;        break;
/*****F*****/
    case "\xF0":        FichierAudioJo[i] = 240;        break;
    case "\xF1":        FichierAudioJo[i] = 241;        break;
    case "\xF2":        FichierAudioJo[i] = 242;        break;
    case "\xF3":        FichierAudioJo[i] = 243;        break;
    case "\xF4":        FichierAudioJo[i] = 244;        break;
    case "\xF5":        FichierAudioJo[i] = 245;        break;
    case "\xF6":        FichierAudioJo[i] = 246;        break;
    case "\xF7":        FichierAudioJo[i] = 247;        break;
    case "\xF8":        FichierAudioJo[i] = 248;        break;
    case "\xF9":        FichierAudioJo[i] = 249;        break;
    case "\xFA":        FichierAudioJo[i] = 250;        break;
    case "\xFB":        FichierAudioJo[i] = 251;        break;
    case "\xFC":        FichierAudioJo[i] = 252;        break;
    case "\xFD":        FichierAudioJo[i] = 253;        break;
    case "\xFE":        FichierAudioJo[i] = 254;        break;
    case "\xFF":        FichierAudioJo[i] = 255;        break;
    default:        FichierAudioJo[i] = MiseEnMemoire_Def_Lecture;

MiseEnMemoire_Def_Lecture = FichierAudioJo;
} //fin switch texte1
			} //fin for texte1

 
			}			

convertit(text1);



function ajouteson1() 
		{

  injectionson1 = document.createElement("pre");
  injectionson1.textContent = FichierAudioJo ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  son1 = document.getElementById("donner_son1");
  document.body.insertBefore(injectionson1, son1);
		}
ajouteson1();
	}

reader1.readAsBinaryString(file, "UTF-1616");
}

function gens1(fileList1) 
{
    for (var i = 0; i < fileList1.length; i++) 
	{
        PrendTout1(fileList1[i]);
	}
}


//input 2
function PrendTout2(file) 
{
    var name2 = file.name;
    var reader2 = new FileReader();  
    reader2.onload = function(e2) 
	{ 
text2 = e2.target.result.split(""); 

function convertit(text2)

{

var MiseEnMemoire_Def_Lecture;

    			for (var i = 0; i < text2.length; i++)
			{

switch(text2[i]) {
    case "\x00":        FichierAudioJo[i] = 0;        break;
    case "\x01":        FichierAudioJo[i] = 1;        break;
    case "\x02":        FichierAudioJo[i] = 2;        break;
    case "\x03":        FichierAudioJo[i] = 3;        break;
    case "\x04":        FichierAudioJo[i] = 4;        break;
    case "\x05":        FichierAudioJo[i] = 5;        break;
    case "\x06":        FichierAudioJo[i] = 6;        break;
    case "\x07":        FichierAudioJo[i] = 7;        break;
    case "\x08":        FichierAudioJo[i] = 8;        break;
    case "\x09":        FichierAudioJo[i] = 9;        break;
    case "\x0A":        FichierAudioJo[i] = 10;        break;
    case "\x0B":        FichierAudioJo[i] = 11;        break;
    case "\x0C":        FichierAudioJo[i] = 12;        break;
    case "\x0D":        FichierAudioJo[i] = 13;        break;
    case "\x0E":        FichierAudioJo[i] = 14;        break;
    case "\x0F":        FichierAudioJo[i] = 15;        break;
/**caractere indefini debut a 30***********/
    case "\x10":        FichierAudioJo[i] = 16;        break;
    case "\x11":        FichierAudioJo[i] = 17;        break;
    case "\x12":        FichierAudioJo[i] = 18;        break;
    case "\x13":        FichierAudioJo[i] = 19;        break;
    case "\x14":        FichierAudioJo[i] = 20;        break;
    case "\x15":        FichierAudioJo[i] = 21;        break;
    case "\x16":        FichierAudioJo[i] = 22;        break;
    case "\x17":        FichierAudioJo[i] = 23;        break;
    case "\x18":        FichierAudioJo[i] = 24;        break;
    case "\x19":        FichierAudioJo[i] = 25;        break;
    case "\x1A":        FichierAudioJo[i] = 26;        break;
    case "\x1B":        FichierAudioJo[i] = 27;        break;
    case "\x1C":        FichierAudioJo[i] = 28;        break;
    case "\x1D":        FichierAudioJo[i] = 29;        break;
    case "\x1E":        FichierAudioJo[i] = 30;        break;
    case "\x1F":        FichierAudioJo[i] = 31;        break;
/************/
    case "\x20":        FichierAudioJo[i] = 32;        break;
    case "\x21":        FichierAudioJo[i] = 33;        break;
    case "\x22":        FichierAudioJo[i] = 34;        break;
    case "\x23":        FichierAudioJo[i] = 35;        break;
    case "\x24":        FichierAudioJo[i] = 36;        break;
    case "\x25":        FichierAudioJo[i] = 37;        break;
    case "\x26":        FichierAudioJo[i] = 38;        break;
    case "\x27":        FichierAudioJo[i] = 39;        break;
    case "\x28":        FichierAudioJo[i] = 40;        break;
    case "\x29":        FichierAudioJo[i] = 41;        break;
    case "\x2A":        FichierAudioJo[i] = 42;        break;
    case "\x2B":        FichierAudioJo[i] = 43;        break;
    case "\x2C":        FichierAudioJo[i] = 44;        break;
    case "\x2D":        FichierAudioJo[i] = 45;        break;
    case "\x2E":        FichierAudioJo[i] = 46;        break;
    case "\x2F":        FichierAudioJo[i] = 47;        break;
/*****************/
    case "\x30":        FichierAudioJo[i] = 48;        break;
    case "\x31":        FichierAudioJo[i] = 49;        break;
    case "\x32":        FichierAudioJo[i] = 50;        break;
    case "\x33":        FichierAudioJo[i] = 51;        break;
    case "\x34":        FichierAudioJo[i] = 52;        break;
    case "\x35":        FichierAudioJo[i] = 53;        break;
    case "\x36":        FichierAudioJo[i] = 54;        break;
    case "\x37":        FichierAudioJo[i] = 55;        break;
    case "\x38":        FichierAudioJo[i] = 56;        break;
    case "\x39":        FichierAudioJo[i] = 57;        break;
    case "\x3A":        FichierAudioJo[i] = 58;        break;
    case "\x3B":        FichierAudioJo[i] = 59;        break;
    case "\x3C":        FichierAudioJo[i] = 60;        break;
    case "\x3D":        FichierAudioJo[i] = 61;        break;
    case "\x3E":        FichierAudioJo[i] = 62;        break;
    case "\x3F":        FichierAudioJo[i] = 63;        break;
/*************/
    case "\x40":        FichierAudioJo[i] = 64;        break;
    case "\x41":        FichierAudioJo[i] = 65;        break;
    case "\x42":        FichierAudioJo[i] = 66;        break;
    case "\x43":        FichierAudioJo[i] = 67;        break;
    case "\x44":        FichierAudioJo[i] = 68;        break;
    case "\x45":        FichierAudioJo[i] = 69;        break;
    case "\x46":        FichierAudioJo[i] = 70;        break;
    case "\x47":        FichierAudioJo[i] = 71;        break;
    case "\x48":        FichierAudioJo[i] = 72;        break;
    case "\x49":        FichierAudioJo[i] = 73;        break;
    case "\x4A":        FichierAudioJo[i] = 74;        break;
    case "\x4B":        FichierAudioJo[i] = 75;        break;
    case "\x4C":        FichierAudioJo[i] = 76;        break;
    case "\x4D":        FichierAudioJo[i] = 77;        break;
    case "\x4E":        FichierAudioJo[i] = 78;        break;
    case "\x4F":        FichierAudioJo[i] = 79;        break;
/***************/
    case "\x50":        FichierAudioJo[i] = 80;        break;
    case "\x51":        FichierAudioJo[i] = 81;        break;
    case "\x52":        FichierAudioJo[i] = 82;        break;
    case "\x53":        FichierAudioJo[i] = 83;        break;
    case "\x54":        FichierAudioJo[i] = 84;        break;
    case "\x55":        FichierAudioJo[i] = 85;        break;
    case "\x56":        FichierAudioJo[i] = 86;        break;
    case "\x57":        FichierAudioJo[i] = 87;        break;
    case "\x58":        FichierAudioJo[i] = 88;        break;
    case "\x59":        FichierAudioJo[i] = 89;        break;
    case "\x5A":        FichierAudioJo[i] = 90;        break;
    case "\x5B":        FichierAudioJo[i] = 91;        break;
    case "\x5C":        FichierAudioJo[i] = 92;        break;
    case "\x5D":        FichierAudioJo[i] = 93;        break;
    case "\x5E":        FichierAudioJo[i] = 94;        break;
    case "\x5F":        FichierAudioJo[i] = 95;        break;
/***************/
    case "\x60":        FichierAudioJo[i] = 96;        break;
    case "\x61":        FichierAudioJo[i] = 97;        break;
    case "\x62":        FichierAudioJo[i] = 98;        break;
    case "\x63":        FichierAudioJo[i] = 99;        break;
    case "\x64":        FichierAudioJo[i] = 100;        break;
    case "\x65":        FichierAudioJo[i] = 101;        break;
    case "\x66":        FichierAudioJo[i] = 102;        break;
    case "\x67":        FichierAudioJo[i] = 103;        break;
    case "\x68":        FichierAudioJo[i] = 104;        break;
    case "\x69":        FichierAudioJo[i] = 105;        break;
    case "\x6A":        FichierAudioJo[i] = 106;        break;
    case "\x6B":        FichierAudioJo[i] = 107;        break;
    case "\x6C":        FichierAudioJo[i] = 108;        break;
    case "\x6D":        FichierAudioJo[i] = 109;        break;
    case "\x6E":        FichierAudioJo[i] = 110;        break;
    case "\x6F":        FichierAudioJo[i] = 111;        break;
/**********/
    case "\x70":        FichierAudioJo[i] = 112;        break;
    case "\x71":        FichierAudioJo[i] = 113;        break;
    case "\x72":        FichierAudioJo[i] = 114;        break;
    case "\x73":        FichierAudioJo[i] = 115;        break;
    case "\x74":        FichierAudioJo[i] = 116;        break;
    case "\x75":        FichierAudioJo[i] = 117;        break;
    case "\x76":        FichierAudioJo[i] = 118;        break;
    case "\x77":        FichierAudioJo[i] = 119;        break;
    case "\x78":        FichierAudioJo[i] = 120;        break;
    case "\x79":        FichierAudioJo[i] = 121;        break;
    case "\x7A":        FichierAudioJo[i] = 122;        break;
    case "\x7B":        FichierAudioJo[i] = 123;        break;
    case "\x7C":        FichierAudioJo[i] = 124;        break;
    case "\x7D":        FichierAudioJo[i] = 125;        break;
    case "\x7E":        FichierAudioJo[i] = 126;        break;
    case "\x7F":        FichierAudioJo[i] = 127;        break;
/*****8**debut caractere indefini****/
    case "\x80":        FichierAudioJo[i] = 128;        break;
    case "\x81":        FichierAudioJo[i] = 129;        break;
    case "\x82":        FichierAudioJo[i] = 130;        break;
    case "\x83":        FichierAudioJo[i] = 131;        break;
    case "\x84":        FichierAudioJo[i] = 132;        break;
    case "\x85":        FichierAudioJo[i] = 133;        break;
    case "\x86":       FichierAudioJo[i] = 134;        break;
    case "\x87":       FichierAudioJo[i] = 135;        break;
    case "\x88":        FichierAudioJo[i] = 136;        break;
    case "\x89":       FichierAudioJo[i] = 137;        break;
    case "\x8A":        FichierAudioJo[i] = 138;        break;
    case "\x8B":       FichierAudioJo[i] = 139;        break;
    case "\x8C":      FichierAudioJo[i] = 140;        break;
    case "\x8D":        FichierAudioJo[i] = 141;        break;
    case "\x8E":       FichierAudioJo[i] = 142;        break;
    case "\x8F":        FichierAudioJo[i] = 143;        break;
/********9**********/
    case "\x90":        FichierAudioJo[i] = 144;        break;
    case "\x91":       FichierAudioJo[i] = 145;        break;
    case "\x92":       FichierAudioJo[i] = 146;        break;
    case "\x93":        FichierAudioJo[i] = 147;        break;
    case "\x94":        FichierAudioJo[i] = 148;        break;
    case "\x95":       FichierAudioJo[i] = 149;        break;
    case "\x96":      FichierAudioJo[i] = 150;        break;
    case "\x97":      FichierAudioJo[i] = 151;        break;
    case "\x98":       FichierAudioJo[i] = 152;        break;
    case "\x99":       FichierAudioJo[i] = 153;        break;
    case "\x9A":       FichierAudioJo[i] = 154;        break;
    case "\x9B":       FichierAudioJo[i] = 155;        break;
    case "\x9C":      FichierAudioJo[i] = 156;        break;
    case "\x9D":      FichierAudioJo[i] = 157;        break;
    case "\x9E":      FichierAudioJo[i] = 158;        break;
    case "\x9F":       FichierAudioJo[i] = 159;        break;
/**fin caractere indefini*A**/
    case "\xA0":        FichierAudioJo[i] = 160;        break;
    case "\xA1":        FichierAudioJo[i] = 161;        break;
    case "\xA2":        FichierAudioJo[i] = 162;        break;
    case "\xA3":        FichierAudioJo[i] = 163;        break;
    case "\xA4":        FichierAudioJo[i] = 164;        break;
    case "\xA5":        FichierAudioJo[i] = 165;        break;
    case "\xA6":        FichierAudioJo[i] = 166;        break;
    case "\xA7":        FichierAudioJo[i] = 167;        break;
    case "\xA8":        FichierAudioJo[i] = 168;        break;
    case "\xA9":        FichierAudioJo[i] = 169;        break;
    case "\xAA":        FichierAudioJo[i] = 170;        break;
    case "\xAB":        FichierAudioJo[i] = 171;        break;
    case "\xAC":        FichierAudioJo[i] = 172;        break;
    case "\xAD":        FichierAudioJo[i] = 173;        break;
    case "\xAE":        FichierAudioJo[i] = 174;        break;
    case "\xAF":        FichierAudioJo[i] = 175;        break;
/*******B******/
    case "\xB0":        FichierAudioJo[i] = 176;        break;
    case "\xB1":        FichierAudioJo[i] = 177;        break;
    case "\xB2":        FichierAudioJo[i] = 178;        break;
    case "\xB3":        FichierAudioJo[i] = 179;        break;
    case "\xB4":        FichierAudioJo[i] = 180;        break;
    case "\xB5":        FichierAudioJo[i] = 181;        break;
    case "\xB6":        FichierAudioJo[i] = 182;        break;
    case "\xB7":        FichierAudioJo[i] = 183;        break;
    case "\xB8":        FichierAudioJo[i] = 184;        break;
    case "\xB9":        FichierAudioJo[i] = 185;        break;
    case "\xBA":        FichierAudioJo[i] = 186;        break;
    case "\xBB":        FichierAudioJo[i] = 187;        break;
    case "\xBC":        FichierAudioJo[i] = 188;        break;
    case "\xBD":        FichierAudioJo[i] = 189;        break;
    case "\xBE":        FichierAudioJo[i] = 190;        break;
    case "\xBF":        FichierAudioJo[i] = 191;        break;
/*******C*******/
    case "\xC0":        FichierAudioJo[i] = 192;        break;
    case "\xC1":        FichierAudioJo[i] = 193;        break;
    case "\xC2":        FichierAudioJo[i] = 194;        break;
    case "\xC3":        FichierAudioJo[i] = 195;        break;
    case "\xC4":        FichierAudioJo[i] = 196;        break;
    case "\xC5":        FichierAudioJo[i] = 197;        break;
    case "\xC6":        FichierAudioJo[i] = 198;        break;
    case "\xC7":        FichierAudioJo[i] = 199;        break;
    case "\xC8":        FichierAudioJo[i] = 200;        break;
    case "\xC9":        FichierAudioJo[i] = 201;        break;
    case "\xCA":        FichierAudioJo[i] = 202;        break;
    case "\xCB":        FichierAudioJo[i] = 203;        break;
    case "\xCC":        FichierAudioJo[i] = 204;        break;
    case "\xCD":        FichierAudioJo[i] = 205;        break;
    case "\xCE":        FichierAudioJo[i] = 206;        break;
    case "\xCF":        FichierAudioJo[i] = 207;        break;
/**********D*************/
    case "\xD0":        FichierAudioJo[i] = 208;        break;
    case "\xD1":        FichierAudioJo[i] = 209;        break;
    case "\xD2":        FichierAudioJo[i] = 210;        break;
    case "\xD3":        FichierAudioJo[i] = 211;        break;
    case "\xD4":        FichierAudioJo[i] = 212;        break;
    case "\xD5":        FichierAudioJo[i] = 213;        break;
    case "\xD6":        FichierAudioJo[i] = 214;        break;
    case "\xD7":        FichierAudioJo[i] = 215;        break;
    case "\xD8":        FichierAudioJo[i] = 216;        break;
    case "\xD9":        FichierAudioJo[i] = 217;        break;
    case "\xDA":        FichierAudioJo[i] = 218;        break;
    case "\xDB":        FichierAudioJo[i] = 219;        break;
    case "\xDC":        FichierAudioJo[i] = 220;        break;
    case "\xDD":        FichierAudioJo[i] = 221;        break;
    case "\xDE":        FichierAudioJo[i] = 222;        break;
    case "\xDF":        FichierAudioJo[i] = 223;        break;
/**********E********/
    case "\xE0":        FichierAudioJo[i] = 224;        break;
    case "\xE1":        FichierAudioJo[i] = 225;        break;
    case "\xE2":        FichierAudioJo[i] = 226;        break;
    case "\xE3":        FichierAudioJo[i] = 227;        break;
    case "\xE4":        FichierAudioJo[i] = 228;        break;
    case "\xE5":        FichierAudioJo[i] = 229;        break;
    case "\xE6":        FichierAudioJo[i] = 230;        break;
    case "\xE7":        FichierAudioJo[i] = 231;        break;
    case "\xE8":        FichierAudioJo[i] = 232;        break;
    case "\xE9":        FichierAudioJo[i] = 233;        break;
    case "\xEA":        FichierAudioJo[i] = 234;        break;
    case "\xEB":        FichierAudioJo[i] = 235;        break;
    case "\xEC":        FichierAudioJo[i] = 236;        break;
    case "\xED":        FichierAudioJo[i] = 237;        break;
    case "\xEE":        FichierAudioJo[i] = 238;        break;
    case "\xEF":        FichierAudioJo[i] = 239;        break;
/*****F*****/
    case "\xF0":        FichierAudioJo[i] = 240;        break;
    case "\xF1":        FichierAudioJo[i] = 241;        break;
    case "\xF2":        FichierAudioJo[i] = 242;        break;
    case "\xF3":        FichierAudioJo[i] = 243;        break;
    case "\xF4":        FichierAudioJo[i] = 244;        break;
    case "\xF5":        FichierAudioJo[i] = 245;        break;
    case "\xF6":        FichierAudioJo[i] = 246;        break;
    case "\xF7":        FichierAudioJo[i] = 247;        break;
    case "\xF8":        FichierAudioJo[i] = 248;        break;
    case "\xF9":        FichierAudioJo[i] = 249;        break;
    case "\xFA":        FichierAudioJo[i] = 250;        break;
    case "\xFB":        FichierAudioJo[i] = 251;        break;
    case "\xFC":        FichierAudioJo[i] = 252;        break;
    case "\xFD":        FichierAudioJo[i] = 253;        break;
    case "\xFE":        FichierAudioJo[i] = 254;        break;
    case "\xFF":        FichierAudioJo[i] = 255;        break;
    default:        FichierAudioJo[i] = MiseEnMemoire_Def_Lecture;

MiseEnMemoire_Def_Lecture = FichierAudioJo;
} //fin switch texte1
			} //fin for texte1

 
			}			

convertit(text2);



function ajouteson2() 
		{

  injectionson2 = document.createElement("pre");
  injectionson2.textContent = FichierAudioJo ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  son2 = document.getElementById("donner_son2");
  document.body.insertBefore(injectionson2, son2);
		}
ajouteson2();
	}

reader2.readAsBinaryString(file, "UTF-1616");
}

function gens2(fileList2) 
{
    for (var i = 0; i < fileList2.length; i++) 
	{
        PrendTout2(fileList2[i]);
	}
}

//input 3
function PrendTout3(file) 
{
    var name3 = file.name;
    var reader3 = new FileReader();  
    reader3.onload = function(e3) 
	{ 
text3 = e3.target.result.split(""); 

function convertit(text3)

{

var MiseEnMemoire_Def_Lecture;

    			for (var i = 0; i < text3.length; i++)
			{

switch(text3[i]) {
    case "\x00":        FichierAudioJo[i] = 0;        break;
    case "\x01":        FichierAudioJo[i] = 1;        break;
    case "\x02":        FichierAudioJo[i] = 2;        break;
    case "\x03":        FichierAudioJo[i] = 3;        break;
    case "\x04":        FichierAudioJo[i] = 4;        break;
    case "\x05":        FichierAudioJo[i] = 5;        break;
    case "\x06":        FichierAudioJo[i] = 6;        break;
    case "\x07":        FichierAudioJo[i] = 7;        break;
    case "\x08":        FichierAudioJo[i] = 8;        break;
    case "\x09":        FichierAudioJo[i] = 9;        break;
    case "\x0A":        FichierAudioJo[i] = 10;        break;
    case "\x0B":        FichierAudioJo[i] = 11;        break;
    case "\x0C":        FichierAudioJo[i] = 12;        break;
    case "\x0D":        FichierAudioJo[i] = 13;        break;
    case "\x0E":        FichierAudioJo[i] = 14;        break;
    case "\x0F":        FichierAudioJo[i] = 15;        break;
/**caractere indefini debut a 30***********/
    case "\x10":        FichierAudioJo[i] = 16;        break;
    case "\x11":        FichierAudioJo[i] = 17;        break;
    case "\x12":        FichierAudioJo[i] = 18;        break;
    case "\x13":        FichierAudioJo[i] = 19;        break;
    case "\x14":        FichierAudioJo[i] = 20;        break;
    case "\x15":        FichierAudioJo[i] = 21;        break;
    case "\x16":        FichierAudioJo[i] = 22;        break;
    case "\x17":        FichierAudioJo[i] = 23;        break;
    case "\x18":        FichierAudioJo[i] = 24;        break;
    case "\x19":        FichierAudioJo[i] = 25;        break;
    case "\x1A":        FichierAudioJo[i] = 26;        break;
    case "\x1B":        FichierAudioJo[i] = 27;        break;
    case "\x1C":        FichierAudioJo[i] = 28;        break;
    case "\x1D":        FichierAudioJo[i] = 29;        break;
    case "\x1E":        FichierAudioJo[i] = 30;        break;
    case "\x1F":        FichierAudioJo[i] = 31;        break;
/************/
    case "\x20":        FichierAudioJo[i] = 32;        break;
    case "\x21":        FichierAudioJo[i] = 33;        break;
    case "\x22":        FichierAudioJo[i] = 34;        break;
    case "\x23":        FichierAudioJo[i] = 35;        break;
    case "\x24":        FichierAudioJo[i] = 36;        break;
    case "\x25":        FichierAudioJo[i] = 37;        break;
    case "\x26":        FichierAudioJo[i] = 38;        break;
    case "\x27":        FichierAudioJo[i] = 39;        break;
    case "\x28":        FichierAudioJo[i] = 40;        break;
    case "\x29":        FichierAudioJo[i] = 41;        break;
    case "\x2A":        FichierAudioJo[i] = 42;        break;
    case "\x2B":        FichierAudioJo[i] = 43;        break;
    case "\x2C":        FichierAudioJo[i] = 44;        break;
    case "\x2D":        FichierAudioJo[i] = 45;        break;
    case "\x2E":        FichierAudioJo[i] = 46;        break;
    case "\x2F":        FichierAudioJo[i] = 47;        break;
/*****************/
    case "\x30":        FichierAudioJo[i] = 48;        break;
    case "\x31":        FichierAudioJo[i] = 49;        break;
    case "\x32":        FichierAudioJo[i] = 50;        break;
    case "\x33":        FichierAudioJo[i] = 51;        break;
    case "\x34":        FichierAudioJo[i] = 52;        break;
    case "\x35":        FichierAudioJo[i] = 53;        break;
    case "\x36":        FichierAudioJo[i] = 54;        break;
    case "\x37":        FichierAudioJo[i] = 55;        break;
    case "\x38":        FichierAudioJo[i] = 56;        break;
    case "\x39":        FichierAudioJo[i] = 57;        break;
    case "\x3A":        FichierAudioJo[i] = 58;        break;
    case "\x3B":        FichierAudioJo[i] = 59;        break;
    case "\x3C":        FichierAudioJo[i] = 60;        break;
    case "\x3D":        FichierAudioJo[i] = 61;        break;
    case "\x3E":        FichierAudioJo[i] = 62;        break;
    case "\x3F":        FichierAudioJo[i] = 63;        break;
/*************/
    case "\x40":        FichierAudioJo[i] = 64;        break;
    case "\x41":        FichierAudioJo[i] = 65;        break;
    case "\x42":        FichierAudioJo[i] = 66;        break;
    case "\x43":        FichierAudioJo[i] = 67;        break;
    case "\x44":        FichierAudioJo[i] = 68;        break;
    case "\x45":        FichierAudioJo[i] = 69;        break;
    case "\x46":        FichierAudioJo[i] = 70;        break;
    case "\x47":        FichierAudioJo[i] = 71;        break;
    case "\x48":        FichierAudioJo[i] = 72;        break;
    case "\x49":        FichierAudioJo[i] = 73;        break;
    case "\x4A":        FichierAudioJo[i] = 74;        break;
    case "\x4B":        FichierAudioJo[i] = 75;        break;
    case "\x4C":        FichierAudioJo[i] = 76;        break;
    case "\x4D":        FichierAudioJo[i] = 77;        break;
    case "\x4E":        FichierAudioJo[i] = 78;        break;
    case "\x4F":        FichierAudioJo[i] = 79;        break;
/***************/
    case "\x50":        FichierAudioJo[i] = 80;        break;
    case "\x51":        FichierAudioJo[i] = 81;        break;
    case "\x52":        FichierAudioJo[i] = 82;        break;
    case "\x53":        FichierAudioJo[i] = 83;        break;
    case "\x54":        FichierAudioJo[i] = 84;        break;
    case "\x55":        FichierAudioJo[i] = 85;        break;
    case "\x56":        FichierAudioJo[i] = 86;        break;
    case "\x57":        FichierAudioJo[i] = 87;        break;
    case "\x58":        FichierAudioJo[i] = 88;        break;
    case "\x59":        FichierAudioJo[i] = 89;        break;
    case "\x5A":        FichierAudioJo[i] = 90;        break;
    case "\x5B":        FichierAudioJo[i] = 91;        break;
    case "\x5C":        FichierAudioJo[i] = 92;        break;
    case "\x5D":        FichierAudioJo[i] = 93;        break;
    case "\x5E":        FichierAudioJo[i] = 94;        break;
    case "\x5F":        FichierAudioJo[i] = 95;        break;
/***************/
    case "\x60":        FichierAudioJo[i] = 96;        break;
    case "\x61":        FichierAudioJo[i] = 97;        break;
    case "\x62":        FichierAudioJo[i] = 98;        break;
    case "\x63":        FichierAudioJo[i] = 99;        break;
    case "\x64":        FichierAudioJo[i] = 100;        break;
    case "\x65":        FichierAudioJo[i] = 101;        break;
    case "\x66":        FichierAudioJo[i] = 102;        break;
    case "\x67":        FichierAudioJo[i] = 103;        break;
    case "\x68":        FichierAudioJo[i] = 104;        break;
    case "\x69":        FichierAudioJo[i] = 105;        break;
    case "\x6A":        FichierAudioJo[i] = 106;        break;
    case "\x6B":        FichierAudioJo[i] = 107;        break;
    case "\x6C":        FichierAudioJo[i] = 108;        break;
    case "\x6D":        FichierAudioJo[i] = 109;        break;
    case "\x6E":        FichierAudioJo[i] = 110;        break;
    case "\x6F":        FichierAudioJo[i] = 111;        break;
/**********/
    case "\x70":        FichierAudioJo[i] = 112;        break;
    case "\x71":        FichierAudioJo[i] = 113;        break;
    case "\x72":        FichierAudioJo[i] = 114;        break;
    case "\x73":        FichierAudioJo[i] = 115;        break;
    case "\x74":        FichierAudioJo[i] = 116;        break;
    case "\x75":        FichierAudioJo[i] = 117;        break;
    case "\x76":        FichierAudioJo[i] = 118;        break;
    case "\x77":        FichierAudioJo[i] = 119;        break;
    case "\x78":        FichierAudioJo[i] = 120;        break;
    case "\x79":        FichierAudioJo[i] = 121;        break;
    case "\x7A":        FichierAudioJo[i] = 122;        break;
    case "\x7B":        FichierAudioJo[i] = 123;        break;
    case "\x7C":        FichierAudioJo[i] = 124;        break;
    case "\x7D":        FichierAudioJo[i] = 125;        break;
    case "\x7E":        FichierAudioJo[i] = 126;        break;
    case "\x7F":        FichierAudioJo[i] = 127;        break;
/*****8**debut caractere indefini****/
    case "\x80":        FichierAudioJo[i] = 128;        break;
    case "\x81":        FichierAudioJo[i] = 129;        break;
    case "\x82":        FichierAudioJo[i] = 130;        break;
    case "\x83":        FichierAudioJo[i] = 131;        break;
    case "\x84":        FichierAudioJo[i] = 132;        break;
    case "\x85":        FichierAudioJo[i] = 133;        break;
    case "\x86":       FichierAudioJo[i] = 134;        break;
    case "\x87":       FichierAudioJo[i] = 135;        break;
    case "\x88":        FichierAudioJo[i] = 136;        break;
    case "\x89":       FichierAudioJo[i] = 137;        break;
    case "\x8A":        FichierAudioJo[i] = 138;        break;
    case "\x8B":       FichierAudioJo[i] = 139;        break;
    case "\x8C":      FichierAudioJo[i] = 140;        break;
    case "\x8D":        FichierAudioJo[i] = 141;        break;
    case "\x8E":       FichierAudioJo[i] = 142;        break;
    case "\x8F":        FichierAudioJo[i] = 143;        break;
/********9**********/
    case "\x90":        FichierAudioJo[i] = 144;        break;
    case "\x91":       FichierAudioJo[i] = 145;        break;
    case "\x92":       FichierAudioJo[i] = 146;        break;
    case "\x93":        FichierAudioJo[i] = 147;        break;
    case "\x94":        FichierAudioJo[i] = 148;        break;
    case "\x95":       FichierAudioJo[i] = 149;        break;
    case "\x96":      FichierAudioJo[i] = 150;        break;
    case "\x97":      FichierAudioJo[i] = 151;        break;
    case "\x98":       FichierAudioJo[i] = 152;        break;
    case "\x99":       FichierAudioJo[i] = 153;        break;
    case "\x9A":       FichierAudioJo[i] = 154;        break;
    case "\x9B":       FichierAudioJo[i] = 155;        break;
    case "\x9C":      FichierAudioJo[i] = 156;        break;
    case "\x9D":      FichierAudioJo[i] = 157;        break;
    case "\x9E":      FichierAudioJo[i] = 158;        break;
    case "\x9F":       FichierAudioJo[i] = 159;        break;
/**fin caractere indefini*A**/
    case "\xA0":        FichierAudioJo[i] = 160;        break;
    case "\xA1":        FichierAudioJo[i] = 161;        break;
    case "\xA2":        FichierAudioJo[i] = 162;        break;
    case "\xA3":        FichierAudioJo[i] = 163;        break;
    case "\xA4":        FichierAudioJo[i] = 164;        break;
    case "\xA5":        FichierAudioJo[i] = 165;        break;
    case "\xA6":        FichierAudioJo[i] = 166;        break;
    case "\xA7":        FichierAudioJo[i] = 167;        break;
    case "\xA8":        FichierAudioJo[i] = 168;        break;
    case "\xA9":        FichierAudioJo[i] = 169;        break;
    case "\xAA":        FichierAudioJo[i] = 170;        break;
    case "\xAB":        FichierAudioJo[i] = 171;        break;
    case "\xAC":        FichierAudioJo[i] = 172;        break;
    case "\xAD":        FichierAudioJo[i] = 173;        break;
    case "\xAE":        FichierAudioJo[i] = 174;        break;
    case "\xAF":        FichierAudioJo[i] = 175;        break;
/*******B******/
    case "\xB0":        FichierAudioJo[i] = 176;        break;
    case "\xB1":        FichierAudioJo[i] = 177;        break;
    case "\xB2":        FichierAudioJo[i] = 178;        break;
    case "\xB3":        FichierAudioJo[i] = 179;        break;
    case "\xB4":        FichierAudioJo[i] = 180;        break;
    case "\xB5":        FichierAudioJo[i] = 181;        break;
    case "\xB6":        FichierAudioJo[i] = 182;        break;
    case "\xB7":        FichierAudioJo[i] = 183;        break;
    case "\xB8":        FichierAudioJo[i] = 184;        break;
    case "\xB9":        FichierAudioJo[i] = 185;        break;
    case "\xBA":        FichierAudioJo[i] = 186;        break;
    case "\xBB":        FichierAudioJo[i] = 187;        break;
    case "\xBC":        FichierAudioJo[i] = 188;        break;
    case "\xBD":        FichierAudioJo[i] = 189;        break;
    case "\xBE":        FichierAudioJo[i] = 190;        break;
    case "\xBF":        FichierAudioJo[i] = 191;        break;
/*******C*******/
    case "\xC0":        FichierAudioJo[i] = 192;        break;
    case "\xC1":        FichierAudioJo[i] = 193;        break;
    case "\xC2":        FichierAudioJo[i] = 194;        break;
    case "\xC3":        FichierAudioJo[i] = 195;        break;
    case "\xC4":        FichierAudioJo[i] = 196;        break;
    case "\xC5":        FichierAudioJo[i] = 197;        break;
    case "\xC6":        FichierAudioJo[i] = 198;        break;
    case "\xC7":        FichierAudioJo[i] = 199;        break;
    case "\xC8":        FichierAudioJo[i] = 200;        break;
    case "\xC9":        FichierAudioJo[i] = 201;        break;
    case "\xCA":        FichierAudioJo[i] = 202;        break;
    case "\xCB":        FichierAudioJo[i] = 203;        break;
    case "\xCC":        FichierAudioJo[i] = 204;        break;
    case "\xCD":        FichierAudioJo[i] = 205;        break;
    case "\xCE":        FichierAudioJo[i] = 206;        break;
    case "\xCF":        FichierAudioJo[i] = 207;        break;
/**********D*************/
    case "\xD0":        FichierAudioJo[i] = 208;        break;
    case "\xD1":        FichierAudioJo[i] = 209;        break;
    case "\xD2":        FichierAudioJo[i] = 210;        break;
    case "\xD3":        FichierAudioJo[i] = 211;        break;
    case "\xD4":        FichierAudioJo[i] = 212;        break;
    case "\xD5":        FichierAudioJo[i] = 213;        break;
    case "\xD6":        FichierAudioJo[i] = 214;        break;
    case "\xD7":        FichierAudioJo[i] = 215;        break;
    case "\xD8":        FichierAudioJo[i] = 216;        break;
    case "\xD9":        FichierAudioJo[i] = 217;        break;
    case "\xDA":        FichierAudioJo[i] = 218;        break;
    case "\xDB":        FichierAudioJo[i] = 219;        break;
    case "\xDC":        FichierAudioJo[i] = 220;        break;
    case "\xDD":        FichierAudioJo[i] = 221;        break;
    case "\xDE":        FichierAudioJo[i] = 222;        break;
    case "\xDF":        FichierAudioJo[i] = 223;        break;
/**********E********/
    case "\xE0":        FichierAudioJo[i] = 224;        break;
    case "\xE1":        FichierAudioJo[i] = 225;        break;
    case "\xE2":        FichierAudioJo[i] = 226;        break;
    case "\xE3":        FichierAudioJo[i] = 227;        break;
    case "\xE4":        FichierAudioJo[i] = 228;        break;
    case "\xE5":        FichierAudioJo[i] = 229;        break;
    case "\xE6":        FichierAudioJo[i] = 230;        break;
    case "\xE7":        FichierAudioJo[i] = 231;        break;
    case "\xE8":        FichierAudioJo[i] = 232;        break;
    case "\xE9":        FichierAudioJo[i] = 233;        break;
    case "\xEA":        FichierAudioJo[i] = 234;        break;
    case "\xEB":        FichierAudioJo[i] = 235;        break;
    case "\xEC":        FichierAudioJo[i] = 236;        break;
    case "\xED":        FichierAudioJo[i] = 237;        break;
    case "\xEE":        FichierAudioJo[i] = 238;        break;
    case "\xEF":        FichierAudioJo[i] = 239;        break;
/*****F*****/
    case "\xF0":        FichierAudioJo[i] = 240;        break;
    case "\xF1":        FichierAudioJo[i] = 241;        break;
    case "\xF2":        FichierAudioJo[i] = 242;        break;
    case "\xF3":        FichierAudioJo[i] = 243;        break;
    case "\xF4":        FichierAudioJo[i] = 244;        break;
    case "\xF5":        FichierAudioJo[i] = 245;        break;
    case "\xF6":        FichierAudioJo[i] = 246;        break;
    case "\xF7":        FichierAudioJo[i] = 247;        break;
    case "\xF8":        FichierAudioJo[i] = 248;        break;
    case "\xF9":        FichierAudioJo[i] = 249;        break;
    case "\xFA":        FichierAudioJo[i] = 250;        break;
    case "\xFB":        FichierAudioJo[i] = 251;        break;
    case "\xFC":        FichierAudioJo[i] = 252;        break;
    case "\xFD":        FichierAudioJo[i] = 253;        break;
    case "\xFE":        FichierAudioJo[i] = 254;        break;
    case "\xFF":        FichierAudioJo[i] = 255;        break;
    default:        FichierAudioJo[i] = MiseEnMemoire_Def_Lecture;

MiseEnMemoire_Def_Lecture = FichierAudioJo;
} //fin switch texte1
			} //fin for texte1

 
			}			

convertit(text3);



function ajouteson3() 
		{

  injectionson3 = document.createElement("pre");
  injectionson3.textContent = FichierAudioJo ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  son3 = document.getElementById("donner_son3");
  document.body.insertBefore(injectionson3, son3);
		}
ajouteson3();
	}

reader3.readAsBinaryString(file, "UTF-1616");
}

function gens3(fileList3) 
{
    for (var i = 0; i < fileList3.length; i++) 
	{
        PrendTout3(fileList3[i]);
	}
}

//input 4
function PrendTout4(file) 
{
    var name4 = file.name;
    var reader4 = new FileReader();  
    reader4.onload = function(e4) 
	{ 
text4 = e4.target.result.split(""); 

function convertit(text4)

{

var MiseEnMemoire_Def_Lecture;

    			for (var i = 0; i < text4.length; i++)
			{

switch(text4[i]) {
    case "\x00":        FichierAudioJo[i] = 0;        break;
    case "\x01":        FichierAudioJo[i] = 1;        break;
    case "\x02":        FichierAudioJo[i] = 2;        break;
    case "\x03":        FichierAudioJo[i] = 3;        break;
    case "\x04":        FichierAudioJo[i] = 4;        break;
    case "\x05":        FichierAudioJo[i] = 5;        break;
    case "\x06":        FichierAudioJo[i] = 6;        break;
    case "\x07":        FichierAudioJo[i] = 7;        break;
    case "\x08":        FichierAudioJo[i] = 8;        break;
    case "\x09":        FichierAudioJo[i] = 9;        break;
    case "\x0A":        FichierAudioJo[i] = 10;        break;
    case "\x0B":        FichierAudioJo[i] = 11;        break;
    case "\x0C":        FichierAudioJo[i] = 12;        break;
    case "\x0D":        FichierAudioJo[i] = 13;        break;
    case "\x0E":        FichierAudioJo[i] = 14;        break;
    case "\x0F":        FichierAudioJo[i] = 15;        break;
/**caractere indefini debut a 30***********/
    case "\x10":        FichierAudioJo[i] = 16;        break;
    case "\x11":        FichierAudioJo[i] = 17;        break;
    case "\x12":        FichierAudioJo[i] = 18;        break;
    case "\x13":        FichierAudioJo[i] = 19;        break;
    case "\x14":        FichierAudioJo[i] = 20;        break;
    case "\x15":        FichierAudioJo[i] = 21;        break;
    case "\x16":        FichierAudioJo[i] = 22;        break;
    case "\x17":        FichierAudioJo[i] = 23;        break;
    case "\x18":        FichierAudioJo[i] = 24;        break;
    case "\x19":        FichierAudioJo[i] = 25;        break;
    case "\x1A":        FichierAudioJo[i] = 26;        break;
    case "\x1B":        FichierAudioJo[i] = 27;        break;
    case "\x1C":        FichierAudioJo[i] = 28;        break;
    case "\x1D":        FichierAudioJo[i] = 29;        break;
    case "\x1E":        FichierAudioJo[i] = 30;        break;
    case "\x1F":        FichierAudioJo[i] = 31;        break;
/************/
    case "\x20":        FichierAudioJo[i] = 32;        break;
    case "\x21":        FichierAudioJo[i] = 33;        break;
    case "\x22":        FichierAudioJo[i] = 34;        break;
    case "\x23":        FichierAudioJo[i] = 35;        break;
    case "\x24":        FichierAudioJo[i] = 36;        break;
    case "\x25":        FichierAudioJo[i] = 37;        break;
    case "\x26":        FichierAudioJo[i] = 38;        break;
    case "\x27":        FichierAudioJo[i] = 39;        break;
    case "\x28":        FichierAudioJo[i] = 40;        break;
    case "\x29":        FichierAudioJo[i] = 41;        break;
    case "\x2A":        FichierAudioJo[i] = 42;        break;
    case "\x2B":        FichierAudioJo[i] = 43;        break;
    case "\x2C":        FichierAudioJo[i] = 44;        break;
    case "\x2D":        FichierAudioJo[i] = 45;        break;
    case "\x2E":        FichierAudioJo[i] = 46;        break;
    case "\x2F":        FichierAudioJo[i] = 47;        break;
/*****************/
    case "\x30":        FichierAudioJo[i] = 48;        break;
    case "\x31":        FichierAudioJo[i] = 49;        break;
    case "\x32":        FichierAudioJo[i] = 50;        break;
    case "\x33":        FichierAudioJo[i] = 51;        break;
    case "\x34":        FichierAudioJo[i] = 52;        break;
    case "\x35":        FichierAudioJo[i] = 53;        break;
    case "\x36":        FichierAudioJo[i] = 54;        break;
    case "\x37":        FichierAudioJo[i] = 55;        break;
    case "\x38":        FichierAudioJo[i] = 56;        break;
    case "\x39":        FichierAudioJo[i] = 57;        break;
    case "\x3A":        FichierAudioJo[i] = 58;        break;
    case "\x3B":        FichierAudioJo[i] = 59;        break;
    case "\x3C":        FichierAudioJo[i] = 60;        break;
    case "\x3D":        FichierAudioJo[i] = 61;        break;
    case "\x3E":        FichierAudioJo[i] = 62;        break;
    case "\x3F":        FichierAudioJo[i] = 63;        break;
/*************/
    case "\x40":        FichierAudioJo[i] = 64;        break;
    case "\x41":        FichierAudioJo[i] = 65;        break;
    case "\x42":        FichierAudioJo[i] = 66;        break;
    case "\x43":        FichierAudioJo[i] = 67;        break;
    case "\x44":        FichierAudioJo[i] = 68;        break;
    case "\x45":        FichierAudioJo[i] = 69;        break;
    case "\x46":        FichierAudioJo[i] = 70;        break;
    case "\x47":        FichierAudioJo[i] = 71;        break;
    case "\x48":        FichierAudioJo[i] = 72;        break;
    case "\x49":        FichierAudioJo[i] = 73;        break;
    case "\x4A":        FichierAudioJo[i] = 74;        break;
    case "\x4B":        FichierAudioJo[i] = 75;        break;
    case "\x4C":        FichierAudioJo[i] = 76;        break;
    case "\x4D":        FichierAudioJo[i] = 77;        break;
    case "\x4E":        FichierAudioJo[i] = 78;        break;
    case "\x4F":        FichierAudioJo[i] = 79;        break;
/***************/
    case "\x50":        FichierAudioJo[i] = 80;        break;
    case "\x51":        FichierAudioJo[i] = 81;        break;
    case "\x52":        FichierAudioJo[i] = 82;        break;
    case "\x53":        FichierAudioJo[i] = 83;        break;
    case "\x54":        FichierAudioJo[i] = 84;        break;
    case "\x55":        FichierAudioJo[i] = 85;        break;
    case "\x56":        FichierAudioJo[i] = 86;        break;
    case "\x57":        FichierAudioJo[i] = 87;        break;
    case "\x58":        FichierAudioJo[i] = 88;        break;
    case "\x59":        FichierAudioJo[i] = 89;        break;
    case "\x5A":        FichierAudioJo[i] = 90;        break;
    case "\x5B":        FichierAudioJo[i] = 91;        break;
    case "\x5C":        FichierAudioJo[i] = 92;        break;
    case "\x5D":        FichierAudioJo[i] = 93;        break;
    case "\x5E":        FichierAudioJo[i] = 94;        break;
    case "\x5F":        FichierAudioJo[i] = 95;        break;
/***************/
    case "\x60":        FichierAudioJo[i] = 96;        break;
    case "\x61":        FichierAudioJo[i] = 97;        break;
    case "\x62":        FichierAudioJo[i] = 98;        break;
    case "\x63":        FichierAudioJo[i] = 99;        break;
    case "\x64":        FichierAudioJo[i] = 100;        break;
    case "\x65":        FichierAudioJo[i] = 101;        break;
    case "\x66":        FichierAudioJo[i] = 102;        break;
    case "\x67":        FichierAudioJo[i] = 103;        break;
    case "\x68":        FichierAudioJo[i] = 104;        break;
    case "\x69":        FichierAudioJo[i] = 105;        break;
    case "\x6A":        FichierAudioJo[i] = 106;        break;
    case "\x6B":        FichierAudioJo[i] = 107;        break;
    case "\x6C":        FichierAudioJo[i] = 108;        break;
    case "\x6D":        FichierAudioJo[i] = 109;        break;
    case "\x6E":        FichierAudioJo[i] = 110;        break;
    case "\x6F":        FichierAudioJo[i] = 111;        break;
/**********/
    case "\x70":        FichierAudioJo[i] = 112;        break;
    case "\x71":        FichierAudioJo[i] = 113;        break;
    case "\x72":        FichierAudioJo[i] = 114;        break;
    case "\x73":        FichierAudioJo[i] = 115;        break;
    case "\x74":        FichierAudioJo[i] = 116;        break;
    case "\x75":        FichierAudioJo[i] = 117;        break;
    case "\x76":        FichierAudioJo[i] = 118;        break;
    case "\x77":        FichierAudioJo[i] = 119;        break;
    case "\x78":        FichierAudioJo[i] = 120;        break;
    case "\x79":        FichierAudioJo[i] = 121;        break;
    case "\x7A":        FichierAudioJo[i] = 122;        break;
    case "\x7B":        FichierAudioJo[i] = 123;        break;
    case "\x7C":        FichierAudioJo[i] = 124;        break;
    case "\x7D":        FichierAudioJo[i] = 125;        break;
    case "\x7E":        FichierAudioJo[i] = 126;        break;
    case "\x7F":        FichierAudioJo[i] = 127;        break;
/*****8**debut caractere indefini****/
    case "\x80":        FichierAudioJo[i] = 128;        break;
    case "\x81":        FichierAudioJo[i] = 129;        break;
    case "\x82":        FichierAudioJo[i] = 130;        break;
    case "\x83":        FichierAudioJo[i] = 131;        break;
    case "\x84":        FichierAudioJo[i] = 132;        break;
    case "\x85":        FichierAudioJo[i] = 133;        break;
    case "\x86":       FichierAudioJo[i] = 134;        break;
    case "\x87":       FichierAudioJo[i] = 135;        break;
    case "\x88":        FichierAudioJo[i] = 136;        break;
    case "\x89":       FichierAudioJo[i] = 137;        break;
    case "\x8A":        FichierAudioJo[i] = 138;        break;
    case "\x8B":       FichierAudioJo[i] = 139;        break;
    case "\x8C":      FichierAudioJo[i] = 140;        break;
    case "\x8D":        FichierAudioJo[i] = 141;        break;
    case "\x8E":       FichierAudioJo[i] = 142;        break;
    case "\x8F":        FichierAudioJo[i] = 143;        break;
/********9**********/
    case "\x90":        FichierAudioJo[i] = 144;        break;
    case "\x91":       FichierAudioJo[i] = 145;        break;
    case "\x92":       FichierAudioJo[i] = 146;        break;
    case "\x93":        FichierAudioJo[i] = 147;        break;
    case "\x94":        FichierAudioJo[i] = 148;        break;
    case "\x95":       FichierAudioJo[i] = 149;        break;
    case "\x96":      FichierAudioJo[i] = 150;        break;
    case "\x97":      FichierAudioJo[i] = 151;        break;
    case "\x98":       FichierAudioJo[i] = 152;        break;
    case "\x99":       FichierAudioJo[i] = 153;        break;
    case "\x9A":       FichierAudioJo[i] = 154;        break;
    case "\x9B":       FichierAudioJo[i] = 155;        break;
    case "\x9C":      FichierAudioJo[i] = 156;        break;
    case "\x9D":      FichierAudioJo[i] = 157;        break;
    case "\x9E":      FichierAudioJo[i] = 158;        break;
    case "\x9F":       FichierAudioJo[i] = 159;        break;
/**fin caractere indefini*A**/
    case "\xA0":        FichierAudioJo[i] = 160;        break;
    case "\xA1":        FichierAudioJo[i] = 161;        break;
    case "\xA2":        FichierAudioJo[i] = 162;        break;
    case "\xA3":        FichierAudioJo[i] = 163;        break;
    case "\xA4":        FichierAudioJo[i] = 164;        break;
    case "\xA5":        FichierAudioJo[i] = 165;        break;
    case "\xA6":        FichierAudioJo[i] = 166;        break;
    case "\xA7":        FichierAudioJo[i] = 167;        break;
    case "\xA8":        FichierAudioJo[i] = 168;        break;
    case "\xA9":        FichierAudioJo[i] = 169;        break;
    case "\xAA":        FichierAudioJo[i] = 170;        break;
    case "\xAB":        FichierAudioJo[i] = 171;        break;
    case "\xAC":        FichierAudioJo[i] = 172;        break;
    case "\xAD":        FichierAudioJo[i] = 173;        break;
    case "\xAE":        FichierAudioJo[i] = 174;        break;
    case "\xAF":        FichierAudioJo[i] = 175;        break;
/*******B******/
    case "\xB0":        FichierAudioJo[i] = 176;        break;
    case "\xB1":        FichierAudioJo[i] = 177;        break;
    case "\xB2":        FichierAudioJo[i] = 178;        break;
    case "\xB3":        FichierAudioJo[i] = 179;        break;
    case "\xB4":        FichierAudioJo[i] = 180;        break;
    case "\xB5":        FichierAudioJo[i] = 181;        break;
    case "\xB6":        FichierAudioJo[i] = 182;        break;
    case "\xB7":        FichierAudioJo[i] = 183;        break;
    case "\xB8":        FichierAudioJo[i] = 184;        break;
    case "\xB9":        FichierAudioJo[i] = 185;        break;
    case "\xBA":        FichierAudioJo[i] = 186;        break;
    case "\xBB":        FichierAudioJo[i] = 187;        break;
    case "\xBC":        FichierAudioJo[i] = 188;        break;
    case "\xBD":        FichierAudioJo[i] = 189;        break;
    case "\xBE":        FichierAudioJo[i] = 190;        break;
    case "\xBF":        FichierAudioJo[i] = 191;        break;
/*******C*******/
    case "\xC0":        FichierAudioJo[i] = 192;        break;
    case "\xC1":        FichierAudioJo[i] = 193;        break;
    case "\xC2":        FichierAudioJo[i] = 194;        break;
    case "\xC3":        FichierAudioJo[i] = 195;        break;
    case "\xC4":        FichierAudioJo[i] = 196;        break;
    case "\xC5":        FichierAudioJo[i] = 197;        break;
    case "\xC6":        FichierAudioJo[i] = 198;        break;
    case "\xC7":        FichierAudioJo[i] = 199;        break;
    case "\xC8":        FichierAudioJo[i] = 200;        break;
    case "\xC9":        FichierAudioJo[i] = 201;        break;
    case "\xCA":        FichierAudioJo[i] = 202;        break;
    case "\xCB":        FichierAudioJo[i] = 203;        break;
    case "\xCC":        FichierAudioJo[i] = 204;        break;
    case "\xCD":        FichierAudioJo[i] = 205;        break;
    case "\xCE":        FichierAudioJo[i] = 206;        break;
    case "\xCF":        FichierAudioJo[i] = 207;        break;
/**********D*************/
    case "\xD0":        FichierAudioJo[i] = 208;        break;
    case "\xD1":        FichierAudioJo[i] = 209;        break;
    case "\xD2":        FichierAudioJo[i] = 210;        break;
    case "\xD3":        FichierAudioJo[i] = 211;        break;
    case "\xD4":        FichierAudioJo[i] = 212;        break;
    case "\xD5":        FichierAudioJo[i] = 213;        break;
    case "\xD6":        FichierAudioJo[i] = 214;        break;
    case "\xD7":        FichierAudioJo[i] = 215;        break;
    case "\xD8":        FichierAudioJo[i] = 216;        break;
    case "\xD9":        FichierAudioJo[i] = 217;        break;
    case "\xDA":        FichierAudioJo[i] = 218;        break;
    case "\xDB":        FichierAudioJo[i] = 219;        break;
    case "\xDC":        FichierAudioJo[i] = 220;        break;
    case "\xDD":        FichierAudioJo[i] = 221;        break;
    case "\xDE":        FichierAudioJo[i] = 222;        break;
    case "\xDF":        FichierAudioJo[i] = 223;        break;
/**********E********/
    case "\xE0":        FichierAudioJo[i] = 224;        break;
    case "\xE1":        FichierAudioJo[i] = 225;        break;
    case "\xE2":        FichierAudioJo[i] = 226;        break;
    case "\xE3":        FichierAudioJo[i] = 227;        break;
    case "\xE4":        FichierAudioJo[i] = 228;        break;
    case "\xE5":        FichierAudioJo[i] = 229;        break;
    case "\xE6":        FichierAudioJo[i] = 230;        break;
    case "\xE7":        FichierAudioJo[i] = 231;        break;
    case "\xE8":        FichierAudioJo[i] = 232;        break;
    case "\xE9":        FichierAudioJo[i] = 233;        break;
    case "\xEA":        FichierAudioJo[i] = 234;        break;
    case "\xEB":        FichierAudioJo[i] = 235;        break;
    case "\xEC":        FichierAudioJo[i] = 236;        break;
    case "\xED":        FichierAudioJo[i] = 237;        break;
    case "\xEE":        FichierAudioJo[i] = 238;        break;
    case "\xEF":        FichierAudioJo[i] = 239;        break;
/*****F*****/
    case "\xF0":        FichierAudioJo[i] = 240;        break;
    case "\xF1":        FichierAudioJo[i] = 241;        break;
    case "\xF2":        FichierAudioJo[i] = 242;        break;
    case "\xF3":        FichierAudioJo[i] = 243;        break;
    case "\xF4":        FichierAudioJo[i] = 244;        break;
    case "\xF5":        FichierAudioJo[i] = 245;        break;
    case "\xF6":        FichierAudioJo[i] = 246;        break;
    case "\xF7":        FichierAudioJo[i] = 247;        break;
    case "\xF8":        FichierAudioJo[i] = 248;        break;
    case "\xF9":        FichierAudioJo[i] = 249;        break;
    case "\xFA":        FichierAudioJo[i] = 250;        break;
    case "\xFB":        FichierAudioJo[i] = 251;        break;
    case "\xFC":        FichierAudioJo[i] = 252;        break;
    case "\xFD":        FichierAudioJo[i] = 253;        break;
    case "\xFE":        FichierAudioJo[i] = 254;        break;
    case "\xFF":        FichierAudioJo[i] = 255;        break;
    default:        FichierAudioJo[i] = MiseEnMemoire_Def_Lecture;

MiseEnMemoire_Def_Lecture = FichierAudioJo;
} //fin switch texte1
			} //fin for texte1

 
			}			

convertit(text4);



function ajouteson4() 
		{

  injectionson4 = document.createElement("pre");
  injectionson4.textContent = FichierAudioJo ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  son4 = document.getElementById("donner_son4");
  document.body.insertBefore(injectionson4, son4);
		}
ajouteson4();
	}

reader4.readAsBinaryString(file, "UTF-1616");
}

function gens4(fileList4) 
{
    for (var i = 0; i < fileList4.length; i++) 
	{
        PrendTout4(fileList4[i]);
	}
}

//input 5
function PrendTout5(file) 
{
    var name5 = file.name;
    var reader5 = new FileReader();  
    reader5.onload = function(e5) 
	{ 
text5 = e5.target.result.split(""); 

function convertit(text5)

{

var MiseEnMemoire_Def_Lecture;

    			for (var i = 0; i < text5.length; i++)
			{

switch(text5[i]) {
    case "\x00":        FichierAudioJo[i] = 0;        break;
    case "\x01":        FichierAudioJo[i] = 1;        break;
    case "\x02":        FichierAudioJo[i] = 2;        break;
    case "\x03":        FichierAudioJo[i] = 3;        break;
    case "\x04":        FichierAudioJo[i] = 4;        break;
    case "\x05":        FichierAudioJo[i] = 5;        break;
    case "\x06":        FichierAudioJo[i] = 6;        break;
    case "\x07":        FichierAudioJo[i] = 7;        break;
    case "\x08":        FichierAudioJo[i] = 8;        break;
    case "\x09":        FichierAudioJo[i] = 9;        break;
    case "\x0A":        FichierAudioJo[i] = 10;        break;
    case "\x0B":        FichierAudioJo[i] = 11;        break;
    case "\x0C":        FichierAudioJo[i] = 12;        break;
    case "\x0D":        FichierAudioJo[i] = 13;        break;
    case "\x0E":        FichierAudioJo[i] = 14;        break;
    case "\x0F":        FichierAudioJo[i] = 15;        break;
/**caractere indefini debut a 30***********/
    case "\x10":        FichierAudioJo[i] = 16;        break;
    case "\x11":        FichierAudioJo[i] = 17;        break;
    case "\x12":        FichierAudioJo[i] = 18;        break;
    case "\x13":        FichierAudioJo[i] = 19;        break;
    case "\x14":        FichierAudioJo[i] = 20;        break;
    case "\x15":        FichierAudioJo[i] = 21;        break;
    case "\x16":        FichierAudioJo[i] = 22;        break;
    case "\x17":        FichierAudioJo[i] = 23;        break;
    case "\x18":        FichierAudioJo[i] = 24;        break;
    case "\x19":        FichierAudioJo[i] = 25;        break;
    case "\x1A":        FichierAudioJo[i] = 26;        break;
    case "\x1B":        FichierAudioJo[i] = 27;        break;
    case "\x1C":        FichierAudioJo[i] = 28;        break;
    case "\x1D":        FichierAudioJo[i] = 29;        break;
    case "\x1E":        FichierAudioJo[i] = 30;        break;
    case "\x1F":        FichierAudioJo[i] = 31;        break;
/************/
    case "\x20":        FichierAudioJo[i] = 32;        break;
    case "\x21":        FichierAudioJo[i] = 33;        break;
    case "\x22":        FichierAudioJo[i] = 34;        break;
    case "\x23":        FichierAudioJo[i] = 35;        break;
    case "\x24":        FichierAudioJo[i] = 36;        break;
    case "\x25":        FichierAudioJo[i] = 37;        break;
    case "\x26":        FichierAudioJo[i] = 38;        break;
    case "\x27":        FichierAudioJo[i] = 39;        break;
    case "\x28":        FichierAudioJo[i] = 40;        break;
    case "\x29":        FichierAudioJo[i] = 41;        break;
    case "\x2A":        FichierAudioJo[i] = 42;        break;
    case "\x2B":        FichierAudioJo[i] = 43;        break;
    case "\x2C":        FichierAudioJo[i] = 44;        break;
    case "\x2D":        FichierAudioJo[i] = 45;        break;
    case "\x2E":        FichierAudioJo[i] = 46;        break;
    case "\x2F":        FichierAudioJo[i] = 47;        break;
/*****************/
    case "\x30":        FichierAudioJo[i] = 48;        break;
    case "\x31":        FichierAudioJo[i] = 49;        break;
    case "\x32":        FichierAudioJo[i] = 50;        break;
    case "\x33":        FichierAudioJo[i] = 51;        break;
    case "\x34":        FichierAudioJo[i] = 52;        break;
    case "\x35":        FichierAudioJo[i] = 53;        break;
    case "\x36":        FichierAudioJo[i] = 54;        break;
    case "\x37":        FichierAudioJo[i] = 55;        break;
    case "\x38":        FichierAudioJo[i] = 56;        break;
    case "\x39":        FichierAudioJo[i] = 57;        break;
    case "\x3A":        FichierAudioJo[i] = 58;        break;
    case "\x3B":        FichierAudioJo[i] = 59;        break;
    case "\x3C":        FichierAudioJo[i] = 60;        break;
    case "\x3D":        FichierAudioJo[i] = 61;        break;
    case "\x3E":        FichierAudioJo[i] = 62;        break;
    case "\x3F":        FichierAudioJo[i] = 63;        break;
/*************/
    case "\x40":        FichierAudioJo[i] = 64;        break;
    case "\x41":        FichierAudioJo[i] = 65;        break;
    case "\x42":        FichierAudioJo[i] = 66;        break;
    case "\x43":        FichierAudioJo[i] = 67;        break;
    case "\x44":        FichierAudioJo[i] = 68;        break;
    case "\x45":        FichierAudioJo[i] = 69;        break;
    case "\x46":        FichierAudioJo[i] = 70;        break;
    case "\x47":        FichierAudioJo[i] = 71;        break;
    case "\x48":        FichierAudioJo[i] = 72;        break;
    case "\x49":        FichierAudioJo[i] = 73;        break;
    case "\x4A":        FichierAudioJo[i] = 74;        break;
    case "\x4B":        FichierAudioJo[i] = 75;        break;
    case "\x4C":        FichierAudioJo[i] = 76;        break;
    case "\x4D":        FichierAudioJo[i] = 77;        break;
    case "\x4E":        FichierAudioJo[i] = 78;        break;
    case "\x4F":        FichierAudioJo[i] = 79;        break;
/***************/
    case "\x50":        FichierAudioJo[i] = 80;        break;
    case "\x51":        FichierAudioJo[i] = 81;        break;
    case "\x52":        FichierAudioJo[i] = 82;        break;
    case "\x53":        FichierAudioJo[i] = 83;        break;
    case "\x54":        FichierAudioJo[i] = 84;        break;
    case "\x55":        FichierAudioJo[i] = 85;        break;
    case "\x56":        FichierAudioJo[i] = 86;        break;
    case "\x57":        FichierAudioJo[i] = 87;        break;
    case "\x58":        FichierAudioJo[i] = 88;        break;
    case "\x59":        FichierAudioJo[i] = 89;        break;
    case "\x5A":        FichierAudioJo[i] = 90;        break;
    case "\x5B":        FichierAudioJo[i] = 91;        break;
    case "\x5C":        FichierAudioJo[i] = 92;        break;
    case "\x5D":        FichierAudioJo[i] = 93;        break;
    case "\x5E":        FichierAudioJo[i] = 94;        break;
    case "\x5F":        FichierAudioJo[i] = 95;        break;
/***************/
    case "\x60":        FichierAudioJo[i] = 96;        break;
    case "\x61":        FichierAudioJo[i] = 97;        break;
    case "\x62":        FichierAudioJo[i] = 98;        break;
    case "\x63":        FichierAudioJo[i] = 99;        break;
    case "\x64":        FichierAudioJo[i] = 100;        break;
    case "\x65":        FichierAudioJo[i] = 101;        break;
    case "\x66":        FichierAudioJo[i] = 102;        break;
    case "\x67":        FichierAudioJo[i] = 103;        break;
    case "\x68":        FichierAudioJo[i] = 104;        break;
    case "\x69":        FichierAudioJo[i] = 105;        break;
    case "\x6A":        FichierAudioJo[i] = 106;        break;
    case "\x6B":        FichierAudioJo[i] = 107;        break;
    case "\x6C":        FichierAudioJo[i] = 108;        break;
    case "\x6D":        FichierAudioJo[i] = 109;        break;
    case "\x6E":        FichierAudioJo[i] = 110;        break;
    case "\x6F":        FichierAudioJo[i] = 111;        break;
/**********/
    case "\x70":        FichierAudioJo[i] = 112;        break;
    case "\x71":        FichierAudioJo[i] = 113;        break;
    case "\x72":        FichierAudioJo[i] = 114;        break;
    case "\x73":        FichierAudioJo[i] = 115;        break;
    case "\x74":        FichierAudioJo[i] = 116;        break;
    case "\x75":        FichierAudioJo[i] = 117;        break;
    case "\x76":        FichierAudioJo[i] = 118;        break;
    case "\x77":        FichierAudioJo[i] = 119;        break;
    case "\x78":        FichierAudioJo[i] = 120;        break;
    case "\x79":        FichierAudioJo[i] = 121;        break;
    case "\x7A":        FichierAudioJo[i] = 122;        break;
    case "\x7B":        FichierAudioJo[i] = 123;        break;
    case "\x7C":        FichierAudioJo[i] = 124;        break;
    case "\x7D":        FichierAudioJo[i] = 125;        break;
    case "\x7E":        FichierAudioJo[i] = 126;        break;
    case "\x7F":        FichierAudioJo[i] = 127;        break;
/*****8**debut caractere indefini****/
    case "\x80":        FichierAudioJo[i] = 128;        break;
    case "\x81":        FichierAudioJo[i] = 129;        break;
    case "\x82":        FichierAudioJo[i] = 130;        break;
    case "\x83":        FichierAudioJo[i] = 131;        break;
    case "\x84":        FichierAudioJo[i] = 132;        break;
    case "\x85":        FichierAudioJo[i] = 133;        break;
    case "\x86":       FichierAudioJo[i] = 134;        break;
    case "\x87":       FichierAudioJo[i] = 135;        break;
    case "\x88":        FichierAudioJo[i] = 136;        break;
    case "\x89":       FichierAudioJo[i] = 137;        break;
    case "\x8A":        FichierAudioJo[i] = 138;        break;
    case "\x8B":       FichierAudioJo[i] = 139;        break;
    case "\x8C":      FichierAudioJo[i] = 140;        break;
    case "\x8D":        FichierAudioJo[i] = 141;        break;
    case "\x8E":       FichierAudioJo[i] = 142;        break;
    case "\x8F":        FichierAudioJo[i] = 143;        break;
/********9**********/
    case "\x90":        FichierAudioJo[i] = 144;        break;
    case "\x91":       FichierAudioJo[i] = 145;        break;
    case "\x92":       FichierAudioJo[i] = 146;        break;
    case "\x93":        FichierAudioJo[i] = 147;        break;
    case "\x94":        FichierAudioJo[i] = 148;        break;
    case "\x95":       FichierAudioJo[i] = 149;        break;
    case "\x96":      FichierAudioJo[i] = 150;        break;
    case "\x97":      FichierAudioJo[i] = 151;        break;
    case "\x98":       FichierAudioJo[i] = 152;        break;
    case "\x99":       FichierAudioJo[i] = 153;        break;
    case "\x9A":       FichierAudioJo[i] = 154;        break;
    case "\x9B":       FichierAudioJo[i] = 155;        break;
    case "\x9C":      FichierAudioJo[i] = 156;        break;
    case "\x9D":      FichierAudioJo[i] = 157;        break;
    case "\x9E":      FichierAudioJo[i] = 158;        break;
    case "\x9F":       FichierAudioJo[i] = 159;        break;
/**fin caractere indefini*A**/
    case "\xA0":        FichierAudioJo[i] = 160;        break;
    case "\xA1":        FichierAudioJo[i] = 161;        break;
    case "\xA2":        FichierAudioJo[i] = 162;        break;
    case "\xA3":        FichierAudioJo[i] = 163;        break;
    case "\xA4":        FichierAudioJo[i] = 164;        break;
    case "\xA5":        FichierAudioJo[i] = 165;        break;
    case "\xA6":        FichierAudioJo[i] = 166;        break;
    case "\xA7":        FichierAudioJo[i] = 167;        break;
    case "\xA8":        FichierAudioJo[i] = 168;        break;
    case "\xA9":        FichierAudioJo[i] = 169;        break;
    case "\xAA":        FichierAudioJo[i] = 170;        break;
    case "\xAB":        FichierAudioJo[i] = 171;        break;
    case "\xAC":        FichierAudioJo[i] = 172;        break;
    case "\xAD":        FichierAudioJo[i] = 173;        break;
    case "\xAE":        FichierAudioJo[i] = 174;        break;
    case "\xAF":        FichierAudioJo[i] = 175;        break;
/*******B******/
    case "\xB0":        FichierAudioJo[i] = 176;        break;
    case "\xB1":        FichierAudioJo[i] = 177;        break;
    case "\xB2":        FichierAudioJo[i] = 178;        break;
    case "\xB3":        FichierAudioJo[i] = 179;        break;
    case "\xB4":        FichierAudioJo[i] = 180;        break;
    case "\xB5":        FichierAudioJo[i] = 181;        break;
    case "\xB6":        FichierAudioJo[i] = 182;        break;
    case "\xB7":        FichierAudioJo[i] = 183;        break;
    case "\xB8":        FichierAudioJo[i] = 184;        break;
    case "\xB9":        FichierAudioJo[i] = 185;        break;
    case "\xBA":        FichierAudioJo[i] = 186;        break;
    case "\xBB":        FichierAudioJo[i] = 187;        break;
    case "\xBC":        FichierAudioJo[i] = 188;        break;
    case "\xBD":        FichierAudioJo[i] = 189;        break;
    case "\xBE":        FichierAudioJo[i] = 190;        break;
    case "\xBF":        FichierAudioJo[i] = 191;        break;
/*******C*******/
    case "\xC0":        FichierAudioJo[i] = 192;        break;
    case "\xC1":        FichierAudioJo[i] = 193;        break;
    case "\xC2":        FichierAudioJo[i] = 194;        break;
    case "\xC3":        FichierAudioJo[i] = 195;        break;
    case "\xC4":        FichierAudioJo[i] = 196;        break;
    case "\xC5":        FichierAudioJo[i] = 197;        break;
    case "\xC6":        FichierAudioJo[i] = 198;        break;
    case "\xC7":        FichierAudioJo[i] = 199;        break;
    case "\xC8":        FichierAudioJo[i] = 200;        break;
    case "\xC9":        FichierAudioJo[i] = 201;        break;
    case "\xCA":        FichierAudioJo[i] = 202;        break;
    case "\xCB":        FichierAudioJo[i] = 203;        break;
    case "\xCC":        FichierAudioJo[i] = 204;        break;
    case "\xCD":        FichierAudioJo[i] = 205;        break;
    case "\xCE":        FichierAudioJo[i] = 206;        break;
    case "\xCF":        FichierAudioJo[i] = 207;        break;
/**********D*************/
    case "\xD0":        FichierAudioJo[i] = 208;        break;
    case "\xD1":        FichierAudioJo[i] = 209;        break;
    case "\xD2":        FichierAudioJo[i] = 210;        break;
    case "\xD3":        FichierAudioJo[i] = 211;        break;
    case "\xD4":        FichierAudioJo[i] = 212;        break;
    case "\xD5":        FichierAudioJo[i] = 213;        break;
    case "\xD6":        FichierAudioJo[i] = 214;        break;
    case "\xD7":        FichierAudioJo[i] = 215;        break;
    case "\xD8":        FichierAudioJo[i] = 216;        break;
    case "\xD9":        FichierAudioJo[i] = 217;        break;
    case "\xDA":        FichierAudioJo[i] = 218;        break;
    case "\xDB":        FichierAudioJo[i] = 219;        break;
    case "\xDC":        FichierAudioJo[i] = 220;        break;
    case "\xDD":        FichierAudioJo[i] = 221;        break;
    case "\xDE":        FichierAudioJo[i] = 222;        break;
    case "\xDF":        FichierAudioJo[i] = 223;        break;
/**********E********/
    case "\xE0":        FichierAudioJo[i] = 224;        break;
    case "\xE1":        FichierAudioJo[i] = 225;        break;
    case "\xE2":        FichierAudioJo[i] = 226;        break;
    case "\xE3":        FichierAudioJo[i] = 227;        break;
    case "\xE4":        FichierAudioJo[i] = 228;        break;
    case "\xE5":        FichierAudioJo[i] = 229;        break;
    case "\xE6":        FichierAudioJo[i] = 230;        break;
    case "\xE7":        FichierAudioJo[i] = 231;        break;
    case "\xE8":        FichierAudioJo[i] = 232;        break;
    case "\xE9":        FichierAudioJo[i] = 233;        break;
    case "\xEA":        FichierAudioJo[i] = 234;        break;
    case "\xEB":        FichierAudioJo[i] = 235;        break;
    case "\xEC":        FichierAudioJo[i] = 236;        break;
    case "\xED":        FichierAudioJo[i] = 237;        break;
    case "\xEE":        FichierAudioJo[i] = 238;        break;
    case "\xEF":        FichierAudioJo[i] = 239;        break;
/*****F*****/
    case "\xF0":        FichierAudioJo[i] = 240;        break;
    case "\xF1":        FichierAudioJo[i] = 241;        break;
    case "\xF2":        FichierAudioJo[i] = 242;        break;
    case "\xF3":        FichierAudioJo[i] = 243;        break;
    case "\xF4":        FichierAudioJo[i] = 244;        break;
    case "\xF5":        FichierAudioJo[i] = 245;        break;
    case "\xF6":        FichierAudioJo[i] = 246;        break;
    case "\xF7":        FichierAudioJo[i] = 247;        break;
    case "\xF8":        FichierAudioJo[i] = 248;        break;
    case "\xF9":        FichierAudioJo[i] = 249;        break;
    case "\xFA":        FichierAudioJo[i] = 250;        break;
    case "\xFB":        FichierAudioJo[i] = 251;        break;
    case "\xFC":        FichierAudioJo[i] = 252;        break;
    case "\xFD":        FichierAudioJo[i] = 253;        break;
    case "\xFE":        FichierAudioJo[i] = 254;        break;
    case "\xFF":        FichierAudioJo[i] = 255;        break;
    default:        FichierAudioJo[i] = MiseEnMemoire_Def_Lecture;

MiseEnMemoire_Def_Lecture = FichierAudioJo;
} //fin switch texte1
			} //fin for texte1

 
			}			

convertit(text5);



function ajouteson5() 
		{

  injectionson5 = document.createElement("pre");
  injectionson5.textContent = FichierAudioJo ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  son5 = document.getElementById("donner_son5");
  document.body.insertBefore(injectionson5, son5);
		}
ajouteson5();
	}

reader5.readAsBinaryString(file, "UTF-1616");
}

function gens5(fileList5) 
{
    for (var i = 0; i < fileList5.length; i++) 
	{
        PrendTout5(fileList5[i]);
	}
}

//input 6
function PrendTout6(file) 
{
    var name6 = file.name;
    var reader6 = new FileReader();  
    reader6.onload = function(e6) 
	{ 
text6 = e6.target.result.split(""); 

function convertit(text6)

{

var MiseEnMemoire_Def_Lecture;

    			for (var i = 0; i < text6.length; i++)
			{

switch(text6[i]) {
    case "\x00":        FichierAudioJo[i] = 0;        break;
    case "\x01":        FichierAudioJo[i] = 1;        break;
    case "\x02":        FichierAudioJo[i] = 2;        break;
    case "\x03":        FichierAudioJo[i] = 3;        break;
    case "\x04":        FichierAudioJo[i] = 4;        break;
    case "\x05":        FichierAudioJo[i] = 5;        break;
    case "\x06":        FichierAudioJo[i] = 6;        break;
    case "\x07":        FichierAudioJo[i] = 7;        break;
    case "\x08":        FichierAudioJo[i] = 8;        break;
    case "\x09":        FichierAudioJo[i] = 9;        break;
    case "\x0A":        FichierAudioJo[i] = 10;        break;
    case "\x0B":        FichierAudioJo[i] = 11;        break;
    case "\x0C":        FichierAudioJo[i] = 12;        break;
    case "\x0D":        FichierAudioJo[i] = 13;        break;
    case "\x0E":        FichierAudioJo[i] = 14;        break;
    case "\x0F":        FichierAudioJo[i] = 15;        break;
/**caractere indefini debut a 30***********/
    case "\x10":        FichierAudioJo[i] = 16;        break;
    case "\x11":        FichierAudioJo[i] = 17;        break;
    case "\x12":        FichierAudioJo[i] = 18;        break;
    case "\x13":        FichierAudioJo[i] = 19;        break;
    case "\x14":        FichierAudioJo[i] = 20;        break;
    case "\x15":        FichierAudioJo[i] = 21;        break;
    case "\x16":        FichierAudioJo[i] = 22;        break;
    case "\x17":        FichierAudioJo[i] = 23;        break;
    case "\x18":        FichierAudioJo[i] = 24;        break;
    case "\x19":        FichierAudioJo[i] = 25;        break;
    case "\x1A":        FichierAudioJo[i] = 26;        break;
    case "\x1B":        FichierAudioJo[i] = 27;        break;
    case "\x1C":        FichierAudioJo[i] = 28;        break;
    case "\x1D":        FichierAudioJo[i] = 29;        break;
    case "\x1E":        FichierAudioJo[i] = 30;        break;
    case "\x1F":        FichierAudioJo[i] = 31;        break;
/************/
    case "\x20":        FichierAudioJo[i] = 32;        break;
    case "\x21":        FichierAudioJo[i] = 33;        break;
    case "\x22":        FichierAudioJo[i] = 34;        break;
    case "\x23":        FichierAudioJo[i] = 35;        break;
    case "\x24":        FichierAudioJo[i] = 36;        break;
    case "\x25":        FichierAudioJo[i] = 37;        break;
    case "\x26":        FichierAudioJo[i] = 38;        break;
    case "\x27":        FichierAudioJo[i] = 39;        break;
    case "\x28":        FichierAudioJo[i] = 40;        break;
    case "\x29":        FichierAudioJo[i] = 41;        break;
    case "\x2A":        FichierAudioJo[i] = 42;        break;
    case "\x2B":        FichierAudioJo[i] = 43;        break;
    case "\x2C":        FichierAudioJo[i] = 44;        break;
    case "\x2D":        FichierAudioJo[i] = 45;        break;
    case "\x2E":        FichierAudioJo[i] = 46;        break;
    case "\x2F":        FichierAudioJo[i] = 47;        break;
/*****************/
    case "\x30":        FichierAudioJo[i] = 48;        break;
    case "\x31":        FichierAudioJo[i] = 49;        break;
    case "\x32":        FichierAudioJo[i] = 50;        break;
    case "\x33":        FichierAudioJo[i] = 51;        break;
    case "\x34":        FichierAudioJo[i] = 52;        break;
    case "\x35":        FichierAudioJo[i] = 53;        break;
    case "\x36":        FichierAudioJo[i] = 54;        break;
    case "\x37":        FichierAudioJo[i] = 55;        break;
    case "\x38":        FichierAudioJo[i] = 56;        break;
    case "\x39":        FichierAudioJo[i] = 57;        break;
    case "\x3A":        FichierAudioJo[i] = 58;        break;
    case "\x3B":        FichierAudioJo[i] = 59;        break;
    case "\x3C":        FichierAudioJo[i] = 60;        break;
    case "\x3D":        FichierAudioJo[i] = 61;        break;
    case "\x3E":        FichierAudioJo[i] = 62;        break;
    case "\x3F":        FichierAudioJo[i] = 63;        break;
/*************/
    case "\x40":        FichierAudioJo[i] = 64;        break;
    case "\x41":        FichierAudioJo[i] = 65;        break;
    case "\x42":        FichierAudioJo[i] = 66;        break;
    case "\x43":        FichierAudioJo[i] = 67;        break;
    case "\x44":        FichierAudioJo[i] = 68;        break;
    case "\x45":        FichierAudioJo[i] = 69;        break;
    case "\x46":        FichierAudioJo[i] = 70;        break;
    case "\x47":        FichierAudioJo[i] = 71;        break;
    case "\x48":        FichierAudioJo[i] = 72;        break;
    case "\x49":        FichierAudioJo[i] = 73;        break;
    case "\x4A":        FichierAudioJo[i] = 74;        break;
    case "\x4B":        FichierAudioJo[i] = 75;        break;
    case "\x4C":        FichierAudioJo[i] = 76;        break;
    case "\x4D":        FichierAudioJo[i] = 77;        break;
    case "\x4E":        FichierAudioJo[i] = 78;        break;
    case "\x4F":        FichierAudioJo[i] = 79;        break;
/***************/
    case "\x50":        FichierAudioJo[i] = 80;        break;
    case "\x51":        FichierAudioJo[i] = 81;        break;
    case "\x52":        FichierAudioJo[i] = 82;        break;
    case "\x53":        FichierAudioJo[i] = 83;        break;
    case "\x54":        FichierAudioJo[i] = 84;        break;
    case "\x55":        FichierAudioJo[i] = 85;        break;
    case "\x56":        FichierAudioJo[i] = 86;        break;
    case "\x57":        FichierAudioJo[i] = 87;        break;
    case "\x58":        FichierAudioJo[i] = 88;        break;
    case "\x59":        FichierAudioJo[i] = 89;        break;
    case "\x5A":        FichierAudioJo[i] = 90;        break;
    case "\x5B":        FichierAudioJo[i] = 91;        break;
    case "\x5C":        FichierAudioJo[i] = 92;        break;
    case "\x5D":        FichierAudioJo[i] = 93;        break;
    case "\x5E":        FichierAudioJo[i] = 94;        break;
    case "\x5F":        FichierAudioJo[i] = 95;        break;
/***************/
    case "\x60":        FichierAudioJo[i] = 96;        break;
    case "\x61":        FichierAudioJo[i] = 97;        break;
    case "\x62":        FichierAudioJo[i] = 98;        break;
    case "\x63":        FichierAudioJo[i] = 99;        break;
    case "\x64":        FichierAudioJo[i] = 100;        break;
    case "\x65":        FichierAudioJo[i] = 101;        break;
    case "\x66":        FichierAudioJo[i] = 102;        break;
    case "\x67":        FichierAudioJo[i] = 103;        break;
    case "\x68":        FichierAudioJo[i] = 104;        break;
    case "\x69":        FichierAudioJo[i] = 105;        break;
    case "\x6A":        FichierAudioJo[i] = 106;        break;
    case "\x6B":        FichierAudioJo[i] = 107;        break;
    case "\x6C":        FichierAudioJo[i] = 108;        break;
    case "\x6D":        FichierAudioJo[i] = 109;        break;
    case "\x6E":        FichierAudioJo[i] = 110;        break;
    case "\x6F":        FichierAudioJo[i] = 111;        break;
/**********/
    case "\x70":        FichierAudioJo[i] = 112;        break;
    case "\x71":        FichierAudioJo[i] = 113;        break;
    case "\x72":        FichierAudioJo[i] = 114;        break;
    case "\x73":        FichierAudioJo[i] = 115;        break;
    case "\x74":        FichierAudioJo[i] = 116;        break;
    case "\x75":        FichierAudioJo[i] = 117;        break;
    case "\x76":        FichierAudioJo[i] = 118;        break;
    case "\x77":        FichierAudioJo[i] = 119;        break;
    case "\x78":        FichierAudioJo[i] = 120;        break;
    case "\x79":        FichierAudioJo[i] = 121;        break;
    case "\x7A":        FichierAudioJo[i] = 122;        break;
    case "\x7B":        FichierAudioJo[i] = 123;        break;
    case "\x7C":        FichierAudioJo[i] = 124;        break;
    case "\x7D":        FichierAudioJo[i] = 125;        break;
    case "\x7E":        FichierAudioJo[i] = 126;        break;
    case "\x7F":        FichierAudioJo[i] = 127;        break;
/*****8**debut caractere indefini****/
    case "\x80":        FichierAudioJo[i] = 128;        break;
    case "\x81":        FichierAudioJo[i] = 129;        break;
    case "\x82":        FichierAudioJo[i] = 130;        break;
    case "\x83":        FichierAudioJo[i] = 131;        break;
    case "\x84":        FichierAudioJo[i] = 132;        break;
    case "\x85":        FichierAudioJo[i] = 133;        break;
    case "\x86":       FichierAudioJo[i] = 134;        break;
    case "\x87":       FichierAudioJo[i] = 135;        break;
    case "\x88":        FichierAudioJo[i] = 136;        break;
    case "\x89":       FichierAudioJo[i] = 137;        break;
    case "\x8A":        FichierAudioJo[i] = 138;        break;
    case "\x8B":       FichierAudioJo[i] = 139;        break;
    case "\x8C":      FichierAudioJo[i] = 140;        break;
    case "\x8D":        FichierAudioJo[i] = 141;        break;
    case "\x8E":       FichierAudioJo[i] = 142;        break;
    case "\x8F":        FichierAudioJo[i] = 143;        break;
/********9**********/
    case "\x90":        FichierAudioJo[i] = 144;        break;
    case "\x91":       FichierAudioJo[i] = 145;        break;
    case "\x92":       FichierAudioJo[i] = 146;        break;
    case "\x93":        FichierAudioJo[i] = 147;        break;
    case "\x94":        FichierAudioJo[i] = 148;        break;
    case "\x95":       FichierAudioJo[i] = 149;        break;
    case "\x96":      FichierAudioJo[i] = 150;        break;
    case "\x97":      FichierAudioJo[i] = 151;        break;
    case "\x98":       FichierAudioJo[i] = 152;        break;
    case "\x99":       FichierAudioJo[i] = 153;        break;
    case "\x9A":       FichierAudioJo[i] = 154;        break;
    case "\x9B":       FichierAudioJo[i] = 155;        break;
    case "\x9C":      FichierAudioJo[i] = 156;        break;
    case "\x9D":      FichierAudioJo[i] = 157;        break;
    case "\x9E":      FichierAudioJo[i] = 158;        break;
    case "\x9F":       FichierAudioJo[i] = 159;        break;
/**fin caractere indefini*A**/
    case "\xA0":        FichierAudioJo[i] = 160;        break;
    case "\xA1":        FichierAudioJo[i] = 161;        break;
    case "\xA2":        FichierAudioJo[i] = 162;        break;
    case "\xA3":        FichierAudioJo[i] = 163;        break;
    case "\xA4":        FichierAudioJo[i] = 164;        break;
    case "\xA5":        FichierAudioJo[i] = 165;        break;
    case "\xA6":        FichierAudioJo[i] = 166;        break;
    case "\xA7":        FichierAudioJo[i] = 167;        break;
    case "\xA8":        FichierAudioJo[i] = 168;        break;
    case "\xA9":        FichierAudioJo[i] = 169;        break;
    case "\xAA":        FichierAudioJo[i] = 170;        break;
    case "\xAB":        FichierAudioJo[i] = 171;        break;
    case "\xAC":        FichierAudioJo[i] = 172;        break;
    case "\xAD":        FichierAudioJo[i] = 173;        break;
    case "\xAE":        FichierAudioJo[i] = 174;        break;
    case "\xAF":        FichierAudioJo[i] = 175;        break;
/*******B******/
    case "\xB0":        FichierAudioJo[i] = 176;        break;
    case "\xB1":        FichierAudioJo[i] = 177;        break;
    case "\xB2":        FichierAudioJo[i] = 178;        break;
    case "\xB3":        FichierAudioJo[i] = 179;        break;
    case "\xB4":        FichierAudioJo[i] = 180;        break;
    case "\xB5":        FichierAudioJo[i] = 181;        break;
    case "\xB6":        FichierAudioJo[i] = 182;        break;
    case "\xB7":        FichierAudioJo[i] = 183;        break;
    case "\xB8":        FichierAudioJo[i] = 184;        break;
    case "\xB9":        FichierAudioJo[i] = 185;        break;
    case "\xBA":        FichierAudioJo[i] = 186;        break;
    case "\xBB":        FichierAudioJo[i] = 187;        break;
    case "\xBC":        FichierAudioJo[i] = 188;        break;
    case "\xBD":        FichierAudioJo[i] = 189;        break;
    case "\xBE":        FichierAudioJo[i] = 190;        break;
    case "\xBF":        FichierAudioJo[i] = 191;        break;
/*******C*******/
    case "\xC0":        FichierAudioJo[i] = 192;        break;
    case "\xC1":        FichierAudioJo[i] = 193;        break;
    case "\xC2":        FichierAudioJo[i] = 194;        break;
    case "\xC3":        FichierAudioJo[i] = 195;        break;
    case "\xC4":        FichierAudioJo[i] = 196;        break;
    case "\xC5":        FichierAudioJo[i] = 197;        break;
    case "\xC6":        FichierAudioJo[i] = 198;        break;
    case "\xC7":        FichierAudioJo[i] = 199;        break;
    case "\xC8":        FichierAudioJo[i] = 200;        break;
    case "\xC9":        FichierAudioJo[i] = 201;        break;
    case "\xCA":        FichierAudioJo[i] = 202;        break;
    case "\xCB":        FichierAudioJo[i] = 203;        break;
    case "\xCC":        FichierAudioJo[i] = 204;        break;
    case "\xCD":        FichierAudioJo[i] = 205;        break;
    case "\xCE":        FichierAudioJo[i] = 206;        break;
    case "\xCF":        FichierAudioJo[i] = 207;        break;
/**********D*************/
    case "\xD0":        FichierAudioJo[i] = 208;        break;
    case "\xD1":        FichierAudioJo[i] = 209;        break;
    case "\xD2":        FichierAudioJo[i] = 210;        break;
    case "\xD3":        FichierAudioJo[i] = 211;        break;
    case "\xD4":        FichierAudioJo[i] = 212;        break;
    case "\xD5":        FichierAudioJo[i] = 213;        break;
    case "\xD6":        FichierAudioJo[i] = 214;        break;
    case "\xD7":        FichierAudioJo[i] = 215;        break;
    case "\xD8":        FichierAudioJo[i] = 216;        break;
    case "\xD9":        FichierAudioJo[i] = 217;        break;
    case "\xDA":        FichierAudioJo[i] = 218;        break;
    case "\xDB":        FichierAudioJo[i] = 219;        break;
    case "\xDC":        FichierAudioJo[i] = 220;        break;
    case "\xDD":        FichierAudioJo[i] = 221;        break;
    case "\xDE":        FichierAudioJo[i] = 222;        break;
    case "\xDF":        FichierAudioJo[i] = 223;        break;
/**********E********/
    case "\xE0":        FichierAudioJo[i] = 224;        break;
    case "\xE1":        FichierAudioJo[i] = 225;        break;
    case "\xE2":        FichierAudioJo[i] = 226;        break;
    case "\xE3":        FichierAudioJo[i] = 227;        break;
    case "\xE4":        FichierAudioJo[i] = 228;        break;
    case "\xE5":        FichierAudioJo[i] = 229;        break;
    case "\xE6":        FichierAudioJo[i] = 230;        break;
    case "\xE7":        FichierAudioJo[i] = 231;        break;
    case "\xE8":        FichierAudioJo[i] = 232;        break;
    case "\xE9":        FichierAudioJo[i] = 233;        break;
    case "\xEA":        FichierAudioJo[i] = 234;        break;
    case "\xEB":        FichierAudioJo[i] = 235;        break;
    case "\xEC":        FichierAudioJo[i] = 236;        break;
    case "\xED":        FichierAudioJo[i] = 237;        break;
    case "\xEE":        FichierAudioJo[i] = 238;        break;
    case "\xEF":        FichierAudioJo[i] = 239;        break;
/*****F*****/
    case "\xF0":        FichierAudioJo[i] = 240;        break;
    case "\xF1":        FichierAudioJo[i] = 241;        break;
    case "\xF2":        FichierAudioJo[i] = 242;        break;
    case "\xF3":        FichierAudioJo[i] = 243;        break;
    case "\xF4":        FichierAudioJo[i] = 244;        break;
    case "\xF5":        FichierAudioJo[i] = 245;        break;
    case "\xF6":        FichierAudioJo[i] = 246;        break;
    case "\xF7":        FichierAudioJo[i] = 247;        break;
    case "\xF8":        FichierAudioJo[i] = 248;        break;
    case "\xF9":        FichierAudioJo[i] = 249;        break;
    case "\xFA":        FichierAudioJo[i] = 250;        break;
    case "\xFB":        FichierAudioJo[i] = 251;        break;
    case "\xFC":        FichierAudioJo[i] = 252;        break;
    case "\xFD":        FichierAudioJo[i] = 253;        break;
    case "\xFE":        FichierAudioJo[i] = 254;        break;
    case "\xFF":        FichierAudioJo[i] = 255;        break;
    default:        FichierAudioJo[i] = MiseEnMemoire_Def_Lecture;

MiseEnMemoire_Def_Lecture = FichierAudioJo;
} //fin switch texte1
			} //fin for texte1

 
			}			

convertit(text6);



function ajouteson6() 
		{

  injectionson6 = document.createElement("pre");
  injectionson6.textContent = FichierAudioJo ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  son6 = document.getElementById("donner_son6");
  document.body.insertBefore(injectionson6, son6);
		}
ajouteson6();
	}

reader6.readAsBinaryString(file, "UTF-1616");
}

function gens6(fileList6) 
{
    for (var i = 0; i < fileList6.length; i++) 
	{
        PrendTout6(fileList6[i]);
	}
}

//input 7
function PrendTout7(file) 
{
    var name7 = file.name;
    var reader7 = new FileReader();  
    reader7.onload = function(e7) 
	{ 
text7 = e7.target.result.split(""); 

function convertit(text7)

{

var MiseEnMemoire_Def_Lecture;

    			for (var i = 0; i < text7.length; i++)
			{

switch(text7[i]) {
    case "\x00":        FichierAudioJo[i] = 0;        break;
    case "\x01":        FichierAudioJo[i] = 1;        break;
    case "\x02":        FichierAudioJo[i] = 2;        break;
    case "\x03":        FichierAudioJo[i] = 3;        break;
    case "\x04":        FichierAudioJo[i] = 4;        break;
    case "\x05":        FichierAudioJo[i] = 5;        break;
    case "\x06":        FichierAudioJo[i] = 6;        break;
    case "\x07":        FichierAudioJo[i] = 7;        break;
    case "\x08":        FichierAudioJo[i] = 8;        break;
    case "\x09":        FichierAudioJo[i] = 9;        break;
    case "\x0A":        FichierAudioJo[i] = 10;        break;
    case "\x0B":        FichierAudioJo[i] = 11;        break;
    case "\x0C":        FichierAudioJo[i] = 12;        break;
    case "\x0D":        FichierAudioJo[i] = 13;        break;
    case "\x0E":        FichierAudioJo[i] = 14;        break;
    case "\x0F":        FichierAudioJo[i] = 15;        break;
/**caractere indefini debut a 30***********/
    case "\x10":        FichierAudioJo[i] = 16;        break;
    case "\x11":        FichierAudioJo[i] = 17;        break;
    case "\x12":        FichierAudioJo[i] = 18;        break;
    case "\x13":        FichierAudioJo[i] = 19;        break;
    case "\x14":        FichierAudioJo[i] = 20;        break;
    case "\x15":        FichierAudioJo[i] = 21;        break;
    case "\x16":        FichierAudioJo[i] = 22;        break;
    case "\x17":        FichierAudioJo[i] = 23;        break;
    case "\x18":        FichierAudioJo[i] = 24;        break;
    case "\x19":        FichierAudioJo[i] = 25;        break;
    case "\x1A":        FichierAudioJo[i] = 26;        break;
    case "\x1B":        FichierAudioJo[i] = 27;        break;
    case "\x1C":        FichierAudioJo[i] = 28;        break;
    case "\x1D":        FichierAudioJo[i] = 29;        break;
    case "\x1E":        FichierAudioJo[i] = 30;        break;
    case "\x1F":        FichierAudioJo[i] = 31;        break;
/************/
    case "\x20":        FichierAudioJo[i] = 32;        break;
    case "\x21":        FichierAudioJo[i] = 33;        break;
    case "\x22":        FichierAudioJo[i] = 34;        break;
    case "\x23":        FichierAudioJo[i] = 35;        break;
    case "\x24":        FichierAudioJo[i] = 36;        break;
    case "\x25":        FichierAudioJo[i] = 37;        break;
    case "\x26":        FichierAudioJo[i] = 38;        break;
    case "\x27":        FichierAudioJo[i] = 39;        break;
    case "\x28":        FichierAudioJo[i] = 40;        break;
    case "\x29":        FichierAudioJo[i] = 41;        break;
    case "\x2A":        FichierAudioJo[i] = 42;        break;
    case "\x2B":        FichierAudioJo[i] = 43;        break;
    case "\x2C":        FichierAudioJo[i] = 44;        break;
    case "\x2D":        FichierAudioJo[i] = 45;        break;
    case "\x2E":        FichierAudioJo[i] = 46;        break;
    case "\x2F":        FichierAudioJo[i] = 47;        break;
/*****************/
    case "\x30":        FichierAudioJo[i] = 48;        break;
    case "\x31":        FichierAudioJo[i] = 49;        break;
    case "\x32":        FichierAudioJo[i] = 50;        break;
    case "\x33":        FichierAudioJo[i] = 51;        break;
    case "\x34":        FichierAudioJo[i] = 52;        break;
    case "\x35":        FichierAudioJo[i] = 53;        break;
    case "\x36":        FichierAudioJo[i] = 54;        break;
    case "\x37":        FichierAudioJo[i] = 55;        break;
    case "\x38":        FichierAudioJo[i] = 56;        break;
    case "\x39":        FichierAudioJo[i] = 57;        break;
    case "\x3A":        FichierAudioJo[i] = 58;        break;
    case "\x3B":        FichierAudioJo[i] = 59;        break;
    case "\x3C":        FichierAudioJo[i] = 60;        break;
    case "\x3D":        FichierAudioJo[i] = 61;        break;
    case "\x3E":        FichierAudioJo[i] = 62;        break;
    case "\x3F":        FichierAudioJo[i] = 63;        break;
/*************/
    case "\x40":        FichierAudioJo[i] = 64;        break;
    case "\x41":        FichierAudioJo[i] = 65;        break;
    case "\x42":        FichierAudioJo[i] = 66;        break;
    case "\x43":        FichierAudioJo[i] = 67;        break;
    case "\x44":        FichierAudioJo[i] = 68;        break;
    case "\x45":        FichierAudioJo[i] = 69;        break;
    case "\x46":        FichierAudioJo[i] = 70;        break;
    case "\x47":        FichierAudioJo[i] = 71;        break;
    case "\x48":        FichierAudioJo[i] = 72;        break;
    case "\x49":        FichierAudioJo[i] = 73;        break;
    case "\x4A":        FichierAudioJo[i] = 74;        break;
    case "\x4B":        FichierAudioJo[i] = 75;        break;
    case "\x4C":        FichierAudioJo[i] = 76;        break;
    case "\x4D":        FichierAudioJo[i] = 77;        break;
    case "\x4E":        FichierAudioJo[i] = 78;        break;
    case "\x4F":        FichierAudioJo[i] = 79;        break;
/***************/
    case "\x50":        FichierAudioJo[i] = 80;        break;
    case "\x51":        FichierAudioJo[i] = 81;        break;
    case "\x52":        FichierAudioJo[i] = 82;        break;
    case "\x53":        FichierAudioJo[i] = 83;        break;
    case "\x54":        FichierAudioJo[i] = 84;        break;
    case "\x55":        FichierAudioJo[i] = 85;        break;
    case "\x56":        FichierAudioJo[i] = 86;        break;
    case "\x57":        FichierAudioJo[i] = 87;        break;
    case "\x58":        FichierAudioJo[i] = 88;        break;
    case "\x59":        FichierAudioJo[i] = 89;        break;
    case "\x5A":        FichierAudioJo[i] = 90;        break;
    case "\x5B":        FichierAudioJo[i] = 91;        break;
    case "\x5C":        FichierAudioJo[i] = 92;        break;
    case "\x5D":        FichierAudioJo[i] = 93;        break;
    case "\x5E":        FichierAudioJo[i] = 94;        break;
    case "\x5F":        FichierAudioJo[i] = 95;        break;
/***************/
    case "\x60":        FichierAudioJo[i] = 96;        break;
    case "\x61":        FichierAudioJo[i] = 97;        break;
    case "\x62":        FichierAudioJo[i] = 98;        break;
    case "\x63":        FichierAudioJo[i] = 99;        break;
    case "\x64":        FichierAudioJo[i] = 100;        break;
    case "\x65":        FichierAudioJo[i] = 101;        break;
    case "\x66":        FichierAudioJo[i] = 102;        break;
    case "\x67":        FichierAudioJo[i] = 103;        break;
    case "\x68":        FichierAudioJo[i] = 104;        break;
    case "\x69":        FichierAudioJo[i] = 105;        break;
    case "\x6A":        FichierAudioJo[i] = 106;        break;
    case "\x6B":        FichierAudioJo[i] = 107;        break;
    case "\x6C":        FichierAudioJo[i] = 108;        break;
    case "\x6D":        FichierAudioJo[i] = 109;        break;
    case "\x6E":        FichierAudioJo[i] = 110;        break;
    case "\x6F":        FichierAudioJo[i] = 111;        break;
/**********/
    case "\x70":        FichierAudioJo[i] = 112;        break;
    case "\x71":        FichierAudioJo[i] = 113;        break;
    case "\x72":        FichierAudioJo[i] = 114;        break;
    case "\x73":        FichierAudioJo[i] = 115;        break;
    case "\x74":        FichierAudioJo[i] = 116;        break;
    case "\x75":        FichierAudioJo[i] = 117;        break;
    case "\x76":        FichierAudioJo[i] = 118;        break;
    case "\x77":        FichierAudioJo[i] = 119;        break;
    case "\x78":        FichierAudioJo[i] = 120;        break;
    case "\x79":        FichierAudioJo[i] = 121;        break;
    case "\x7A":        FichierAudioJo[i] = 122;        break;
    case "\x7B":        FichierAudioJo[i] = 123;        break;
    case "\x7C":        FichierAudioJo[i] = 124;        break;
    case "\x7D":        FichierAudioJo[i] = 125;        break;
    case "\x7E":        FichierAudioJo[i] = 126;        break;
    case "\x7F":        FichierAudioJo[i] = 127;        break;
/*****8**debut caractere indefini****/
    case "\x80":        FichierAudioJo[i] = 128;        break;
    case "\x81":        FichierAudioJo[i] = 129;        break;
    case "\x82":        FichierAudioJo[i] = 130;        break;
    case "\x83":        FichierAudioJo[i] = 131;        break;
    case "\x84":        FichierAudioJo[i] = 132;        break;
    case "\x85":        FichierAudioJo[i] = 133;        break;
    case "\x86":       FichierAudioJo[i] = 134;        break;
    case "\x87":       FichierAudioJo[i] = 135;        break;
    case "\x88":        FichierAudioJo[i] = 136;        break;
    case "\x89":       FichierAudioJo[i] = 137;        break;
    case "\x8A":        FichierAudioJo[i] = 138;        break;
    case "\x8B":       FichierAudioJo[i] = 139;        break;
    case "\x8C":      FichierAudioJo[i] = 140;        break;
    case "\x8D":        FichierAudioJo[i] = 141;        break;
    case "\x8E":       FichierAudioJo[i] = 142;        break;
    case "\x8F":        FichierAudioJo[i] = 143;        break;
/********9**********/
    case "\x90":        FichierAudioJo[i] = 144;        break;
    case "\x91":       FichierAudioJo[i] = 145;        break;
    case "\x92":       FichierAudioJo[i] = 146;        break;
    case "\x93":        FichierAudioJo[i] = 147;        break;
    case "\x94":        FichierAudioJo[i] = 148;        break;
    case "\x95":       FichierAudioJo[i] = 149;        break;
    case "\x96":      FichierAudioJo[i] = 150;        break;
    case "\x97":      FichierAudioJo[i] = 151;        break;
    case "\x98":       FichierAudioJo[i] = 152;        break;
    case "\x99":       FichierAudioJo[i] = 153;        break;
    case "\x9A":       FichierAudioJo[i] = 154;        break;
    case "\x9B":       FichierAudioJo[i] = 155;        break;
    case "\x9C":      FichierAudioJo[i] = 156;        break;
    case "\x9D":      FichierAudioJo[i] = 157;        break;
    case "\x9E":      FichierAudioJo[i] = 158;        break;
    case "\x9F":       FichierAudioJo[i] = 159;        break;
/**fin caractere indefini*A**/
    case "\xA0":        FichierAudioJo[i] = 160;        break;
    case "\xA1":        FichierAudioJo[i] = 161;        break;
    case "\xA2":        FichierAudioJo[i] = 162;        break;
    case "\xA3":        FichierAudioJo[i] = 163;        break;
    case "\xA4":        FichierAudioJo[i] = 164;        break;
    case "\xA5":        FichierAudioJo[i] = 165;        break;
    case "\xA6":        FichierAudioJo[i] = 166;        break;
    case "\xA7":        FichierAudioJo[i] = 167;        break;
    case "\xA8":        FichierAudioJo[i] = 168;        break;
    case "\xA9":        FichierAudioJo[i] = 169;        break;
    case "\xAA":        FichierAudioJo[i] = 170;        break;
    case "\xAB":        FichierAudioJo[i] = 171;        break;
    case "\xAC":        FichierAudioJo[i] = 172;        break;
    case "\xAD":        FichierAudioJo[i] = 173;        break;
    case "\xAE":        FichierAudioJo[i] = 174;        break;
    case "\xAF":        FichierAudioJo[i] = 175;        break;
/*******B******/
    case "\xB0":        FichierAudioJo[i] = 176;        break;
    case "\xB1":        FichierAudioJo[i] = 177;        break;
    case "\xB2":        FichierAudioJo[i] = 178;        break;
    case "\xB3":        FichierAudioJo[i] = 179;        break;
    case "\xB4":        FichierAudioJo[i] = 180;        break;
    case "\xB5":        FichierAudioJo[i] = 181;        break;
    case "\xB6":        FichierAudioJo[i] = 182;        break;
    case "\xB7":        FichierAudioJo[i] = 183;        break;
    case "\xB8":        FichierAudioJo[i] = 184;        break;
    case "\xB9":        FichierAudioJo[i] = 185;        break;
    case "\xBA":        FichierAudioJo[i] = 186;        break;
    case "\xBB":        FichierAudioJo[i] = 187;        break;
    case "\xBC":        FichierAudioJo[i] = 188;        break;
    case "\xBD":        FichierAudioJo[i] = 189;        break;
    case "\xBE":        FichierAudioJo[i] = 190;        break;
    case "\xBF":        FichierAudioJo[i] = 191;        break;
/*******C*******/
    case "\xC0":        FichierAudioJo[i] = 192;        break;
    case "\xC1":        FichierAudioJo[i] = 193;        break;
    case "\xC2":        FichierAudioJo[i] = 194;        break;
    case "\xC3":        FichierAudioJo[i] = 195;        break;
    case "\xC4":        FichierAudioJo[i] = 196;        break;
    case "\xC5":        FichierAudioJo[i] = 197;        break;
    case "\xC6":        FichierAudioJo[i] = 198;        break;
    case "\xC7":        FichierAudioJo[i] = 199;        break;
    case "\xC8":        FichierAudioJo[i] = 200;        break;
    case "\xC9":        FichierAudioJo[i] = 201;        break;
    case "\xCA":        FichierAudioJo[i] = 202;        break;
    case "\xCB":        FichierAudioJo[i] = 203;        break;
    case "\xCC":        FichierAudioJo[i] = 204;        break;
    case "\xCD":        FichierAudioJo[i] = 205;        break;
    case "\xCE":        FichierAudioJo[i] = 206;        break;
    case "\xCF":        FichierAudioJo[i] = 207;        break;
/**********D*************/
    case "\xD0":        FichierAudioJo[i] = 208;        break;
    case "\xD1":        FichierAudioJo[i] = 209;        break;
    case "\xD2":        FichierAudioJo[i] = 210;        break;
    case "\xD3":        FichierAudioJo[i] = 211;        break;
    case "\xD4":        FichierAudioJo[i] = 212;        break;
    case "\xD5":        FichierAudioJo[i] = 213;        break;
    case "\xD6":        FichierAudioJo[i] = 214;        break;
    case "\xD7":        FichierAudioJo[i] = 215;        break;
    case "\xD8":        FichierAudioJo[i] = 216;        break;
    case "\xD9":        FichierAudioJo[i] = 217;        break;
    case "\xDA":        FichierAudioJo[i] = 218;        break;
    case "\xDB":        FichierAudioJo[i] = 219;        break;
    case "\xDC":        FichierAudioJo[i] = 220;        break;
    case "\xDD":        FichierAudioJo[i] = 221;        break;
    case "\xDE":        FichierAudioJo[i] = 222;        break;
    case "\xDF":        FichierAudioJo[i] = 223;        break;
/**********E********/
    case "\xE0":        FichierAudioJo[i] = 224;        break;
    case "\xE1":        FichierAudioJo[i] = 225;        break;
    case "\xE2":        FichierAudioJo[i] = 226;        break;
    case "\xE3":        FichierAudioJo[i] = 227;        break;
    case "\xE4":        FichierAudioJo[i] = 228;        break;
    case "\xE5":        FichierAudioJo[i] = 229;        break;
    case "\xE6":        FichierAudioJo[i] = 230;        break;
    case "\xE7":        FichierAudioJo[i] = 231;        break;
    case "\xE8":        FichierAudioJo[i] = 232;        break;
    case "\xE9":        FichierAudioJo[i] = 233;        break;
    case "\xEA":        FichierAudioJo[i] = 234;        break;
    case "\xEB":        FichierAudioJo[i] = 235;        break;
    case "\xEC":        FichierAudioJo[i] = 236;        break;
    case "\xED":        FichierAudioJo[i] = 237;        break;
    case "\xEE":        FichierAudioJo[i] = 238;        break;
    case "\xEF":        FichierAudioJo[i] = 239;        break;
/*****F*****/
    case "\xF0":        FichierAudioJo[i] = 240;        break;
    case "\xF1":        FichierAudioJo[i] = 241;        break;
    case "\xF2":        FichierAudioJo[i] = 242;        break;
    case "\xF3":        FichierAudioJo[i] = 243;        break;
    case "\xF4":        FichierAudioJo[i] = 244;        break;
    case "\xF5":        FichierAudioJo[i] = 245;        break;
    case "\xF6":        FichierAudioJo[i] = 246;        break;
    case "\xF7":        FichierAudioJo[i] = 247;        break;
    case "\xF8":        FichierAudioJo[i] = 248;        break;
    case "\xF9":        FichierAudioJo[i] = 249;        break;
    case "\xFA":        FichierAudioJo[i] = 250;        break;
    case "\xFB":        FichierAudioJo[i] = 251;        break;
    case "\xFC":        FichierAudioJo[i] = 252;        break;
    case "\xFD":        FichierAudioJo[i] = 253;        break;
    case "\xFE":        FichierAudioJo[i] = 254;        break;
    case "\xFF":        FichierAudioJo[i] = 255;        break;
    default:        FichierAudioJo[i] = MiseEnMemoire_Def_Lecture;

MiseEnMemoire_Def_Lecture = FichierAudioJo;
} //fin switch texte1
			} //fin for texte1

 
			}			

convertit(text7);



function ajouteson7() 
		{

  injectionson7 = document.createElement("pre");
  injectionson7.textContent = FichierAudioJo ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  son7 = document.getElementById("donner_son7");
  document.body.insertBefore(injectionson7, son7);
		}
ajouteson7();
	}

reader7.readAsBinaryString(file, "UTF-1616");
}

function gens7(fileList7) 
{
    for (var i = 0; i < fileList7.length; i++) 
	{
        PrendTout7(fileList7[i]);
	}
}

//input 8
function PrendTout8(file) 
{
    var name8 = file.name;
    var reader8 = new FileReader();  
    reader8.onload = function(e8) 
	{ 
text8 = e8.target.result.split(""); 

function convertit(text8)

{

var MiseEnMemoire_Def_Lecture;

    			for (var i = 0; i < text8.length; i++)
			{

switch(text8[i]) {
    case "\x00":        FichierAudioJo[i] = 0;        break;
    case "\x01":        FichierAudioJo[i] = 1;        break;
    case "\x02":        FichierAudioJo[i] = 2;        break;
    case "\x03":        FichierAudioJo[i] = 3;        break;
    case "\x04":        FichierAudioJo[i] = 4;        break;
    case "\x05":        FichierAudioJo[i] = 5;        break;
    case "\x06":        FichierAudioJo[i] = 6;        break;
    case "\x07":        FichierAudioJo[i] = 7;        break;
    case "\x08":        FichierAudioJo[i] = 8;        break;
    case "\x09":        FichierAudioJo[i] = 9;        break;
    case "\x0A":        FichierAudioJo[i] = 10;        break;
    case "\x0B":        FichierAudioJo[i] = 11;        break;
    case "\x0C":        FichierAudioJo[i] = 12;        break;
    case "\x0D":        FichierAudioJo[i] = 13;        break;
    case "\x0E":        FichierAudioJo[i] = 14;        break;
    case "\x0F":        FichierAudioJo[i] = 15;        break;
/**caractere indefini debut a 30***********/
    case "\x10":        FichierAudioJo[i] = 16;        break;
    case "\x11":        FichierAudioJo[i] = 17;        break;
    case "\x12":        FichierAudioJo[i] = 18;        break;
    case "\x13":        FichierAudioJo[i] = 19;        break;
    case "\x14":        FichierAudioJo[i] = 20;        break;
    case "\x15":        FichierAudioJo[i] = 21;        break;
    case "\x16":        FichierAudioJo[i] = 22;        break;
    case "\x17":        FichierAudioJo[i] = 23;        break;
    case "\x18":        FichierAudioJo[i] = 24;        break;
    case "\x19":        FichierAudioJo[i] = 25;        break;
    case "\x1A":        FichierAudioJo[i] = 26;        break;
    case "\x1B":        FichierAudioJo[i] = 27;        break;
    case "\x1C":        FichierAudioJo[i] = 28;        break;
    case "\x1D":        FichierAudioJo[i] = 29;        break;
    case "\x1E":        FichierAudioJo[i] = 30;        break;
    case "\x1F":        FichierAudioJo[i] = 31;        break;
/************/
    case "\x20":        FichierAudioJo[i] = 32;        break;
    case "\x21":        FichierAudioJo[i] = 33;        break;
    case "\x22":        FichierAudioJo[i] = 34;        break;
    case "\x23":        FichierAudioJo[i] = 35;        break;
    case "\x24":        FichierAudioJo[i] = 36;        break;
    case "\x25":        FichierAudioJo[i] = 37;        break;
    case "\x26":        FichierAudioJo[i] = 38;        break;
    case "\x27":        FichierAudioJo[i] = 39;        break;
    case "\x28":        FichierAudioJo[i] = 40;        break;
    case "\x29":        FichierAudioJo[i] = 41;        break;
    case "\x2A":        FichierAudioJo[i] = 42;        break;
    case "\x2B":        FichierAudioJo[i] = 43;        break;
    case "\x2C":        FichierAudioJo[i] = 44;        break;
    case "\x2D":        FichierAudioJo[i] = 45;        break;
    case "\x2E":        FichierAudioJo[i] = 46;        break;
    case "\x2F":        FichierAudioJo[i] = 47;        break;
/*****************/
    case "\x30":        FichierAudioJo[i] = 48;        break;
    case "\x31":        FichierAudioJo[i] = 49;        break;
    case "\x32":        FichierAudioJo[i] = 50;        break;
    case "\x33":        FichierAudioJo[i] = 51;        break;
    case "\x34":        FichierAudioJo[i] = 52;        break;
    case "\x35":        FichierAudioJo[i] = 53;        break;
    case "\x36":        FichierAudioJo[i] = 54;        break;
    case "\x37":        FichierAudioJo[i] = 55;        break;
    case "\x38":        FichierAudioJo[i] = 56;        break;
    case "\x39":        FichierAudioJo[i] = 57;        break;
    case "\x3A":        FichierAudioJo[i] = 58;        break;
    case "\x3B":        FichierAudioJo[i] = 59;        break;
    case "\x3C":        FichierAudioJo[i] = 60;        break;
    case "\x3D":        FichierAudioJo[i] = 61;        break;
    case "\x3E":        FichierAudioJo[i] = 62;        break;
    case "\x3F":        FichierAudioJo[i] = 63;        break;
/*************/
    case "\x40":        FichierAudioJo[i] = 64;        break;
    case "\x41":        FichierAudioJo[i] = 65;        break;
    case "\x42":        FichierAudioJo[i] = 66;        break;
    case "\x43":        FichierAudioJo[i] = 67;        break;
    case "\x44":        FichierAudioJo[i] = 68;        break;
    case "\x45":        FichierAudioJo[i] = 69;        break;
    case "\x46":        FichierAudioJo[i] = 70;        break;
    case "\x47":        FichierAudioJo[i] = 71;        break;
    case "\x48":        FichierAudioJo[i] = 72;        break;
    case "\x49":        FichierAudioJo[i] = 73;        break;
    case "\x4A":        FichierAudioJo[i] = 74;        break;
    case "\x4B":        FichierAudioJo[i] = 75;        break;
    case "\x4C":        FichierAudioJo[i] = 76;        break;
    case "\x4D":        FichierAudioJo[i] = 77;        break;
    case "\x4E":        FichierAudioJo[i] = 78;        break;
    case "\x4F":        FichierAudioJo[i] = 79;        break;
/***************/
    case "\x50":        FichierAudioJo[i] = 80;        break;
    case "\x51":        FichierAudioJo[i] = 81;        break;
    case "\x52":        FichierAudioJo[i] = 82;        break;
    case "\x53":        FichierAudioJo[i] = 83;        break;
    case "\x54":        FichierAudioJo[i] = 84;        break;
    case "\x55":        FichierAudioJo[i] = 85;        break;
    case "\x56":        FichierAudioJo[i] = 86;        break;
    case "\x57":        FichierAudioJo[i] = 87;        break;
    case "\x58":        FichierAudioJo[i] = 88;        break;
    case "\x59":        FichierAudioJo[i] = 89;        break;
    case "\x5A":        FichierAudioJo[i] = 90;        break;
    case "\x5B":        FichierAudioJo[i] = 91;        break;
    case "\x5C":        FichierAudioJo[i] = 92;        break;
    case "\x5D":        FichierAudioJo[i] = 93;        break;
    case "\x5E":        FichierAudioJo[i] = 94;        break;
    case "\x5F":        FichierAudioJo[i] = 95;        break;
/***************/
    case "\x60":        FichierAudioJo[i] = 96;        break;
    case "\x61":        FichierAudioJo[i] = 97;        break;
    case "\x62":        FichierAudioJo[i] = 98;        break;
    case "\x63":        FichierAudioJo[i] = 99;        break;
    case "\x64":        FichierAudioJo[i] = 100;        break;
    case "\x65":        FichierAudioJo[i] = 101;        break;
    case "\x66":        FichierAudioJo[i] = 102;        break;
    case "\x67":        FichierAudioJo[i] = 103;        break;
    case "\x68":        FichierAudioJo[i] = 104;        break;
    case "\x69":        FichierAudioJo[i] = 105;        break;
    case "\x6A":        FichierAudioJo[i] = 106;        break;
    case "\x6B":        FichierAudioJo[i] = 107;        break;
    case "\x6C":        FichierAudioJo[i] = 108;        break;
    case "\x6D":        FichierAudioJo[i] = 109;        break;
    case "\x6E":        FichierAudioJo[i] = 110;        break;
    case "\x6F":        FichierAudioJo[i] = 111;        break;
/**********/
    case "\x70":        FichierAudioJo[i] = 112;        break;
    case "\x71":        FichierAudioJo[i] = 113;        break;
    case "\x72":        FichierAudioJo[i] = 114;        break;
    case "\x73":        FichierAudioJo[i] = 115;        break;
    case "\x74":        FichierAudioJo[i] = 116;        break;
    case "\x75":        FichierAudioJo[i] = 117;        break;
    case "\x76":        FichierAudioJo[i] = 118;        break;
    case "\x77":        FichierAudioJo[i] = 119;        break;
    case "\x78":        FichierAudioJo[i] = 120;        break;
    case "\x79":        FichierAudioJo[i] = 121;        break;
    case "\x7A":        FichierAudioJo[i] = 122;        break;
    case "\x7B":        FichierAudioJo[i] = 123;        break;
    case "\x7C":        FichierAudioJo[i] = 124;        break;
    case "\x7D":        FichierAudioJo[i] = 125;        break;
    case "\x7E":        FichierAudioJo[i] = 126;        break;
    case "\x7F":        FichierAudioJo[i] = 127;        break;
/*****8**debut caractere indefini****/
    case "\x80":        FichierAudioJo[i] = 128;        break;
    case "\x81":        FichierAudioJo[i] = 129;        break;
    case "\x82":        FichierAudioJo[i] = 130;        break;
    case "\x83":        FichierAudioJo[i] = 131;        break;
    case "\x84":        FichierAudioJo[i] = 132;        break;
    case "\x85":        FichierAudioJo[i] = 133;        break;
    case "\x86":       FichierAudioJo[i] = 134;        break;
    case "\x87":       FichierAudioJo[i] = 135;        break;
    case "\x88":        FichierAudioJo[i] = 136;        break;
    case "\x89":       FichierAudioJo[i] = 137;        break;
    case "\x8A":        FichierAudioJo[i] = 138;        break;
    case "\x8B":       FichierAudioJo[i] = 139;        break;
    case "\x8C":      FichierAudioJo[i] = 140;        break;
    case "\x8D":        FichierAudioJo[i] = 141;        break;
    case "\x8E":       FichierAudioJo[i] = 142;        break;
    case "\x8F":        FichierAudioJo[i] = 143;        break;
/********9**********/
    case "\x90":        FichierAudioJo[i] = 144;        break;
    case "\x91":       FichierAudioJo[i] = 145;        break;
    case "\x92":       FichierAudioJo[i] = 146;        break;
    case "\x93":        FichierAudioJo[i] = 147;        break;
    case "\x94":        FichierAudioJo[i] = 148;        break;
    case "\x95":       FichierAudioJo[i] = 149;        break;
    case "\x96":      FichierAudioJo[i] = 150;        break;
    case "\x97":      FichierAudioJo[i] = 151;        break;
    case "\x98":       FichierAudioJo[i] = 152;        break;
    case "\x99":       FichierAudioJo[i] = 153;        break;
    case "\x9A":       FichierAudioJo[i] = 154;        break;
    case "\x9B":       FichierAudioJo[i] = 155;        break;
    case "\x9C":      FichierAudioJo[i] = 156;        break;
    case "\x9D":      FichierAudioJo[i] = 157;        break;
    case "\x9E":      FichierAudioJo[i] = 158;        break;
    case "\x9F":       FichierAudioJo[i] = 159;        break;
/**fin caractere indefini*A**/
    case "\xA0":        FichierAudioJo[i] = 160;        break;
    case "\xA1":        FichierAudioJo[i] = 161;        break;
    case "\xA2":        FichierAudioJo[i] = 162;        break;
    case "\xA3":        FichierAudioJo[i] = 163;        break;
    case "\xA4":        FichierAudioJo[i] = 164;        break;
    case "\xA5":        FichierAudioJo[i] = 165;        break;
    case "\xA6":        FichierAudioJo[i] = 166;        break;
    case "\xA7":        FichierAudioJo[i] = 167;        break;
    case "\xA8":        FichierAudioJo[i] = 168;        break;
    case "\xA9":        FichierAudioJo[i] = 169;        break;
    case "\xAA":        FichierAudioJo[i] = 170;        break;
    case "\xAB":        FichierAudioJo[i] = 171;        break;
    case "\xAC":        FichierAudioJo[i] = 172;        break;
    case "\xAD":        FichierAudioJo[i] = 173;        break;
    case "\xAE":        FichierAudioJo[i] = 174;        break;
    case "\xAF":        FichierAudioJo[i] = 175;        break;
/*******B******/
    case "\xB0":        FichierAudioJo[i] = 176;        break;
    case "\xB1":        FichierAudioJo[i] = 177;        break;
    case "\xB2":        FichierAudioJo[i] = 178;        break;
    case "\xB3":        FichierAudioJo[i] = 179;        break;
    case "\xB4":        FichierAudioJo[i] = 180;        break;
    case "\xB5":        FichierAudioJo[i] = 181;        break;
    case "\xB6":        FichierAudioJo[i] = 182;        break;
    case "\xB7":        FichierAudioJo[i] = 183;        break;
    case "\xB8":        FichierAudioJo[i] = 184;        break;
    case "\xB9":        FichierAudioJo[i] = 185;        break;
    case "\xBA":        FichierAudioJo[i] = 186;        break;
    case "\xBB":        FichierAudioJo[i] = 187;        break;
    case "\xBC":        FichierAudioJo[i] = 188;        break;
    case "\xBD":        FichierAudioJo[i] = 189;        break;
    case "\xBE":        FichierAudioJo[i] = 190;        break;
    case "\xBF":        FichierAudioJo[i] = 191;        break;
/*******C*******/
    case "\xC0":        FichierAudioJo[i] = 192;        break;
    case "\xC1":        FichierAudioJo[i] = 193;        break;
    case "\xC2":        FichierAudioJo[i] = 194;        break;
    case "\xC3":        FichierAudioJo[i] = 195;        break;
    case "\xC4":        FichierAudioJo[i] = 196;        break;
    case "\xC5":        FichierAudioJo[i] = 197;        break;
    case "\xC6":        FichierAudioJo[i] = 198;        break;
    case "\xC7":        FichierAudioJo[i] = 199;        break;
    case "\xC8":        FichierAudioJo[i] = 200;        break;
    case "\xC9":        FichierAudioJo[i] = 201;        break;
    case "\xCA":        FichierAudioJo[i] = 202;        break;
    case "\xCB":        FichierAudioJo[i] = 203;        break;
    case "\xCC":        FichierAudioJo[i] = 204;        break;
    case "\xCD":        FichierAudioJo[i] = 205;        break;
    case "\xCE":        FichierAudioJo[i] = 206;        break;
    case "\xCF":        FichierAudioJo[i] = 207;        break;
/**********D*************/
    case "\xD0":        FichierAudioJo[i] = 208;        break;
    case "\xD1":        FichierAudioJo[i] = 209;        break;
    case "\xD2":        FichierAudioJo[i] = 210;        break;
    case "\xD3":        FichierAudioJo[i] = 211;        break;
    case "\xD4":        FichierAudioJo[i] = 212;        break;
    case "\xD5":        FichierAudioJo[i] = 213;        break;
    case "\xD6":        FichierAudioJo[i] = 214;        break;
    case "\xD7":        FichierAudioJo[i] = 215;        break;
    case "\xD8":        FichierAudioJo[i] = 216;        break;
    case "\xD9":        FichierAudioJo[i] = 217;        break;
    case "\xDA":        FichierAudioJo[i] = 218;        break;
    case "\xDB":        FichierAudioJo[i] = 219;        break;
    case "\xDC":        FichierAudioJo[i] = 220;        break;
    case "\xDD":        FichierAudioJo[i] = 221;        break;
    case "\xDE":        FichierAudioJo[i] = 222;        break;
    case "\xDF":        FichierAudioJo[i] = 223;        break;
/**********E********/
    case "\xE0":        FichierAudioJo[i] = 224;        break;
    case "\xE1":        FichierAudioJo[i] = 225;        break;
    case "\xE2":        FichierAudioJo[i] = 226;        break;
    case "\xE3":        FichierAudioJo[i] = 227;        break;
    case "\xE4":        FichierAudioJo[i] = 228;        break;
    case "\xE5":        FichierAudioJo[i] = 229;        break;
    case "\xE6":        FichierAudioJo[i] = 230;        break;
    case "\xE7":        FichierAudioJo[i] = 231;        break;
    case "\xE8":        FichierAudioJo[i] = 232;        break;
    case "\xE9":        FichierAudioJo[i] = 233;        break;
    case "\xEA":        FichierAudioJo[i] = 234;        break;
    case "\xEB":        FichierAudioJo[i] = 235;        break;
    case "\xEC":        FichierAudioJo[i] = 236;        break;
    case "\xED":        FichierAudioJo[i] = 237;        break;
    case "\xEE":        FichierAudioJo[i] = 238;        break;
    case "\xEF":        FichierAudioJo[i] = 239;        break;
/*****F*****/
    case "\xF0":        FichierAudioJo[i] = 240;        break;
    case "\xF1":        FichierAudioJo[i] = 241;        break;
    case "\xF2":        FichierAudioJo[i] = 242;        break;
    case "\xF3":        FichierAudioJo[i] = 243;        break;
    case "\xF4":        FichierAudioJo[i] = 244;        break;
    case "\xF5":        FichierAudioJo[i] = 245;        break;
    case "\xF6":        FichierAudioJo[i] = 246;        break;
    case "\xF7":        FichierAudioJo[i] = 247;        break;
    case "\xF8":        FichierAudioJo[i] = 248;        break;
    case "\xF9":        FichierAudioJo[i] = 249;        break;
    case "\xFA":        FichierAudioJo[i] = 250;        break;
    case "\xFB":        FichierAudioJo[i] = 251;        break;
    case "\xFC":        FichierAudioJo[i] = 252;        break;
    case "\xFD":        FichierAudioJo[i] = 253;        break;
    case "\xFE":        FichierAudioJo[i] = 254;        break;
    case "\xFF":        FichierAudioJo[i] = 255;        break;
    default:        FichierAudioJo[i] = MiseEnMemoire_Def_Lecture;

MiseEnMemoire_Def_Lecture = FichierAudioJo;
} //fin switch texte1
			} //fin for texte1

 
			}			

convertit(text8);



function ajouteson8() 
		{

  injectionson8 = document.createElement("pre");
  injectionson8.textContent = FichierAudioJo ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  son8 = document.getElementById("donner_son8");
  document.body.insertBefore(injectionson8, son8);
		}
ajouteson8();
	}

reader8.readAsBinaryString(file, "UTF-1616");
}

function gens8(fileList8) 
{
    for (var i = 0; i < fileList8.length; i++) 
	{
        PrendTout8(fileList8[i]);
	}
}

//input 9
function PrendTout9(file) 
{
    var name9 = file.name;
    var reader9 = new FileReader();  
    reader9.onload = function(e9) 
	{ 
text9 = e9.target.result.split(""); 

function convertit(text9)

{

var MiseEnMemoire_Def_Lecture;

    			for (var i = 0; i < text9.length; i++)
			{

switch(text9[i]) {
    case "\x00":        FichierAudioJo[i] = 0;        break;
    case "\x01":        FichierAudioJo[i] = 1;        break;
    case "\x02":        FichierAudioJo[i] = 2;        break;
    case "\x03":        FichierAudioJo[i] = 3;        break;
    case "\x04":        FichierAudioJo[i] = 4;        break;
    case "\x05":        FichierAudioJo[i] = 5;        break;
    case "\x06":        FichierAudioJo[i] = 6;        break;
    case "\x07":        FichierAudioJo[i] = 7;        break;
    case "\x08":        FichierAudioJo[i] = 8;        break;
    case "\x09":        FichierAudioJo[i] = 9;        break;
    case "\x0A":        FichierAudioJo[i] = 10;        break;
    case "\x0B":        FichierAudioJo[i] = 11;        break;
    case "\x0C":        FichierAudioJo[i] = 12;        break;
    case "\x0D":        FichierAudioJo[i] = 13;        break;
    case "\x0E":        FichierAudioJo[i] = 14;        break;
    case "\x0F":        FichierAudioJo[i] = 15;        break;
/**caractere indefini debut a 30***********/
    case "\x10":        FichierAudioJo[i] = 16;        break;
    case "\x11":        FichierAudioJo[i] = 17;        break;
    case "\x12":        FichierAudioJo[i] = 18;        break;
    case "\x13":        FichierAudioJo[i] = 19;        break;
    case "\x14":        FichierAudioJo[i] = 20;        break;
    case "\x15":        FichierAudioJo[i] = 21;        break;
    case "\x16":        FichierAudioJo[i] = 22;        break;
    case "\x17":        FichierAudioJo[i] = 23;        break;
    case "\x18":        FichierAudioJo[i] = 24;        break;
    case "\x19":        FichierAudioJo[i] = 25;        break;
    case "\x1A":        FichierAudioJo[i] = 26;        break;
    case "\x1B":        FichierAudioJo[i] = 27;        break;
    case "\x1C":        FichierAudioJo[i] = 28;        break;
    case "\x1D":        FichierAudioJo[i] = 29;        break;
    case "\x1E":        FichierAudioJo[i] = 30;        break;
    case "\x1F":        FichierAudioJo[i] = 31;        break;
/************/
    case "\x20":        FichierAudioJo[i] = 32;        break;
    case "\x21":        FichierAudioJo[i] = 33;        break;
    case "\x22":        FichierAudioJo[i] = 34;        break;
    case "\x23":        FichierAudioJo[i] = 35;        break;
    case "\x24":        FichierAudioJo[i] = 36;        break;
    case "\x25":        FichierAudioJo[i] = 37;        break;
    case "\x26":        FichierAudioJo[i] = 38;        break;
    case "\x27":        FichierAudioJo[i] = 39;        break;
    case "\x28":        FichierAudioJo[i] = 40;        break;
    case "\x29":        FichierAudioJo[i] = 41;        break;
    case "\x2A":        FichierAudioJo[i] = 42;        break;
    case "\x2B":        FichierAudioJo[i] = 43;        break;
    case "\x2C":        FichierAudioJo[i] = 44;        break;
    case "\x2D":        FichierAudioJo[i] = 45;        break;
    case "\x2E":        FichierAudioJo[i] = 46;        break;
    case "\x2F":        FichierAudioJo[i] = 47;        break;
/*****************/
    case "\x30":        FichierAudioJo[i] = 48;        break;
    case "\x31":        FichierAudioJo[i] = 49;        break;
    case "\x32":        FichierAudioJo[i] = 50;        break;
    case "\x33":        FichierAudioJo[i] = 51;        break;
    case "\x34":        FichierAudioJo[i] = 52;        break;
    case "\x35":        FichierAudioJo[i] = 53;        break;
    case "\x36":        FichierAudioJo[i] = 54;        break;
    case "\x37":        FichierAudioJo[i] = 55;        break;
    case "\x38":        FichierAudioJo[i] = 56;        break;
    case "\x39":        FichierAudioJo[i] = 57;        break;
    case "\x3A":        FichierAudioJo[i] = 58;        break;
    case "\x3B":        FichierAudioJo[i] = 59;        break;
    case "\x3C":        FichierAudioJo[i] = 60;        break;
    case "\x3D":        FichierAudioJo[i] = 61;        break;
    case "\x3E":        FichierAudioJo[i] = 62;        break;
    case "\x3F":        FichierAudioJo[i] = 63;        break;
/*************/
    case "\x40":        FichierAudioJo[i] = 64;        break;
    case "\x41":        FichierAudioJo[i] = 65;        break;
    case "\x42":        FichierAudioJo[i] = 66;        break;
    case "\x43":        FichierAudioJo[i] = 67;        break;
    case "\x44":        FichierAudioJo[i] = 68;        break;
    case "\x45":        FichierAudioJo[i] = 69;        break;
    case "\x46":        FichierAudioJo[i] = 70;        break;
    case "\x47":        FichierAudioJo[i] = 71;        break;
    case "\x48":        FichierAudioJo[i] = 72;        break;
    case "\x49":        FichierAudioJo[i] = 73;        break;
    case "\x4A":        FichierAudioJo[i] = 74;        break;
    case "\x4B":        FichierAudioJo[i] = 75;        break;
    case "\x4C":        FichierAudioJo[i] = 76;        break;
    case "\x4D":        FichierAudioJo[i] = 77;        break;
    case "\x4E":        FichierAudioJo[i] = 78;        break;
    case "\x4F":        FichierAudioJo[i] = 79;        break;
/***************/
    case "\x50":        FichierAudioJo[i] = 80;        break;
    case "\x51":        FichierAudioJo[i] = 81;        break;
    case "\x52":        FichierAudioJo[i] = 82;        break;
    case "\x53":        FichierAudioJo[i] = 83;        break;
    case "\x54":        FichierAudioJo[i] = 84;        break;
    case "\x55":        FichierAudioJo[i] = 85;        break;
    case "\x56":        FichierAudioJo[i] = 86;        break;
    case "\x57":        FichierAudioJo[i] = 87;        break;
    case "\x58":        FichierAudioJo[i] = 88;        break;
    case "\x59":        FichierAudioJo[i] = 89;        break;
    case "\x5A":        FichierAudioJo[i] = 90;        break;
    case "\x5B":        FichierAudioJo[i] = 91;        break;
    case "\x5C":        FichierAudioJo[i] = 92;        break;
    case "\x5D":        FichierAudioJo[i] = 93;        break;
    case "\x5E":        FichierAudioJo[i] = 94;        break;
    case "\x5F":        FichierAudioJo[i] = 95;        break;
/***************/
    case "\x60":        FichierAudioJo[i] = 96;        break;
    case "\x61":        FichierAudioJo[i] = 97;        break;
    case "\x62":        FichierAudioJo[i] = 98;        break;
    case "\x63":        FichierAudioJo[i] = 99;        break;
    case "\x64":        FichierAudioJo[i] = 100;        break;
    case "\x65":        FichierAudioJo[i] = 101;        break;
    case "\x66":        FichierAudioJo[i] = 102;        break;
    case "\x67":        FichierAudioJo[i] = 103;        break;
    case "\x68":        FichierAudioJo[i] = 104;        break;
    case "\x69":        FichierAudioJo[i] = 105;        break;
    case "\x6A":        FichierAudioJo[i] = 106;        break;
    case "\x6B":        FichierAudioJo[i] = 107;        break;
    case "\x6C":        FichierAudioJo[i] = 108;        break;
    case "\x6D":        FichierAudioJo[i] = 109;        break;
    case "\x6E":        FichierAudioJo[i] = 110;        break;
    case "\x6F":        FichierAudioJo[i] = 111;        break;
/**********/
    case "\x70":        FichierAudioJo[i] = 112;        break;
    case "\x71":        FichierAudioJo[i] = 113;        break;
    case "\x72":        FichierAudioJo[i] = 114;        break;
    case "\x73":        FichierAudioJo[i] = 115;        break;
    case "\x74":        FichierAudioJo[i] = 116;        break;
    case "\x75":        FichierAudioJo[i] = 117;        break;
    case "\x76":        FichierAudioJo[i] = 118;        break;
    case "\x77":        FichierAudioJo[i] = 119;        break;
    case "\x78":        FichierAudioJo[i] = 120;        break;
    case "\x79":        FichierAudioJo[i] = 121;        break;
    case "\x7A":        FichierAudioJo[i] = 122;        break;
    case "\x7B":        FichierAudioJo[i] = 123;        break;
    case "\x7C":        FichierAudioJo[i] = 124;        break;
    case "\x7D":        FichierAudioJo[i] = 125;        break;
    case "\x7E":        FichierAudioJo[i] = 126;        break;
    case "\x7F":        FichierAudioJo[i] = 127;        break;
/*****8**debut caractere indefini****/
    case "\x80":        FichierAudioJo[i] = 128;        break;
    case "\x81":        FichierAudioJo[i] = 129;        break;
    case "\x82":        FichierAudioJo[i] = 130;        break;
    case "\x83":        FichierAudioJo[i] = 131;        break;
    case "\x84":        FichierAudioJo[i] = 132;        break;
    case "\x85":        FichierAudioJo[i] = 133;        break;
    case "\x86":       FichierAudioJo[i] = 134;        break;
    case "\x87":       FichierAudioJo[i] = 135;        break;
    case "\x88":        FichierAudioJo[i] = 136;        break;
    case "\x89":       FichierAudioJo[i] = 137;        break;
    case "\x8A":        FichierAudioJo[i] = 138;        break;
    case "\x8B":       FichierAudioJo[i] = 139;        break;
    case "\x8C":      FichierAudioJo[i] = 140;        break;
    case "\x8D":        FichierAudioJo[i] = 141;        break;
    case "\x8E":       FichierAudioJo[i] = 142;        break;
    case "\x8F":        FichierAudioJo[i] = 143;        break;
/********9**********/
    case "\x90":        FichierAudioJo[i] = 144;        break;
    case "\x91":       FichierAudioJo[i] = 145;        break;
    case "\x92":       FichierAudioJo[i] = 146;        break;
    case "\x93":        FichierAudioJo[i] = 147;        break;
    case "\x94":        FichierAudioJo[i] = 148;        break;
    case "\x95":       FichierAudioJo[i] = 149;        break;
    case "\x96":      FichierAudioJo[i] = 150;        break;
    case "\x97":      FichierAudioJo[i] = 151;        break;
    case "\x98":       FichierAudioJo[i] = 152;        break;
    case "\x99":       FichierAudioJo[i] = 153;        break;
    case "\x9A":       FichierAudioJo[i] = 154;        break;
    case "\x9B":       FichierAudioJo[i] = 155;        break;
    case "\x9C":      FichierAudioJo[i] = 156;        break;
    case "\x9D":      FichierAudioJo[i] = 157;        break;
    case "\x9E":      FichierAudioJo[i] = 158;        break;
    case "\x9F":       FichierAudioJo[i] = 159;        break;
/**fin caractere indefini*A**/
    case "\xA0":        FichierAudioJo[i] = 160;        break;
    case "\xA1":        FichierAudioJo[i] = 161;        break;
    case "\xA2":        FichierAudioJo[i] = 162;        break;
    case "\xA3":        FichierAudioJo[i] = 163;        break;
    case "\xA4":        FichierAudioJo[i] = 164;        break;
    case "\xA5":        FichierAudioJo[i] = 165;        break;
    case "\xA6":        FichierAudioJo[i] = 166;        break;
    case "\xA7":        FichierAudioJo[i] = 167;        break;
    case "\xA8":        FichierAudioJo[i] = 168;        break;
    case "\xA9":        FichierAudioJo[i] = 169;        break;
    case "\xAA":        FichierAudioJo[i] = 170;        break;
    case "\xAB":        FichierAudioJo[i] = 171;        break;
    case "\xAC":        FichierAudioJo[i] = 172;        break;
    case "\xAD":        FichierAudioJo[i] = 173;        break;
    case "\xAE":        FichierAudioJo[i] = 174;        break;
    case "\xAF":        FichierAudioJo[i] = 175;        break;
/*******B******/
    case "\xB0":        FichierAudioJo[i] = 176;        break;
    case "\xB1":        FichierAudioJo[i] = 177;        break;
    case "\xB2":        FichierAudioJo[i] = 178;        break;
    case "\xB3":        FichierAudioJo[i] = 179;        break;
    case "\xB4":        FichierAudioJo[i] = 180;        break;
    case "\xB5":        FichierAudioJo[i] = 181;        break;
    case "\xB6":        FichierAudioJo[i] = 182;        break;
    case "\xB7":        FichierAudioJo[i] = 183;        break;
    case "\xB8":        FichierAudioJo[i] = 184;        break;
    case "\xB9":        FichierAudioJo[i] = 185;        break;
    case "\xBA":        FichierAudioJo[i] = 186;        break;
    case "\xBB":        FichierAudioJo[i] = 187;        break;
    case "\xBC":        FichierAudioJo[i] = 188;        break;
    case "\xBD":        FichierAudioJo[i] = 189;        break;
    case "\xBE":        FichierAudioJo[i] = 190;        break;
    case "\xBF":        FichierAudioJo[i] = 191;        break;
/*******C*******/
    case "\xC0":        FichierAudioJo[i] = 192;        break;
    case "\xC1":        FichierAudioJo[i] = 193;        break;
    case "\xC2":        FichierAudioJo[i] = 194;        break;
    case "\xC3":        FichierAudioJo[i] = 195;        break;
    case "\xC4":        FichierAudioJo[i] = 196;        break;
    case "\xC5":        FichierAudioJo[i] = 197;        break;
    case "\xC6":        FichierAudioJo[i] = 198;        break;
    case "\xC7":        FichierAudioJo[i] = 199;        break;
    case "\xC8":        FichierAudioJo[i] = 200;        break;
    case "\xC9":        FichierAudioJo[i] = 201;        break;
    case "\xCA":        FichierAudioJo[i] = 202;        break;
    case "\xCB":        FichierAudioJo[i] = 203;        break;
    case "\xCC":        FichierAudioJo[i] = 204;        break;
    case "\xCD":        FichierAudioJo[i] = 205;        break;
    case "\xCE":        FichierAudioJo[i] = 206;        break;
    case "\xCF":        FichierAudioJo[i] = 207;        break;
/**********D*************/
    case "\xD0":        FichierAudioJo[i] = 208;        break;
    case "\xD1":        FichierAudioJo[i] = 209;        break;
    case "\xD2":        FichierAudioJo[i] = 210;        break;
    case "\xD3":        FichierAudioJo[i] = 211;        break;
    case "\xD4":        FichierAudioJo[i] = 212;        break;
    case "\xD5":        FichierAudioJo[i] = 213;        break;
    case "\xD6":        FichierAudioJo[i] = 214;        break;
    case "\xD7":        FichierAudioJo[i] = 215;        break;
    case "\xD8":        FichierAudioJo[i] = 216;        break;
    case "\xD9":        FichierAudioJo[i] = 217;        break;
    case "\xDA":        FichierAudioJo[i] = 218;        break;
    case "\xDB":        FichierAudioJo[i] = 219;        break;
    case "\xDC":        FichierAudioJo[i] = 220;        break;
    case "\xDD":        FichierAudioJo[i] = 221;        break;
    case "\xDE":        FichierAudioJo[i] = 222;        break;
    case "\xDF":        FichierAudioJo[i] = 223;        break;
/**********E********/
    case "\xE0":        FichierAudioJo[i] = 224;        break;
    case "\xE1":        FichierAudioJo[i] = 225;        break;
    case "\xE2":        FichierAudioJo[i] = 226;        break;
    case "\xE3":        FichierAudioJo[i] = 227;        break;
    case "\xE4":        FichierAudioJo[i] = 228;        break;
    case "\xE5":        FichierAudioJo[i] = 229;        break;
    case "\xE6":        FichierAudioJo[i] = 230;        break;
    case "\xE7":        FichierAudioJo[i] = 231;        break;
    case "\xE8":        FichierAudioJo[i] = 232;        break;
    case "\xE9":        FichierAudioJo[i] = 233;        break;
    case "\xEA":        FichierAudioJo[i] = 234;        break;
    case "\xEB":        FichierAudioJo[i] = 235;        break;
    case "\xEC":        FichierAudioJo[i] = 236;        break;
    case "\xED":        FichierAudioJo[i] = 237;        break;
    case "\xEE":        FichierAudioJo[i] = 238;        break;
    case "\xEF":        FichierAudioJo[i] = 239;        break;
/*****F*****/
    case "\xF0":        FichierAudioJo[i] = 240;        break;
    case "\xF1":        FichierAudioJo[i] = 241;        break;
    case "\xF2":        FichierAudioJo[i] = 242;        break;
    case "\xF3":        FichierAudioJo[i] = 243;        break;
    case "\xF4":        FichierAudioJo[i] = 244;        break;
    case "\xF5":        FichierAudioJo[i] = 245;        break;
    case "\xF6":        FichierAudioJo[i] = 246;        break;
    case "\xF7":        FichierAudioJo[i] = 247;        break;
    case "\xF8":        FichierAudioJo[i] = 248;        break;
    case "\xF9":        FichierAudioJo[i] = 249;        break;
    case "\xFA":        FichierAudioJo[i] = 250;        break;
    case "\xFB":        FichierAudioJo[i] = 251;        break;
    case "\xFC":        FichierAudioJo[i] = 252;        break;
    case "\xFD":        FichierAudioJo[i] = 253;        break;
    case "\xFE":        FichierAudioJo[i] = 254;        break;
    case "\xFF":        FichierAudioJo[i] = 255;        break;
    default:        FichierAudioJo[i] = MiseEnMemoire_Def_Lecture;

MiseEnMemoire_Def_Lecture = FichierAudioJo;
} //fin switch texte1
			} //fin for texte1

 
			}			

convertit(text9);



function ajouteson9() 
		{

  injectionson9 = document.createElement("pre");
  injectionson9.textContent = FichierAudioJo ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  son9 = document.getElementById("donner_son9");
  document.body.insertBefore(injectionson9, son9);
		}
ajouteson9();
	}

reader9.readAsBinaryString(file, "UTF-1616");
}

function gens9(fileList9) 
{
    for (var i = 0; i < fileList9.length; i++) 
	{
        PrendTout9(fileList9[i]);
	}
}

//input 10
function PrendTout10(file) 
{
    var name10 = file.name;
    var reader10 = new FileReader();  
    reader10.onload = function(e10) 
	{ 
text10 = e10.target.result.split(""); 

function convertit(text10)

{

var MiseEnMemoire_Def_Lecture;

    			for (var i = 0; i < text10.length; i++)
			{

switch(text10[i]) {
    case "\x00":        FichierAudioJo[i] = 0;        break;
    case "\x01":        FichierAudioJo[i] = 1;        break;
    case "\x02":        FichierAudioJo[i] = 2;        break;
    case "\x03":        FichierAudioJo[i] = 3;        break;
    case "\x04":        FichierAudioJo[i] = 4;        break;
    case "\x05":        FichierAudioJo[i] = 5;        break;
    case "\x06":        FichierAudioJo[i] = 6;        break;
    case "\x07":        FichierAudioJo[i] = 7;        break;
    case "\x08":        FichierAudioJo[i] = 8;        break;
    case "\x09":        FichierAudioJo[i] = 9;        break;
    case "\x0A":        FichierAudioJo[i] = 10;        break;
    case "\x0B":        FichierAudioJo[i] = 11;        break;
    case "\x0C":        FichierAudioJo[i] = 12;        break;
    case "\x0D":        FichierAudioJo[i] = 13;        break;
    case "\x0E":        FichierAudioJo[i] = 14;        break;
    case "\x0F":        FichierAudioJo[i] = 15;        break;
/**caractere indefini debut a 30***********/
    case "\x10":        FichierAudioJo[i] = 16;        break;
    case "\x11":        FichierAudioJo[i] = 17;        break;
    case "\x12":        FichierAudioJo[i] = 18;        break;
    case "\x13":        FichierAudioJo[i] = 19;        break;
    case "\x14":        FichierAudioJo[i] = 20;        break;
    case "\x15":        FichierAudioJo[i] = 21;        break;
    case "\x16":        FichierAudioJo[i] = 22;        break;
    case "\x17":        FichierAudioJo[i] = 23;        break;
    case "\x18":        FichierAudioJo[i] = 24;        break;
    case "\x19":        FichierAudioJo[i] = 25;        break;
    case "\x1A":        FichierAudioJo[i] = 26;        break;
    case "\x1B":        FichierAudioJo[i] = 27;        break;
    case "\x1C":        FichierAudioJo[i] = 28;        break;
    case "\x1D":        FichierAudioJo[i] = 29;        break;
    case "\x1E":        FichierAudioJo[i] = 30;        break;
    case "\x1F":        FichierAudioJo[i] = 31;        break;
/************/
    case "\x20":        FichierAudioJo[i] = 32;        break;
    case "\x21":        FichierAudioJo[i] = 33;        break;
    case "\x22":        FichierAudioJo[i] = 34;        break;
    case "\x23":        FichierAudioJo[i] = 35;        break;
    case "\x24":        FichierAudioJo[i] = 36;        break;
    case "\x25":        FichierAudioJo[i] = 37;        break;
    case "\x26":        FichierAudioJo[i] = 38;        break;
    case "\x27":        FichierAudioJo[i] = 39;        break;
    case "\x28":        FichierAudioJo[i] = 40;        break;
    case "\x29":        FichierAudioJo[i] = 41;        break;
    case "\x2A":        FichierAudioJo[i] = 42;        break;
    case "\x2B":        FichierAudioJo[i] = 43;        break;
    case "\x2C":        FichierAudioJo[i] = 44;        break;
    case "\x2D":        FichierAudioJo[i] = 45;        break;
    case "\x2E":        FichierAudioJo[i] = 46;        break;
    case "\x2F":        FichierAudioJo[i] = 47;        break;
/*****************/
    case "\x30":        FichierAudioJo[i] = 48;        break;
    case "\x31":        FichierAudioJo[i] = 49;        break;
    case "\x32":        FichierAudioJo[i] = 50;        break;
    case "\x33":        FichierAudioJo[i] = 51;        break;
    case "\x34":        FichierAudioJo[i] = 52;        break;
    case "\x35":        FichierAudioJo[i] = 53;        break;
    case "\x36":        FichierAudioJo[i] = 54;        break;
    case "\x37":        FichierAudioJo[i] = 55;        break;
    case "\x38":        FichierAudioJo[i] = 56;        break;
    case "\x39":        FichierAudioJo[i] = 57;        break;
    case "\x3A":        FichierAudioJo[i] = 58;        break;
    case "\x3B":        FichierAudioJo[i] = 59;        break;
    case "\x3C":        FichierAudioJo[i] = 60;        break;
    case "\x3D":        FichierAudioJo[i] = 61;        break;
    case "\x3E":        FichierAudioJo[i] = 62;        break;
    case "\x3F":        FichierAudioJo[i] = 63;        break;
/*************/
    case "\x40":        FichierAudioJo[i] = 64;        break;
    case "\x41":        FichierAudioJo[i] = 65;        break;
    case "\x42":        FichierAudioJo[i] = 66;        break;
    case "\x43":        FichierAudioJo[i] = 67;        break;
    case "\x44":        FichierAudioJo[i] = 68;        break;
    case "\x45":        FichierAudioJo[i] = 69;        break;
    case "\x46":        FichierAudioJo[i] = 70;        break;
    case "\x47":        FichierAudioJo[i] = 71;        break;
    case "\x48":        FichierAudioJo[i] = 72;        break;
    case "\x49":        FichierAudioJo[i] = 73;        break;
    case "\x4A":        FichierAudioJo[i] = 74;        break;
    case "\x4B":        FichierAudioJo[i] = 75;        break;
    case "\x4C":        FichierAudioJo[i] = 76;        break;
    case "\x4D":        FichierAudioJo[i] = 77;        break;
    case "\x4E":        FichierAudioJo[i] = 78;        break;
    case "\x4F":        FichierAudioJo[i] = 79;        break;
/***************/
    case "\x50":        FichierAudioJo[i] = 80;        break;
    case "\x51":        FichierAudioJo[i] = 81;        break;
    case "\x52":        FichierAudioJo[i] = 82;        break;
    case "\x53":        FichierAudioJo[i] = 83;        break;
    case "\x54":        FichierAudioJo[i] = 84;        break;
    case "\x55":        FichierAudioJo[i] = 85;        break;
    case "\x56":        FichierAudioJo[i] = 86;        break;
    case "\x57":        FichierAudioJo[i] = 87;        break;
    case "\x58":        FichierAudioJo[i] = 88;        break;
    case "\x59":        FichierAudioJo[i] = 89;        break;
    case "\x5A":        FichierAudioJo[i] = 90;        break;
    case "\x5B":        FichierAudioJo[i] = 91;        break;
    case "\x5C":        FichierAudioJo[i] = 92;        break;
    case "\x5D":        FichierAudioJo[i] = 93;        break;
    case "\x5E":        FichierAudioJo[i] = 94;        break;
    case "\x5F":        FichierAudioJo[i] = 95;        break;
/***************/
    case "\x60":        FichierAudioJo[i] = 96;        break;
    case "\x61":        FichierAudioJo[i] = 97;        break;
    case "\x62":        FichierAudioJo[i] = 98;        break;
    case "\x63":        FichierAudioJo[i] = 99;        break;
    case "\x64":        FichierAudioJo[i] = 100;        break;
    case "\x65":        FichierAudioJo[i] = 101;        break;
    case "\x66":        FichierAudioJo[i] = 102;        break;
    case "\x67":        FichierAudioJo[i] = 103;        break;
    case "\x68":        FichierAudioJo[i] = 104;        break;
    case "\x69":        FichierAudioJo[i] = 105;        break;
    case "\x6A":        FichierAudioJo[i] = 106;        break;
    case "\x6B":        FichierAudioJo[i] = 107;        break;
    case "\x6C":        FichierAudioJo[i] = 108;        break;
    case "\x6D":        FichierAudioJo[i] = 109;        break;
    case "\x6E":        FichierAudioJo[i] = 110;        break;
    case "\x6F":        FichierAudioJo[i] = 111;        break;
/**********/
    case "\x70":        FichierAudioJo[i] = 112;        break;
    case "\x71":        FichierAudioJo[i] = 113;        break;
    case "\x72":        FichierAudioJo[i] = 114;        break;
    case "\x73":        FichierAudioJo[i] = 115;        break;
    case "\x74":        FichierAudioJo[i] = 116;        break;
    case "\x75":        FichierAudioJo[i] = 117;        break;
    case "\x76":        FichierAudioJo[i] = 118;        break;
    case "\x77":        FichierAudioJo[i] = 119;        break;
    case "\x78":        FichierAudioJo[i] = 120;        break;
    case "\x79":        FichierAudioJo[i] = 121;        break;
    case "\x7A":        FichierAudioJo[i] = 122;        break;
    case "\x7B":        FichierAudioJo[i] = 123;        break;
    case "\x7C":        FichierAudioJo[i] = 124;        break;
    case "\x7D":        FichierAudioJo[i] = 125;        break;
    case "\x7E":        FichierAudioJo[i] = 126;        break;
    case "\x7F":        FichierAudioJo[i] = 127;        break;
/*****8**debut caractere indefini****/
    case "\x80":        FichierAudioJo[i] = 128;        break;
    case "\x81":        FichierAudioJo[i] = 129;        break;
    case "\x82":        FichierAudioJo[i] = 130;        break;
    case "\x83":        FichierAudioJo[i] = 131;        break;
    case "\x84":        FichierAudioJo[i] = 132;        break;
    case "\x85":        FichierAudioJo[i] = 133;        break;
    case "\x86":       FichierAudioJo[i] = 134;        break;
    case "\x87":       FichierAudioJo[i] = 135;        break;
    case "\x88":        FichierAudioJo[i] = 136;        break;
    case "\x89":       FichierAudioJo[i] = 137;        break;
    case "\x8A":        FichierAudioJo[i] = 138;        break;
    case "\x8B":       FichierAudioJo[i] = 139;        break;
    case "\x8C":      FichierAudioJo[i] = 140;        break;
    case "\x8D":        FichierAudioJo[i] = 141;        break;
    case "\x8E":       FichierAudioJo[i] = 142;        break;
    case "\x8F":        FichierAudioJo[i] = 143;        break;
/********9**********/
    case "\x90":        FichierAudioJo[i] = 144;        break;
    case "\x91":       FichierAudioJo[i] = 145;        break;
    case "\x92":       FichierAudioJo[i] = 146;        break;
    case "\x93":        FichierAudioJo[i] = 147;        break;
    case "\x94":        FichierAudioJo[i] = 148;        break;
    case "\x95":       FichierAudioJo[i] = 149;        break;
    case "\x96":      FichierAudioJo[i] = 150;        break;
    case "\x97":      FichierAudioJo[i] = 151;        break;
    case "\x98":       FichierAudioJo[i] = 152;        break;
    case "\x99":       FichierAudioJo[i] = 153;        break;
    case "\x9A":       FichierAudioJo[i] = 154;        break;
    case "\x9B":       FichierAudioJo[i] = 155;        break;
    case "\x9C":      FichierAudioJo[i] = 156;        break;
    case "\x9D":      FichierAudioJo[i] = 157;        break;
    case "\x9E":      FichierAudioJo[i] = 158;        break;
    case "\x9F":       FichierAudioJo[i] = 159;        break;
/**fin caractere indefini*A**/
    case "\xA0":        FichierAudioJo[i] = 160;        break;
    case "\xA1":        FichierAudioJo[i] = 161;        break;
    case "\xA2":        FichierAudioJo[i] = 162;        break;
    case "\xA3":        FichierAudioJo[i] = 163;        break;
    case "\xA4":        FichierAudioJo[i] = 164;        break;
    case "\xA5":        FichierAudioJo[i] = 165;        break;
    case "\xA6":        FichierAudioJo[i] = 166;        break;
    case "\xA7":        FichierAudioJo[i] = 167;        break;
    case "\xA8":        FichierAudioJo[i] = 168;        break;
    case "\xA9":        FichierAudioJo[i] = 169;        break;
    case "\xAA":        FichierAudioJo[i] = 170;        break;
    case "\xAB":        FichierAudioJo[i] = 171;        break;
    case "\xAC":        FichierAudioJo[i] = 172;        break;
    case "\xAD":        FichierAudioJo[i] = 173;        break;
    case "\xAE":        FichierAudioJo[i] = 174;        break;
    case "\xAF":        FichierAudioJo[i] = 175;        break;
/*******B******/
    case "\xB0":        FichierAudioJo[i] = 176;        break;
    case "\xB1":        FichierAudioJo[i] = 177;        break;
    case "\xB2":        FichierAudioJo[i] = 178;        break;
    case "\xB3":        FichierAudioJo[i] = 179;        break;
    case "\xB4":        FichierAudioJo[i] = 180;        break;
    case "\xB5":        FichierAudioJo[i] = 181;        break;
    case "\xB6":        FichierAudioJo[i] = 182;        break;
    case "\xB7":        FichierAudioJo[i] = 183;        break;
    case "\xB8":        FichierAudioJo[i] = 184;        break;
    case "\xB9":        FichierAudioJo[i] = 185;        break;
    case "\xBA":        FichierAudioJo[i] = 186;        break;
    case "\xBB":        FichierAudioJo[i] = 187;        break;
    case "\xBC":        FichierAudioJo[i] = 188;        break;
    case "\xBD":        FichierAudioJo[i] = 189;        break;
    case "\xBE":        FichierAudioJo[i] = 190;        break;
    case "\xBF":        FichierAudioJo[i] = 191;        break;
/*******C*******/
    case "\xC0":        FichierAudioJo[i] = 192;        break;
    case "\xC1":        FichierAudioJo[i] = 193;        break;
    case "\xC2":        FichierAudioJo[i] = 194;        break;
    case "\xC3":        FichierAudioJo[i] = 195;        break;
    case "\xC4":        FichierAudioJo[i] = 196;        break;
    case "\xC5":        FichierAudioJo[i] = 197;        break;
    case "\xC6":        FichierAudioJo[i] = 198;        break;
    case "\xC7":        FichierAudioJo[i] = 199;        break;
    case "\xC8":        FichierAudioJo[i] = 200;        break;
    case "\xC9":        FichierAudioJo[i] = 201;        break;
    case "\xCA":        FichierAudioJo[i] = 202;        break;
    case "\xCB":        FichierAudioJo[i] = 203;        break;
    case "\xCC":        FichierAudioJo[i] = 204;        break;
    case "\xCD":        FichierAudioJo[i] = 205;        break;
    case "\xCE":        FichierAudioJo[i] = 206;        break;
    case "\xCF":        FichierAudioJo[i] = 207;        break;
/**********D*************/
    case "\xD0":        FichierAudioJo[i] = 208;        break;
    case "\xD1":        FichierAudioJo[i] = 209;        break;
    case "\xD2":        FichierAudioJo[i] = 210;        break;
    case "\xD3":        FichierAudioJo[i] = 211;        break;
    case "\xD4":        FichierAudioJo[i] = 212;        break;
    case "\xD5":        FichierAudioJo[i] = 213;        break;
    case "\xD6":        FichierAudioJo[i] = 214;        break;
    case "\xD7":        FichierAudioJo[i] = 215;        break;
    case "\xD8":        FichierAudioJo[i] = 216;        break;
    case "\xD9":        FichierAudioJo[i] = 217;        break;
    case "\xDA":        FichierAudioJo[i] = 218;        break;
    case "\xDB":        FichierAudioJo[i] = 219;        break;
    case "\xDC":        FichierAudioJo[i] = 220;        break;
    case "\xDD":        FichierAudioJo[i] = 221;        break;
    case "\xDE":        FichierAudioJo[i] = 222;        break;
    case "\xDF":        FichierAudioJo[i] = 223;        break;
/**********E********/
    case "\xE0":        FichierAudioJo[i] = 224;        break;
    case "\xE1":        FichierAudioJo[i] = 225;        break;
    case "\xE2":        FichierAudioJo[i] = 226;        break;
    case "\xE3":        FichierAudioJo[i] = 227;        break;
    case "\xE4":        FichierAudioJo[i] = 228;        break;
    case "\xE5":        FichierAudioJo[i] = 229;        break;
    case "\xE6":        FichierAudioJo[i] = 230;        break;
    case "\xE7":        FichierAudioJo[i] = 231;        break;
    case "\xE8":        FichierAudioJo[i] = 232;        break;
    case "\xE9":        FichierAudioJo[i] = 233;        break;
    case "\xEA":        FichierAudioJo[i] = 234;        break;
    case "\xEB":        FichierAudioJo[i] = 235;        break;
    case "\xEC":        FichierAudioJo[i] = 236;        break;
    case "\xED":        FichierAudioJo[i] = 237;        break;
    case "\xEE":        FichierAudioJo[i] = 238;        break;
    case "\xEF":        FichierAudioJo[i] = 239;        break;
/*****F*****/
    case "\xF0":        FichierAudioJo[i] = 240;        break;
    case "\xF1":        FichierAudioJo[i] = 241;        break;
    case "\xF2":        FichierAudioJo[i] = 242;        break;
    case "\xF3":        FichierAudioJo[i] = 243;        break;
    case "\xF4":        FichierAudioJo[i] = 244;        break;
    case "\xF5":        FichierAudioJo[i] = 245;        break;
    case "\xF6":        FichierAudioJo[i] = 246;        break;
    case "\xF7":        FichierAudioJo[i] = 247;        break;
    case "\xF8":        FichierAudioJo[i] = 248;        break;
    case "\xF9":        FichierAudioJo[i] = 249;        break;
    case "\xFA":        FichierAudioJo[i] = 250;        break;
    case "\xFB":        FichierAudioJo[i] = 251;        break;
    case "\xFC":        FichierAudioJo[i] = 252;        break;
    case "\xFD":        FichierAudioJo[i] = 253;        break;
    case "\xFE":        FichierAudioJo[i] = 254;        break;
    case "\xFF":        FichierAudioJo[i] = 255;        break;
    default:        FichierAudioJo[i] = MiseEnMemoire_Def_Lecture;

MiseEnMemoire_Def_Lecture = FichierAudioJo;
} //fin switch texte1
			} //fin for texte1

 
			}			

convertit(text10);



function ajouteson10() 
		{

  injectionson10 = document.createElement("pre");
  injectionson10.textContent = FichierAudioJo ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  son10 = document.getElementById("donner_son10");
  document.body.insertBefore(injectionson10, son10);
		}
ajouteson10();
	}

reader10.readAsBinaryString(file, "UTF-1616");
}

function gens10(fileList10) 
{
    for (var i = 0; i < fileList10.length; i++) 
	{
        PrendTout10(fileList10[i]);
	}
}

//input 11
function PrendTout11(file) 
{
    var name11 = file.name;
    var reader11 = new FileReader();  
    reader11.onload = function(e11) 
	{ 
text11 = e11.target.result.split(""); 

function convertit(text11)

{

var MiseEnMemoire_Def_Lecture;

    			for (var i = 0; i < text11.length; i++)
			{

switch(text11[i]) {
    case "\x00":        FichierAudioJo[i] = 0;        break;
    case "\x01":        FichierAudioJo[i] = 1;        break;
    case "\x02":        FichierAudioJo[i] = 2;        break;
    case "\x03":        FichierAudioJo[i] = 3;        break;
    case "\x04":        FichierAudioJo[i] = 4;        break;
    case "\x05":        FichierAudioJo[i] = 5;        break;
    case "\x06":        FichierAudioJo[i] = 6;        break;
    case "\x07":        FichierAudioJo[i] = 7;        break;
    case "\x08":        FichierAudioJo[i] = 8;        break;
    case "\x09":        FichierAudioJo[i] = 9;        break;
    case "\x0A":        FichierAudioJo[i] = 10;        break;
    case "\x0B":        FichierAudioJo[i] = 11;        break;
    case "\x0C":        FichierAudioJo[i] = 12;        break;
    case "\x0D":        FichierAudioJo[i] = 13;        break;
    case "\x0E":        FichierAudioJo[i] = 14;        break;
    case "\x0F":        FichierAudioJo[i] = 15;        break;
/**caractere indefini debut a 30***********/
    case "\x10":        FichierAudioJo[i] = 16;        break;
    case "\x11":        FichierAudioJo[i] = 17;        break;
    case "\x12":        FichierAudioJo[i] = 18;        break;
    case "\x13":        FichierAudioJo[i] = 19;        break;
    case "\x14":        FichierAudioJo[i] = 20;        break;
    case "\x15":        FichierAudioJo[i] = 21;        break;
    case "\x16":        FichierAudioJo[i] = 22;        break;
    case "\x17":        FichierAudioJo[i] = 23;        break;
    case "\x18":        FichierAudioJo[i] = 24;        break;
    case "\x19":        FichierAudioJo[i] = 25;        break;
    case "\x1A":        FichierAudioJo[i] = 26;        break;
    case "\x1B":        FichierAudioJo[i] = 27;        break;
    case "\x1C":        FichierAudioJo[i] = 28;        break;
    case "\x1D":        FichierAudioJo[i] = 29;        break;
    case "\x1E":        FichierAudioJo[i] = 30;        break;
    case "\x1F":        FichierAudioJo[i] = 31;        break;
/************/
    case "\x20":        FichierAudioJo[i] = 32;        break;
    case "\x21":        FichierAudioJo[i] = 33;        break;
    case "\x22":        FichierAudioJo[i] = 34;        break;
    case "\x23":        FichierAudioJo[i] = 35;        break;
    case "\x24":        FichierAudioJo[i] = 36;        break;
    case "\x25":        FichierAudioJo[i] = 37;        break;
    case "\x26":        FichierAudioJo[i] = 38;        break;
    case "\x27":        FichierAudioJo[i] = 39;        break;
    case "\x28":        FichierAudioJo[i] = 40;        break;
    case "\x29":        FichierAudioJo[i] = 41;        break;
    case "\x2A":        FichierAudioJo[i] = 42;        break;
    case "\x2B":        FichierAudioJo[i] = 43;        break;
    case "\x2C":        FichierAudioJo[i] = 44;        break;
    case "\x2D":        FichierAudioJo[i] = 45;        break;
    case "\x2E":        FichierAudioJo[i] = 46;        break;
    case "\x2F":        FichierAudioJo[i] = 47;        break;
/*****************/
    case "\x30":        FichierAudioJo[i] = 48;        break;
    case "\x31":        FichierAudioJo[i] = 49;        break;
    case "\x32":        FichierAudioJo[i] = 50;        break;
    case "\x33":        FichierAudioJo[i] = 51;        break;
    case "\x34":        FichierAudioJo[i] = 52;        break;
    case "\x35":        FichierAudioJo[i] = 53;        break;
    case "\x36":        FichierAudioJo[i] = 54;        break;
    case "\x37":        FichierAudioJo[i] = 55;        break;
    case "\x38":        FichierAudioJo[i] = 56;        break;
    case "\x39":        FichierAudioJo[i] = 57;        break;
    case "\x3A":        FichierAudioJo[i] = 58;        break;
    case "\x3B":        FichierAudioJo[i] = 59;        break;
    case "\x3C":        FichierAudioJo[i] = 60;        break;
    case "\x3D":        FichierAudioJo[i] = 61;        break;
    case "\x3E":        FichierAudioJo[i] = 62;        break;
    case "\x3F":        FichierAudioJo[i] = 63;        break;
/*************/
    case "\x40":        FichierAudioJo[i] = 64;        break;
    case "\x41":        FichierAudioJo[i] = 65;        break;
    case "\x42":        FichierAudioJo[i] = 66;        break;
    case "\x43":        FichierAudioJo[i] = 67;        break;
    case "\x44":        FichierAudioJo[i] = 68;        break;
    case "\x45":        FichierAudioJo[i] = 69;        break;
    case "\x46":        FichierAudioJo[i] = 70;        break;
    case "\x47":        FichierAudioJo[i] = 71;        break;
    case "\x48":        FichierAudioJo[i] = 72;        break;
    case "\x49":        FichierAudioJo[i] = 73;        break;
    case "\x4A":        FichierAudioJo[i] = 74;        break;
    case "\x4B":        FichierAudioJo[i] = 75;        break;
    case "\x4C":        FichierAudioJo[i] = 76;        break;
    case "\x4D":        FichierAudioJo[i] = 77;        break;
    case "\x4E":        FichierAudioJo[i] = 78;        break;
    case "\x4F":        FichierAudioJo[i] = 79;        break;
/***************/
    case "\x50":        FichierAudioJo[i] = 80;        break;
    case "\x51":        FichierAudioJo[i] = 81;        break;
    case "\x52":        FichierAudioJo[i] = 82;        break;
    case "\x53":        FichierAudioJo[i] = 83;        break;
    case "\x54":        FichierAudioJo[i] = 84;        break;
    case "\x55":        FichierAudioJo[i] = 85;        break;
    case "\x56":        FichierAudioJo[i] = 86;        break;
    case "\x57":        FichierAudioJo[i] = 87;        break;
    case "\x58":        FichierAudioJo[i] = 88;        break;
    case "\x59":        FichierAudioJo[i] = 89;        break;
    case "\x5A":        FichierAudioJo[i] = 90;        break;
    case "\x5B":        FichierAudioJo[i] = 91;        break;
    case "\x5C":        FichierAudioJo[i] = 92;        break;
    case "\x5D":        FichierAudioJo[i] = 93;        break;
    case "\x5E":        FichierAudioJo[i] = 94;        break;
    case "\x5F":        FichierAudioJo[i] = 95;        break;
/***************/
    case "\x60":        FichierAudioJo[i] = 96;        break;
    case "\x61":        FichierAudioJo[i] = 97;        break;
    case "\x62":        FichierAudioJo[i] = 98;        break;
    case "\x63":        FichierAudioJo[i] = 99;        break;
    case "\x64":        FichierAudioJo[i] = 100;        break;
    case "\x65":        FichierAudioJo[i] = 101;        break;
    case "\x66":        FichierAudioJo[i] = 102;        break;
    case "\x67":        FichierAudioJo[i] = 103;        break;
    case "\x68":        FichierAudioJo[i] = 104;        break;
    case "\x69":        FichierAudioJo[i] = 105;        break;
    case "\x6A":        FichierAudioJo[i] = 106;        break;
    case "\x6B":        FichierAudioJo[i] = 107;        break;
    case "\x6C":        FichierAudioJo[i] = 108;        break;
    case "\x6D":        FichierAudioJo[i] = 109;        break;
    case "\x6E":        FichierAudioJo[i] = 110;        break;
    case "\x6F":        FichierAudioJo[i] = 111;        break;
/**********/
    case "\x70":        FichierAudioJo[i] = 112;        break;
    case "\x71":        FichierAudioJo[i] = 113;        break;
    case "\x72":        FichierAudioJo[i] = 114;        break;
    case "\x73":        FichierAudioJo[i] = 115;        break;
    case "\x74":        FichierAudioJo[i] = 116;        break;
    case "\x75":        FichierAudioJo[i] = 117;        break;
    case "\x76":        FichierAudioJo[i] = 118;        break;
    case "\x77":        FichierAudioJo[i] = 119;        break;
    case "\x78":        FichierAudioJo[i] = 120;        break;
    case "\x79":        FichierAudioJo[i] = 121;        break;
    case "\x7A":        FichierAudioJo[i] = 122;        break;
    case "\x7B":        FichierAudioJo[i] = 123;        break;
    case "\x7C":        FichierAudioJo[i] = 124;        break;
    case "\x7D":        FichierAudioJo[i] = 125;        break;
    case "\x7E":        FichierAudioJo[i] = 126;        break;
    case "\x7F":        FichierAudioJo[i] = 127;        break;
/*****8**debut caractere indefini****/
    case "\x80":        FichierAudioJo[i] = 128;        break;
    case "\x81":        FichierAudioJo[i] = 129;        break;
    case "\x82":        FichierAudioJo[i] = 130;        break;
    case "\x83":        FichierAudioJo[i] = 131;        break;
    case "\x84":        FichierAudioJo[i] = 132;        break;
    case "\x85":        FichierAudioJo[i] = 133;        break;
    case "\x86":       FichierAudioJo[i] = 134;        break;
    case "\x87":       FichierAudioJo[i] = 135;        break;
    case "\x88":        FichierAudioJo[i] = 136;        break;
    case "\x89":       FichierAudioJo[i] = 137;        break;
    case "\x8A":        FichierAudioJo[i] = 138;        break;
    case "\x8B":       FichierAudioJo[i] = 139;        break;
    case "\x8C":      FichierAudioJo[i] = 140;        break;
    case "\x8D":        FichierAudioJo[i] = 141;        break;
    case "\x8E":       FichierAudioJo[i] = 142;        break;
    case "\x8F":        FichierAudioJo[i] = 143;        break;
/********9**********/
    case "\x90":        FichierAudioJo[i] = 144;        break;
    case "\x91":       FichierAudioJo[i] = 145;        break;
    case "\x92":       FichierAudioJo[i] = 146;        break;
    case "\x93":        FichierAudioJo[i] = 147;        break;
    case "\x94":        FichierAudioJo[i] = 148;        break;
    case "\x95":       FichierAudioJo[i] = 149;        break;
    case "\x96":      FichierAudioJo[i] = 150;        break;
    case "\x97":      FichierAudioJo[i] = 151;        break;
    case "\x98":       FichierAudioJo[i] = 152;        break;
    case "\x99":       FichierAudioJo[i] = 153;        break;
    case "\x9A":       FichierAudioJo[i] = 154;        break;
    case "\x9B":       FichierAudioJo[i] = 155;        break;
    case "\x9C":      FichierAudioJo[i] = 156;        break;
    case "\x9D":      FichierAudioJo[i] = 157;        break;
    case "\x9E":      FichierAudioJo[i] = 158;        break;
    case "\x9F":       FichierAudioJo[i] = 159;        break;
/**fin caractere indefini*A**/
    case "\xA0":        FichierAudioJo[i] = 160;        break;
    case "\xA1":        FichierAudioJo[i] = 161;        break;
    case "\xA2":        FichierAudioJo[i] = 162;        break;
    case "\xA3":        FichierAudioJo[i] = 163;        break;
    case "\xA4":        FichierAudioJo[i] = 164;        break;
    case "\xA5":        FichierAudioJo[i] = 165;        break;
    case "\xA6":        FichierAudioJo[i] = 166;        break;
    case "\xA7":        FichierAudioJo[i] = 167;        break;
    case "\xA8":        FichierAudioJo[i] = 168;        break;
    case "\xA9":        FichierAudioJo[i] = 169;        break;
    case "\xAA":        FichierAudioJo[i] = 170;        break;
    case "\xAB":        FichierAudioJo[i] = 171;        break;
    case "\xAC":        FichierAudioJo[i] = 172;        break;
    case "\xAD":        FichierAudioJo[i] = 173;        break;
    case "\xAE":        FichierAudioJo[i] = 174;        break;
    case "\xAF":        FichierAudioJo[i] = 175;        break;
/*******B******/
    case "\xB0":        FichierAudioJo[i] = 176;        break;
    case "\xB1":        FichierAudioJo[i] = 177;        break;
    case "\xB2":        FichierAudioJo[i] = 178;        break;
    case "\xB3":        FichierAudioJo[i] = 179;        break;
    case "\xB4":        FichierAudioJo[i] = 180;        break;
    case "\xB5":        FichierAudioJo[i] = 181;        break;
    case "\xB6":        FichierAudioJo[i] = 182;        break;
    case "\xB7":        FichierAudioJo[i] = 183;        break;
    case "\xB8":        FichierAudioJo[i] = 184;        break;
    case "\xB9":        FichierAudioJo[i] = 185;        break;
    case "\xBA":        FichierAudioJo[i] = 186;        break;
    case "\xBB":        FichierAudioJo[i] = 187;        break;
    case "\xBC":        FichierAudioJo[i] = 188;        break;
    case "\xBD":        FichierAudioJo[i] = 189;        break;
    case "\xBE":        FichierAudioJo[i] = 190;        break;
    case "\xBF":        FichierAudioJo[i] = 191;        break;
/*******C*******/
    case "\xC0":        FichierAudioJo[i] = 192;        break;
    case "\xC1":        FichierAudioJo[i] = 193;        break;
    case "\xC2":        FichierAudioJo[i] = 194;        break;
    case "\xC3":        FichierAudioJo[i] = 195;        break;
    case "\xC4":        FichierAudioJo[i] = 196;        break;
    case "\xC5":        FichierAudioJo[i] = 197;        break;
    case "\xC6":        FichierAudioJo[i] = 198;        break;
    case "\xC7":        FichierAudioJo[i] = 199;        break;
    case "\xC8":        FichierAudioJo[i] = 200;        break;
    case "\xC9":        FichierAudioJo[i] = 201;        break;
    case "\xCA":        FichierAudioJo[i] = 202;        break;
    case "\xCB":        FichierAudioJo[i] = 203;        break;
    case "\xCC":        FichierAudioJo[i] = 204;        break;
    case "\xCD":        FichierAudioJo[i] = 205;        break;
    case "\xCE":        FichierAudioJo[i] = 206;        break;
    case "\xCF":        FichierAudioJo[i] = 207;        break;
/**********D*************/
    case "\xD0":        FichierAudioJo[i] = 208;        break;
    case "\xD1":        FichierAudioJo[i] = 209;        break;
    case "\xD2":        FichierAudioJo[i] = 210;        break;
    case "\xD3":        FichierAudioJo[i] = 211;        break;
    case "\xD4":        FichierAudioJo[i] = 212;        break;
    case "\xD5":        FichierAudioJo[i] = 213;        break;
    case "\xD6":        FichierAudioJo[i] = 214;        break;
    case "\xD7":        FichierAudioJo[i] = 215;        break;
    case "\xD8":        FichierAudioJo[i] = 216;        break;
    case "\xD9":        FichierAudioJo[i] = 217;        break;
    case "\xDA":        FichierAudioJo[i] = 218;        break;
    case "\xDB":        FichierAudioJo[i] = 219;        break;
    case "\xDC":        FichierAudioJo[i] = 220;        break;
    case "\xDD":        FichierAudioJo[i] = 221;        break;
    case "\xDE":        FichierAudioJo[i] = 222;        break;
    case "\xDF":        FichierAudioJo[i] = 223;        break;
/**********E********/
    case "\xE0":        FichierAudioJo[i] = 224;        break;
    case "\xE1":        FichierAudioJo[i] = 225;        break;
    case "\xE2":        FichierAudioJo[i] = 226;        break;
    case "\xE3":        FichierAudioJo[i] = 227;        break;
    case "\xE4":        FichierAudioJo[i] = 228;        break;
    case "\xE5":        FichierAudioJo[i] = 229;        break;
    case "\xE6":        FichierAudioJo[i] = 230;        break;
    case "\xE7":        FichierAudioJo[i] = 231;        break;
    case "\xE8":        FichierAudioJo[i] = 232;        break;
    case "\xE9":        FichierAudioJo[i] = 233;        break;
    case "\xEA":        FichierAudioJo[i] = 234;        break;
    case "\xEB":        FichierAudioJo[i] = 235;        break;
    case "\xEC":        FichierAudioJo[i] = 236;        break;
    case "\xED":        FichierAudioJo[i] = 237;        break;
    case "\xEE":        FichierAudioJo[i] = 238;        break;
    case "\xEF":        FichierAudioJo[i] = 239;        break;
/*****F*****/
    case "\xF0":        FichierAudioJo[i] = 240;        break;
    case "\xF1":        FichierAudioJo[i] = 241;        break;
    case "\xF2":        FichierAudioJo[i] = 242;        break;
    case "\xF3":        FichierAudioJo[i] = 243;        break;
    case "\xF4":        FichierAudioJo[i] = 244;        break;
    case "\xF5":        FichierAudioJo[i] = 245;        break;
    case "\xF6":        FichierAudioJo[i] = 246;        break;
    case "\xF7":        FichierAudioJo[i] = 247;        break;
    case "\xF8":        FichierAudioJo[i] = 248;        break;
    case "\xF9":        FichierAudioJo[i] = 249;        break;
    case "\xFA":        FichierAudioJo[i] = 250;        break;
    case "\xFB":        FichierAudioJo[i] = 251;        break;
    case "\xFC":        FichierAudioJo[i] = 252;        break;
    case "\xFD":        FichierAudioJo[i] = 253;        break;
    case "\xFE":        FichierAudioJo[i] = 254;        break;
    case "\xFF":        FichierAudioJo[i] = 255;        break;
    default:        FichierAudioJo[i] = MiseEnMemoire_Def_Lecture;

MiseEnMemoire_Def_Lecture = FichierAudioJo;
} //fin switch texte1
			} //fin for texte1

 
			}			

convertit(text11);



function ajouteson11() 
		{

  injectionson11 = document.createElement("pre");
  injectionson11.textContent = FichierAudioJo ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  son11 = document.getElementById("donner_son11");
  document.body.insertBefore(injectionson11, son11);
		}
ajouteson11();
	}

reader11.readAsBinaryString(file, "UTF-1616");
}

function gens11(fileList11) 
{
    for (var i = 0; i < fileList11.length; i++) 
	{
        PrendTout11(fileList11[i]);
	}
}

//input 12
function PrendTout12(file) 
{
    var name12 = file.name;
    var reader12 = new FileReader();  
    reader12.onload = function(e12) 
	{ 
text12 = e12.target.result.split(""); 

function convertit(text12)

{

var MiseEnMemoire_Def_Lecture;

    			for (var i = 0; i < text12.length; i++)
			{

switch(text12[i]) {
    case "\x00":        FichierAudioJo[i] = 0;        break;
    case "\x01":        FichierAudioJo[i] = 1;        break;
    case "\x02":        FichierAudioJo[i] = 2;        break;
    case "\x03":        FichierAudioJo[i] = 3;        break;
    case "\x04":        FichierAudioJo[i] = 4;        break;
    case "\x05":        FichierAudioJo[i] = 5;        break;
    case "\x06":        FichierAudioJo[i] = 6;        break;
    case "\x07":        FichierAudioJo[i] = 7;        break;
    case "\x08":        FichierAudioJo[i] = 8;        break;
    case "\x09":        FichierAudioJo[i] = 9;        break;
    case "\x0A":        FichierAudioJo[i] = 10;        break;
    case "\x0B":        FichierAudioJo[i] = 11;        break;
    case "\x0C":        FichierAudioJo[i] = 12;        break;
    case "\x0D":        FichierAudioJo[i] = 13;        break;
    case "\x0E":        FichierAudioJo[i] = 14;        break;
    case "\x0F":        FichierAudioJo[i] = 15;        break;
/**caractere indefini debut a 30***********/
    case "\x10":        FichierAudioJo[i] = 16;        break;
    case "\x11":        FichierAudioJo[i] = 17;        break;
    case "\x12":        FichierAudioJo[i] = 18;        break;
    case "\x13":        FichierAudioJo[i] = 19;        break;
    case "\x14":        FichierAudioJo[i] = 20;        break;
    case "\x15":        FichierAudioJo[i] = 21;        break;
    case "\x16":        FichierAudioJo[i] = 22;        break;
    case "\x17":        FichierAudioJo[i] = 23;        break;
    case "\x18":        FichierAudioJo[i] = 24;        break;
    case "\x19":        FichierAudioJo[i] = 25;        break;
    case "\x1A":        FichierAudioJo[i] = 26;        break;
    case "\x1B":        FichierAudioJo[i] = 27;        break;
    case "\x1C":        FichierAudioJo[i] = 28;        break;
    case "\x1D":        FichierAudioJo[i] = 29;        break;
    case "\x1E":        FichierAudioJo[i] = 30;        break;
    case "\x1F":        FichierAudioJo[i] = 31;        break;
/************/
    case "\x20":        FichierAudioJo[i] = 32;        break;
    case "\x21":        FichierAudioJo[i] = 33;        break;
    case "\x22":        FichierAudioJo[i] = 34;        break;
    case "\x23":        FichierAudioJo[i] = 35;        break;
    case "\x24":        FichierAudioJo[i] = 36;        break;
    case "\x25":        FichierAudioJo[i] = 37;        break;
    case "\x26":        FichierAudioJo[i] = 38;        break;
    case "\x27":        FichierAudioJo[i] = 39;        break;
    case "\x28":        FichierAudioJo[i] = 40;        break;
    case "\x29":        FichierAudioJo[i] = 41;        break;
    case "\x2A":        FichierAudioJo[i] = 42;        break;
    case "\x2B":        FichierAudioJo[i] = 43;        break;
    case "\x2C":        FichierAudioJo[i] = 44;        break;
    case "\x2D":        FichierAudioJo[i] = 45;        break;
    case "\x2E":        FichierAudioJo[i] = 46;        break;
    case "\x2F":        FichierAudioJo[i] = 47;        break;
/*****************/
    case "\x30":        FichierAudioJo[i] = 48;        break;
    case "\x31":        FichierAudioJo[i] = 49;        break;
    case "\x32":        FichierAudioJo[i] = 50;        break;
    case "\x33":        FichierAudioJo[i] = 51;        break;
    case "\x34":        FichierAudioJo[i] = 52;        break;
    case "\x35":        FichierAudioJo[i] = 53;        break;
    case "\x36":        FichierAudioJo[i] = 54;        break;
    case "\x37":        FichierAudioJo[i] = 55;        break;
    case "\x38":        FichierAudioJo[i] = 56;        break;
    case "\x39":        FichierAudioJo[i] = 57;        break;
    case "\x3A":        FichierAudioJo[i] = 58;        break;
    case "\x3B":        FichierAudioJo[i] = 59;        break;
    case "\x3C":        FichierAudioJo[i] = 60;        break;
    case "\x3D":        FichierAudioJo[i] = 61;        break;
    case "\x3E":        FichierAudioJo[i] = 62;        break;
    case "\x3F":        FichierAudioJo[i] = 63;        break;
/*************/
    case "\x40":        FichierAudioJo[i] = 64;        break;
    case "\x41":        FichierAudioJo[i] = 65;        break;
    case "\x42":        FichierAudioJo[i] = 66;        break;
    case "\x43":        FichierAudioJo[i] = 67;        break;
    case "\x44":        FichierAudioJo[i] = 68;        break;
    case "\x45":        FichierAudioJo[i] = 69;        break;
    case "\x46":        FichierAudioJo[i] = 70;        break;
    case "\x47":        FichierAudioJo[i] = 71;        break;
    case "\x48":        FichierAudioJo[i] = 72;        break;
    case "\x49":        FichierAudioJo[i] = 73;        break;
    case "\x4A":        FichierAudioJo[i] = 74;        break;
    case "\x4B":        FichierAudioJo[i] = 75;        break;
    case "\x4C":        FichierAudioJo[i] = 76;        break;
    case "\x4D":        FichierAudioJo[i] = 77;        break;
    case "\x4E":        FichierAudioJo[i] = 78;        break;
    case "\x4F":        FichierAudioJo[i] = 79;        break;
/***************/
    case "\x50":        FichierAudioJo[i] = 80;        break;
    case "\x51":        FichierAudioJo[i] = 81;        break;
    case "\x52":        FichierAudioJo[i] = 82;        break;
    case "\x53":        FichierAudioJo[i] = 83;        break;
    case "\x54":        FichierAudioJo[i] = 84;        break;
    case "\x55":        FichierAudioJo[i] = 85;        break;
    case "\x56":        FichierAudioJo[i] = 86;        break;
    case "\x57":        FichierAudioJo[i] = 87;        break;
    case "\x58":        FichierAudioJo[i] = 88;        break;
    case "\x59":        FichierAudioJo[i] = 89;        break;
    case "\x5A":        FichierAudioJo[i] = 90;        break;
    case "\x5B":        FichierAudioJo[i] = 91;        break;
    case "\x5C":        FichierAudioJo[i] = 92;        break;
    case "\x5D":        FichierAudioJo[i] = 93;        break;
    case "\x5E":        FichierAudioJo[i] = 94;        break;
    case "\x5F":        FichierAudioJo[i] = 95;        break;
/***************/
    case "\x60":        FichierAudioJo[i] = 96;        break;
    case "\x61":        FichierAudioJo[i] = 97;        break;
    case "\x62":        FichierAudioJo[i] = 98;        break;
    case "\x63":        FichierAudioJo[i] = 99;        break;
    case "\x64":        FichierAudioJo[i] = 100;        break;
    case "\x65":        FichierAudioJo[i] = 101;        break;
    case "\x66":        FichierAudioJo[i] = 102;        break;
    case "\x67":        FichierAudioJo[i] = 103;        break;
    case "\x68":        FichierAudioJo[i] = 104;        break;
    case "\x69":        FichierAudioJo[i] = 105;        break;
    case "\x6A":        FichierAudioJo[i] = 106;        break;
    case "\x6B":        FichierAudioJo[i] = 107;        break;
    case "\x6C":        FichierAudioJo[i] = 108;        break;
    case "\x6D":        FichierAudioJo[i] = 109;        break;
    case "\x6E":        FichierAudioJo[i] = 110;        break;
    case "\x6F":        FichierAudioJo[i] = 111;        break;
/**********/
    case "\x70":        FichierAudioJo[i] = 112;        break;
    case "\x71":        FichierAudioJo[i] = 113;        break;
    case "\x72":        FichierAudioJo[i] = 114;        break;
    case "\x73":        FichierAudioJo[i] = 115;        break;
    case "\x74":        FichierAudioJo[i] = 116;        break;
    case "\x75":        FichierAudioJo[i] = 117;        break;
    case "\x76":        FichierAudioJo[i] = 118;        break;
    case "\x77":        FichierAudioJo[i] = 119;        break;
    case "\x78":        FichierAudioJo[i] = 120;        break;
    case "\x79":        FichierAudioJo[i] = 121;        break;
    case "\x7A":        FichierAudioJo[i] = 122;        break;
    case "\x7B":        FichierAudioJo[i] = 123;        break;
    case "\x7C":        FichierAudioJo[i] = 124;        break;
    case "\x7D":        FichierAudioJo[i] = 125;        break;
    case "\x7E":        FichierAudioJo[i] = 126;        break;
    case "\x7F":        FichierAudioJo[i] = 127;        break;
/*****8**debut caractere indefini****/
    case "\x80":        FichierAudioJo[i] = 128;        break;
    case "\x81":        FichierAudioJo[i] = 129;        break;
    case "\x82":        FichierAudioJo[i] = 130;        break;
    case "\x83":        FichierAudioJo[i] = 131;        break;
    case "\x84":        FichierAudioJo[i] = 132;        break;
    case "\x85":        FichierAudioJo[i] = 133;        break;
    case "\x86":       FichierAudioJo[i] = 134;        break;
    case "\x87":       FichierAudioJo[i] = 135;        break;
    case "\x88":        FichierAudioJo[i] = 136;        break;
    case "\x89":       FichierAudioJo[i] = 137;        break;
    case "\x8A":        FichierAudioJo[i] = 138;        break;
    case "\x8B":       FichierAudioJo[i] = 139;        break;
    case "\x8C":      FichierAudioJo[i] = 140;        break;
    case "\x8D":        FichierAudioJo[i] = 141;        break;
    case "\x8E":       FichierAudioJo[i] = 142;        break;
    case "\x8F":        FichierAudioJo[i] = 143;        break;
/********9**********/
    case "\x90":        FichierAudioJo[i] = 144;        break;
    case "\x91":       FichierAudioJo[i] = 145;        break;
    case "\x92":       FichierAudioJo[i] = 146;        break;
    case "\x93":        FichierAudioJo[i] = 147;        break;
    case "\x94":        FichierAudioJo[i] = 148;        break;
    case "\x95":       FichierAudioJo[i] = 149;        break;
    case "\x96":      FichierAudioJo[i] = 150;        break;
    case "\x97":      FichierAudioJo[i] = 151;        break;
    case "\x98":       FichierAudioJo[i] = 152;        break;
    case "\x99":       FichierAudioJo[i] = 153;        break;
    case "\x9A":       FichierAudioJo[i] = 154;        break;
    case "\x9B":       FichierAudioJo[i] = 155;        break;
    case "\x9C":      FichierAudioJo[i] = 156;        break;
    case "\x9D":      FichierAudioJo[i] = 157;        break;
    case "\x9E":      FichierAudioJo[i] = 158;        break;
    case "\x9F":       FichierAudioJo[i] = 159;        break;
/**fin caractere indefini*A**/
    case "\xA0":        FichierAudioJo[i] = 160;        break;
    case "\xA1":        FichierAudioJo[i] = 161;        break;
    case "\xA2":        FichierAudioJo[i] = 162;        break;
    case "\xA3":        FichierAudioJo[i] = 163;        break;
    case "\xA4":        FichierAudioJo[i] = 164;        break;
    case "\xA5":        FichierAudioJo[i] = 165;        break;
    case "\xA6":        FichierAudioJo[i] = 166;        break;
    case "\xA7":        FichierAudioJo[i] = 167;        break;
    case "\xA8":        FichierAudioJo[i] = 168;        break;
    case "\xA9":        FichierAudioJo[i] = 169;        break;
    case "\xAA":        FichierAudioJo[i] = 170;        break;
    case "\xAB":        FichierAudioJo[i] = 171;        break;
    case "\xAC":        FichierAudioJo[i] = 172;        break;
    case "\xAD":        FichierAudioJo[i] = 173;        break;
    case "\xAE":        FichierAudioJo[i] = 174;        break;
    case "\xAF":        FichierAudioJo[i] = 175;        break;
/*******B******/
    case "\xB0":        FichierAudioJo[i] = 176;        break;
    case "\xB1":        FichierAudioJo[i] = 177;        break;
    case "\xB2":        FichierAudioJo[i] = 178;        break;
    case "\xB3":        FichierAudioJo[i] = 179;        break;
    case "\xB4":        FichierAudioJo[i] = 180;        break;
    case "\xB5":        FichierAudioJo[i] = 181;        break;
    case "\xB6":        FichierAudioJo[i] = 182;        break;
    case "\xB7":        FichierAudioJo[i] = 183;        break;
    case "\xB8":        FichierAudioJo[i] = 184;        break;
    case "\xB9":        FichierAudioJo[i] = 185;        break;
    case "\xBA":        FichierAudioJo[i] = 186;        break;
    case "\xBB":        FichierAudioJo[i] = 187;        break;
    case "\xBC":        FichierAudioJo[i] = 188;        break;
    case "\xBD":        FichierAudioJo[i] = 189;        break;
    case "\xBE":        FichierAudioJo[i] = 190;        break;
    case "\xBF":        FichierAudioJo[i] = 191;        break;
/*******C*******/
    case "\xC0":        FichierAudioJo[i] = 192;        break;
    case "\xC1":        FichierAudioJo[i] = 193;        break;
    case "\xC2":        FichierAudioJo[i] = 194;        break;
    case "\xC3":        FichierAudioJo[i] = 195;        break;
    case "\xC4":        FichierAudioJo[i] = 196;        break;
    case "\xC5":        FichierAudioJo[i] = 197;        break;
    case "\xC6":        FichierAudioJo[i] = 198;        break;
    case "\xC7":        FichierAudioJo[i] = 199;        break;
    case "\xC8":        FichierAudioJo[i] = 200;        break;
    case "\xC9":        FichierAudioJo[i] = 201;        break;
    case "\xCA":        FichierAudioJo[i] = 202;        break;
    case "\xCB":        FichierAudioJo[i] = 203;        break;
    case "\xCC":        FichierAudioJo[i] = 204;        break;
    case "\xCD":        FichierAudioJo[i] = 205;        break;
    case "\xCE":        FichierAudioJo[i] = 206;        break;
    case "\xCF":        FichierAudioJo[i] = 207;        break;
/**********D*************/
    case "\xD0":        FichierAudioJo[i] = 208;        break;
    case "\xD1":        FichierAudioJo[i] = 209;        break;
    case "\xD2":        FichierAudioJo[i] = 210;        break;
    case "\xD3":        FichierAudioJo[i] = 211;        break;
    case "\xD4":        FichierAudioJo[i] = 212;        break;
    case "\xD5":        FichierAudioJo[i] = 213;        break;
    case "\xD6":        FichierAudioJo[i] = 214;        break;
    case "\xD7":        FichierAudioJo[i] = 215;        break;
    case "\xD8":        FichierAudioJo[i] = 216;        break;
    case "\xD9":        FichierAudioJo[i] = 217;        break;
    case "\xDA":        FichierAudioJo[i] = 218;        break;
    case "\xDB":        FichierAudioJo[i] = 219;        break;
    case "\xDC":        FichierAudioJo[i] = 220;        break;
    case "\xDD":        FichierAudioJo[i] = 221;        break;
    case "\xDE":        FichierAudioJo[i] = 222;        break;
    case "\xDF":        FichierAudioJo[i] = 223;        break;
/**********E********/
    case "\xE0":        FichierAudioJo[i] = 224;        break;
    case "\xE1":        FichierAudioJo[i] = 225;        break;
    case "\xE2":        FichierAudioJo[i] = 226;        break;
    case "\xE3":        FichierAudioJo[i] = 227;        break;
    case "\xE4":        FichierAudioJo[i] = 228;        break;
    case "\xE5":        FichierAudioJo[i] = 229;        break;
    case "\xE6":        FichierAudioJo[i] = 230;        break;
    case "\xE7":        FichierAudioJo[i] = 231;        break;
    case "\xE8":        FichierAudioJo[i] = 232;        break;
    case "\xE9":        FichierAudioJo[i] = 233;        break;
    case "\xEA":        FichierAudioJo[i] = 234;        break;
    case "\xEB":        FichierAudioJo[i] = 235;        break;
    case "\xEC":        FichierAudioJo[i] = 236;        break;
    case "\xED":        FichierAudioJo[i] = 237;        break;
    case "\xEE":        FichierAudioJo[i] = 238;        break;
    case "\xEF":        FichierAudioJo[i] = 239;        break;
/*****F*****/
    case "\xF0":        FichierAudioJo[i] = 240;        break;
    case "\xF1":        FichierAudioJo[i] = 241;        break;
    case "\xF2":        FichierAudioJo[i] = 242;        break;
    case "\xF3":        FichierAudioJo[i] = 243;        break;
    case "\xF4":        FichierAudioJo[i] = 244;        break;
    case "\xF5":        FichierAudioJo[i] = 245;        break;
    case "\xF6":        FichierAudioJo[i] = 246;        break;
    case "\xF7":        FichierAudioJo[i] = 247;        break;
    case "\xF8":        FichierAudioJo[i] = 248;        break;
    case "\xF9":        FichierAudioJo[i] = 249;        break;
    case "\xFA":        FichierAudioJo[i] = 250;        break;
    case "\xFB":        FichierAudioJo[i] = 251;        break;
    case "\xFC":        FichierAudioJo[i] = 252;        break;
    case "\xFD":        FichierAudioJo[i] = 253;        break;
    case "\xFE":        FichierAudioJo[i] = 254;        break;
    case "\xFF":        FichierAudioJo[i] = 255;        break;
    default:        FichierAudioJo[i] = MiseEnMemoire_Def_Lecture;

MiseEnMemoire_Def_Lecture = FichierAudioJo;
} //fin switch texte1
			} //fin for texte1

 
			}			

convertit(text12);



function ajouteson12() 
		{

  injectionson12 = document.createElement("pre");
  injectionson12.textContent = FichierAudioJo ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  son12 = document.getElementById("donner_son12");
  document.body.insertBefore(injectionson12, son12);
		}
ajouteson12();
	}

reader12.readAsBinaryString(file, "UTF-1616");
}

function gens12(fileList12) 
{
    for (var i = 0; i < fileList12.length; i++) 
	{
        PrendTout12(fileList12[i]);
	}
}

//input 13
function PrendTout13(file) 
{
    var name13 = file.name;
    var reader13 = new FileReader();  
    reader13.onload = function(e13) 
	{ 
text13 = e13.target.result.split(""); 

function convertit(text13)

{

var MiseEnMemoire_Def_Lecture;

    			for (var i = 0; i < text13.length; i++)
			{

switch(text13[i]) {
    case "\x00":        FichierAudioJo[i] = 0;        break;
    case "\x01":        FichierAudioJo[i] = 1;        break;
    case "\x02":        FichierAudioJo[i] = 2;        break;
    case "\x03":        FichierAudioJo[i] = 3;        break;
    case "\x04":        FichierAudioJo[i] = 4;        break;
    case "\x05":        FichierAudioJo[i] = 5;        break;
    case "\x06":        FichierAudioJo[i] = 6;        break;
    case "\x07":        FichierAudioJo[i] = 7;        break;
    case "\x08":        FichierAudioJo[i] = 8;        break;
    case "\x09":        FichierAudioJo[i] = 9;        break;
    case "\x0A":        FichierAudioJo[i] = 10;        break;
    case "\x0B":        FichierAudioJo[i] = 11;        break;
    case "\x0C":        FichierAudioJo[i] = 12;        break;
    case "\x0D":        FichierAudioJo[i] = 13;        break;
    case "\x0E":        FichierAudioJo[i] = 14;        break;
    case "\x0F":        FichierAudioJo[i] = 15;        break;
/**caractere indefini debut a 30***********/
    case "\x10":        FichierAudioJo[i] = 16;        break;
    case "\x11":        FichierAudioJo[i] = 17;        break;
    case "\x12":        FichierAudioJo[i] = 18;        break;
    case "\x13":        FichierAudioJo[i] = 19;        break;
    case "\x14":        FichierAudioJo[i] = 20;        break;
    case "\x15":        FichierAudioJo[i] = 21;        break;
    case "\x16":        FichierAudioJo[i] = 22;        break;
    case "\x17":        FichierAudioJo[i] = 23;        break;
    case "\x18":        FichierAudioJo[i] = 24;        break;
    case "\x19":        FichierAudioJo[i] = 25;        break;
    case "\x1A":        FichierAudioJo[i] = 26;        break;
    case "\x1B":        FichierAudioJo[i] = 27;        break;
    case "\x1C":        FichierAudioJo[i] = 28;        break;
    case "\x1D":        FichierAudioJo[i] = 29;        break;
    case "\x1E":        FichierAudioJo[i] = 30;        break;
    case "\x1F":        FichierAudioJo[i] = 31;        break;
/************/
    case "\x20":        FichierAudioJo[i] = 32;        break;
    case "\x21":        FichierAudioJo[i] = 33;        break;
    case "\x22":        FichierAudioJo[i] = 34;        break;
    case "\x23":        FichierAudioJo[i] = 35;        break;
    case "\x24":        FichierAudioJo[i] = 36;        break;
    case "\x25":        FichierAudioJo[i] = 37;        break;
    case "\x26":        FichierAudioJo[i] = 38;        break;
    case "\x27":        FichierAudioJo[i] = 39;        break;
    case "\x28":        FichierAudioJo[i] = 40;        break;
    case "\x29":        FichierAudioJo[i] = 41;        break;
    case "\x2A":        FichierAudioJo[i] = 42;        break;
    case "\x2B":        FichierAudioJo[i] = 43;        break;
    case "\x2C":        FichierAudioJo[i] = 44;        break;
    case "\x2D":        FichierAudioJo[i] = 45;        break;
    case "\x2E":        FichierAudioJo[i] = 46;        break;
    case "\x2F":        FichierAudioJo[i] = 47;        break;
/*****************/
    case "\x30":        FichierAudioJo[i] = 48;        break;
    case "\x31":        FichierAudioJo[i] = 49;        break;
    case "\x32":        FichierAudioJo[i] = 50;        break;
    case "\x33":        FichierAudioJo[i] = 51;        break;
    case "\x34":        FichierAudioJo[i] = 52;        break;
    case "\x35":        FichierAudioJo[i] = 53;        break;
    case "\x36":        FichierAudioJo[i] = 54;        break;
    case "\x37":        FichierAudioJo[i] = 55;        break;
    case "\x38":        FichierAudioJo[i] = 56;        break;
    case "\x39":        FichierAudioJo[i] = 57;        break;
    case "\x3A":        FichierAudioJo[i] = 58;        break;
    case "\x3B":        FichierAudioJo[i] = 59;        break;
    case "\x3C":        FichierAudioJo[i] = 60;        break;
    case "\x3D":        FichierAudioJo[i] = 61;        break;
    case "\x3E":        FichierAudioJo[i] = 62;        break;
    case "\x3F":        FichierAudioJo[i] = 63;        break;
/*************/
    case "\x40":        FichierAudioJo[i] = 64;        break;
    case "\x41":        FichierAudioJo[i] = 65;        break;
    case "\x42":        FichierAudioJo[i] = 66;        break;
    case "\x43":        FichierAudioJo[i] = 67;        break;
    case "\x44":        FichierAudioJo[i] = 68;        break;
    case "\x45":        FichierAudioJo[i] = 69;        break;
    case "\x46":        FichierAudioJo[i] = 70;        break;
    case "\x47":        FichierAudioJo[i] = 71;        break;
    case "\x48":        FichierAudioJo[i] = 72;        break;
    case "\x49":        FichierAudioJo[i] = 73;        break;
    case "\x4A":        FichierAudioJo[i] = 74;        break;
    case "\x4B":        FichierAudioJo[i] = 75;        break;
    case "\x4C":        FichierAudioJo[i] = 76;        break;
    case "\x4D":        FichierAudioJo[i] = 77;        break;
    case "\x4E":        FichierAudioJo[i] = 78;        break;
    case "\x4F":        FichierAudioJo[i] = 79;        break;
/***************/
    case "\x50":        FichierAudioJo[i] = 80;        break;
    case "\x51":        FichierAudioJo[i] = 81;        break;
    case "\x52":        FichierAudioJo[i] = 82;        break;
    case "\x53":        FichierAudioJo[i] = 83;        break;
    case "\x54":        FichierAudioJo[i] = 84;        break;
    case "\x55":        FichierAudioJo[i] = 85;        break;
    case "\x56":        FichierAudioJo[i] = 86;        break;
    case "\x57":        FichierAudioJo[i] = 87;        break;
    case "\x58":        FichierAudioJo[i] = 88;        break;
    case "\x59":        FichierAudioJo[i] = 89;        break;
    case "\x5A":        FichierAudioJo[i] = 90;        break;
    case "\x5B":        FichierAudioJo[i] = 91;        break;
    case "\x5C":        FichierAudioJo[i] = 92;        break;
    case "\x5D":        FichierAudioJo[i] = 93;        break;
    case "\x5E":        FichierAudioJo[i] = 94;        break;
    case "\x5F":        FichierAudioJo[i] = 95;        break;
/***************/
    case "\x60":        FichierAudioJo[i] = 96;        break;
    case "\x61":        FichierAudioJo[i] = 97;        break;
    case "\x62":        FichierAudioJo[i] = 98;        break;
    case "\x63":        FichierAudioJo[i] = 99;        break;
    case "\x64":        FichierAudioJo[i] = 100;        break;
    case "\x65":        FichierAudioJo[i] = 101;        break;
    case "\x66":        FichierAudioJo[i] = 102;        break;
    case "\x67":        FichierAudioJo[i] = 103;        break;
    case "\x68":        FichierAudioJo[i] = 104;        break;
    case "\x69":        FichierAudioJo[i] = 105;        break;
    case "\x6A":        FichierAudioJo[i] = 106;        break;
    case "\x6B":        FichierAudioJo[i] = 107;        break;
    case "\x6C":        FichierAudioJo[i] = 108;        break;
    case "\x6D":        FichierAudioJo[i] = 109;        break;
    case "\x6E":        FichierAudioJo[i] = 110;        break;
    case "\x6F":        FichierAudioJo[i] = 111;        break;
/**********/
    case "\x70":        FichierAudioJo[i] = 112;        break;
    case "\x71":        FichierAudioJo[i] = 113;        break;
    case "\x72":        FichierAudioJo[i] = 114;        break;
    case "\x73":        FichierAudioJo[i] = 115;        break;
    case "\x74":        FichierAudioJo[i] = 116;        break;
    case "\x75":        FichierAudioJo[i] = 117;        break;
    case "\x76":        FichierAudioJo[i] = 118;        break;
    case "\x77":        FichierAudioJo[i] = 119;        break;
    case "\x78":        FichierAudioJo[i] = 120;        break;
    case "\x79":        FichierAudioJo[i] = 121;        break;
    case "\x7A":        FichierAudioJo[i] = 122;        break;
    case "\x7B":        FichierAudioJo[i] = 123;        break;
    case "\x7C":        FichierAudioJo[i] = 124;        break;
    case "\x7D":        FichierAudioJo[i] = 125;        break;
    case "\x7E":        FichierAudioJo[i] = 126;        break;
    case "\x7F":        FichierAudioJo[i] = 127;        break;
/*****8**debut caractere indefini****/
    case "\x80":        FichierAudioJo[i] = 128;        break;
    case "\x81":        FichierAudioJo[i] = 129;        break;
    case "\x82":        FichierAudioJo[i] = 130;        break;
    case "\x83":        FichierAudioJo[i] = 131;        break;
    case "\x84":        FichierAudioJo[i] = 132;        break;
    case "\x85":        FichierAudioJo[i] = 133;        break;
    case "\x86":       FichierAudioJo[i] = 134;        break;
    case "\x87":       FichierAudioJo[i] = 135;        break;
    case "\x88":        FichierAudioJo[i] = 136;        break;
    case "\x89":       FichierAudioJo[i] = 137;        break;
    case "\x8A":        FichierAudioJo[i] = 138;        break;
    case "\x8B":       FichierAudioJo[i] = 139;        break;
    case "\x8C":      FichierAudioJo[i] = 140;        break;
    case "\x8D":        FichierAudioJo[i] = 141;        break;
    case "\x8E":       FichierAudioJo[i] = 142;        break;
    case "\x8F":        FichierAudioJo[i] = 143;        break;
/********9**********/
    case "\x90":        FichierAudioJo[i] = 144;        break;
    case "\x91":       FichierAudioJo[i] = 145;        break;
    case "\x92":       FichierAudioJo[i] = 146;        break;
    case "\x93":        FichierAudioJo[i] = 147;        break;
    case "\x94":        FichierAudioJo[i] = 148;        break;
    case "\x95":       FichierAudioJo[i] = 149;        break;
    case "\x96":      FichierAudioJo[i] = 150;        break;
    case "\x97":      FichierAudioJo[i] = 151;        break;
    case "\x98":       FichierAudioJo[i] = 152;        break;
    case "\x99":       FichierAudioJo[i] = 153;        break;
    case "\x9A":       FichierAudioJo[i] = 154;        break;
    case "\x9B":       FichierAudioJo[i] = 155;        break;
    case "\x9C":      FichierAudioJo[i] = 156;        break;
    case "\x9D":      FichierAudioJo[i] = 157;        break;
    case "\x9E":      FichierAudioJo[i] = 158;        break;
    case "\x9F":       FichierAudioJo[i] = 159;        break;
/**fin caractere indefini*A**/
    case "\xA0":        FichierAudioJo[i] = 160;        break;
    case "\xA1":        FichierAudioJo[i] = 161;        break;
    case "\xA2":        FichierAudioJo[i] = 162;        break;
    case "\xA3":        FichierAudioJo[i] = 163;        break;
    case "\xA4":        FichierAudioJo[i] = 164;        break;
    case "\xA5":        FichierAudioJo[i] = 165;        break;
    case "\xA6":        FichierAudioJo[i] = 166;        break;
    case "\xA7":        FichierAudioJo[i] = 167;        break;
    case "\xA8":        FichierAudioJo[i] = 168;        break;
    case "\xA9":        FichierAudioJo[i] = 169;        break;
    case "\xAA":        FichierAudioJo[i] = 170;        break;
    case "\xAB":        FichierAudioJo[i] = 171;        break;
    case "\xAC":        FichierAudioJo[i] = 172;        break;
    case "\xAD":        FichierAudioJo[i] = 173;        break;
    case "\xAE":        FichierAudioJo[i] = 174;        break;
    case "\xAF":        FichierAudioJo[i] = 175;        break;
/*******B******/
    case "\xB0":        FichierAudioJo[i] = 176;        break;
    case "\xB1":        FichierAudioJo[i] = 177;        break;
    case "\xB2":        FichierAudioJo[i] = 178;        break;
    case "\xB3":        FichierAudioJo[i] = 179;        break;
    case "\xB4":        FichierAudioJo[i] = 180;        break;
    case "\xB5":        FichierAudioJo[i] = 181;        break;
    case "\xB6":        FichierAudioJo[i] = 182;        break;
    case "\xB7":        FichierAudioJo[i] = 183;        break;
    case "\xB8":        FichierAudioJo[i] = 184;        break;
    case "\xB9":        FichierAudioJo[i] = 185;        break;
    case "\xBA":        FichierAudioJo[i] = 186;        break;
    case "\xBB":        FichierAudioJo[i] = 187;        break;
    case "\xBC":        FichierAudioJo[i] = 188;        break;
    case "\xBD":        FichierAudioJo[i] = 189;        break;
    case "\xBE":        FichierAudioJo[i] = 190;        break;
    case "\xBF":        FichierAudioJo[i] = 191;        break;
/*******C*******/
    case "\xC0":        FichierAudioJo[i] = 192;        break;
    case "\xC1":        FichierAudioJo[i] = 193;        break;
    case "\xC2":        FichierAudioJo[i] = 194;        break;
    case "\xC3":        FichierAudioJo[i] = 195;        break;
    case "\xC4":        FichierAudioJo[i] = 196;        break;
    case "\xC5":        FichierAudioJo[i] = 197;        break;
    case "\xC6":        FichierAudioJo[i] = 198;        break;
    case "\xC7":        FichierAudioJo[i] = 199;        break;
    case "\xC8":        FichierAudioJo[i] = 200;        break;
    case "\xC9":        FichierAudioJo[i] = 201;        break;
    case "\xCA":        FichierAudioJo[i] = 202;        break;
    case "\xCB":        FichierAudioJo[i] = 203;        break;
    case "\xCC":        FichierAudioJo[i] = 204;        break;
    case "\xCD":        FichierAudioJo[i] = 205;        break;
    case "\xCE":        FichierAudioJo[i] = 206;        break;
    case "\xCF":        FichierAudioJo[i] = 207;        break;
/**********D*************/
    case "\xD0":        FichierAudioJo[i] = 208;        break;
    case "\xD1":        FichierAudioJo[i] = 209;        break;
    case "\xD2":        FichierAudioJo[i] = 210;        break;
    case "\xD3":        FichierAudioJo[i] = 211;        break;
    case "\xD4":        FichierAudioJo[i] = 212;        break;
    case "\xD5":        FichierAudioJo[i] = 213;        break;
    case "\xD6":        FichierAudioJo[i] = 214;        break;
    case "\xD7":        FichierAudioJo[i] = 215;        break;
    case "\xD8":        FichierAudioJo[i] = 216;        break;
    case "\xD9":        FichierAudioJo[i] = 217;        break;
    case "\xDA":        FichierAudioJo[i] = 218;        break;
    case "\xDB":        FichierAudioJo[i] = 219;        break;
    case "\xDC":        FichierAudioJo[i] = 220;        break;
    case "\xDD":        FichierAudioJo[i] = 221;        break;
    case "\xDE":        FichierAudioJo[i] = 222;        break;
    case "\xDF":        FichierAudioJo[i] = 223;        break;
/**********E********/
    case "\xE0":        FichierAudioJo[i] = 224;        break;
    case "\xE1":        FichierAudioJo[i] = 225;        break;
    case "\xE2":        FichierAudioJo[i] = 226;        break;
    case "\xE3":        FichierAudioJo[i] = 227;        break;
    case "\xE4":        FichierAudioJo[i] = 228;        break;
    case "\xE5":        FichierAudioJo[i] = 229;        break;
    case "\xE6":        FichierAudioJo[i] = 230;        break;
    case "\xE7":        FichierAudioJo[i] = 231;        break;
    case "\xE8":        FichierAudioJo[i] = 232;        break;
    case "\xE9":        FichierAudioJo[i] = 233;        break;
    case "\xEA":        FichierAudioJo[i] = 234;        break;
    case "\xEB":        FichierAudioJo[i] = 235;        break;
    case "\xEC":        FichierAudioJo[i] = 236;        break;
    case "\xED":        FichierAudioJo[i] = 237;        break;
    case "\xEE":        FichierAudioJo[i] = 238;        break;
    case "\xEF":        FichierAudioJo[i] = 239;        break;
/*****F*****/
    case "\xF0":        FichierAudioJo[i] = 240;        break;
    case "\xF1":        FichierAudioJo[i] = 241;        break;
    case "\xF2":        FichierAudioJo[i] = 242;        break;
    case "\xF3":        FichierAudioJo[i] = 243;        break;
    case "\xF4":        FichierAudioJo[i] = 244;        break;
    case "\xF5":        FichierAudioJo[i] = 245;        break;
    case "\xF6":        FichierAudioJo[i] = 246;        break;
    case "\xF7":        FichierAudioJo[i] = 247;        break;
    case "\xF8":        FichierAudioJo[i] = 248;        break;
    case "\xF9":        FichierAudioJo[i] = 249;        break;
    case "\xFA":        FichierAudioJo[i] = 250;        break;
    case "\xFB":        FichierAudioJo[i] = 251;        break;
    case "\xFC":        FichierAudioJo[i] = 252;        break;
    case "\xFD":        FichierAudioJo[i] = 253;        break;
    case "\xFE":        FichierAudioJo[i] = 254;        break;
    case "\xFF":        FichierAudioJo[i] = 255;        break;
    default:        FichierAudioJo[i] = MiseEnMemoire_Def_Lecture;

MiseEnMemoire_Def_Lecture = FichierAudioJo;
} //fin switch texte1
			} //fin for texte1

 
			}			

convertit(text13);



function ajouteson13() 
		{

  injectionson13 = document.createElement("pre");
  injectionson13.textContent = FichierAudioJo ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  son13 = document.getElementById("donner_son13");
  document.body.insertBefore(injectionson13, son13);
		}
ajouteson13();
	}

reader13.readAsBinaryString(file, "UTF-1616");
}

function gens13(fileList13) 
{
    for (var i = 0; i < fileList13.length; i++) 
	{
        PrendTout13(fileList13[i]);
	}
}

//input 14
function PrendTout14(file) 
{
    var name14 = file.name;
    var reader14 = new FileReader();  
    reader14.onload = function(e14) 
	{ 
text14 = e14.target.result.split(""); 

function convertit(text14)

{

var MiseEnMemoire_Def_Lecture;

    			for (var i = 0; i < text14.length; i++)
			{

switch(text14[i]) {
    case "\x00":        FichierAudioJo[i] = 0;        break;
    case "\x01":        FichierAudioJo[i] = 1;        break;
    case "\x02":        FichierAudioJo[i] = 2;        break;
    case "\x03":        FichierAudioJo[i] = 3;        break;
    case "\x04":        FichierAudioJo[i] = 4;        break;
    case "\x05":        FichierAudioJo[i] = 5;        break;
    case "\x06":        FichierAudioJo[i] = 6;        break;
    case "\x07":        FichierAudioJo[i] = 7;        break;
    case "\x08":        FichierAudioJo[i] = 8;        break;
    case "\x09":        FichierAudioJo[i] = 9;        break;
    case "\x0A":        FichierAudioJo[i] = 10;        break;
    case "\x0B":        FichierAudioJo[i] = 11;        break;
    case "\x0C":        FichierAudioJo[i] = 12;        break;
    case "\x0D":        FichierAudioJo[i] = 13;        break;
    case "\x0E":        FichierAudioJo[i] = 14;        break;
    case "\x0F":        FichierAudioJo[i] = 15;        break;
/**caractere indefini debut a 30***********/
    case "\x10":        FichierAudioJo[i] = 16;        break;
    case "\x11":        FichierAudioJo[i] = 17;        break;
    case "\x12":        FichierAudioJo[i] = 18;        break;
    case "\x13":        FichierAudioJo[i] = 19;        break;
    case "\x14":        FichierAudioJo[i] = 20;        break;
    case "\x15":        FichierAudioJo[i] = 21;        break;
    case "\x16":        FichierAudioJo[i] = 22;        break;
    case "\x17":        FichierAudioJo[i] = 23;        break;
    case "\x18":        FichierAudioJo[i] = 24;        break;
    case "\x19":        FichierAudioJo[i] = 25;        break;
    case "\x1A":        FichierAudioJo[i] = 26;        break;
    case "\x1B":        FichierAudioJo[i] = 27;        break;
    case "\x1C":        FichierAudioJo[i] = 28;        break;
    case "\x1D":        FichierAudioJo[i] = 29;        break;
    case "\x1E":        FichierAudioJo[i] = 30;        break;
    case "\x1F":        FichierAudioJo[i] = 31;        break;
/************/
    case "\x20":        FichierAudioJo[i] = 32;        break;
    case "\x21":        FichierAudioJo[i] = 33;        break;
    case "\x22":        FichierAudioJo[i] = 34;        break;
    case "\x23":        FichierAudioJo[i] = 35;        break;
    case "\x24":        FichierAudioJo[i] = 36;        break;
    case "\x25":        FichierAudioJo[i] = 37;        break;
    case "\x26":        FichierAudioJo[i] = 38;        break;
    case "\x27":        FichierAudioJo[i] = 39;        break;
    case "\x28":        FichierAudioJo[i] = 40;        break;
    case "\x29":        FichierAudioJo[i] = 41;        break;
    case "\x2A":        FichierAudioJo[i] = 42;        break;
    case "\x2B":        FichierAudioJo[i] = 43;        break;
    case "\x2C":        FichierAudioJo[i] = 44;        break;
    case "\x2D":        FichierAudioJo[i] = 45;        break;
    case "\x2E":        FichierAudioJo[i] = 46;        break;
    case "\x2F":        FichierAudioJo[i] = 47;        break;
/*****************/
    case "\x30":        FichierAudioJo[i] = 48;        break;
    case "\x31":        FichierAudioJo[i] = 49;        break;
    case "\x32":        FichierAudioJo[i] = 50;        break;
    case "\x33":        FichierAudioJo[i] = 51;        break;
    case "\x34":        FichierAudioJo[i] = 52;        break;
    case "\x35":        FichierAudioJo[i] = 53;        break;
    case "\x36":        FichierAudioJo[i] = 54;        break;
    case "\x37":        FichierAudioJo[i] = 55;        break;
    case "\x38":        FichierAudioJo[i] = 56;        break;
    case "\x39":        FichierAudioJo[i] = 57;        break;
    case "\x3A":        FichierAudioJo[i] = 58;        break;
    case "\x3B":        FichierAudioJo[i] = 59;        break;
    case "\x3C":        FichierAudioJo[i] = 60;        break;
    case "\x3D":        FichierAudioJo[i] = 61;        break;
    case "\x3E":        FichierAudioJo[i] = 62;        break;
    case "\x3F":        FichierAudioJo[i] = 63;        break;
/*************/
    case "\x40":        FichierAudioJo[i] = 64;        break;
    case "\x41":        FichierAudioJo[i] = 65;        break;
    case "\x42":        FichierAudioJo[i] = 66;        break;
    case "\x43":        FichierAudioJo[i] = 67;        break;
    case "\x44":        FichierAudioJo[i] = 68;        break;
    case "\x45":        FichierAudioJo[i] = 69;        break;
    case "\x46":        FichierAudioJo[i] = 70;        break;
    case "\x47":        FichierAudioJo[i] = 71;        break;
    case "\x48":        FichierAudioJo[i] = 72;        break;
    case "\x49":        FichierAudioJo[i] = 73;        break;
    case "\x4A":        FichierAudioJo[i] = 74;        break;
    case "\x4B":        FichierAudioJo[i] = 75;        break;
    case "\x4C":        FichierAudioJo[i] = 76;        break;
    case "\x4D":        FichierAudioJo[i] = 77;        break;
    case "\x4E":        FichierAudioJo[i] = 78;        break;
    case "\x4F":        FichierAudioJo[i] = 79;        break;
/***************/
    case "\x50":        FichierAudioJo[i] = 80;        break;
    case "\x51":        FichierAudioJo[i] = 81;        break;
    case "\x52":        FichierAudioJo[i] = 82;        break;
    case "\x53":        FichierAudioJo[i] = 83;        break;
    case "\x54":        FichierAudioJo[i] = 84;        break;
    case "\x55":        FichierAudioJo[i] = 85;        break;
    case "\x56":        FichierAudioJo[i] = 86;        break;
    case "\x57":        FichierAudioJo[i] = 87;        break;
    case "\x58":        FichierAudioJo[i] = 88;        break;
    case "\x59":        FichierAudioJo[i] = 89;        break;
    case "\x5A":        FichierAudioJo[i] = 90;        break;
    case "\x5B":        FichierAudioJo[i] = 91;        break;
    case "\x5C":        FichierAudioJo[i] = 92;        break;
    case "\x5D":        FichierAudioJo[i] = 93;        break;
    case "\x5E":        FichierAudioJo[i] = 94;        break;
    case "\x5F":        FichierAudioJo[i] = 95;        break;
/***************/
    case "\x60":        FichierAudioJo[i] = 96;        break;
    case "\x61":        FichierAudioJo[i] = 97;        break;
    case "\x62":        FichierAudioJo[i] = 98;        break;
    case "\x63":        FichierAudioJo[i] = 99;        break;
    case "\x64":        FichierAudioJo[i] = 100;        break;
    case "\x65":        FichierAudioJo[i] = 101;        break;
    case "\x66":        FichierAudioJo[i] = 102;        break;
    case "\x67":        FichierAudioJo[i] = 103;        break;
    case "\x68":        FichierAudioJo[i] = 104;        break;
    case "\x69":        FichierAudioJo[i] = 105;        break;
    case "\x6A":        FichierAudioJo[i] = 106;        break;
    case "\x6B":        FichierAudioJo[i] = 107;        break;
    case "\x6C":        FichierAudioJo[i] = 108;        break;
    case "\x6D":        FichierAudioJo[i] = 109;        break;
    case "\x6E":        FichierAudioJo[i] = 110;        break;
    case "\x6F":        FichierAudioJo[i] = 111;        break;
/**********/
    case "\x70":        FichierAudioJo[i] = 112;        break;
    case "\x71":        FichierAudioJo[i] = 113;        break;
    case "\x72":        FichierAudioJo[i] = 114;        break;
    case "\x73":        FichierAudioJo[i] = 115;        break;
    case "\x74":        FichierAudioJo[i] = 116;        break;
    case "\x75":        FichierAudioJo[i] = 117;        break;
    case "\x76":        FichierAudioJo[i] = 118;        break;
    case "\x77":        FichierAudioJo[i] = 119;        break;
    case "\x78":        FichierAudioJo[i] = 120;        break;
    case "\x79":        FichierAudioJo[i] = 121;        break;
    case "\x7A":        FichierAudioJo[i] = 122;        break;
    case "\x7B":        FichierAudioJo[i] = 123;        break;
    case "\x7C":        FichierAudioJo[i] = 124;        break;
    case "\x7D":        FichierAudioJo[i] = 125;        break;
    case "\x7E":        FichierAudioJo[i] = 126;        break;
    case "\x7F":        FichierAudioJo[i] = 127;        break;
/*****8**debut caractere indefini****/
    case "\x80":        FichierAudioJo[i] = 128;        break;
    case "\x81":        FichierAudioJo[i] = 129;        break;
    case "\x82":        FichierAudioJo[i] = 130;        break;
    case "\x83":        FichierAudioJo[i] = 131;        break;
    case "\x84":        FichierAudioJo[i] = 132;        break;
    case "\x85":        FichierAudioJo[i] = 133;        break;
    case "\x86":       FichierAudioJo[i] = 134;        break;
    case "\x87":       FichierAudioJo[i] = 135;        break;
    case "\x88":        FichierAudioJo[i] = 136;        break;
    case "\x89":       FichierAudioJo[i] = 137;        break;
    case "\x8A":        FichierAudioJo[i] = 138;        break;
    case "\x8B":       FichierAudioJo[i] = 139;        break;
    case "\x8C":      FichierAudioJo[i] = 140;        break;
    case "\x8D":        FichierAudioJo[i] = 141;        break;
    case "\x8E":       FichierAudioJo[i] = 142;        break;
    case "\x8F":        FichierAudioJo[i] = 143;        break;
/********9**********/
    case "\x90":        FichierAudioJo[i] = 144;        break;
    case "\x91":       FichierAudioJo[i] = 145;        break;
    case "\x92":       FichierAudioJo[i] = 146;        break;
    case "\x93":        FichierAudioJo[i] = 147;        break;
    case "\x94":        FichierAudioJo[i] = 148;        break;
    case "\x95":       FichierAudioJo[i] = 149;        break;
    case "\x96":      FichierAudioJo[i] = 150;        break;
    case "\x97":      FichierAudioJo[i] = 151;        break;
    case "\x98":       FichierAudioJo[i] = 152;        break;
    case "\x99":       FichierAudioJo[i] = 153;        break;
    case "\x9A":       FichierAudioJo[i] = 154;        break;
    case "\x9B":       FichierAudioJo[i] = 155;        break;
    case "\x9C":      FichierAudioJo[i] = 156;        break;
    case "\x9D":      FichierAudioJo[i] = 157;        break;
    case "\x9E":      FichierAudioJo[i] = 158;        break;
    case "\x9F":       FichierAudioJo[i] = 159;        break;
/**fin caractere indefini*A**/
    case "\xA0":        FichierAudioJo[i] = 160;        break;
    case "\xA1":        FichierAudioJo[i] = 161;        break;
    case "\xA2":        FichierAudioJo[i] = 162;        break;
    case "\xA3":        FichierAudioJo[i] = 163;        break;
    case "\xA4":        FichierAudioJo[i] = 164;        break;
    case "\xA5":        FichierAudioJo[i] = 165;        break;
    case "\xA6":        FichierAudioJo[i] = 166;        break;
    case "\xA7":        FichierAudioJo[i] = 167;        break;
    case "\xA8":        FichierAudioJo[i] = 168;        break;
    case "\xA9":        FichierAudioJo[i] = 169;        break;
    case "\xAA":        FichierAudioJo[i] = 170;        break;
    case "\xAB":        FichierAudioJo[i] = 171;        break;
    case "\xAC":        FichierAudioJo[i] = 172;        break;
    case "\xAD":        FichierAudioJo[i] = 173;        break;
    case "\xAE":        FichierAudioJo[i] = 174;        break;
    case "\xAF":        FichierAudioJo[i] = 175;        break;
/*******B******/
    case "\xB0":        FichierAudioJo[i] = 176;        break;
    case "\xB1":        FichierAudioJo[i] = 177;        break;
    case "\xB2":        FichierAudioJo[i] = 178;        break;
    case "\xB3":        FichierAudioJo[i] = 179;        break;
    case "\xB4":        FichierAudioJo[i] = 180;        break;
    case "\xB5":        FichierAudioJo[i] = 181;        break;
    case "\xB6":        FichierAudioJo[i] = 182;        break;
    case "\xB7":        FichierAudioJo[i] = 183;        break;
    case "\xB8":        FichierAudioJo[i] = 184;        break;
    case "\xB9":        FichierAudioJo[i] = 185;        break;
    case "\xBA":        FichierAudioJo[i] = 186;        break;
    case "\xBB":        FichierAudioJo[i] = 187;        break;
    case "\xBC":        FichierAudioJo[i] = 188;        break;
    case "\xBD":        FichierAudioJo[i] = 189;        break;
    case "\xBE":        FichierAudioJo[i] = 190;        break;
    case "\xBF":        FichierAudioJo[i] = 191;        break;
/*******C*******/
    case "\xC0":        FichierAudioJo[i] = 192;        break;
    case "\xC1":        FichierAudioJo[i] = 193;        break;
    case "\xC2":        FichierAudioJo[i] = 194;        break;
    case "\xC3":        FichierAudioJo[i] = 195;        break;
    case "\xC4":        FichierAudioJo[i] = 196;        break;
    case "\xC5":        FichierAudioJo[i] = 197;        break;
    case "\xC6":        FichierAudioJo[i] = 198;        break;
    case "\xC7":        FichierAudioJo[i] = 199;        break;
    case "\xC8":        FichierAudioJo[i] = 200;        break;
    case "\xC9":        FichierAudioJo[i] = 201;        break;
    case "\xCA":        FichierAudioJo[i] = 202;        break;
    case "\xCB":        FichierAudioJo[i] = 203;        break;
    case "\xCC":        FichierAudioJo[i] = 204;        break;
    case "\xCD":        FichierAudioJo[i] = 205;        break;
    case "\xCE":        FichierAudioJo[i] = 206;        break;
    case "\xCF":        FichierAudioJo[i] = 207;        break;
/**********D*************/
    case "\xD0":        FichierAudioJo[i] = 208;        break;
    case "\xD1":        FichierAudioJo[i] = 209;        break;
    case "\xD2":        FichierAudioJo[i] = 210;        break;
    case "\xD3":        FichierAudioJo[i] = 211;        break;
    case "\xD4":        FichierAudioJo[i] = 212;        break;
    case "\xD5":        FichierAudioJo[i] = 213;        break;
    case "\xD6":        FichierAudioJo[i] = 214;        break;
    case "\xD7":        FichierAudioJo[i] = 215;        break;
    case "\xD8":        FichierAudioJo[i] = 216;        break;
    case "\xD9":        FichierAudioJo[i] = 217;        break;
    case "\xDA":        FichierAudioJo[i] = 218;        break;
    case "\xDB":        FichierAudioJo[i] = 219;        break;
    case "\xDC":        FichierAudioJo[i] = 220;        break;
    case "\xDD":        FichierAudioJo[i] = 221;        break;
    case "\xDE":        FichierAudioJo[i] = 222;        break;
    case "\xDF":        FichierAudioJo[i] = 223;        break;
/**********E********/
    case "\xE0":        FichierAudioJo[i] = 224;        break;
    case "\xE1":        FichierAudioJo[i] = 225;        break;
    case "\xE2":        FichierAudioJo[i] = 226;        break;
    case "\xE3":        FichierAudioJo[i] = 227;        break;
    case "\xE4":        FichierAudioJo[i] = 228;        break;
    case "\xE5":        FichierAudioJo[i] = 229;        break;
    case "\xE6":        FichierAudioJo[i] = 230;        break;
    case "\xE7":        FichierAudioJo[i] = 231;        break;
    case "\xE8":        FichierAudioJo[i] = 232;        break;
    case "\xE9":        FichierAudioJo[i] = 233;        break;
    case "\xEA":        FichierAudioJo[i] = 234;        break;
    case "\xEB":        FichierAudioJo[i] = 235;        break;
    case "\xEC":        FichierAudioJo[i] = 236;        break;
    case "\xED":        FichierAudioJo[i] = 237;        break;
    case "\xEE":        FichierAudioJo[i] = 238;        break;
    case "\xEF":        FichierAudioJo[i] = 239;        break;
/*****F*****/
    case "\xF0":        FichierAudioJo[i] = 240;        break;
    case "\xF1":        FichierAudioJo[i] = 241;        break;
    case "\xF2":        FichierAudioJo[i] = 242;        break;
    case "\xF3":        FichierAudioJo[i] = 243;        break;
    case "\xF4":        FichierAudioJo[i] = 244;        break;
    case "\xF5":        FichierAudioJo[i] = 245;        break;
    case "\xF6":        FichierAudioJo[i] = 246;        break;
    case "\xF7":        FichierAudioJo[i] = 247;        break;
    case "\xF8":        FichierAudioJo[i] = 248;        break;
    case "\xF9":        FichierAudioJo[i] = 249;        break;
    case "\xFA":        FichierAudioJo[i] = 250;        break;
    case "\xFB":        FichierAudioJo[i] = 251;        break;
    case "\xFC":        FichierAudioJo[i] = 252;        break;
    case "\xFD":        FichierAudioJo[i] = 253;        break;
    case "\xFE":        FichierAudioJo[i] = 254;        break;
    case "\xFF":        FichierAudioJo[i] = 255;        break;
    default:        FichierAudioJo[i] = MiseEnMemoire_Def_Lecture;

MiseEnMemoire_Def_Lecture = FichierAudioJo;
} //fin switch texte1
			} //fin for texte1

 
			}			

convertit(text14);



function ajouteson14() 
		{

  injectionson14 = document.createElement("pre");
  injectionson14.textContent = FichierAudioJo ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  son14 = document.getElementById("donner_son14");
  document.body.insertBefore(injectionson14, son14);
		}
ajouteson14();
	}

reader14.readAsBinaryString(file, "UTF-1616");
}

function gens14(fileList14) 
{
    for (var i = 0; i < fileList14.length; i++) 
	{
        PrendTout14(fileList14[i]);
	}
}

//input 15
function PrendTout15(file) 
{
    var name15 = file.name;
    var reader15 = new FileReader();  
    reader15.onload = function(e15) 
	{ 
text15 = e15.target.result.split(""); 

function convertit(text15)

{

var MiseEnMemoire_Def_Lecture;

    			for (var i = 0; i < text15.length; i++)
			{

switch(text15[i]) {
    case "\x00":        FichierAudioJo[i] = 0;        break;
    case "\x01":        FichierAudioJo[i] = 1;        break;
    case "\x02":        FichierAudioJo[i] = 2;        break;
    case "\x03":        FichierAudioJo[i] = 3;        break;
    case "\x04":        FichierAudioJo[i] = 4;        break;
    case "\x05":        FichierAudioJo[i] = 5;        break;
    case "\x06":        FichierAudioJo[i] = 6;        break;
    case "\x07":        FichierAudioJo[i] = 7;        break;
    case "\x08":        FichierAudioJo[i] = 8;        break;
    case "\x09":        FichierAudioJo[i] = 9;        break;
    case "\x0A":        FichierAudioJo[i] = 10;        break;
    case "\x0B":        FichierAudioJo[i] = 11;        break;
    case "\x0C":        FichierAudioJo[i] = 12;        break;
    case "\x0D":        FichierAudioJo[i] = 13;        break;
    case "\x0E":        FichierAudioJo[i] = 14;        break;
    case "\x0F":        FichierAudioJo[i] = 15;        break;
/**caractere indefini debut a 30***********/
    case "\x10":        FichierAudioJo[i] = 16;        break;
    case "\x11":        FichierAudioJo[i] = 17;        break;
    case "\x12":        FichierAudioJo[i] = 18;        break;
    case "\x13":        FichierAudioJo[i] = 19;        break;
    case "\x14":        FichierAudioJo[i] = 20;        break;
    case "\x15":        FichierAudioJo[i] = 21;        break;
    case "\x16":        FichierAudioJo[i] = 22;        break;
    case "\x17":        FichierAudioJo[i] = 23;        break;
    case "\x18":        FichierAudioJo[i] = 24;        break;
    case "\x19":        FichierAudioJo[i] = 25;        break;
    case "\x1A":        FichierAudioJo[i] = 26;        break;
    case "\x1B":        FichierAudioJo[i] = 27;        break;
    case "\x1C":        FichierAudioJo[i] = 28;        break;
    case "\x1D":        FichierAudioJo[i] = 29;        break;
    case "\x1E":        FichierAudioJo[i] = 30;        break;
    case "\x1F":        FichierAudioJo[i] = 31;        break;
/************/
    case "\x20":        FichierAudioJo[i] = 32;        break;
    case "\x21":        FichierAudioJo[i] = 33;        break;
    case "\x22":        FichierAudioJo[i] = 34;        break;
    case "\x23":        FichierAudioJo[i] = 35;        break;
    case "\x24":        FichierAudioJo[i] = 36;        break;
    case "\x25":        FichierAudioJo[i] = 37;        break;
    case "\x26":        FichierAudioJo[i] = 38;        break;
    case "\x27":        FichierAudioJo[i] = 39;        break;
    case "\x28":        FichierAudioJo[i] = 40;        break;
    case "\x29":        FichierAudioJo[i] = 41;        break;
    case "\x2A":        FichierAudioJo[i] = 42;        break;
    case "\x2B":        FichierAudioJo[i] = 43;        break;
    case "\x2C":        FichierAudioJo[i] = 44;        break;
    case "\x2D":        FichierAudioJo[i] = 45;        break;
    case "\x2E":        FichierAudioJo[i] = 46;        break;
    case "\x2F":        FichierAudioJo[i] = 47;        break;
/*****************/
    case "\x30":        FichierAudioJo[i] = 48;        break;
    case "\x31":        FichierAudioJo[i] = 49;        break;
    case "\x32":        FichierAudioJo[i] = 50;        break;
    case "\x33":        FichierAudioJo[i] = 51;        break;
    case "\x34":        FichierAudioJo[i] = 52;        break;
    case "\x35":        FichierAudioJo[i] = 53;        break;
    case "\x36":        FichierAudioJo[i] = 54;        break;
    case "\x37":        FichierAudioJo[i] = 55;        break;
    case "\x38":        FichierAudioJo[i] = 56;        break;
    case "\x39":        FichierAudioJo[i] = 57;        break;
    case "\x3A":        FichierAudioJo[i] = 58;        break;
    case "\x3B":        FichierAudioJo[i] = 59;        break;
    case "\x3C":        FichierAudioJo[i] = 60;        break;
    case "\x3D":        FichierAudioJo[i] = 61;        break;
    case "\x3E":        FichierAudioJo[i] = 62;        break;
    case "\x3F":        FichierAudioJo[i] = 63;        break;
/*************/
    case "\x40":        FichierAudioJo[i] = 64;        break;
    case "\x41":        FichierAudioJo[i] = 65;        break;
    case "\x42":        FichierAudioJo[i] = 66;        break;
    case "\x43":        FichierAudioJo[i] = 67;        break;
    case "\x44":        FichierAudioJo[i] = 68;        break;
    case "\x45":        FichierAudioJo[i] = 69;        break;
    case "\x46":        FichierAudioJo[i] = 70;        break;
    case "\x47":        FichierAudioJo[i] = 71;        break;
    case "\x48":        FichierAudioJo[i] = 72;        break;
    case "\x49":        FichierAudioJo[i] = 73;        break;
    case "\x4A":        FichierAudioJo[i] = 74;        break;
    case "\x4B":        FichierAudioJo[i] = 75;        break;
    case "\x4C":        FichierAudioJo[i] = 76;        break;
    case "\x4D":        FichierAudioJo[i] = 77;        break;
    case "\x4E":        FichierAudioJo[i] = 78;        break;
    case "\x4F":        FichierAudioJo[i] = 79;        break;
/***************/
    case "\x50":        FichierAudioJo[i] = 80;        break;
    case "\x51":        FichierAudioJo[i] = 81;        break;
    case "\x52":        FichierAudioJo[i] = 82;        break;
    case "\x53":        FichierAudioJo[i] = 83;        break;
    case "\x54":        FichierAudioJo[i] = 84;        break;
    case "\x55":        FichierAudioJo[i] = 85;        break;
    case "\x56":        FichierAudioJo[i] = 86;        break;
    case "\x57":        FichierAudioJo[i] = 87;        break;
    case "\x58":        FichierAudioJo[i] = 88;        break;
    case "\x59":        FichierAudioJo[i] = 89;        break;
    case "\x5A":        FichierAudioJo[i] = 90;        break;
    case "\x5B":        FichierAudioJo[i] = 91;        break;
    case "\x5C":        FichierAudioJo[i] = 92;        break;
    case "\x5D":        FichierAudioJo[i] = 93;        break;
    case "\x5E":        FichierAudioJo[i] = 94;        break;
    case "\x5F":        FichierAudioJo[i] = 95;        break;
/***************/
    case "\x60":        FichierAudioJo[i] = 96;        break;
    case "\x61":        FichierAudioJo[i] = 97;        break;
    case "\x62":        FichierAudioJo[i] = 98;        break;
    case "\x63":        FichierAudioJo[i] = 99;        break;
    case "\x64":        FichierAudioJo[i] = 100;        break;
    case "\x65":        FichierAudioJo[i] = 101;        break;
    case "\x66":        FichierAudioJo[i] = 102;        break;
    case "\x67":        FichierAudioJo[i] = 103;        break;
    case "\x68":        FichierAudioJo[i] = 104;        break;
    case "\x69":        FichierAudioJo[i] = 105;        break;
    case "\x6A":        FichierAudioJo[i] = 106;        break;
    case "\x6B":        FichierAudioJo[i] = 107;        break;
    case "\x6C":        FichierAudioJo[i] = 108;        break;
    case "\x6D":        FichierAudioJo[i] = 109;        break;
    case "\x6E":        FichierAudioJo[i] = 110;        break;
    case "\x6F":        FichierAudioJo[i] = 111;        break;
/**********/
    case "\x70":        FichierAudioJo[i] = 112;        break;
    case "\x71":        FichierAudioJo[i] = 113;        break;
    case "\x72":        FichierAudioJo[i] = 114;        break;
    case "\x73":        FichierAudioJo[i] = 115;        break;
    case "\x74":        FichierAudioJo[i] = 116;        break;
    case "\x75":        FichierAudioJo[i] = 117;        break;
    case "\x76":        FichierAudioJo[i] = 118;        break;
    case "\x77":        FichierAudioJo[i] = 119;        break;
    case "\x78":        FichierAudioJo[i] = 120;        break;
    case "\x79":        FichierAudioJo[i] = 121;        break;
    case "\x7A":        FichierAudioJo[i] = 122;        break;
    case "\x7B":        FichierAudioJo[i] = 123;        break;
    case "\x7C":        FichierAudioJo[i] = 124;        break;
    case "\x7D":        FichierAudioJo[i] = 125;        break;
    case "\x7E":        FichierAudioJo[i] = 126;        break;
    case "\x7F":        FichierAudioJo[i] = 127;        break;
/*****8**debut caractere indefini****/
    case "\x80":        FichierAudioJo[i] = 128;        break;
    case "\x81":        FichierAudioJo[i] = 129;        break;
    case "\x82":        FichierAudioJo[i] = 130;        break;
    case "\x83":        FichierAudioJo[i] = 131;        break;
    case "\x84":        FichierAudioJo[i] = 132;        break;
    case "\x85":        FichierAudioJo[i] = 133;        break;
    case "\x86":       FichierAudioJo[i] = 134;        break;
    case "\x87":       FichierAudioJo[i] = 135;        break;
    case "\x88":        FichierAudioJo[i] = 136;        break;
    case "\x89":       FichierAudioJo[i] = 137;        break;
    case "\x8A":        FichierAudioJo[i] = 138;        break;
    case "\x8B":       FichierAudioJo[i] = 139;        break;
    case "\x8C":      FichierAudioJo[i] = 140;        break;
    case "\x8D":        FichierAudioJo[i] = 141;        break;
    case "\x8E":       FichierAudioJo[i] = 142;        break;
    case "\x8F":        FichierAudioJo[i] = 143;        break;
/********9**********/
    case "\x90":        FichierAudioJo[i] = 144;        break;
    case "\x91":       FichierAudioJo[i] = 145;        break;
    case "\x92":       FichierAudioJo[i] = 146;        break;
    case "\x93":        FichierAudioJo[i] = 147;        break;
    case "\x94":        FichierAudioJo[i] = 148;        break;
    case "\x95":       FichierAudioJo[i] = 149;        break;
    case "\x96":      FichierAudioJo[i] = 150;        break;
    case "\x97":      FichierAudioJo[i] = 151;        break;
    case "\x98":       FichierAudioJo[i] = 152;        break;
    case "\x99":       FichierAudioJo[i] = 153;        break;
    case "\x9A":       FichierAudioJo[i] = 154;        break;
    case "\x9B":       FichierAudioJo[i] = 155;        break;
    case "\x9C":      FichierAudioJo[i] = 156;        break;
    case "\x9D":      FichierAudioJo[i] = 157;        break;
    case "\x9E":      FichierAudioJo[i] = 158;        break;
    case "\x9F":       FichierAudioJo[i] = 159;        break;
/**fin caractere indefini*A**/
    case "\xA0":        FichierAudioJo[i] = 160;        break;
    case "\xA1":        FichierAudioJo[i] = 161;        break;
    case "\xA2":        FichierAudioJo[i] = 162;        break;
    case "\xA3":        FichierAudioJo[i] = 163;        break;
    case "\xA4":        FichierAudioJo[i] = 164;        break;
    case "\xA5":        FichierAudioJo[i] = 165;        break;
    case "\xA6":        FichierAudioJo[i] = 166;        break;
    case "\xA7":        FichierAudioJo[i] = 167;        break;
    case "\xA8":        FichierAudioJo[i] = 168;        break;
    case "\xA9":        FichierAudioJo[i] = 169;        break;
    case "\xAA":        FichierAudioJo[i] = 170;        break;
    case "\xAB":        FichierAudioJo[i] = 171;        break;
    case "\xAC":        FichierAudioJo[i] = 172;        break;
    case "\xAD":        FichierAudioJo[i] = 173;        break;
    case "\xAE":        FichierAudioJo[i] = 174;        break;
    case "\xAF":        FichierAudioJo[i] = 175;        break;
/*******B******/
    case "\xB0":        FichierAudioJo[i] = 176;        break;
    case "\xB1":        FichierAudioJo[i] = 177;        break;
    case "\xB2":        FichierAudioJo[i] = 178;        break;
    case "\xB3":        FichierAudioJo[i] = 179;        break;
    case "\xB4":        FichierAudioJo[i] = 180;        break;
    case "\xB5":        FichierAudioJo[i] = 181;        break;
    case "\xB6":        FichierAudioJo[i] = 182;        break;
    case "\xB7":        FichierAudioJo[i] = 183;        break;
    case "\xB8":        FichierAudioJo[i] = 184;        break;
    case "\xB9":        FichierAudioJo[i] = 185;        break;
    case "\xBA":        FichierAudioJo[i] = 186;        break;
    case "\xBB":        FichierAudioJo[i] = 187;        break;
    case "\xBC":        FichierAudioJo[i] = 188;        break;
    case "\xBD":        FichierAudioJo[i] = 189;        break;
    case "\xBE":        FichierAudioJo[i] = 190;        break;
    case "\xBF":        FichierAudioJo[i] = 191;        break;
/*******C*******/
    case "\xC0":        FichierAudioJo[i] = 192;        break;
    case "\xC1":        FichierAudioJo[i] = 193;        break;
    case "\xC2":        FichierAudioJo[i] = 194;        break;
    case "\xC3":        FichierAudioJo[i] = 195;        break;
    case "\xC4":        FichierAudioJo[i] = 196;        break;
    case "\xC5":        FichierAudioJo[i] = 197;        break;
    case "\xC6":        FichierAudioJo[i] = 198;        break;
    case "\xC7":        FichierAudioJo[i] = 199;        break;
    case "\xC8":        FichierAudioJo[i] = 200;        break;
    case "\xC9":        FichierAudioJo[i] = 201;        break;
    case "\xCA":        FichierAudioJo[i] = 202;        break;
    case "\xCB":        FichierAudioJo[i] = 203;        break;
    case "\xCC":        FichierAudioJo[i] = 204;        break;
    case "\xCD":        FichierAudioJo[i] = 205;        break;
    case "\xCE":        FichierAudioJo[i] = 206;        break;
    case "\xCF":        FichierAudioJo[i] = 207;        break;
/**********D*************/
    case "\xD0":        FichierAudioJo[i] = 208;        break;
    case "\xD1":        FichierAudioJo[i] = 209;        break;
    case "\xD2":        FichierAudioJo[i] = 210;        break;
    case "\xD3":        FichierAudioJo[i] = 211;        break;
    case "\xD4":        FichierAudioJo[i] = 212;        break;
    case "\xD5":        FichierAudioJo[i] = 213;        break;
    case "\xD6":        FichierAudioJo[i] = 214;        break;
    case "\xD7":        FichierAudioJo[i] = 215;        break;
    case "\xD8":        FichierAudioJo[i] = 216;        break;
    case "\xD9":        FichierAudioJo[i] = 217;        break;
    case "\xDA":        FichierAudioJo[i] = 218;        break;
    case "\xDB":        FichierAudioJo[i] = 219;        break;
    case "\xDC":        FichierAudioJo[i] = 220;        break;
    case "\xDD":        FichierAudioJo[i] = 221;        break;
    case "\xDE":        FichierAudioJo[i] = 222;        break;
    case "\xDF":        FichierAudioJo[i] = 223;        break;
/**********E********/
    case "\xE0":        FichierAudioJo[i] = 224;        break;
    case "\xE1":        FichierAudioJo[i] = 225;        break;
    case "\xE2":        FichierAudioJo[i] = 226;        break;
    case "\xE3":        FichierAudioJo[i] = 227;        break;
    case "\xE4":        FichierAudioJo[i] = 228;        break;
    case "\xE5":        FichierAudioJo[i] = 229;        break;
    case "\xE6":        FichierAudioJo[i] = 230;        break;
    case "\xE7":        FichierAudioJo[i] = 231;        break;
    case "\xE8":        FichierAudioJo[i] = 232;        break;
    case "\xE9":        FichierAudioJo[i] = 233;        break;
    case "\xEA":        FichierAudioJo[i] = 234;        break;
    case "\xEB":        FichierAudioJo[i] = 235;        break;
    case "\xEC":        FichierAudioJo[i] = 236;        break;
    case "\xED":        FichierAudioJo[i] = 237;        break;
    case "\xEE":        FichierAudioJo[i] = 238;        break;
    case "\xEF":        FichierAudioJo[i] = 239;        break;
/*****F*****/
    case "\xF0":        FichierAudioJo[i] = 240;        break;
    case "\xF1":        FichierAudioJo[i] = 241;        break;
    case "\xF2":        FichierAudioJo[i] = 242;        break;
    case "\xF3":        FichierAudioJo[i] = 243;        break;
    case "\xF4":        FichierAudioJo[i] = 244;        break;
    case "\xF5":        FichierAudioJo[i] = 245;        break;
    case "\xF6":        FichierAudioJo[i] = 246;        break;
    case "\xF7":        FichierAudioJo[i] = 247;        break;
    case "\xF8":        FichierAudioJo[i] = 248;        break;
    case "\xF9":        FichierAudioJo[i] = 249;        break;
    case "\xFA":        FichierAudioJo[i] = 250;        break;
    case "\xFB":        FichierAudioJo[i] = 251;        break;
    case "\xFC":        FichierAudioJo[i] = 252;        break;
    case "\xFD":        FichierAudioJo[i] = 253;        break;
    case "\xFE":        FichierAudioJo[i] = 254;        break;
    case "\xFF":        FichierAudioJo[i] = 255;        break;
    default:        FichierAudioJo[i] = MiseEnMemoire_Def_Lecture;

MiseEnMemoire_Def_Lecture = FichierAudioJo;
} //fin switch texte1
			} //fin for texte1

 
			}			

convertit(text15);



function ajouteson15() 
		{

  injectionson15 = document.createElement("pre");
  injectionson15.textContent = FichierAudioJo ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  son15 = document.getElementById("donner_son15");
  document.body.insertBefore(injectionson15, son15);
		}
ajouteson15();
	}

reader15.readAsBinaryString(file, "UTF-1616");
}

function gens15(fileList15) 
{
    for (var i = 0; i < fileList15.length; i++) 
	{
        PrendTout15(fileList15[i]);
	}
}

//input 16
function PrendTout16(file) 
{
    var name16 = file.name;
    var reader16 = new FileReader();  
    reader16.onload = function(e16) 
	{ 
text16 = e16.target.result.split(""); 

function convertit(text16)

{

var MiseEnMemoire_Def_Lecture;

    			for (var i = 0; i < text16.length; i++)
			{

switch(text16[i]) {
    case "\x00":        FichierAudioJo[i] = 0;        break;
    case "\x01":        FichierAudioJo[i] = 1;        break;
    case "\x02":        FichierAudioJo[i] = 2;        break;
    case "\x03":        FichierAudioJo[i] = 3;        break;
    case "\x04":        FichierAudioJo[i] = 4;        break;
    case "\x05":        FichierAudioJo[i] = 5;        break;
    case "\x06":        FichierAudioJo[i] = 6;        break;
    case "\x07":        FichierAudioJo[i] = 7;        break;
    case "\x08":        FichierAudioJo[i] = 8;        break;
    case "\x09":        FichierAudioJo[i] = 9;        break;
    case "\x0A":        FichierAudioJo[i] = 10;        break;
    case "\x0B":        FichierAudioJo[i] = 11;        break;
    case "\x0C":        FichierAudioJo[i] = 12;        break;
    case "\x0D":        FichierAudioJo[i] = 13;        break;
    case "\x0E":        FichierAudioJo[i] = 14;        break;
    case "\x0F":        FichierAudioJo[i] = 15;        break;
/**caractere indefini debut a 30***********/
    case "\x10":        FichierAudioJo[i] = 16;        break;
    case "\x11":        FichierAudioJo[i] = 17;        break;
    case "\x12":        FichierAudioJo[i] = 18;        break;
    case "\x13":        FichierAudioJo[i] = 19;        break;
    case "\x14":        FichierAudioJo[i] = 20;        break;
    case "\x15":        FichierAudioJo[i] = 21;        break;
    case "\x16":        FichierAudioJo[i] = 22;        break;
    case "\x17":        FichierAudioJo[i] = 23;        break;
    case "\x18":        FichierAudioJo[i] = 24;        break;
    case "\x19":        FichierAudioJo[i] = 25;        break;
    case "\x1A":        FichierAudioJo[i] = 26;        break;
    case "\x1B":        FichierAudioJo[i] = 27;        break;
    case "\x1C":        FichierAudioJo[i] = 28;        break;
    case "\x1D":        FichierAudioJo[i] = 29;        break;
    case "\x1E":        FichierAudioJo[i] = 30;        break;
    case "\x1F":        FichierAudioJo[i] = 31;        break;
/************/
    case "\x20":        FichierAudioJo[i] = 32;        break;
    case "\x21":        FichierAudioJo[i] = 33;        break;
    case "\x22":        FichierAudioJo[i] = 34;        break;
    case "\x23":        FichierAudioJo[i] = 35;        break;
    case "\x24":        FichierAudioJo[i] = 36;        break;
    case "\x25":        FichierAudioJo[i] = 37;        break;
    case "\x26":        FichierAudioJo[i] = 38;        break;
    case "\x27":        FichierAudioJo[i] = 39;        break;
    case "\x28":        FichierAudioJo[i] = 40;        break;
    case "\x29":        FichierAudioJo[i] = 41;        break;
    case "\x2A":        FichierAudioJo[i] = 42;        break;
    case "\x2B":        FichierAudioJo[i] = 43;        break;
    case "\x2C":        FichierAudioJo[i] = 44;        break;
    case "\x2D":        FichierAudioJo[i] = 45;        break;
    case "\x2E":        FichierAudioJo[i] = 46;        break;
    case "\x2F":        FichierAudioJo[i] = 47;        break;
/*****************/
    case "\x30":        FichierAudioJo[i] = 48;        break;
    case "\x31":        FichierAudioJo[i] = 49;        break;
    case "\x32":        FichierAudioJo[i] = 50;        break;
    case "\x33":        FichierAudioJo[i] = 51;        break;
    case "\x34":        FichierAudioJo[i] = 52;        break;
    case "\x35":        FichierAudioJo[i] = 53;        break;
    case "\x36":        FichierAudioJo[i] = 54;        break;
    case "\x37":        FichierAudioJo[i] = 55;        break;
    case "\x38":        FichierAudioJo[i] = 56;        break;
    case "\x39":        FichierAudioJo[i] = 57;        break;
    case "\x3A":        FichierAudioJo[i] = 58;        break;
    case "\x3B":        FichierAudioJo[i] = 59;        break;
    case "\x3C":        FichierAudioJo[i] = 60;        break;
    case "\x3D":        FichierAudioJo[i] = 61;        break;
    case "\x3E":        FichierAudioJo[i] = 62;        break;
    case "\x3F":        FichierAudioJo[i] = 63;        break;
/*************/
    case "\x40":        FichierAudioJo[i] = 64;        break;
    case "\x41":        FichierAudioJo[i] = 65;        break;
    case "\x42":        FichierAudioJo[i] = 66;        break;
    case "\x43":        FichierAudioJo[i] = 67;        break;
    case "\x44":        FichierAudioJo[i] = 68;        break;
    case "\x45":        FichierAudioJo[i] = 69;        break;
    case "\x46":        FichierAudioJo[i] = 70;        break;
    case "\x47":        FichierAudioJo[i] = 71;        break;
    case "\x48":        FichierAudioJo[i] = 72;        break;
    case "\x49":        FichierAudioJo[i] = 73;        break;
    case "\x4A":        FichierAudioJo[i] = 74;        break;
    case "\x4B":        FichierAudioJo[i] = 75;        break;
    case "\x4C":        FichierAudioJo[i] = 76;        break;
    case "\x4D":        FichierAudioJo[i] = 77;        break;
    case "\x4E":        FichierAudioJo[i] = 78;        break;
    case "\x4F":        FichierAudioJo[i] = 79;        break;
/***************/
    case "\x50":        FichierAudioJo[i] = 80;        break;
    case "\x51":        FichierAudioJo[i] = 81;        break;
    case "\x52":        FichierAudioJo[i] = 82;        break;
    case "\x53":        FichierAudioJo[i] = 83;        break;
    case "\x54":        FichierAudioJo[i] = 84;        break;
    case "\x55":        FichierAudioJo[i] = 85;        break;
    case "\x56":        FichierAudioJo[i] = 86;        break;
    case "\x57":        FichierAudioJo[i] = 87;        break;
    case "\x58":        FichierAudioJo[i] = 88;        break;
    case "\x59":        FichierAudioJo[i] = 89;        break;
    case "\x5A":        FichierAudioJo[i] = 90;        break;
    case "\x5B":        FichierAudioJo[i] = 91;        break;
    case "\x5C":        FichierAudioJo[i] = 92;        break;
    case "\x5D":        FichierAudioJo[i] = 93;        break;
    case "\x5E":        FichierAudioJo[i] = 94;        break;
    case "\x5F":        FichierAudioJo[i] = 95;        break;
/***************/
    case "\x60":        FichierAudioJo[i] = 96;        break;
    case "\x61":        FichierAudioJo[i] = 97;        break;
    case "\x62":        FichierAudioJo[i] = 98;        break;
    case "\x63":        FichierAudioJo[i] = 99;        break;
    case "\x64":        FichierAudioJo[i] = 100;        break;
    case "\x65":        FichierAudioJo[i] = 101;        break;
    case "\x66":        FichierAudioJo[i] = 102;        break;
    case "\x67":        FichierAudioJo[i] = 103;        break;
    case "\x68":        FichierAudioJo[i] = 104;        break;
    case "\x69":        FichierAudioJo[i] = 105;        break;
    case "\x6A":        FichierAudioJo[i] = 106;        break;
    case "\x6B":        FichierAudioJo[i] = 107;        break;
    case "\x6C":        FichierAudioJo[i] = 108;        break;
    case "\x6D":        FichierAudioJo[i] = 109;        break;
    case "\x6E":        FichierAudioJo[i] = 110;        break;
    case "\x6F":        FichierAudioJo[i] = 111;        break;
/**********/
    case "\x70":        FichierAudioJo[i] = 112;        break;
    case "\x71":        FichierAudioJo[i] = 113;        break;
    case "\x72":        FichierAudioJo[i] = 114;        break;
    case "\x73":        FichierAudioJo[i] = 115;        break;
    case "\x74":        FichierAudioJo[i] = 116;        break;
    case "\x75":        FichierAudioJo[i] = 117;        break;
    case "\x76":        FichierAudioJo[i] = 118;        break;
    case "\x77":        FichierAudioJo[i] = 119;        break;
    case "\x78":        FichierAudioJo[i] = 120;        break;
    case "\x79":        FichierAudioJo[i] = 121;        break;
    case "\x7A":        FichierAudioJo[i] = 122;        break;
    case "\x7B":        FichierAudioJo[i] = 123;        break;
    case "\x7C":        FichierAudioJo[i] = 124;        break;
    case "\x7D":        FichierAudioJo[i] = 125;        break;
    case "\x7E":        FichierAudioJo[i] = 126;        break;
    case "\x7F":        FichierAudioJo[i] = 127;        break;
/*****8**debut caractere indefini****/
    case "\x80":        FichierAudioJo[i] = 128;        break;
    case "\x81":        FichierAudioJo[i] = 129;        break;
    case "\x82":        FichierAudioJo[i] = 130;        break;
    case "\x83":        FichierAudioJo[i] = 131;        break;
    case "\x84":        FichierAudioJo[i] = 132;        break;
    case "\x85":        FichierAudioJo[i] = 133;        break;
    case "\x86":       FichierAudioJo[i] = 134;        break;
    case "\x87":       FichierAudioJo[i] = 135;        break;
    case "\x88":        FichierAudioJo[i] = 136;        break;
    case "\x89":       FichierAudioJo[i] = 137;        break;
    case "\x8A":        FichierAudioJo[i] = 138;        break;
    case "\x8B":       FichierAudioJo[i] = 139;        break;
    case "\x8C":      FichierAudioJo[i] = 140;        break;
    case "\x8D":        FichierAudioJo[i] = 141;        break;
    case "\x8E":       FichierAudioJo[i] = 142;        break;
    case "\x8F":        FichierAudioJo[i] = 143;        break;
/********9**********/
    case "\x90":        FichierAudioJo[i] = 144;        break;
    case "\x91":       FichierAudioJo[i] = 145;        break;
    case "\x92":       FichierAudioJo[i] = 146;        break;
    case "\x93":        FichierAudioJo[i] = 147;        break;
    case "\x94":        FichierAudioJo[i] = 148;        break;
    case "\x95":       FichierAudioJo[i] = 149;        break;
    case "\x96":      FichierAudioJo[i] = 150;        break;
    case "\x97":      FichierAudioJo[i] = 151;        break;
    case "\x98":       FichierAudioJo[i] = 152;        break;
    case "\x99":       FichierAudioJo[i] = 153;        break;
    case "\x9A":       FichierAudioJo[i] = 154;        break;
    case "\x9B":       FichierAudioJo[i] = 155;        break;
    case "\x9C":      FichierAudioJo[i] = 156;        break;
    case "\x9D":      FichierAudioJo[i] = 157;        break;
    case "\x9E":      FichierAudioJo[i] = 158;        break;
    case "\x9F":       FichierAudioJo[i] = 159;        break;
/**fin caractere indefini*A**/
    case "\xA0":        FichierAudioJo[i] = 160;        break;
    case "\xA1":        FichierAudioJo[i] = 161;        break;
    case "\xA2":        FichierAudioJo[i] = 162;        break;
    case "\xA3":        FichierAudioJo[i] = 163;        break;
    case "\xA4":        FichierAudioJo[i] = 164;        break;
    case "\xA5":        FichierAudioJo[i] = 165;        break;
    case "\xA6":        FichierAudioJo[i] = 166;        break;
    case "\xA7":        FichierAudioJo[i] = 167;        break;
    case "\xA8":        FichierAudioJo[i] = 168;        break;
    case "\xA9":        FichierAudioJo[i] = 169;        break;
    case "\xAA":        FichierAudioJo[i] = 170;        break;
    case "\xAB":        FichierAudioJo[i] = 171;        break;
    case "\xAC":        FichierAudioJo[i] = 172;        break;
    case "\xAD":        FichierAudioJo[i] = 173;        break;
    case "\xAE":        FichierAudioJo[i] = 174;        break;
    case "\xAF":        FichierAudioJo[i] = 175;        break;
/*******B******/
    case "\xB0":        FichierAudioJo[i] = 176;        break;
    case "\xB1":        FichierAudioJo[i] = 177;        break;
    case "\xB2":        FichierAudioJo[i] = 178;        break;
    case "\xB3":        FichierAudioJo[i] = 179;        break;
    case "\xB4":        FichierAudioJo[i] = 180;        break;
    case "\xB5":        FichierAudioJo[i] = 181;        break;
    case "\xB6":        FichierAudioJo[i] = 182;        break;
    case "\xB7":        FichierAudioJo[i] = 183;        break;
    case "\xB8":        FichierAudioJo[i] = 184;        break;
    case "\xB9":        FichierAudioJo[i] = 185;        break;
    case "\xBA":        FichierAudioJo[i] = 186;        break;
    case "\xBB":        FichierAudioJo[i] = 187;        break;
    case "\xBC":        FichierAudioJo[i] = 188;        break;
    case "\xBD":        FichierAudioJo[i] = 189;        break;
    case "\xBE":        FichierAudioJo[i] = 190;        break;
    case "\xBF":        FichierAudioJo[i] = 191;        break;
/*******C*******/
    case "\xC0":        FichierAudioJo[i] = 192;        break;
    case "\xC1":        FichierAudioJo[i] = 193;        break;
    case "\xC2":        FichierAudioJo[i] = 194;        break;
    case "\xC3":        FichierAudioJo[i] = 195;        break;
    case "\xC4":        FichierAudioJo[i] = 196;        break;
    case "\xC5":        FichierAudioJo[i] = 197;        break;
    case "\xC6":        FichierAudioJo[i] = 198;        break;
    case "\xC7":        FichierAudioJo[i] = 199;        break;
    case "\xC8":        FichierAudioJo[i] = 200;        break;
    case "\xC9":        FichierAudioJo[i] = 201;        break;
    case "\xCA":        FichierAudioJo[i] = 202;        break;
    case "\xCB":        FichierAudioJo[i] = 203;        break;
    case "\xCC":        FichierAudioJo[i] = 204;        break;
    case "\xCD":        FichierAudioJo[i] = 205;        break;
    case "\xCE":        FichierAudioJo[i] = 206;        break;
    case "\xCF":        FichierAudioJo[i] = 207;        break;
/**********D*************/
    case "\xD0":        FichierAudioJo[i] = 208;        break;
    case "\xD1":        FichierAudioJo[i] = 209;        break;
    case "\xD2":        FichierAudioJo[i] = 210;        break;
    case "\xD3":        FichierAudioJo[i] = 211;        break;
    case "\xD4":        FichierAudioJo[i] = 212;        break;
    case "\xD5":        FichierAudioJo[i] = 213;        break;
    case "\xD6":        FichierAudioJo[i] = 214;        break;
    case "\xD7":        FichierAudioJo[i] = 215;        break;
    case "\xD8":        FichierAudioJo[i] = 216;        break;
    case "\xD9":        FichierAudioJo[i] = 217;        break;
    case "\xDA":        FichierAudioJo[i] = 218;        break;
    case "\xDB":        FichierAudioJo[i] = 219;        break;
    case "\xDC":        FichierAudioJo[i] = 220;        break;
    case "\xDD":        FichierAudioJo[i] = 221;        break;
    case "\xDE":        FichierAudioJo[i] = 222;        break;
    case "\xDF":        FichierAudioJo[i] = 223;        break;
/**********E********/
    case "\xE0":        FichierAudioJo[i] = 224;        break;
    case "\xE1":        FichierAudioJo[i] = 225;        break;
    case "\xE2":        FichierAudioJo[i] = 226;        break;
    case "\xE3":        FichierAudioJo[i] = 227;        break;
    case "\xE4":        FichierAudioJo[i] = 228;        break;
    case "\xE5":        FichierAudioJo[i] = 229;        break;
    case "\xE6":        FichierAudioJo[i] = 230;        break;
    case "\xE7":        FichierAudioJo[i] = 231;        break;
    case "\xE8":        FichierAudioJo[i] = 232;        break;
    case "\xE9":        FichierAudioJo[i] = 233;        break;
    case "\xEA":        FichierAudioJo[i] = 234;        break;
    case "\xEB":        FichierAudioJo[i] = 235;        break;
    case "\xEC":        FichierAudioJo[i] = 236;        break;
    case "\xED":        FichierAudioJo[i] = 237;        break;
    case "\xEE":        FichierAudioJo[i] = 238;        break;
    case "\xEF":        FichierAudioJo[i] = 239;        break;
/*****F*****/
    case "\xF0":        FichierAudioJo[i] = 240;        break;
    case "\xF1":        FichierAudioJo[i] = 241;        break;
    case "\xF2":        FichierAudioJo[i] = 242;        break;
    case "\xF3":        FichierAudioJo[i] = 243;        break;
    case "\xF4":        FichierAudioJo[i] = 244;        break;
    case "\xF5":        FichierAudioJo[i] = 245;        break;
    case "\xF6":        FichierAudioJo[i] = 246;        break;
    case "\xF7":        FichierAudioJo[i] = 247;        break;
    case "\xF8":        FichierAudioJo[i] = 248;        break;
    case "\xF9":        FichierAudioJo[i] = 249;        break;
    case "\xFA":        FichierAudioJo[i] = 250;        break;
    case "\xFB":        FichierAudioJo[i] = 251;        break;
    case "\xFC":        FichierAudioJo[i] = 252;        break;
    case "\xFD":        FichierAudioJo[i] = 253;        break;
    case "\xFE":        FichierAudioJo[i] = 254;        break;
    case "\xFF":        FichierAudioJo[i] = 255;        break;
    default:        FichierAudioJo[i] = MiseEnMemoire_Def_Lecture;

MiseEnMemoire_Def_Lecture = FichierAudioJo;
} //fin switch texte1
			} //fin for texte1

 
			}			

convertit(text16);



function ajouteson16() 
		{

  injectionson16 = document.createElement("pre");
  injectionson16.textContent = FichierAudioJo ;
  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  son16 = document.getElementById("donner_son16");
  document.body.insertBefore(injectionson16, son16);
		}
ajouteson16();
	}

reader16.readAsBinaryString(file, "UTF-1616");
}

function gens16(fileList16) 
{
    for (var i = 0; i < fileList16.length; i++) 
	{
        PrendTout16(fileList16[i]);
	}
}

/****fin*****/
