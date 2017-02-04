function aaa1(donne,Fichier1AudioJo) {
var pas1; //variable du switch trie du nombre de fronts

var le1 = donne[1];//variation amplitude front1
function maFonction1() {
var xx1 = le1 - donne[5];
if ((donne[5] > 0)&&(xx1 < donne[6])){ xx1 = donne[6];}//limit of the height variation
if ((donne[5] < 0)&&(xx1 > donne[6])){ xx1 = donne[6];}//limit of the height variation
  return xx1;
}

var le2 = donne[9];//variation amplitude front2
function maFonction2() {
var xx2 = le2 -(- donne[13]);
if ((donne[13] > 0)&&(xx2 > donne[14])){ xx2 = donne[14];}//limit of the height variation
if ((donne[13] < 0)&&(xx2 < donne[14])){ xx2 = donne[14];}//limit of the height variation
  return xx2;
}

var le3 = donne[1];//plateau amplitude front1
function maFonction3() {
var xx3= le1 -1;
  return xx3;
}

var le4 = donne[9];//plateau amplitude front2
function maFonction4() {
var xx4 = le2 -1;
  return xx4;
}

var le5 = donne[2];//variation width front1
function maFonction5() {
var xx5 = le5 - donne[7];
if ((donne[7] > 0)&&(xx5 < donne[8])){ xx5 = donne[8];}//limit of the width variation
if ((donne[7] < 0)&&(xx5 > donne[8])){ xx5 = donne[8];}//limit of the width variation
  return xx5;
}

var le6 = donne[10];//variation width front2
function maFonction6() {
var xx6 = le6 - donne[15];
if ((donne[15] > 0)&&(xx6 < donne[16])){ xx6 = donne[16];}//limit of the width variation
if ((donne[15] < 0)&&(xx6 > donne[16])){ xx6 = donne[16];}//limit of the width variation
  return xx6;
}


var le7 = donne[18];//variation amplitude front3
function maFonction7() {
var xx7 = le7 - donne[22];
if ((donne[22] > 0)&&(xx7 < donne[23])){ xx7 = donne[23];}//limit of the height variation
if ((donne[22] < 0)&&(xx7 > donne[23])){ xx7 = donne[23];}//limit of the height variation
  return xx7;
}

var le8 = donne[27];//variation amplitude front4
function maFonction8() {
var xx8 = le8 - donne[31];
if ((donne[31] > 0)&&(xx8 > donne[32])){ xx8 = donne[32];}//limit of the height variation
if ((donne[31] < 0)&&(xx8 < donne[32])){ xx8 = donne[32];}//limit of the height variation
  return xx8;
}

var le9 = donne[36];//variation amplitude front5
function maFonction9() {
var xx9 = le9 - donne[40];
if ((donne[40] > 0)&&(xx9 < donne[41])){ xx9 = donne[41];}//limit of the height variation
if ((donne[40] < 0)&&(xx9 > donne[41])){ xx9 = donne[41];}//limit of the height variation
  return xx9;
}

var le10 = donne[45];//variation amplitude front6
function maFonction10() {
var xx10 = le10 - donne[49];
if ((donne[49] > 0)&&(xx10 > donne[50])){ xx10 = donne[50];}//limit of the height variation
if ((donne[49] < 0)&&(xx10 < donne[50])){ xx10 = donne[50];}//limit of the height variation
  return xx10;
}

var le11 = donne[18];//variation width front3
function maFonction11() {
var xx11 = le11 - donne[24];
if ((donne[24] > 0)&&(xx11 < donne[25])){ xx11 = donne[25];}//limit of the width variation
if ((donne[24] < 0)&&(xx11 > donne[25])){ xx11 = donne[25];}//limit of the width variation
  return xx11;
}

var le12 = donne[27];//variation width front4
function maFonction12() {
var xx12 = le12 - donne[33];
if ((donne[33] > 0)&&(xx12 < donne[34])){ xx12 = donne[34];}//limit of the width variation
if ((donne[33] < 0)&&(xx12 > donne[34])){ xx12 = donne[34];}//limit of the width variation
  return xx12;
}

var le13 = donne[36];//variation width front5
function maFonction13() {
var xx13 = le13 - donne[42];
if ((donne[42] > 0)&&(xx13 < donne[43])){ xx13 = donne[43];}//limit of the width variation
if ((donne[42] < 0)&&(xx13 > donne[43])){ xx13 = donne[43];}//limit of the width variation
  return xx13;
}

var le14 = donne[45];//variation width front6
function maFonction14() {
var xx14 = le14 - donne[51];
if ((donne[51] > 0)&&(xx14 < donne[52])){ xx14 = donne[52];}//limit of the width variation
if ((donne[51] < 0)&&(xx14 > donne[52])){ xx14 = donne[52];}//limit of the width variation
  return xx14;
}

/*********************/



var nombi; //boucle generale de donne[71]
var nomba;
var nombd;
var nombe  = donne[20];
nombe = (nombe < 1) ? 1:nombe;
var nombf;

var waxx2 = 128 - Number(donne[54]);
var waxx1 = (Number(donne[54]) -(- 128));
function maFonction7() {
var xx7 = waxx2 - donne[58];
xx7 = (30 > xx7) ? 30 : xx7;
  return xx7;
}
function maFonction8() {
var xx8 = waxx1 -(- Number(donne[58]));
xx8 = (xx8 > 220) ? 220:xx8;
return xx8;
}

var laforce = donne[3] -(- 1);

var letri1;
var letri2;
var letri3;
var letri4;
var letri5;
var letri6;
var letri7;
var letri8;

switch (Number(donne[53])) {

  case 0 :


switch (Number(donne[11])) {


//zone 2 fronts

 case 2 :
  for (nombi = 0; nombi < donne[71]; nombi++) {//1

   if ((donne[5] != 0)&&(donne[7] != 0)) {//2
    le3 = maFonction3();
    le4 = maFonction4();
    for (var nomb = 0; nomb < laforce ; nomb++) { //3 height repeat
     Fichier1AudioJo.push(le1);
     Fichier1AudioJo.push(le5);
     if (donne[72] > 0) {//4
      for (nomba = 0; nomba < donne[72]; nomba++) { //5 number of stays in place
       Fichier1AudioJo.push(le3);
       Fichier1AudioJo.push(donne[4]);
       Fichier1AudioJo.push(le1);
       Fichier1AudioJo.push(donne[4]);
       } //5 fin fo nomba
      }//4

     Fichier1AudioJo.push(le2);
     Fichier1AudioJo.push(le6);
     if (donne[73] > 0) {//4
      for (nombd = 0; nombd < donne[73]; nombd++) {//5 number of stays in place
       Fichier1AudioJo.push(le4);
       Fichier1AudioJo.push(donne[12]);
       Fichier1AudioJo.push(le2);
       Fichier1AudioJo.push(donne[12]);
       }//5 
      }//4
    }//3 fin fo nomb
   le1 = maFonction1();
   le5 = maFonction5();
   le2 = maFonction2();
   le6 = maFonction6();
   }//2 fin if donne[5] != 0 & donne[7] != 0

   if ((donne[5] != 0)&&(donne[7] == 0)) {//2
    le3 = maFonction3();
    le4 = maFonction4();
    for (var nomb = 0; nomb < laforce ; nomb++) {//3 height repeat
     Fichier1AudioJo.push(le1);
     Fichier1AudioJo.push(donne[2]);
     if (donne[72] > 0) {//4
      for (nomba = 0; nomba < donne[72]; nomba++) {//5 number of stays in place
       Fichier1AudioJo.push(le3);
       Fichier1AudioJo.push(donne[4]);
       Fichier1AudioJo.push(le1);
       Fichier1AudioJo.push(donne[4]);
       }//5 fin fo nomba
      }//4

     Fichier1AudioJo.push(le2);
     Fichier1AudioJo.push(donne[10]);
     if (donne[73] > 0) {//4
      for (nombd = 0; nombd < donne[73]; nombd++) {//5 number of stays in place
       Fichier1AudioJo.push(le4);
       Fichier1AudioJo.push(donne[12]);
       Fichier1AudioJo.push(le2);
       Fichier1AudioJo.push(donne[12]);
       }//5 
      }//4
     }//3 fin fo nomb
    le1 = maFonction1();
    le2 = maFonction2();
    }//2 fin if donne[5] donne[7]

   if (donne[5] == 0) {//2
    if (donne[7] != 0) {//3
     for (var nomb = 0; nomb < laforce ; nomb++) {//4
      Fichier1AudioJo.push(donne[1]);
      Fichier1AudioJo.push(le5);
       if (donne[72] > 0) {//5
        for (nomba = 0; nomba < donne[72]; nomba++) {//6
         Fichier1AudioJo.push(le3);
         Fichier1AudioJo.push(donne[4]);
         Fichier1AudioJo.push(donne[1]);
         Fichier1AudioJo.push(donne[4]);
         }//6 fin fo nomba
        }//5
       Fichier1AudioJo.push(donne[9]);
       Fichier1AudioJo.push(le6);
       if (donne[73] > 0) {//5
	for (nombd = 0; nombd < donne[73]; nombd++) {//6
         Fichier1AudioJo.push(le4);
         Fichier1AudioJo.push(donne[12]);
         Fichier1AudioJo.push(donne[9]);
         Fichier1AudioJo.push(donne[12]);
         }//6 
        }//5
       }//4 fin fo nombd
      le5 = maFonction5();
      le6 = maFonction6();
      }//3 fin if donne[7]
     if (donne[7] == 0) {//3
      for (var nomb = 0; nomb < laforce ; nomb++) {//4
       Fichier1AudioJo.push(donne[1]);
       Fichier1AudioJo.push(donne[2]);
        if (donne[72] > 0) {//5
         for (nomba = 0; nomba < donne[72]; nomba++) {//6
          Fichier1AudioJo.push(le3);
          Fichier1AudioJo.push(donne[4]);
          Fichier1AudioJo.push(donne[1]);
          Fichier1AudioJo.push(donne[4]);
          }//6 fin fo nomba
         }//5
        Fichier1AudioJo.push(donne[9]);
        Fichier1AudioJo.push(donne[10]);
        if (donne[73] > 0) {//5
         for (nombd = 0; nombd < donne[73]; nombd++) {//6
          Fichier1AudioJo.push(le4);
          Fichier1AudioJo.push(donne[12]);
          Fichier1AudioJo.push(donne[9]);
          Fichier1AudioJo.push(donne[12]);
	  }//6 
         }//5
        }//4 fin fo nombd
       }//3 fin else donne[7]
      }//2 fin else donne[5]
     }//1 fin du for donne[71]
    break;//fin donne[11] == 2
//fin zone 2 fronts

//zone 3 fronts
  case 3 :

  for (nombi = 0; nombi < donne[71]; nombi++) {//1

   if ((donne[5] != 0)&&(donne[7] != 0)) {//2
    le3 = maFonction3();
    le4 = maFonction4();
    for (var nomb = 0; nomb < laforce ; nomb++) { //3 height repeat
     Fichier1AudioJo.push(le1);
     Fichier1AudioJo.push(le5);
     if (donne[72] > 0) {//4
      for (nomba = 0; nomba < donne[72]; nomba++) { //5 number of stays in place
       Fichier1AudioJo.push(le3);
       Fichier1AudioJo.push(donne[4]);
       Fichier1AudioJo.push(le1);
       Fichier1AudioJo.push(donne[4]);
       } //5 fin fo nomba
      }//4

     Fichier1AudioJo.push(le2);
     Fichier1AudioJo.push(le6);
     if (donne[73] > 0) {//4
      for (nombd = 0; nombd < donne[73]; nombd++) {//5 number of stays in place
       Fichier1AudioJo.push(le4);
       Fichier1AudioJo.push(donne[12]);
       Fichier1AudioJo.push(le2);
       Fichier1AudioJo.push(donne[12]);
       }//5 
      }//4
    }//3 fin fo nomb
   letri1 = donne[22] == 0 ? donne[18] : le7;
   Fichier1AudioJo.push(letri1); //front3
   letri5 = donne[24] == 0 ? donne[19] : le11;
   Fichier1AudioJo.push(letri5); //front3
   le1 = maFonction1();
   le5 = maFonction5();
   le2 = maFonction2();
   le6 = maFonction6();
   le7 = maFonction7();
   le11 = maFonction11();
   }//2 fin if donne[5] != 0 & donne[7] != 0

   if ((donne[5] != 0)&&(donne[7] == 0)) {//2
    le3 = maFonction3();
    le4 = maFonction4();
    for (var nomb = 0; nomb < laforce ; nomb++) {//3 height repeat
     Fichier1AudioJo.push(le1);
     Fichier1AudioJo.push(donne[2]);
     if (donne[72] > 0) {//4
      for (nomba = 0; nomba < donne[72]; nomba++) {//5 number of stays in place
       Fichier1AudioJo.push(le3);
       Fichier1AudioJo.push(donne[4]);
       Fichier1AudioJo.push(le1);
       Fichier1AudioJo.push(donne[4]);
       }//5 fin fo nomba
      }//4

     Fichier1AudioJo.push(le2);
     Fichier1AudioJo.push(donne[10]);
     if (donne[73] > 0) {//4
      for (nombd = 0; nombd < donne[73]; nombd++) {//5 number of stays in place
       Fichier1AudioJo.push(le4);
       Fichier1AudioJo.push(donne[12]);
       Fichier1AudioJo.push(le2);
       Fichier1AudioJo.push(donne[12]);
       }//5 
      }//4
     }//3 fin fo nomb
   letri1 = donne[22] == 0 ? donne[18] : le7;
   Fichier1AudioJo.push(letri1); //front3
   letri5 = donne[24] == 0 ? donne[19] : le11;
   Fichier1AudioJo.push(letri5); //front3
    le1 = maFonction1();
    le2 = maFonction2();
    le7 = maFonction7();
    le11 = maFonction11();
    }//2 fin if donne[5] donne[7]

   if (donne[5] == 0) {//2
    if (donne[7] != 0) {//3
     for (var nomb = 0; nomb < laforce ; nomb++) {//4
      Fichier1AudioJo.push(donne[1]);
      Fichier1AudioJo.push(le5);
       if (donne[72] > 0) {//5
        for (nomba = 0; nomba < donne[72]; nomba++) {//6
         Fichier1AudioJo.push(le3);
         Fichier1AudioJo.push(donne[4]);
         Fichier1AudioJo.push(donne[1]);
         Fichier1AudioJo.push(donne[4]);
         }//6 fin fo nomba
        }//5
       Fichier1AudioJo.push(donne[9]);
       Fichier1AudioJo.push(le6);
       if (donne[73] > 0) {//5
	for (nombd = 0; nombd < donne[73]; nombd++) {//6
         Fichier1AudioJo.push(le4);
         Fichier1AudioJo.push(donne[12]);
         Fichier1AudioJo.push(donne[9]);
         Fichier1AudioJo.push(donne[12]);
         }//6 
        }//5
       }//4 fin fo nombd
   letri1 = donne[22] == 0 ? donne[18] : le7;
   Fichier1AudioJo.push(letri1); //front3
   letri5 = donne[24] == 0 ? donne[19] : le11;
   Fichier1AudioJo.push(letri5); //front3
      le5 = maFonction5();
      le6 = maFonction6();
      le7 = maFonction7();
      le11 = maFonction11();
      }//3 fin if donne[7]
     if (donne[7] == 0) {//3
      for (var nomb = 0; nomb < laforce ; nomb++) {//4
       Fichier1AudioJo.push(donne[1]);
       Fichier1AudioJo.push(donne[2]);
        if (donne[72] > 0) {//5
         for (nomba = 0; nomba < donne[72]; nomba++) {//6
          Fichier1AudioJo.push(le3);
          Fichier1AudioJo.push(donne[4]);
          Fichier1AudioJo.push(donne[1]);
          Fichier1AudioJo.push(donne[4]);
          }//6 fin fo nomba
         }//5
        Fichier1AudioJo.push(donne[9]);
        Fichier1AudioJo.push(donne[10]);
        if (donne[73] > 0) {//5
         for (nombd = 0; nombd < donne[73]; nombd++) {//6
          Fichier1AudioJo.push(le4);
          Fichier1AudioJo.push(donne[12]);
          Fichier1AudioJo.push(donne[9]);
          Fichier1AudioJo.push(donne[12]);
	  }//6 
         }//5
        }//4 fin fo nombd
   letri1 = donne[22] == 0 ? donne[18] : le7;
   Fichier1AudioJo.push(letri1); //front3
   letri5 = donne[24] == 0 ? donne[19] : le11;
   Fichier1AudioJo.push(letri5); //front3
      le7 = maFonction7();
      le11 = maFonction11();
       }//3 fin else donne[7]
      }//2 fin else donne[5]
     }//1 fin du for donne[71]

        break;//fin donne[11] == 3

//fin zone 3 fronts

//zone 4 fronts

  case 4 :// donne[11]
  for (nombi = 0; nombi < donne[71]; nombi++) {//1

   if ((donne[5] != 0)&&(donne[7] != 0)) {//2
    le3 = maFonction3();
    le4 = maFonction4();
    for (var nomb = 0; nomb < laforce ; nomb++) { //3 height repeat
     Fichier1AudioJo.push(le1);
     Fichier1AudioJo.push(le5);
     if (donne[72] > 0) {//4
      for (nomba = 0; nomba < donne[72]; nomba++) { //5 number of stays in place
       Fichier1AudioJo.push(le3);
       Fichier1AudioJo.push(donne[4]);
       Fichier1AudioJo.push(le1);
       Fichier1AudioJo.push(donne[4]);
       } //5 fin fo nomba
      }//4

     Fichier1AudioJo.push(le2);
     Fichier1AudioJo.push(le6);
     if (donne[73] > 0) {//4
      for (nombd = 0; nombd < donne[73]; nombd++) {//5 number of stays in place
       Fichier1AudioJo.push(le4);
       Fichier1AudioJo.push(donne[12]);
       Fichier1AudioJo.push(le2);
       Fichier1AudioJo.push(donne[12]);
       }//5 
      }//4
    }//3 fin fo nomb
   letri1 = donne[22] == 0 ? donne[18] : le7;
   Fichier1AudioJo.push(letri1); //front3
   letri5 = donne[24] == 0 ? donne[19] : le11;
   Fichier1AudioJo.push(letri5); //front3
   letri2 = donne[31] == 0 ? donne[27] : le8;
   Fichier1AudioJo.push(letri2); //front4
   letri6 = donne[33] == 0 ? donne[28] : le12;
   Fichier1AudioJo.push(letri6); //front4
   le1 = maFonction1();
   le5 = maFonction5();
   le2 = maFonction2();
   le6 = maFonction6();
   le7 = maFonction7();
   le8 = maFonction8();
   le11 = maFonction11();
   le12 = maFonction12();
   }//2 fin if donne[5] != 0 & donne[7] != 0

   if ((donne[5] != 0)&&(donne[7] == 0)) {//2
    le3 = maFonction3();
    le4 = maFonction4();
    for (var nomb = 0; nomb < laforce ; nomb++) {//3 height repeat
     Fichier1AudioJo.push(le1);
     Fichier1AudioJo.push(donne[2]);
     if (donne[72] > 0) {//4
      for (nomba = 0; nomba < donne[72]; nomba++) {//5 number of stays in place
       Fichier1AudioJo.push(le3);
       Fichier1AudioJo.push(donne[4]);
       Fichier1AudioJo.push(le1);
       Fichier1AudioJo.push(donne[4]);
       }//5 fin fo nomba
      }//4

     Fichier1AudioJo.push(le2);
     Fichier1AudioJo.push(donne[10]);
     if (donne[73] > 0) {//4
      for (nombd = 0; nombd < donne[73]; nombd++) {//5 number of stays in place
       Fichier1AudioJo.push(le4);
       Fichier1AudioJo.push(donne[12]);
       Fichier1AudioJo.push(le2);
       Fichier1AudioJo.push(donne[12]);
       }//5 
      }//4
     }//3 fin fo nomb
   letri1 = donne[22] == 0 ? donne[18] : le7;
   Fichier1AudioJo.push(letri1); //front3
   letri5 = donne[24] == 0 ? donne[19] : le11;
   Fichier1AudioJo.push(letri5); //front3
   letri2 = donne[31] == 0 ? donne[27] : le8;
   Fichier1AudioJo.push(letri2); //front4
   letri6 = donne[33] == 0 ? donne[28] : le12;
   Fichier1AudioJo.push(letri6); //front4
    le1 = maFonction1();
    le2 = maFonction2();
    le7 = maFonction7();
    le8 = maFonction8();
    le11 = maFonction11();
    le12 = maFonction12();
    }//2 fin if donne[5] donne[7]

   if (donne[5] == 0) {//2
    if (donne[7] != 0) {//3
     for (var nomb = 0; nomb < laforce ; nomb++) {//4
      Fichier1AudioJo.push(donne[1]);
      Fichier1AudioJo.push(le5);
       if (donne[72] > 0) {//5
        for (nomba = 0; nomba < donne[72]; nomba++) {//6
         Fichier1AudioJo.push(le3);
         Fichier1AudioJo.push(donne[4]);
         Fichier1AudioJo.push(donne[1]);
         Fichier1AudioJo.push(donne[4]);
         }//6 fin fo nomba
        }//5
       Fichier1AudioJo.push(donne[9]);
       Fichier1AudioJo.push(le6);
       if (donne[73] > 0) {//5
	for (nombd = 0; nombd < donne[73]; nombd++) {//6
         Fichier1AudioJo.push(le4);
         Fichier1AudioJo.push(donne[12]);
         Fichier1AudioJo.push(donne[9]);
         Fichier1AudioJo.push(donne[12]);
         }//6 
        }//5
       }//4 fin fo nombd
   letri1 = donne[22] == 0 ? donne[18] : le7;
   Fichier1AudioJo.push(letri1); //front3
   letri5 = donne[24] == 0 ? donne[19] : le11;
   Fichier1AudioJo.push(letri5); //front3
   letri2 = donne[31] == 0 ? donne[27] : le8;
   Fichier1AudioJo.push(letri2); //front4
   letri6 = donne[33] == 0 ? donne[28] : le12;
   Fichier1AudioJo.push(letri6); //front4
      le5 = maFonction5();
      le6 = maFonction6();
      le7 = maFonction7();
      le8 = maFonction8();
      le11 = maFonction11();
      le12 = maFonction12();
      }//3 fin if donne[7]
     if (donne[7] == 0) {//3
      for (var nomb = 0; nomb < laforce ; nomb++) {//4
       Fichier1AudioJo.push(donne[1]);
       Fichier1AudioJo.push(donne[2]);
        if (donne[72] > 0) {//5
         for (nomba = 0; nomba < donne[72]; nomba++) {//6
          Fichier1AudioJo.push(le3);
          Fichier1AudioJo.push(donne[4]);
          Fichier1AudioJo.push(donne[1]);
          Fichier1AudioJo.push(donne[4]);
          }//6 fin fo nomba
         }//5
        Fichier1AudioJo.push(donne[9]);
        Fichier1AudioJo.push(donne[10]);
        if (donne[73] > 0) {//5
         for (nombd = 0; nombd < donne[73]; nombd++) {//6
          Fichier1AudioJo.push(le4);
          Fichier1AudioJo.push(donne[12]);
          Fichier1AudioJo.push(donne[9]);
          Fichier1AudioJo.push(donne[12]);
	  }//6 
         }//5
        }//4 fin fo nombd
   letri1 = donne[22] == 0 ? donne[18] : le7;
   Fichier1AudioJo.push(letri1); //front3
   letri5 = donne[24] == 0 ? donne[19] : le11;
   Fichier1AudioJo.push(letri5); //front3
   letri2 = donne[31] == 0 ? donne[27] : le8;
   Fichier1AudioJo.push(letri2); //front4
   letri6 = donne[33] == 0 ? donne[28] : le12;
   Fichier1AudioJo.push(letri6); //front4
      le7 = maFonction7();
      le8 = maFonction8();
      le11 = maFonction11();
      le12 = maFonction12();
       }//3 fin else donne[7]
      }//2 fin else donne[5]
     }//1 fin du for donne[71]
        break;//fin donne[11] == 4

//fin zone 4 fronts

//zone 5 fronts

  case 5 :// donne[11]

  for (nombi = 0; nombi < donne[71]; nombi++) {//1

   if ((donne[5] != 0)&&(donne[7] != 0)) {//2
    le3 = maFonction3();
    le4 = maFonction4();
    for (var nomb = 0; nomb < laforce ; nomb++) { //3 height repeat
     Fichier1AudioJo.push(le1);
     Fichier1AudioJo.push(le5);
     if (donne[72] > 0) {//4
      for (nomba = 0; nomba < donne[72]; nomba++) { //5 number of stays in place
       Fichier1AudioJo.push(le3);
       Fichier1AudioJo.push(donne[4]);
       Fichier1AudioJo.push(le1);
       Fichier1AudioJo.push(donne[4]);
       } //5 fin fo nomba
      }//4

     Fichier1AudioJo.push(le2);
     Fichier1AudioJo.push(le6);
     if (donne[73] > 0) {//4
      for (nombd = 0; nombd < donne[73]; nombd++) {//5 number of stays in place
       Fichier1AudioJo.push(le4);
       Fichier1AudioJo.push(donne[12]);
       Fichier1AudioJo.push(le2);
       Fichier1AudioJo.push(donne[12]);
       }//5 
      }//4
    }//3 fin fo nomb
   letri1 = donne[22] == 0 ? donne[18] : le7;
   Fichier1AudioJo.push(letri1); //front3
   letri5 = donne[24] == 0 ? donne[19] : le11;
   Fichier1AudioJo.push(letri5); //front3
   letri2 = donne[31] == 0 ? donne[27] : le8;
   Fichier1AudioJo.push(letri2); //front4
   letri6 = donne[33] == 0 ? donne[28] : le12;
   Fichier1AudioJo.push(letri6); //front4
   letri3 = donne[40] == 0 ? donne[36] : le9;
   Fichier1AudioJo.push(letri3); //front5
   letri7 = donne[42] == 0 ? donne[37] : le13;
   Fichier1AudioJo.push(letri7); //front5
   le1 = maFonction1();
   le5 = maFonction5();
   le2 = maFonction2();
   le6 = maFonction6();
   le7 = maFonction7();
   le8 = maFonction8();
   le9 = maFonction9();
   le11 = maFonction11();
   le12 = maFonction12();
   le13 = maFonction13();
   }//2 fin if donne[5] != 0 & donne[7] != 0

   if ((donne[5] != 0)&&(donne[7] == 0)) {//2
    le3 = maFonction3();
    le4 = maFonction4();
    for (var nomb = 0; nomb < laforce ; nomb++) {//3 height repeat
     Fichier1AudioJo.push(le1);
     Fichier1AudioJo.push(donne[2]);
     if (donne[72] > 0) {//4
      for (nomba = 0; nomba < donne[72]; nomba++) {//5 number of stays in place
       Fichier1AudioJo.push(le3);
       Fichier1AudioJo.push(donne[4]);
       Fichier1AudioJo.push(le1);
       Fichier1AudioJo.push(donne[4]);
       }//5 fin fo nomba
      }//4

     Fichier1AudioJo.push(le2);
     Fichier1AudioJo.push(donne[10]);
     if (donne[73] > 0) {//4
      for (nombd = 0; nombd < donne[73]; nombd++) {//5 number of stays in place
       Fichier1AudioJo.push(le4);
       Fichier1AudioJo.push(donne[12]);
       Fichier1AudioJo.push(le2);
       Fichier1AudioJo.push(donne[12]);
       }//5 
      }//4
     }//3 fin fo nomb
   letri1 = donne[22] == 0 ? donne[18] : le7;
   Fichier1AudioJo.push(letri1); //front3
   letri5 = donne[24] == 0 ? donne[19] : le11;
   Fichier1AudioJo.push(letri5); //front3
   letri2 = donne[31] == 0 ? donne[27] : le8;
   Fichier1AudioJo.push(letri2); //front4
   letri6 = donne[33] == 0 ? donne[28] : le12;
   Fichier1AudioJo.push(letri6); //front4
   letri3 = donne[40] == 0 ? donne[36] : le9;
   Fichier1AudioJo.push(letri3); //front5
   letri7 = donne[42] == 0 ? donne[37] : le13;
   Fichier1AudioJo.push(letri7); //front5
    le1 = maFonction1();
    le2 = maFonction2();
    le7 = maFonction7();
    le8 = maFonction8();
   le9 = maFonction9();
   le11 = maFonction11();
   le12 = maFonction12();
   le13 = maFonction13();
    }//2 fin if donne[5] donne[7]

   if (donne[5] == 0) {//2
    if (donne[7] != 0) {//3
     for (var nomb = 0; nomb < laforce ; nomb++) {//4
      Fichier1AudioJo.push(donne[1]);
      Fichier1AudioJo.push(le5);
       if (donne[72] > 0) {//5
        for (nomba = 0; nomba < donne[72]; nomba++) {//6
         Fichier1AudioJo.push(le3);
         Fichier1AudioJo.push(donne[4]);
         Fichier1AudioJo.push(donne[1]);
         Fichier1AudioJo.push(donne[4]);
         }//6 fin fo nomba
        }//5
       Fichier1AudioJo.push(donne[9]);
       Fichier1AudioJo.push(le6);
       if (donne[73] > 0) {//5
	for (nombd = 0; nombd < donne[73]; nombd++) {//6
         Fichier1AudioJo.push(le4);
         Fichier1AudioJo.push(donne[12]);
         Fichier1AudioJo.push(donne[9]);
         Fichier1AudioJo.push(donne[12]);
         }//6 
        }//5
       }//4 fin fo nombd
    le1 = maFonction1();
    le2 = maFonction2();
   letri3 = donne[40] == 0 ? donne[36] : le9;
   Fichier1AudioJo.push(letri3); //front5
   letri7 = donne[42] == 0 ? donne[37] : le13;
   Fichier1AudioJo.push(letri7); //front5
      le5 = maFonction5();
      le6 = maFonction6();
      le9 = maFonction9();
      le13 = maFonction13();
      }//3 fin if donne[7]
     if (donne[7] == 0) {//3
      for (var nomb = 0; nomb < laforce ; nomb++) {//4
       Fichier1AudioJo.push(donne[1]);
       Fichier1AudioJo.push(donne[2]);
        if (donne[72] > 0) {//5
         for (nomba = 0; nomba < donne[72]; nomba++) {//6
          Fichier1AudioJo.push(le3);
          Fichier1AudioJo.push(donne[4]);
          Fichier1AudioJo.push(donne[1]);
          Fichier1AudioJo.push(donne[4]);
          }//6 fin fo nomba
         }//5
        Fichier1AudioJo.push(donne[9]);
        Fichier1AudioJo.push(donne[10]);
        if (donne[73] > 0) {//5
         for (nombd = 0; nombd < donne[73]; nombd++) {//6
          Fichier1AudioJo.push(le4);
          Fichier1AudioJo.push(donne[12]);
          Fichier1AudioJo.push(donne[9]);
          Fichier1AudioJo.push(donne[12]);
	  }//6 
         }//5
        }//4 fin fo nombd
   letri1 = donne[22] == 0 ? donne[18] : le7;
   Fichier1AudioJo.push(letri1); //front3
   letri5 = donne[24] == 0 ? donne[19] : le11;
   Fichier1AudioJo.push(letri5); //front3
   letri2 = donne[31] == 0 ? donne[27] : le8;
   Fichier1AudioJo.push(letri2); //front4
   letri6 = donne[33] == 0 ? donne[28] : le12;
   Fichier1AudioJo.push(letri6); //front4
   letri3 = donne[40] == 0 ? donne[36] : le9;
   Fichier1AudioJo.push(letri3); //front5
   letri7 = donne[42] == 0 ? donne[37] : le13;
   Fichier1AudioJo.push(letri7); //front5
       le7 = maFonction7();
       le8 = maFonction8();
       le9 = maFonction9();
       le11 = maFonction11();
       le12 = maFonction12();
       le13 = maFonction13();
       }//3 fin else donne[7]
      }//2 fin else donne[5]
     }//1 fin du for donne[71]

        break;//fin donne[11] == 5

//fin zone 5 fronts

//zone 6 fronts

  case 6 :// donne[11]
  for (nombi = 0; nombi < donne[71]; nombi++) {//1

   if ((donne[5] != 0)&&(donne[7] != 0)) {//2
    le3 = maFonction3();
    le4 = maFonction4();
    for (var nomb = 0; nomb < laforce ; nomb++) { //3 height repeat
     Fichier1AudioJo.push(le1);
     Fichier1AudioJo.push(le5);
     if (donne[72] > 0) {//4
      for (nomba = 0; nomba < donne[72]; nomba++) { //5 number of stays in place
       Fichier1AudioJo.push(le3);
       Fichier1AudioJo.push(donne[4]);
       Fichier1AudioJo.push(le1);
       Fichier1AudioJo.push(donne[4]);
       } //5 fin fo nomba
      }//4

     Fichier1AudioJo.push(le2);
     Fichier1AudioJo.push(le6);
     if (donne[73] > 0) {//4
      for (nombd = 0; nombd < donne[73]; nombd++) {//5 number of stays in place
       Fichier1AudioJo.push(le4);
       Fichier1AudioJo.push(donne[12]);
       Fichier1AudioJo.push(le2);
       Fichier1AudioJo.push(donne[12]);
       }//5 
      }//4
    }//3 fin fo nomb
   letri1 = donne[22] == 0 ? donne[18] : le7;
   Fichier1AudioJo.push(letri1); //front3
   letri5 = donne[24] == 0 ? donne[19] : le11;
   Fichier1AudioJo.push(letri5); //front3
   letri2 = donne[31] == 0 ? donne[27] : le8;
   Fichier1AudioJo.push(letri2); //front4
   letri6 = donne[33] == 0 ? donne[28] : le12;
   Fichier1AudioJo.push(letri6); //front4
   letri3 = donne[40] == 0 ? donne[36] : le9;
   Fichier1AudioJo.push(letri3); //front5
   letri7 = donne[42] == 0 ? donne[37] : le13;
   Fichier1AudioJo.push(letri7); //front5
   letri4 = donne[49] == 0 ? donne[45] : le10;
   Fichier1AudioJo.push(letri4); //front6
   letri8 = donne[51] == 0 ? donne[46] : le14;
   Fichier1AudioJo.push(letri8); //front6
   le1 = maFonction1();
   le5 = maFonction5();
   le2 = maFonction2();
   le6 = maFonction6();
   le7 = maFonction7();
   le8 = maFonction8();
   le9 = maFonction9();
   le10 = maFonction10();
   le11 = maFonction11();
   le12 = maFonction12();
   le13 = maFonction13();
   le14 = maFonction14();
   }//2 fin if donne[5] != 0 & donne[7] != 0

   if ((donne[5] != 0)&&(donne[7] == 0)) {//2
    le3 = maFonction3();
    le4 = maFonction4();
    for (var nomb = 0; nomb < laforce ; nomb++) {//3 height repeat
     Fichier1AudioJo.push(le1);
     Fichier1AudioJo.push(donne[2]);
     if (donne[72] > 0) {//4
      for (nomba = 0; nomba < donne[72]; nomba++) {//5 number of stays in place
       Fichier1AudioJo.push(le3);
       Fichier1AudioJo.push(donne[4]);
       Fichier1AudioJo.push(le1);
       Fichier1AudioJo.push(donne[4]);
       }//5 fin fo nomba
      }//4

     Fichier1AudioJo.push(le2);
     Fichier1AudioJo.push(donne[10]);
     if (donne[73] > 0) {//4
      for (nombd = 0; nombd < donne[73]; nombd++) {//5 number of stays in place
       Fichier1AudioJo.push(le4);
       Fichier1AudioJo.push(donne[12]);
       Fichier1AudioJo.push(le2);
       Fichier1AudioJo.push(donne[12]);
       }//5 
      }//4
     }//3 fin fo nomb
   letri1 = donne[22] == 0 ? donne[18] : le7;
   Fichier1AudioJo.push(letri1); //front3
   letri5 = donne[24] == 0 ? donne[19] : le11;
   Fichier1AudioJo.push(letri5); //front3
   letri2 = donne[31] == 0 ? donne[27] : le8;
   Fichier1AudioJo.push(letri2); //front4
   letri6 = donne[33] == 0 ? donne[28] : le12;
   Fichier1AudioJo.push(letri6); //front4
   letri3 = donne[40] == 0 ? donne[36] : le9;
   Fichier1AudioJo.push(letri3); //front5
   letri7 = donne[42] == 0 ? donne[37] : le13;
   Fichier1AudioJo.push(letri7); //front5
   letri4 = donne[49] == 0 ? donne[45] : le10;
   Fichier1AudioJo.push(letri4); //front6
   letri8 = donne[51] == 0 ? donne[46] : le14;
   Fichier1AudioJo.push(letri8); //front6
    le1 = maFonction1();
    le2 = maFonction2();
    le7 = maFonction7();
    le8 = maFonction8();
    le9 = maFonction9();
    le10 = maFonction10();
    le11 = maFonction11();
    le12 = maFonction12();
    le13 = maFonction13();
    le14 = maFonction14();
    }//2 fin if donne[5] donne[7]

   if (donne[5] == 0) {//2
    if (donne[7] != 0) {//3
     for (var nomb = 0; nomb < laforce ; nomb++) {//4
      Fichier1AudioJo.push(donne[1]);
      Fichier1AudioJo.push(le5);
       if (donne[72] > 0) {//5
        for (nomba = 0; nomba < donne[72]; nomba++) {//6
         Fichier1AudioJo.push(le3);
         Fichier1AudioJo.push(donne[4]);
         Fichier1AudioJo.push(donne[1]);
         Fichier1AudioJo.push(donne[4]);
         }//6 fin fo nomba
        }//5
       Fichier1AudioJo.push(donne[9]);
       Fichier1AudioJo.push(le6);
       if (donne[73] > 0) {//5
	for (nombd = 0; nombd < donne[73]; nombd++) {//6
         Fichier1AudioJo.push(le4);
         Fichier1AudioJo.push(donne[12]);
         Fichier1AudioJo.push(donne[9]);
         Fichier1AudioJo.push(donne[12]);
         }//6 
        }//5
       }//4 fin fo nombd
   letri1 = donne[22] == 0 ? donne[18] : le7;
   Fichier1AudioJo.push(letri1); //front3
   letri5 = donne[24] == 0 ? donne[19] : le11;
   Fichier1AudioJo.push(letri5); //front3
   letri2 = donne[31] == 0 ? donne[27] : le8;
   Fichier1AudioJo.push(letri2); //front4
   letri6 = donne[33] == 0 ? donne[28] : le12;
   Fichier1AudioJo.push(letri6); //front4
   letri3 = donne[40] == 0 ? donne[36] : le9;
   Fichier1AudioJo.push(letri3); //front5
   letri7 = donne[42] == 0 ? donne[37] : le13;
   Fichier1AudioJo.push(letri7); //front5
   letri4 = donne[49] == 0 ? donne[45] : le10;
   Fichier1AudioJo.push(letri4); //front6
   letri8 = donne[51] == 0 ? donne[46] : le14;
   Fichier1AudioJo.push(letri8); //front6
      le5 = maFonction5();
      le6 = maFonction6();
      le7 = maFonction7();
      le8 = maFonction8();
      le9 = maFonction9();
      le10 = maFonction10();
      le11 = maFonction11();
      le12 = maFonction12();
      le13 = maFonction13();
      le14 = maFonction14();
      }//3 fin if donne[7]
     if (donne[7] == 0) {//3
      for (var nomb = 0; nomb < laforce ; nomb++) {//4
       Fichier1AudioJo.push(donne[1]);
       Fichier1AudioJo.push(donne[2]);
        if (donne[72] > 0) {//5
         for (nomba = 0; nomba < donne[72]; nomba++) {//6
          Fichier1AudioJo.push(le3);
          Fichier1AudioJo.push(donne[4]);
          Fichier1AudioJo.push(donne[1]);
          Fichier1AudioJo.push(donne[4]);
          }//6 fin fo nomba
         }//5
        Fichier1AudioJo.push(donne[9]);
        Fichier1AudioJo.push(donne[10]);
        if (donne[73] > 0) {//5
         for (nombd = 0; nombd < donne[73]; nombd++) {//6
          Fichier1AudioJo.push(le4);
          Fichier1AudioJo.push(donne[12]);
          Fichier1AudioJo.push(donne[9]);
          Fichier1AudioJo.push(donne[12]);
	  }//6 
         }//5
        }//4 fin fo nombd
   letri1 = donne[22] == 0 ? donne[18] : le7;
   Fichier1AudioJo.push(letri1); //front3
   letri5 = donne[24] == 0 ? donne[19] : le11;
   Fichier1AudioJo.push(letri5); //front3
   letri2 = donne[31] == 0 ? donne[27] : le8;
   Fichier1AudioJo.push(letri2); //front4
   letri6 = donne[33] == 0 ? donne[28] : le12;
   Fichier1AudioJo.push(letri6); //front4
   letri3 = donne[40] == 0 ? donne[36] : le9;
   Fichier1AudioJo.push(letri3); //front5
   letri7 = donne[42] == 0 ? donne[37] : le13;
   Fichier1AudioJo.push(letri7); //front5
   letri4 = donne[49] == 0 ? donne[45] : le10;
   Fichier1AudioJo.push(letri4); //front6
   letri8 = donne[51] == 0 ? donne[46] : le14;
   Fichier1AudioJo.push(letri8); //front6
      le7 = maFonction7();
      le8 = maFonction8();
      le9 = maFonction9();
      le10 = maFonction10();
      le11 = maFonction11();
      le12 = maFonction12();
      le13 = maFonction13();
      le14 = maFonction14();
       }//3 fin else donne[7]
      }//2 fin else donne[5]
     }//1 fin du for donne[71]
        break;	//fin zone 6 fronts			
}//fin switch donne[11] 

        break;	//donne[53] = 0	

  case 1 :// donne[53] = 1

Fichier1AudioJo.push(Number(donne[54]) -(- 128));
Fichier1AudioJo.push(donne[55]);
Fichier1AudioJo.push(128 - donne[54]); 
Fichier1AudioJo.push(donne[55]);

if(donne[56] == 0){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[55]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[55]);


} // fin for nombi
} // fin if donne[56] == 0

if((donne[56] > 0)&&(donne[57]==0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[55]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[55]);
} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0

if((donne[56] > 0)&&(donne[57] > 0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[55]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[55]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0


        break;	//donne[53] = 1

/*****************************************/

  case 2 :// donne[53] = 2

Fichier1AudioJo.push(Number(donne[54]) -(- 128));
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(128 - donne[54]); 
Fichier1AudioJo.push(donne[10]);

if(donne[56] == 0){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);


} // fin for nombi
} // fin if donne[56] == 0

if((donne[56] > 0)&&(donne[57]==0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0

if((donne[56] > 0)&&(donne[57] > 0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0


        break;	//donne[53] = 2
/*****************************************/

  case 3 :// donne[53] = 3

Fichier1AudioJo.push(Number(donne[54]) -(- 128)); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(128 - donne[54]); 
Fichier1AudioJo.push(donne[10]);

if(donne[56] == 0){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);


} // fin for nombi
} // fin if donne[56] == 0

if((donne[56] > 0)&&(donne[57]==0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0

if((donne[56] > 0)&&(donne[57] > 0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0


        break;	//donne[53] = 3
/*****************************************/

  case 4 :// donne[53] = 4

Fichier1AudioJo.push(Number(donne[54]) -(- 128));
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(128 - donne[54]); 
Fichier1AudioJo.push(donne[10]);

if(donne[56] == 0){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);


} // fin for nombi
} // fin if donne[56] == 0

if((donne[56] > 0)&&(donne[57]==0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[1]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0

if((donne[56] > 0)&&(donne[57] > 0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0


        break;	//donne[53] = 4

/*****************************************/

  case 5 :// donne[53] = 5

Fichier1AudioJo.push(Number(donne[54]) -(- 128));
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(128 - donne[54]); 
Fichier1AudioJo.push(donne[10]);

if(donne[56] == 0){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);


} // fin for nombi
} // fin if donne[56] == 0

if((donne[56] > 0)&&(donne[57]==0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0

if((donne[56] > 0)&&(donne[57] > 0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0


        break;	//donne[53] = 5

/*****************************************/

  case 6 :// donne[53] = 6

Fichier1AudioJo.push(Number(donne[54]) -(- 128));
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(128 - donne[54]); 
Fichier1AudioJo.push(donne[10]);

if(donne[56] == 0){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);

} // fin for nombi
} // fin if donne[56] == 0

if((donne[56] > 0)&&(donne[57]==0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);

} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0

if((donne[56] > 0)&&(donne[57] > 0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]


} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0


        break;	//donne[53] = 6

/*****************************************/

  case 7 :// donne[53] = 7

Fichier1AudioJo.push(Number(donne[54]) -(- 128));
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(128 - donne[54]); 
Fichier1AudioJo.push(donne[10]);

if(donne[56] == 0){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);

} // fin for nombi
} // fin if donne[56] == 0

if((donne[56] > 0)&&(donne[57]==0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0

if((donne[56] > 0)&&(donne[57] > 0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]


} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0


        break;	//donne[53] = 7

/*****************************************/

  case 8 :// donne[53] = 8

Fichier1AudioJo.push(Number(donne[54]) -(- 128));
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(128 - donne[54]); 
Fichier1AudioJo.push(donne[10]);

if(donne[56] == 0){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);

} // fin for nombi
} // fin if donne[56] == 0

if((donne[56] > 0)&&(donne[57]==0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0

if((donne[56] > 0)&&(donne[57] > 0)){

for (nombi = 0; nombi < donne[71]; nombi++) {

waxx1 = maFonction8();
waxx2 = maFonction7();

for (var nombia = 0; nombia < donne[56]; nombia++) {

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[37]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[28]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[19]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]

for (var nombiab = 0; nombiab < donne[59]; nombiab ++) {
Fichier1AudioJo.push(waxx1); 
Fichier1AudioJo.push(donne[10]);
Fichier1AudioJo.push(waxx1-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]
for (var nombiab = 0; nombiab < donne[59]; nombiab++) {
Fichier1AudioJo.push(waxx2); 
Fichier1AudioJo.push(donne[2]);
Fichier1AudioJo.push(waxx2-1); 
Fichier1AudioJo.push(donne[57]);
} // fin for donne[59]


} // fin for donne[56]


} // fin for nombi
} // fin if donne[56] > 0


        break;	//donne[53] = 8

}//fin switch  Number(donne[53])

return Fichier1AudioJo;

}



