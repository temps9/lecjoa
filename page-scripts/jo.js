
/**************************premiere partie ouvre le fichier audio************************/          
			var FichierAudioJo=[];
var text1={};
var levariateur = 1;
var lenommeur ;
var lenommeur1 ;

function setupReader(file) {
    var name = file.name;
    var reader = new FileReader();  
    reader.onload = function(e) {  
 text1 = e.target.result.split(""); 
console.log(text1.length);
console.log(text1);



convertit(text1);

//console.log(e.target.result);
console.log(FichierAudioJo);
console.log(FichierAudioJo.length);


/*********************************deuxième partie*********************************************************************************/


/********************************fin deuxième partie******/

var monhexa, NbPtTotal = 0;
var raw = [];
var raw1 = [];
var leraw = [];


  var durerentete = NbPtTotal * 2;
  var longueurentete = durerentete + 44 - 8;
var convertisseur = function swap16(val) {
    return ((val & 0xFF) << 8)
           | ((val >> 8) & 0xFF);
}

samples = durerentete*0.0625;



/***********troisième partie**********application qui met aux normes audio actuelles*********/

var app = {};

(function() {

    app.utility = {

        /* js port of PHP function pack */
        pack : function (fmt) {
            var output = '';
            
            var argi = 1;
            for (var i = 0; i < fmt.length; i++) {
                var c = fmt.charAt(i);
                var arg = arguments[argi];
                argi++;
                
                switch (c) {

                    case "v":
                        output += String.fromCharCode(
                            arg & 255, 
                            (arg >> 8) & 255
                        );
                        break;

                    case "V":
                        output += String.fromCharCode(
                            arg & 255, 
                            (arg >> 8) & 255, 
                            (arg >> 16) & 255, 
                            (arg >> 24) & 255
                        );
                        break;

                    default:
                        throw new Error("Unknown pack format '"+c+"'");
                }
            }
            
            return output;
        }

    }

    /* Classic sound config : mono wav, 44100 Hz, 16 bit depth */
    app.config = {
        channels : 1,
        sampleRate : 44100,
        bitsPerSample : 16,
    }

}());

(function(){

    var pack = app.utility.pack;
    var config = app.config;

    // constructor
    app.wave = function (_data) {
        this.data = _data;
    };

    app.wave.prototype = {

        // Generate the wave content by concatenation, and encode it to base64.
        generate : function () {
            var chunk1 = this.makeChunk1(); // format chunk
            var chunk2 = this.makeChunk2(); // data chunk
            var header = this.makeHeader(chunk1.length, chunk2.length);
            var out = header + chunk1 + chunk2;
            return "data:audio/wav;base64," + btoa(out);
        },

        // Generate the content of the audio format chunk
        makeChunk1 : function () {
            var chunk1 = [
                "fmt ",
                pack("V", 16), // Chunk length for PCM
                pack("v", 1), // linear PCM
                pack("v", config.channels),
                pack("V", config.sampleRate),
                pack("V", config.sampleRate * config.channels * config.bitsPerSample / 8), // ByteRate
                pack("v", config.channels * config.bitsPerSample / 8), // BlockAlign
                pack("v", config.bitsPerSample)
            ];
            return chunk1.join('');
        },

        // Generate the content of the data chunk
        makeChunk2 : function () {
            var data = this.data;

            var chunk2 = [
                "data", // chunk ID
                pack("V", data.samples * config.channels * config.bitsPerSample / 16), // Chunk length
                data.leraw
            ];
            return chunk2.join('');
        },

        // Generate the header chunk
        makeHeader : function () {
            var data = this.data;

            var header = [
                "RIFF",
                pack("V", 4 + (8 + 16) + (8 + data.samples * config.channels * config.bitsPerSample / 8)), // total lenght
                "WAVE"
            ];
            return header.join('');
        }

    };

}());



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


//fin zone 3

        break;
    case 5:
//zone 4
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


//fin zone 4

        break;
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


//fin zone 5

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
    default:
var audio9 = document.getElementById("audiojoa9");
var source9 = document.createElement("source");
source9.setAttribute("src", lenommeur);
audio9.appendChild(source9);
} 



}




function lecjo(FichierAudioJo)
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
NbPtTotal += nbdepoints; /*44100 nbdepoints = 1 seconde*/
	actiontotale(amplitude, nbdepoints, ludion);




}//  fin du else de trie de récpération de données (amplitude et nbpoints)
}// fin de la boucle for de trie de récpération de données (amplitude et nbpoints)

genereLaFin();


return NbPtTotal;





}// fin fonction lecjo


/****************************fin premier niveau qui ouvre le fichier*****************************************************/

lecjo(FichierAudioJo);
    }

reader.readAsBinaryString(file, "UTF-16");
}

function fait() {

document.querySelector('#filejo').addEventListener('change', function() {

    for (var i = 0; i < this.files.length; i++) {
        setupReader(this.files[i]);
}
});

}



/**passerelle firefox 48 pour remplacer le bouton d'appel java**/



 document.addEventListener("DOMContentLoaded", function(event) {
    fait();
  });
/**fin passerelle firefox 48**/

