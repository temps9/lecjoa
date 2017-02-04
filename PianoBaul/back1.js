function lance(pour1) {


			var Fichier1AudioJo=[];

var text1={};
var choixjojoa = 1;
var levariateur = 1;
var lenommeur ;
var lenommeur1 ;



/***********troisieme partie génère la balise et lance la lecture**************/



function genereLaFin()
{

/**************genere balise*******/
levariateur = levariateur + 1;
// zone 1

debut = "base";

lenommeur1= debut.concat(pour1,"wave" );

lenommeur = lenommeur1.concat(levariateur);
var mon_audio1 = null;
var nouveauaudio1 = null;
var nouveauaudio1a = null;
function ajouteElement() {
  nouveauaudio1 =  document.createElement("audio");
nouveauaudio1.setAttribute("id", pour1+"wav");
nouveauaudio1.setAttribute("autobuffer", " ");
nouveauaudio1.setAttribute("preload", "none");
 nouveauaudio1a = document.createElement("source");
  nouveauaudio1a.setAttribute("src", "data:audio/wav;base"+pour1+"wave2,");
   nouveauaudio1.appendChild(nouveauaudio1a);
  mon_audio1 = document.getElementById(lenommeur);
  document.body.insertBefore(nouveauaudio1, mon_audio1);
}  

ajouteElement();

//fin zone 1
// zone 2
alenommeur1= "abase1wave";
alenommeur = alenommeur1.concat(levariateur);
var amon_audio1 = null;
var anouveauaudio1 = null;
var anouveauaudio1a = null;
function ajouteElementa() {
  anouveauaudio1 =  document.createElement("audio");
anouveauaudio1.setAttribute("id", pour1+"awav");
anouveauaudio1.setAttribute("autobuffer", " ");
anouveauaudio1.setAttribute("preload", "none");
 anouveauaudio1a = document.createElement("source");
  anouveauaudio1a.setAttribute("src", "data:audio/wav;abase"+pour1+"wave2,");
   anouveauaudio1.appendChild(anouveauaudio1a);
  amon_audio1 = document.getElementById(alenommeur);
  document.body.insertBefore(anouveauaudio1, amon_audio1);
}
ajouteElementa();
//fin zone 2
// zone 3
blenommeur1= "bbase1wave";
blenommeur = blenommeur1.concat(levariateur);
var bmon_audio1 = null;
var bnouveauaudio1 = null;
var bnouveauaudio1a = null;
function ajouteElementb() {
  bnouveauaudio1 =  document.createElement("audio");
bnouveauaudio1.setAttribute("id", pour1+"bwav");
bnouveauaudio1.setAttribute("autobuffer", " ");
bnouveauaudio1.setAttribute("preload", "none");
 bnouveauaudio1a = document.createElement("source");
  bnouveauaudio1a.setAttribute("src", "data:audio/wav;bbase"+pour1+"wave2,");
   bnouveauaudio1.appendChild(bnouveauaudio1a);
  bmon_audio1 = document.getElementById(blenommeur);
  document.body.insertBefore(bnouveauaudio1, bmon_audio1);
}  

ajouteElementb();
//fin zone 3
// zone 4
clenommeur1= "cbase1wave";
clenommeur = clenommeur1.concat(levariateur);
var cmon_audio1 = null;
var cnouveauaudio1 = null;
var cnouveauaudio1a = null;
function ajouteElementc() {
  cnouveauaudio1 =  document.createElement("audio");
cnouveauaudio1.setAttribute("id", pour1+"cwav");
cnouveauaudio1.setAttribute("autobuffer", " ");
cnouveauaudio1.setAttribute("preload", "none");
 cnouveauaudio1a = document.createElement("source");
  cnouveauaudio1a.setAttribute("src", "data:audio/wav;cbase"+pour1+"wave2,");
   cnouveauaudio1.appendChild(cnouveauaudio1a);
  cmon_audio1 = document.getElementById(clenommeur);
  document.body.insertBefore(cnouveauaudio1, cmon_audio1);
}
ajouteElementc();
//fin zone 4

/**reglage force de l'amplitude***/

durerentete=NbPtTotal*2;

samples = durerentete*16;
var data = {};

 data = {leraw1: leraw1.join(''), samples: samples};

var wave1 = new app1.wave1(data);

/*********met en memoire l'audio*****/

 lenommeur = wave1.generate1();
var audio = document.getElementById(pour1+"wav");
var source = document.createElement("source");
source.setAttribute("src", lenommeur);
audio.appendChild(source);

alenommeur = wave1.generate1();
var aaudio = document.getElementById(pour1+"awav");
var asource = document.createElement("source");
asource.setAttribute("src", alenommeur);
aaudio.appendChild(asource);

blenommeur = wave1.generate1();
var baudio = document.getElementById(pour1+"bwav");
var bsource = document.createElement("source");
bsource.setAttribute("src", blenommeur);
baudio.appendChild(bsource);

clenommeur = wave1.generate1();
var caudio = document.getElementById(pour1+"cwav");
var csource = document.createElement("source");
csource.setAttribute("src", clenommeur);
caudio.appendChild(csource);
}

/*********************/





/**************************premiere partie ouvre le fichier audio************************/

function lecjo1adn() {

var donne = [];
var basedeconstruc = "dan";
for(var pui= 1; pui < 74; pui++)
{
	donne[pui] = document.getElementById(basedeconstruc.concat(pour1+"n",pui )).value;
}

aaa1(donne,Fichier1AudioJo);

Fichier1AudioJo = Fichier1AudioJo.map(Number);

lecjoa1(Fichier1AudioJo);


genereLaFin();




    }

    lecjo1adn();

}
/****************************fin premier niveau qui ouvre le fichier*****************************************************/

 document.addEventListener("DOMContentLoaded", function(event) {
var pour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
31, 32, 33, 34, 35, 36];
for(var pour1= 0; pour1 < 36; pour1++)
{
    lance(pour[pour1]);
}
  });


