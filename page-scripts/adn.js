/******recupere les valeurs entrer*/
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



}

/*********************/    
			var FichierAudioJo=[];
var text1={};
var choixjojoa = 1;
var levariateur = 1;
var lenommeur ;
var lenommeur1 ;





/*********************************deuxième partie*********************************************************************************/


/********************************fin deuxième partie******/



/***********troisième partie**********application qui met aux normes audio actuelles*********/


/******fin de la troisième partie**encodeur aux normes audio*************************/


/***********cinquième partie génère la balise et lance la lecture**************/



function genereLaFin()
{

/**************genere balise*******/
/*
<audio id="audiojoa" controls="controls" autobuffer=""> 
<source src="data:audio/wav;base64wave,"></audio>
*/

lenommeur1= "basewave";

console.log(levariateur);

levariateur = levariateur + 1;

console.log(levariateur);


lenommeur = lenommeur1.concat(levariateur); 
switch(levariateur) {
    case 2:

//zone 1
var mon_audio1 = null;
var nouveauaudio1 = null;
var nouveauaudio1a = null;

function ajouteElement() {
  // crée un nouvel élément audio

  nouveauaudio1 =  document.createElement("audio");
nouveauaudio1.setAttribute("id", "audiojoa");
nouveauaudio1.setAttribute("controls", "controls");
nouveauaudio1.setAttribute("autobuffer", " ");

  // ajoute l'élément qui vient d'être créé et son contenu au DOM

 nouveauaudio1a = document.createElement("source");


  nouveauaudio1a.setAttribute("src", "data:audio/wav;basewave2,");
   nouveauaudio1.appendChild(nouveauaudio1a);
  mon_audio1 = document.getElementById(lenommeur);
  document.body.insertBefore(nouveauaudio1, mon_audio1);
}  

ajouteElement();

//fin zone 1

        break;
    case 3:
//zone 2
var mon_audio2 = null;
var nouveauaudio2 = null;
var nouveauaudio2a = null;


function ajouteElement1() {
  // crée un nouvel élément audio

  nouveauaudio2 =  document.createElement("audio");
nouveauaudio2.setAttribute("id", "audiojoa1");
nouveauaudio2.setAttribute("controls", "controls");
nouveauaudio2.setAttribute("autobuffer", " ");

  // ajoute l'élément qui vient d'être créé et son contenu au DOM

 nouveauaudio2a = document.createElement("source");


  nouveauaudio2a.setAttribute("src", "data:audio/wav;basewave3,");
   nouveauaudio2.appendChild(nouveauaudio2a);
  mon_audio2 = document.getElementById(lenommeur);
  document.body.insertBefore(nouveauaudio2, mon_audio2);

}  

ajouteElement1();

//fin zone 2
        break;
    case 4:
//zone 3
var mon_audio3 = null;
var nouveauaudio3 = null;
var nouveauaudio3a = null;

function ajouteElement2() {
  // crée un nouvel élément audio

  nouveauaudio3 =  document.createElement("audio");
nouveauaudio3.setAttribute("id", "audiojoa2");
nouveauaudio3.setAttribute("controls", "controls");
nouveauaudio3.setAttribute("autobuffer", " ");

  // ajoute l'élément qui vient d'être créé et son contenu au DOM

 nouveauaudio3a = document.createElement("source");


  nouveauaudio3a.setAttribute("src", "data:audio/wav;basewave4,");
   nouveauaudio3.appendChild(nouveauaudio3a);
  mon_audio3 = document.getElementById(lenommeur);
  document.body.insertBefore(nouveauaudio3, mon_audio3);

}  
ajouteElement2();
        break;
//fin zone 3
//zone 4
    case 5:
var mon_audio4 = null;
var nouveauaudio4 = null;
var nouveauaudio4a = null;

function ajouteElement3() {
  // crée un nouvel élément audio

  nouveauaudio4 =  document.createElement("audio");
nouveauaudio4.setAttribute("id", "audiojoa3");
nouveauaudio4.setAttribute("controls", "controls");
nouveauaudio4.setAttribute("autobuffer", " ");

  // ajoute l'élément qui vient d'être créé et son contenu au DOM

 nouveauaudio4a = document.createElement("source");


  nouveauaudio4a.setAttribute("src", "data:audio/wav;basewave5,");
   nouveauaudio4.appendChild(nouveauaudio4a);
  mon_audio4 = document.getElementById(lenommeur);
  document.body.insertBefore(nouveauaudio4, mon_audio4);

}  
ajouteElement3();
        break;
//fin zone 4
/***/
    case 6:
//zone 5
var mon_audio5 = null;
var nouveauaudio5 = null;
var nouveauaudio5a = null;

function ajouteElement4() {
  // crée un nouvel élément audio

  nouveauaudio5 =  document.createElement("audio");
nouveauaudio5.setAttribute("id", "audiojoa4");
nouveauaudio5.setAttribute("controls", "controls");
nouveauaudio5.setAttribute("autobuffer", " ");

  // ajoute l'élément qui vient d'être créé et son contenu au DOM

 nouveauaudio5a = document.createElement("source");


  nouveauaudio5a.setAttribute("src", "data:audio/wav;basewave6,");
   nouveauaudio5.appendChild(nouveauaudio5a);
  mon_audio5 = document.getElementById(lenommeur);
  document.body.insertBefore(nouveauaudio5, mon_audio5);

}  
ajouteElement4();


//fin zone 5

        break;
/***/
    case 7:
//zone 6
var mon_audio6 = null;
var nouveauaudio6 = null;
var nouveauaudio6a = null;

function ajouteElement5() {
  // crée un nouvel élément audio

  nouveauaudio6 =  document.createElement("audio");
nouveauaudio6.setAttribute("id", "audiojoa5");
nouveauaudio6.setAttribute("controls", "controls");
nouveauaudio6.setAttribute("autobuffer", " ");

  // ajoute l'élément qui vient d'être créé et son contenu au DOM

 nouveauaudio6a = document.createElement("source");


  nouveauaudio6a.setAttribute("src", "data:audio/wav;basewave7,");
   nouveauaudio6.appendChild(nouveauaudio6a);
  mon_audio6 = document.getElementById(lenommeur);
  document.body.insertBefore(nouveauaudio6, mon_audio6);

}  
ajouteElement5();


//fin zone 6

        break;
/***/
    case 8:
//zone 7
var mon_audio7 = null;
var nouveauaudio7 = null;
var nouveauaudio7a = null;

function ajouteElement6() {
  // crée un nouvel élément audio

  nouveauaudio7 =  document.createElement("audio");
nouveauaudio7.setAttribute("id", "audiojoa6");
nouveauaudio7.setAttribute("controls", "controls");
nouveauaudio7.setAttribute("autobuffer", " ");

  // ajoute l'élément qui vient d'être créé et son contenu au DOM

 nouveauaudio7a = document.createElement("source");


  nouveauaudio7a.setAttribute("src", "data:audio/wav;basewave8,");
   nouveauaudio7.appendChild(nouveauaudio7a);
  mon_audio7 = document.getElementById(lenommeur);
  document.body.insertBefore(nouveauaudio7, mon_audio7);

}  
ajouteElement6();


//fin zone 7

        break;
/***/

    case 9:
//zone 8
var mon_audio8 = null;
var nouveauaudio8 = null;
var nouveauaudio8a = null;

function ajouteElement7() {
  // crée un nouvel élément audio

  nouveauaudio8 =  document.createElement("audio");
nouveauaudio8.setAttribute("id", "audiojoa7");
nouveauaudio8.setAttribute("controls", "controls");
nouveauaudio8.setAttribute("autobuffer", " ");

  // ajoute l'élément qui vient d'être créé et son contenu au DOM

 nouveauaudio8a = document.createElement("source");


  nouveauaudio8a.setAttribute("src", "data:audio/wav;basewave9,");
   nouveauaudio8.appendChild(nouveauaudio8a);
  mon_audio8 = document.getElementById(lenommeur);
  document.body.insertBefore(nouveauaudio8, mon_audio8);

}  
ajouteElement7();


//fin zone 8

        break;
/***/

    case 10:
//zone 9
var mon_audio9 = null;
var nouveauaudio9 = null;
var nouveauaudio9a = null;

function ajouteElement8() {
  // crée un nouvel élément audio

  nouveauaudio9 =  document.createElement("audio");
nouveauaudio9.setAttribute("id", "audiojoa8");
nouveauaudio9.setAttribute("controls", "controls");
nouveauaudio9.setAttribute("autobuffer", " ");

  // ajoute l'élément qui vient d'être créé et son contenu au DOM

 nouveauaudio9a = document.createElement("source");


  nouveauaudio9a.setAttribute("src", "data:audio/wav;basewave10,");
   nouveauaudio9.appendChild(nouveauaudio9a);
  mon_audio9 = document.getElementById(lenommeur);
  document.body.insertBefore(nouveauaudio9, mon_audio9);

}  
ajouteElement8();


//fin zone 9

        break;
/***/

    default:
//zone 10
var mon_audio10 = null;
var nouveauaudio10 = null;
var nouveauaudio10a = null;

function ajouteElement9() {
  // crée un nouvel élément audio

  nouveauaudio10 =  document.createElement("audio");
nouveauaudio10.setAttribute("id", "audiojoa9");
nouveauaudio10.setAttribute("controls", "controls");
nouveauaudio10.setAttribute("autobuffer", " ");

  // ajoute l'élément qui vient d'être créé et son contenu au DOM

 nouveauaudio10a = document.createElement("source");


  nouveauaudio10a.setAttribute("src", "data:audio/wav;basewave11,");
   nouveauaudio10.appendChild(nouveauaudio10a);
  mon_audio10 = document.getElementById(lenommeur);
  document.body.insertBefore(nouveauaudio10, mon_audio10);

}  
ajouteElement9();


//fin zone 10

} // fin switch





/**reglage force de l'amplitude***/
var volume = Math.floor(65535 / 8);

//samples = NbPtTotal*0.25;
durerentete=NbPtTotal*2;

samples = durerentete*16;
var data = {};

 data = {leraw: leraw.join(''), samples: samples};

var wave = new app.wave(data);

/*********met en memoire l'audio*****/





 lenommeur = wave.generate();

sessionStorage.removeItem("MaMemoireAudio");
sessionStorage.setItem("MaMemoireAudio","lenommeur")
//var wave1 = sessionStorage.getItem("MaMemoireAudio");


switch(levariateur) {
    case 2:
var audio = document.getElementById("audiojoa");
var source = document.createElement("source");
source.setAttribute("src", lenommeur);
audio.appendChild(source);
        break;
    case 3:
var audio1 = document.getElementById("audiojoa1");
var source1 = document.createElement("source");
source1.setAttribute("src", lenommeur);
audio1.appendChild(source1);
        break;
    case 4:
var audio2 = document.getElementById("audiojoa2");
var source2 = document.createElement("source");
source2.setAttribute("src", lenommeur);
audio2.appendChild(source2);
        break;
    case 5:
var audio3 = document.getElementById("audiojoa3");
var source3 = document.createElement("source");
source3.setAttribute("src", lenommeur);
audio3.appendChild(source3);
        break;

    case 6:
var audio4 = document.getElementById("audiojoa4");
var source4 = document.createElement("source");
source4.setAttribute("src", lenommeur);
audio4.appendChild(source4);
        break;

    case 7:
var audio5 = document.getElementById("audiojoa5");
var source5 = document.createElement("source");
source5.setAttribute("src", lenommeur);
audio5.appendChild(source5);
        break;

    case 8:
var audio6 = document.getElementById("audiojoa6");
var source6 = document.createElement("source");
source6.setAttribute("src", lenommeur);
audio6.appendChild(source6);
        break;

    case 9:
var audio7 = document.getElementById("audiojoa7");
var source7 = document.createElement("source");
source7.setAttribute("src", lenommeur);
audio7.appendChild(source7);
        break;

    case 10:
var audio8 = document.getElementById("audiojoa8");
var source8 = document.createElement("source");
source8.setAttribute("src", lenommeur);
audio8.appendChild(source8);
        break;

    case 11:
var audio9 = document.getElementById("audiojoa9");
var source9 = document.createElement("source");
source9.setAttribute("src", lenommeur);
audio9.appendChild(source9);
        break;
    case 12:
var audio10 = document.getElementById("audiojoa10");
var source10 = document.createElement("source");
source10.setAttribute("src", lenommeur);
audio10.appendChild(source10);
        break;
    case 13:
var audio11 = document.getElementById("audiojoa11");
var source11 = document.createElement("source");
source11.setAttribute("src", lenommeur);
audio11.appendChild(source11);
        break;
    case 14:
var audio12 = document.getElementById("audiojoa12");
var source12 = document.createElement("source");
source12.setAttribute("src", lenommeur);
audio12.appendChild(source12);
        break;
    case 15:
var audio13 = document.getElementById("audiojoa13");
var source13 = document.createElement("source");
source13.setAttribute("src", lenommeur);
audio13.appendChild(source13);
        break;
    case 16:
var audio14 = document.getElementById("audiojoa14");
var source14 = document.createElement("source");
source14.setAttribute("src", lenommeur);
audio14.appendChild(source14);
        break;

    default:
var audio15 = document.getElementById("audiojoa15");
var source15 = document.createElement("source");
source15.setAttribute("src", lenommeur);
audio15.appendChild(source15);
} 



}



function lecjoa1(FichierAudioJo)
{

 leraw = [];

var ludion = 32768, amplitude = 32768, nbdepoints = 5;

	function actiontotale(amplitude, nbdepoints, ludion)

	{

				var samples = 0, ote, ote1, reste, boucle;
			      var ideb, j, p, avec1, avec2, avec3;


/****debut front descend****/
		function frontdescend(amplitude, nbdepoints, ludion)
		{
				var ote1;

			      boucle = Math.round(nbdepoints *0.5);

			      reste = nbdepoints - boucle;

			      ote = Math.round( (ludion-amplitude)*0.5 );

				avec1 = boucle-1;
				p = table[avec1];

			function calcul1 (ludion, ote, ote1)
			{
			codebash = Math.round(ludion + ote1 - ote);
			

			 var volume = Math.floor(65535);
			monhexa = Math.floor(codebash -32767);
			  var total = leraw.push(app.utility.pack("v", monhexa));

			 }//fin calcul1


			for (ideb = boucle-1; ideb >= 0; ideb--) {
			ote1 = Math.floor((ote * 0.00001 * p[ideb]));
   			calcul1 (ludion, ote, ote1);
			}// fin frontdescend partie1 et fin for


/********deuxieme partie front descend****************/

			function sens2inverse(amplitude, nbdepoints, ludion)
			{
			var ote1;

			 boucle = Math.round(nbdepoints *0.5);
			 reste = nbdepoints - boucle;
			 ote = Math.round( (ludion-amplitude)*0.5 );

			avec1 = boucle-1;
			p = table[avec1];

			function calcul2 (ludion, ote, ote1)
			{
			codebash = Math.round(amplitude + ote - ote1);
			

			  var volume = Math.floor(65535);
			monhexa = Math.floor(codebash -32767);
			  var total = leraw.push(app.utility.pack("v", monhexa));

			 }// fin calcul2

			 for (ideb = 0; ideb < reste; ideb++) {
			 ote1 = Math.floor((ote * 0.00001 * p[ideb]));
   			 calcul2 (amplitude, ote, ote1);
			 } // fin du for

			 } // fin sens2inverse

			sens2inverse(amplitude, nbdepoints, ludion);		 

			ludion = amplitude
			return ludion;
			}// fin frontdescend

/********fin front descend *************************/


/****debut front montant*********************/
		function frontmontant(amplitude, nbdepoints, ludion)
		{
		ote = Math.round( (amplitude-ludion)*0.5 );			     
		 boucle = Math.round(nbdepoints * 0.5);
		reste = nbdepoints - boucle;
		
		var iee, j, p;
		avec1 = boucle-1;
		p = table[avec1];
		
			function calcul3 (ludion, ote, ote1)
			{
  			codebash = Math.round(ludion + ote - ote1);
			

			var volume = Math.floor(65535 );
			monhexa = Math.floor(codebash -32767);
			  var total = leraw.push(app.utility.pack("v", monhexa));

			}// fin calcul3



			for (ideb = boucle-1; ideb >= 0; ideb--) {
			ote1 = Math.floor(ote * 0.00001 * p[ideb]);
   			calcul3 (ludion, ote, ote1);
			}// fin premiere partie du fron et du for



				
			function sensinverse(amplitude, nbdepoints, ludion)
			{

			boucle = Math.round(nbdepoints * 0.5);
			reste = nbdepoints - boucle;
			ote = Math.round((amplitude-ludion)*0.5 );


			function calcul4 (ludion, ote, ote1)
			{
  			codebash = Math.round(ludion + ote + ote1);
			

			var volume = Math.floor(65535 );
			monhexa = Math.floor(codebash -32767);
			var total = leraw.push(app.utility.pack("v", monhexa));

			}// fin calcul4

/******/
				for (ideb = 0; ideb < reste; ideb++) {
				    ote1 = Math.round(ote * 0.00001 * p[ideb]);
   					calcul4 (ludion, ote, ote1);
				}
/********/






}

/* debut montant inverse du sens 1 */
sensinverse(amplitude, nbdepoints, ludion);

			ludion = amplitude
			return ludion;

			} //fin frontmontant





/****fin front montant***/







/*choix du sens du front*/

		  if (ludion > amplitude)
		    {
		 frontdescend(amplitude, nbdepoints, ludion);
		    }
		  else
		    {
		frontmontant(amplitude, nbdepoints, ludion);
		    }

/* fin choix du sens du front*/



}
/****fin action totale****/

for(var idejo= 0; idejo < FichierAudioJo.length; idejo++)
{//1

if (idejo/2 == Math.round(idejo/2)) {
	ludion = amplitude;
	amplitude = FichierAudioJo[idejo] * 256;
} else {//2
	nbdepoints = FichierAudioJo[idejo];
//NbPtTotal += nbdepoints; /*44100 nbdepoints = 1 seconde*/
	actiontotale(amplitude, nbdepoints, ludion);




}//  fin du else de trie de récpération de données (amplitude et nbpoints)
}// fin de la boucle for de trie de récpération de données (amplitude et nbpoints)

genereLaFin();


return NbPtTotal;





}// fin fonction lecjoa1










/**************************premiere partie ouvre le fichier audio************************/      

function lecjoadn() {
regarde();
var nomb;
for (nomb = 0; nomb < donne3; nomb++) {
FichierAudioJo = donne1;
lecjoa1(FichierAudioJo);
FichierAudioJo = donne2;
lecjoa1(FichierAudioJo);

FichierAudioJo = donne9;
lecjoa1(FichierAudioJo);
FichierAudioJo = donne10;
lecjoa1(FichierAudioJo);
				}
    }
/****************************fin premier niveau qui ouvre le fichier*****************************************************/






/**passerelle firefox 48 pour remplacer le bouton d'appel js**/
   function load() { 
     var el = document.getElementById("tet1"); 
     el.addEventListener("click", lecjoadn, false); 
   } 


 document.addEventListener("DOMContentLoaded", function(event) {
    load();
  });
/**fin passerelle firefox 48**/

