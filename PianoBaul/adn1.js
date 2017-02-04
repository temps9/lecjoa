 //preparation
var m={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[],11:[],12:[],13:[],14:[],15:[],16:[],17:[]
,18:[],19:[],20:[],21:[],22:[],23:[],24:[],25:[],26:[],27:[],28:[],29:[],30:[],31:[],32:[]
,33:[],34:[],35:[],36:[],37:[],38:[],39:[],40:[],41:[],42:[],43:[],44:[],45:[],46:[],47:[]};
var val1 = [1, 220, 169, 0, 1, 3, 130, 0, 0, 30,
169, 6, 10, 3, 129, 0, 0, 0, 220, 169,
0, 0, 3, 129, 0, 0, 0, 30, 169, 0,
0, 3, 129, 0, 0, 0, 131, 169, 0, 0,
3, 130, 0, 0, 0, 129, 169, 0, 0, 3,
129, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 17, 1, 0, 36];
//duration front wave
var val = [169, 159, 150, 142, 134, 126, 119, 113, 106, 100, 95, 89,
84, 80, 75, 71, 67, 63, 60, 56, 53, 50, 47, 45,
42, 40, 38, 35, 33, 32, 30, 28, 27, 25, 24, 22,
21, 20, 19, 18, 17, 16, 15, 14, 13, 13, 12, 11];
//mode 1 duration variation amplitude front wave
var val5 = [17, 18, 19, 20, 21, 23, 24, 25, 27, 29, 30, 32,
34, 36, 38, 40, 44, 46, 48, 51, 54, 57, 61, 64,
68, 72, 76, 82, 84, 90, 96, 103, 106, 115, 120, 131];
//mode 2 duration variation amplitude front wave
var val7 = [17, 18, 19, 20, 21, 23, 24, 25, 27, 29, 30, 32,
17, 18, 19, 20, 21, 23, 24, 25, 27, 29, 30, 32,
17, 18, 19, 20, 21, 23, 24, 25, 27, 29, 30, 32];
//mode 3 duration variation amplitude front wave
var val8 = [17, 16, 15, 14, 13, 13, 12, 11, 11, 10,
10, 9, 8, 8, 8, 7, 7, 6, 6, 6,
5, 5, 5, 5, 4, 4, 4, 4, 3, 3,
3, 3, 3, 3, 2, 2, 2, 2, 2, 2,
2, 2, 2, 1, 1, 1, 1, 1];
//mode 4 duration variation amplitude front wave
var val9 = [17, 16, 15, 14, 13, 13, 12, 11, 11, 10,
10, 9, 8, 8, 8, 7, 7, 6, 6, 6,
5, 5, 5, 5, 4, 4, 4, 4, 3, 3,
3, 3, 3, 3, 2, 2, 2, 2, 2, 2,
2, 2, 2, 1, 1, 1, 1, 1];
//construction m
for(var b1= 0; b1 < 48; b1++)
{
for(var b2= 0; b2 < 2; b2++)
{
m[b1][b2]=val1[b2];
}
for(var b3= 3; b3 < 10; b3++)
{
m[b1][b3]=val1[b3];
}
for(var b4= 11; b4 < 75; b4++)
{
m[b1][b4]=val1[b4];
}
m[b1][2]=(val[b1]) ;
m[b1][10]= (val[b1]);
m[b1][19]= (val[b1]) * 0.5;
m[b1][28]= (val[b1]) * 0.5;
m[b1][37]= (val[b1]) * 0.25;
m[b1][46]= (val[b1]) * 0.25;
m[b1][71]= (val5[b1]);
}

var don = {
  1: m[0], 2: m[1], 3: m[2], 4: m[3], 5: m[4], 6: m[5], 7: m[6], 8: m[7], 9: m[8], 10: m[9], 11: m[10], 
12: m[11],13: m[12], 14: m[13], 15: m[14], 16: m[15], 17: m[16], 18: m[17], 19: m[18], 20: m[19], 21: m[20], 
22: m[21], 23: m[22], 24: m[23],25: m[24], 26: m[25], 27: m[26], 28: m[27], 29: m[28], 30: m[29], 31: m[30], 
32: m[31], 33: m[32], 34: m[33], 35: m[34], 36: m[35]
}

var total = [];
var total1 = [];
for(var uiu= 1; uiu < 37; uiu++)
{
total[uiu -1] = "dan"+[uiu]+"n";
total1[uiu -1]=don[uiu];
}

for(var ui= 0; ui < 36; ui++)
{
for(var i= 0; i < 75; i++)
{
var nouveauinput;
function ajouteElemen() {
var body   = document.body || document.getElementsByTagName('body')[0],
nouveauinput  =  document.createElement("input");
nouveauinput.setAttribute("type", "number");
nouveauinput.setAttribute("id", total[ui]+i);
nouveauinput.setAttribute("value", total1[ui][i]);
nouveauinput.setAttribute("style", "display: none;");
body.insertBefore(nouveauinput,body.childNodes[0]);
}  
ajouteElemen();
}
}


