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
