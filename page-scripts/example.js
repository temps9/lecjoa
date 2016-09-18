
	var persistanceretinienne = 15;
	var nbimg = null;
	var nbboucle = 70;
    	var mua1 = 0;
	var vitesseDuVent = 220;
	var ouioui;
	var joueur = 'fleur';
	var joueur1;
	var joueur2;
	var version = 1;
	var joueur3 = 'bisfleur';
	var joueur4;
	var joueur5 = 'bis';
	var joueur7;
	var joueur8;
	var arretimage5mn = 300000;
	var souvenirvitesse = 1000;
	var soud1 = [

220,100,219,100,218,100,40,175,217,100,216,100,215,100,43,175,214,100,213,100,212,100,46,175,211,100,210,100,209,100,49,175,208,100,207,100,206,100,52,175,205,100,204,100,203,100,55,175,202,100,201,100,200,100,58,175,199,100,198,100,197,100,61,175,196,100,195,100,194,100,64,175,193,100,192,100,191,100,67,175,190,100,189,100,188,100,70,175,187,100,186,100,185,100,73,175,184,100,183,100,182,100,76,175,181,100,180,100,179,100,79,175,178,100,177,100,176,100,82,175,175,100,174,100,173,100,85,175,172,100,171,100,170,100,88,175,169,100,168,100,167,100,91,175,166,100,165,100,164,100,94,175,163,100,162,100,161,100,97,175,160,100,159,100,158,100,100,175,157,100,156,100,155,100,103,175,154,100,153,100,152,100,106,175,151,100,150,100,149,100,109,175,148,100,147,100,146,100,112,175,145,100,144,100,143,100,115,175,142,100,141,100,140,100,118,175,139,100,138,100,137,100,121,175,136,100,135,100,134,100,124,175,133,100,132,100,131,100,127,175,130,220,129,220,128,220,127,220,130,220,129,220,129,220,127,220,130,220,129,220,129,220,127,220,130,220,129,220,129,220,127,220

];
	var soud2 = [

220,100,219,100,218,100,40,175,217,100,216,100,215,100,43,175,214,100,213,100,212,100,46,175,211,100,210,100,209,100,49,175,208,100,207,100,206,100,52,175,205,100,204,100,203,100,55,175,202,100,201,100,200,100,58,175,199,100,198,100,197,100,61,175,196,100,195,100,194,100,64,175,193,100,192,100,191,100,67,175,190,100,189,100,188,100,70,175,187,100,186,100,185,100,73,175,184,100,183,100,182,100,76,175,181,100,180,100,179,100,79,175,178,100,177,100,176,100,82,175,175,100,174,100,173,100,85,175,172,100,171,100,170,100,88,175,169,100,168,100,167,100,91,175,166,100,165,100,164,100,94,175,163,100,162,100,161,100,97,175,160,100,159,100,158,100,100,175,157,100,156,100,155,100,103,175,154,100,153,100,152,100,106,175,151,100,150,100,149,100,109,175,148,100,147,100,146,100,112,175,145,100,144,100,143,100,115,175,142,100,141,100,140,100,118,175,139,100,138,100,137,100,121,175,136,100,135,100,134,100,124,175,133,100,132,100,131,100,127,175,130,220,129,220,128,220,127,220,130,220,129,220,129,220,127,220,130,220,129,220,129,220,127,220,130,220,129,220,129,220,127,220

];
	var soud3 = [

220,100,219,100,218,100,40,150,217,100,216,100,215,100,43,150,214,100,213,100,212,100,46,150,211,100,210,100,209,100,49,150,208,100,207,100,206,100,52,150,205,100,204,100,203,100,55,150,202,100,201,100,200,100,58,150,199,100,198,100,197,100,61,150,196,100,195,100,194,100,64,150,193,100,192,100,191,100,67,150,190,100,189,100,188,100,70,150,187,100,186,100,185,100,73,150,184,100,183,100,182,100,76,150,181,100,180,100,179,100,79,150,178,100,177,100,176,100,82,150,175,100,174,100,173,100,85,150,172,100,171,100,170,100,88,150,169,100,168,100,167,100,91,150,166,100,165,100,164,100,94,150,163,100,162,100,161,100,97,150,160,100,159,100,158,100,100,150,157,100,156,100,155,100,103,150,154,100,153,100,152,100,106,150,151,100,150,100,149,100,109,150,148,100,147,100,146,100,112,150,145,100,144,100,143,100,115,150,142,100,141,100,140,100,118,150,139,100,138,100,137,100,121,150,136,100,135,100,134,100,124,150,133,100,132,100,131,100,127,150,130,220,129,220,128,220,127,220,130,220,129,220,129,220,127,220,130,220,129,220,129,220,127,220,130,220,129,220,129,220,127,220

];
	var soud4 = [

220,100,219,100,218,100,40,125,217,100,216,100,215,100,43,125,214,100,213,100,212,100,46,125,211,100,210,100,209,100,49,125,208,100,207,100,206,100,52,125,205,100,204,100,203,100,55,125,202,100,201,100,200,100,58,125,199,100,198,100,197,100,61,125,196,100,195,100,194,100,64,125,193,100,192,100,191,100,67,125,190,100,189,100,188,100,70,125,187,100,186,100,185,100,73,125,184,100,183,100,182,100,76,125,181,100,180,100,179,100,79,125,178,100,177,100,176,100,82,125,175,100,174,100,173,100,85,125,172,100,171,100,170,100,88,125,169,100,168,100,167,100,91,125,166,100,165,100,164,100,94,125,163,100,162,100,161,100,97,125,160,100,159,100,158,100,100,125,157,100,156,100,155,100,103,125,154,100,153,100,152,100,106,125,151,100,150,100,149,100,109,125,148,100,147,100,146,100,112,125,145,100,144,100,143,100,115,125,142,100,141,100,140,100,118,125,139,100,138,100,137,100,121,125,136,100,135,100,134,100,124,125,133,100,132,100,131,100,127,125,130,220,129,220,128,220,127,220,130,220,129,220,129,220,127,220,130,220,129,220,129,220,127,220,130,220,129,220,129,220,127,220

];
	var soud5 = [

220,100,219,100,218,100,40,100,217,100,216,100,215,100,43,100,214,100,213,100,212,100,46,100,211,100,210,100,209,100,49,100,208,100,207,100,206,100,52,100,205,100,204,100,203,100,55,100,202,100,201,100,200,100,58,100,199,100,198,100,197,100,61,100,196,100,195,100,194,100,64,100,193,100,192,100,191,100,67,100,190,100,189,100,188,100,70,100,187,100,186,100,185,100,73,100,184,100,183,100,182,100,76,100,181,100,180,100,179,100,79,100,178,100,177,100,176,100,82,100,175,100,174,100,173,100,85,100,172,100,171,100,170,100,88,100,169,100,168,100,167,100,91,100,166,100,165,100,164,100,94,100,163,100,162,100,161,100,97,100,160,100,159,100,158,100,100,100,157,100,156,100,155,100,103,100,154,100,153,100,152,100,106,100,151,100,150,100,149,100,109,100,148,100,147,100,146,100,112,100,145,100,144,100,143,100,115,100,142,100,141,100,140,100,118,100,139,100,138,100,137,100,121,100,136,100,135,100,134,100,124,100,133,100,132,100,131,100,127,100,130,220,129,220,128,220,127,220,130,220,129,220,129,220,127,220,130,220,129,220,129,220,127,220,130,220,129,220,129,220,127,220

];
	var soud6 = [

220,100,219,100,218,100,40,75,217,100,216,100,215,100,43,75,214,100,213,100,212,100,46,75,211,100,210,100,209,100,49,75,208,100,207,100,206,100,52,75,205,100,204,100,203,100,55,75,202,100,201,100,200,100,58,75,199,100,198,100,197,100,61,75,196,100,195,100,194,100,64,75,193,100,192,100,191,100,67,75,190,100,189,100,188,100,70,75,187,100,186,100,185,100,73,75,184,100,183,100,182,100,76,75,181,100,180,100,179,100,79,75,178,100,177,100,176,100,82,75,175,100,174,100,173,100,85,75,172,100,171,100,170,100,88,75,169,100,168,100,167,100,91,75,166,100,165,100,164,100,94,75,163,100,162,100,161,100,97,75,160,100,159,100,158,100,100,75,157,100,156,100,155,100,103,75,154,100,153,100,152,100,106,75,151,100,150,100,149,100,109,75,148,100,147,100,146,100,112,75,145,100,144,100,143,100,115,75,142,100,141,100,140,100,118,75,139,100,138,100,137,100,121,75,136,100,135,100,134,100,124,75,133,100,132,100,131,100,127,75,130,220,129,220,128,220,127,220,130,220,129,220,129,220,127,220,130,220,129,220,129,220,127,220,130,220,129,220,129,220,127,220

];
	var soud7 = [

220,100,219,100,218,100,40,50,217,100,216,100,215,100,43,50,214,100,213,100,212,100,46,50,211,100,210,100,209,100,49,50,208,100,207,100,206,100,52,50,205,100,204,100,203,100,55,50,202,100,201,100,200,100,58,50,199,100,198,100,197,100,61,50,196,100,195,100,194,100,64,50,193,100,192,100,191,100,67,50,190,100,189,100,188,100,70,50,187,100,186,100,185,100,73,50,184,100,183,100,182,100,76,50,181,100,180,100,179,100,79,50,178,100,177,100,176,100,82,50,175,100,174,100,173,100,85,50,172,100,171,100,170,100,88,50,169,100,168,100,167,100,91,50,166,100,165,100,164,100,94,50,163,100,162,100,161,100,97,50,160,100,159,100,158,100,100,50,157,100,156,100,155,100,103,50,154,100,153,100,152,100,106,50,151,100,150,100,149,100,109,50,148,100,147,100,146,100,112,50,145,100,144,100,143,100,115,50,142,100,141,100,140,100,118,50,139,100,138,100,137,100,121,50,136,100,135,100,134,100,124,50,133,100,132,100,131,100,127,50,130,220,129,220,128,220,127,220,130,220,129,220,129,220,127,220,130,220,129,220,129,220,127,220,130,220,129,220,129,220,127,220

];
	var soud8 = [

220,100,219,100,218,100,40,200,217,100,216,100,215,100,43,200,214,100,213,100,212,100,46,200,211,100,210,100,209,100,49,200,208,100,207,100,206,100,52,200,205,100,204,100,203,100,55,200,202,100,201,100,200,100,58,200,199,100,198,100,197,100,61,200,196,100,195,100,194,100,64,200,193,100,192,100,191,100,67,200,190,100,189,100,188,100,70,200,187,100,186,100,185,100,73,200,184,100,183,100,182,100,76,200,181,100,180,100,179,100,79,200,178,100,177,100,176,100,82,200,175,100,174,100,173,100,85,200,172,100,171,100,170,100,88,200,169,100,168,100,167,100,91,200,166,100,165,100,164,100,94,200,163,100,162,100,161,100,97,200,160,100,159,100,158,100,100,200,157,100,156,100,155,100,103,200,154,100,153,100,152,100,106,200,151,100,150,100,149,100,109,200,148,100,147,100,146,100,112,200,145,100,144,100,143,100,115,200,142,100,141,100,140,100,118,200,139,100,138,100,137,100,121,200,136,100,135,100,134,100,124,200,133,100,132,100,131,100,127,200,130,220,129,220,128,220,127,220,130,220,129,220,129,220,127,220,130,220,129,220,129,220,127,220,130,220,129,220,129,220,127,220

];
	var soud9 = [200,200,30,200,200,200,30,200];
	var soud10 = [200,200,30,200,200,200,30,200];
	var soud11 = [200,200,30,200,200,200,30,200];
	var soud12 = [200,200,30,200,200,200,30,200];
	var soud13 = [200,200,30,200,200,200,30,200];
	var soud14 = [200,200,30,200,200,200,30,200];
	var soud15 = [200,200,30,200,200,200,30,200];
	var soud16 = [200,200,30,200,200,200,30,200];


function acelereLeVent(){

  if(vitesseDuVent>123){
  clearInterval(nbimg);
vitesseDuVent = vitesseDuVent -40;
nbboucle = 70;
lancertout();
  }

}
document.getElementById("acelereLeVenta").addEventListener("click", acelereLeVent);

function diminuLeVent(){
  clearInterval(nbimg);
vitesseDuVent = vitesseDuVent + 300;
nbboucle = 70;
lancertout();
}
document.getElementById("diminuLeVenta").addEventListener("click", diminuLeVent);

function actionstop(){
  clearInterval(nbimg);
vitesseDuVent = arretimage5mn;
nbboucle = 7;
vitesseDuVent = vitesseDuVent +1;
lancertout();
}
document.getElementById("actionstopa").addEventListener("click", actionstop);

function actionrestart(){
  clearInterval(nbimg);
vitesseDuVent = souvenirvitesse;
nbboucle = 7;
vitesseDuVent = vitesseDuVent +1;
lancertout();
}
document.getElementById("actionrestarta").addEventListener("click", actionrestart);

function decoupe2(joueur4){//1
  document.getElementById(joueur4).className = 'cachemoi';
}//3

function decoupe1(joueur2){//1
  document.getElementById(joueur2).className = 'cachemoi';
}//3

function decoupe3(joueur1){//1
  document.getElementById(joueur1).className = 'sortdutrou';
}//3

function restecalme(joueur1,joueur8,ouioui){//1



  if(version == 1){//2

for (var placier = 1; placier < ouioui; placier++) {//3


	joueur2 = joueur + placier;
  document.getElementById(joueur2).className = 'cachemoi';

}//3

for (var placier = ouioui+1; placier < 17; placier++) {//3


	joueur2 = joueur + placier;
  document.getElementById(joueur2).className = 'cachemoi';

}//3

for (var placier = 1; placier < ouioui; placier++) {//3


	joueur4 = joueur3 + placier;
  document.getElementById(joueur4).className = 'cachemoi';

}//3

for (var placier = ouioui+1; placier < 17; placier++) {//3

	joueur4 = joueur3 + placier;
  document.getElementById(joueur4).className = 'cachemoi';


}//3


  document.getElementById(joueur1).className = 'sortdutrou';
  document.getElementById(joueur8).className = 'cachemoi';

}//2



  if(version == 2){//2



for (var placier = 1; placier < ouioui; placier++) {//3


	joueur4 = joueur3 + placier;
  document.getElementById(joueur4).className = 'cachemoi';

}//3

for (var placier = ouioui+1; placier < 17; placier++) {//3

	joueur4 = joueur3 + placier;
  document.getElementById(joueur4).className = 'cachemoi';


}//3

for (var placier = 1; placier < ouioui; placier++) {//3


	joueur2 = joueur + placier;
  document.getElementById(joueur2).className = 'cachemoi';

}//3

for (var placier = ouioui+1; placier < 17; placier++) {//3


	joueur2 = joueur + placier;
  document.getElementById(joueur2).className = 'cachemoi';

}//3


  document.getElementById(joueur8).className = 'sortdutrou';

  document.getElementById(joueur1).className = 'cachemoi';


}

}



function change(persistanceretinienne)
{

  switch (persistanceretinienne) {

    	case 0:
	ouioui = persistanceretinienne + 1;
	joueur1 = joueur + ouioui;
	joueur8 = joueur3 + ouioui;
	restecalme(joueur1,joueur8,ouioui);
JoueLeSon1();
   	break;
    	case 1:
	ouioui = persistanceretinienne + 1;
	joueur1 = joueur + ouioui;
	joueur8 = joueur3 + ouioui;
	restecalme(joueur1,joueur8,ouioui);
JoueLeSon2();
   	break;
    	case 2:
	ouioui = persistanceretinienne + 1;
	joueur1 = joueur + ouioui;
	joueur8 = joueur3 + ouioui;
	restecalme(joueur1,joueur8,ouioui);
JoueLeSon3();
   	break;
    	case 3:
	ouioui = persistanceretinienne + 1;
	joueur1 = joueur + ouioui;
	joueur8 = joueur3 + ouioui;
	restecalme(joueur1,joueur8,ouioui);
JoueLeSon4();
   	break;
    	case 4:
	ouioui = persistanceretinienne + 1;
	joueur1 = joueur + ouioui;
	joueur8 = joueur3 + ouioui;
	restecalme(joueur1,joueur8,ouioui);
JoueLeSon5();
   	break;
    	case 5:
	ouioui = persistanceretinienne + 1;
	joueur1 = joueur + ouioui;
	joueur8 = joueur3 + ouioui;
	restecalme(joueur1,joueur8,ouioui);
JoueLeSon6();
   	break;
    	case 6:
	ouioui = persistanceretinienne + 1;
	joueur1 = joueur + ouioui;
	joueur8 = joueur3 + ouioui;
	restecalme(joueur1,joueur8,ouioui);
JoueLeSon7();
   	break;
    	case 7:
	ouioui = persistanceretinienne + 1;
	joueur1 = joueur + ouioui;
	joueur8 = joueur3 + ouioui;
	restecalme(joueur1,joueur8,ouioui);
JoueLeSon8();
   	break;
    	case 8:
	ouioui = persistanceretinienne + 1;
	joueur1 = joueur + ouioui;
	joueur8 = joueur3 + ouioui;
	restecalme(joueur1,joueur8,ouioui);
JoueLeSon8();
   	break;
    	case 9:
	ouioui = persistanceretinienne + 1;
	joueur1 = joueur + ouioui;
	joueur8 = joueur3 + ouioui;
	restecalme(joueur1,joueur8,ouioui);
JoueLeSon7();
   	break;
    	case 10:
	ouioui = persistanceretinienne + 1;
	joueur1 = joueur + ouioui;
	joueur8 = joueur3 + ouioui;
	restecalme(joueur1,joueur8,ouioui);
JoueLeSon6();
   	break;
    	case 11:
	ouioui = persistanceretinienne + 1;
	joueur1 = joueur + ouioui;
	joueur8 = joueur3 + ouioui;
	restecalme(joueur1,joueur8,ouioui);
JoueLeSon5();
   	break;
    	case 12:
	ouioui = persistanceretinienne + 1;
	joueur1 = joueur + ouioui;
	joueur8 = joueur3 + ouioui;
	restecalme(joueur1,joueur8,ouioui);
JoueLeSon4();
   	break;
    	case 13:
	ouioui = persistanceretinienne + 1;
	joueur1 = joueur + ouioui;
	joueur8 = joueur3 + ouioui;
	restecalme(joueur1,joueur8,ouioui);
JoueLeSon3();
   	break;
    	case 14:
	ouioui = persistanceretinienne + 1;
	joueur1 = joueur + ouioui;
	joueur8 = joueur3 + ouioui;
	restecalme(joueur1,joueur8,ouioui);
JoueLeSon2();
   	break;
    	case 15:
	ouioui = persistanceretinienne + 1;
	joueur1 = joueur + ouioui;
	joueur8 = joueur3 + ouioui;
	restecalme(joueur1,joueur8,ouioui);
JoueLeSon1();

   	break;
 
  }

}



function durermax()
{
  clearInterval(nbimg);
/*   lancerChange4();	*/
}
function seance()
{



change(persistanceretinienne);
  persistanceretinienne--;
if ((nbboucle>1)&&(persistanceretinienne<0))
{ 
/* selection du nombre d'image*/
/* persistanceretinienne = 3;*/
persistanceretinienne = 15;
nbboucle = nbboucle-1;
}


}

function lancertout()
{
  nbimg = setInterval(seance, vitesseDuVent);
  setTimeout(durermax, persistanceretinienne * 81000);
change(persistanceretinienne);
}

function lancertout1()
{
lecjo(soud1);
lecjo(soud2);
lecjo(soud3);
lecjo(soud4);
lecjo(soud5);
lecjo(soud6);
lecjo(soud7);
lecjo(soud8);
lecjo(soud9);
lecjo(soud10);
lecjo(soud11);
lecjo(soud12);
lecjo(soud13);
lecjo(soud14);
lecjo(soud15);
lecjo(soud16);

lancertout();
}	

  function JoueLeSon(mua1){

  if(mua1==0){

  var multia1 = document.getElementById("1awav");
  multia1.play();
  }
  else if(mua1==1){

  var multia2 = document.getElementById("2awav");
  multia2.play();
  }
  else if(mua1==2){

  var multia3 = document.getElementById("3awav");
  multia3.play();
  }
  else if(mua1==3){

  var multia4 = document.getElementById("4awav");
  multia4.play();
  }
  }

  function JoueLeSon1(){
  var multib1 = document.getElementById("1awav");
  multib1.play();
  }
  function JoueLeSon2(){
  var multic1 = document.getElementById("2awav");
  multic1.play();
  }
  function JoueLeSon3(){
  var multid1 = document.getElementById("3awav");
  multid1.play();
  }
  function JoueLeSon4(){
  var multie1 = document.getElementById("4awav");
  multie1.play();
  }
  function JoueLeSon5(){
  var multif1 = document.getElementById("5awav");
  multif1.play();
  }
  function JoueLeSon6(){
  var multig1 = document.getElementById("6awav");
  multig1.play();
  }
  function JoueLeSon7(){
  var multih1 = document.getElementById("7awav");
  multih1.play();
  }
  function JoueLeSon8(){
  var multii1 = document.getElementById("8awav");
  multii1.play();
  }
  function JoueLeSon9(){
  var multij1 = document.getElementById("9awav");
  multij1.play();
  }
  function JoueLeSon10(){
  var multik1 = document.getElementById("10awav");
  multik1.play();
  }
  function JoueLeSon11(){
  var multil1 = document.getElementById("11awav");
  multil1.play();
  }
  function JoueLeSon12(){
  var multic1 = document.getElementById("12awav");
  multic1.play();
  }
  function JoueLeSon13(){
  var multim1 = document.getElementById("13awav");
  multim1.play();
  }
  function JoueLeSon14(){
  var multin1 = document.getElementById("14awav");
  multin1.play();
  }
  function JoueLeSon15(){
  var multio1 = document.getElementById("15awav");
  multio1.play();
  }
  function JoueLeSon16(){
  var multip1 = document.getElementById("16awav");
  multip1.play();
  }



function action1Press(){
	version = version + 1;
	if(version>2){
        version = 1;
  	}
  }
document.getElementById("action1Pressa").addEventListener("click", action1Press);

function actionx1Press(){
	persistanceretinienne = 15;
  }
document.getElementById("actionx1aPress").addEventListener("click", actionx1Press);

function actionx2Press(){
	persistanceretinienne = 14;
  }
document.getElementById("actionx2aPress").addEventListener("click", actionx2Press);

function actionx3Press(){
	persistanceretinienne = 13;
  }
document.getElementById("actionx3aPress").addEventListener("click", actionx3Press);

function actionx4Press(){
	persistanceretinienne = 12;
  }
document.getElementById("actionx4aPress").addEventListener("click", actionx4Press);

function actionx5Press(){
	persistanceretinienne = 11;
  }
document.getElementById("actionx5aPress").addEventListener("click", actionx5Press);

function actionx6Press(){
	persistanceretinienne = 10;
  }
document.getElementById("actionx6aPress").addEventListener("click", actionx6Press);

function actionx7Press(){
	persistanceretinienne = 9;
  }
document.getElementById("actionx7aPress").addEventListener("click", actionx7Press);

function actionx8Press(){
	persistanceretinienne = 8;
  }
document.getElementById("actionx8aPress").addEventListener("click", actionx8Press);

function actionx9Press(){
	persistanceretinienne = 7;
  }
document.getElementById("actionx9aPress").addEventListener("click", actionx9Press);

function actionx10Press(){
	persistanceretinienne = 6;
  }
document.getElementById("actionx10aPress").addEventListener("click", actionx10Press);

function actionx11Press(){
	persistanceretinienne = 5;
  }
document.getElementById("actionx11aPress").addEventListener("click", actionx11Press);

function actionx12Press(){
	persistanceretinienne = 4;
  }
document.getElementById("actionx12aPress").addEventListener("click", actionx12Press);

function actionx13Press(){
	persistanceretinienne = 3;
  }
document.getElementById("actionx13aPress").addEventListener("click", actionx13Press);

function actionx14Press(){
	persistanceretinienne = 2;
  }
document.getElementById("actionx14aPress").addEventListener("click", actionx14Press);

function actionx15Press(){
	persistanceretinienne = 1;
  }
document.getElementById("actionx15aPress").addEventListener("click", actionx15Press);

function actionx16Press(){
	persistanceretinienne = 0;
  }
document.getElementById("actionx16aPress").addEventListener("click", actionx16Press);

/**passerelle firefox 48 pour remplacer le bouton d'appel java**/
   function load() { 
lancertout1(); 

   } 


 document.addEventListener("DOMContentLoaded", function(event) {
    load();
  });
/**fin passerelle firefox 48**/

