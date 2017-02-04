
/*****************debut adaptateur.js****permet de dire que c'est de l'audio******/
var monhexa, NbPtTotal = 0;
var leraw1 = [];


  var durerentete = NbPtTotal * 2;
  var longueurentete = durerentete + 44 - 8;
var convertisseur = function swap16(val) {
    return ((val & 0xFF) << 8)
           | ((val >> 8) & 0xFF);
}

//samples = durerentete*0.0625;



var app1 = {};

(function() {

    app1.utility = {

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
    app1.config = {
        channels : 1,
        sampleRate : 44100,
        bitsPerSample : 16,
    }

}());

(function(){

    var pack = app1.utility.pack;
    var config = app1.config;

    // constructor
    app1.wave1 = function (_data) {
        this.data = _data;
    };

    app1.wave1.prototype = {

        // Generate the wave content by concatenation, and encode it to base64.
        generate1 : function () {
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
                pack("V", "0016"),
                pack("v", "0001"),// linear PCM
                pack("v", "0001"),// channels
                pack("V", "44100"),
                pack("V", 44100 * 2), // ByteRate
                pack("v", 2), // BlockAlign
                pack("v", 16)
            ];
            return chunk1.join('');
        },

        // Generate the content of the data chunk
        makeChunk2 : function () {
            var data = this.data;

            var chunk2 = [
                "data", // chunk ID
//                pack("V", data.samples * 2), // Chunk length
                data.leraw1
            ];
            return chunk2.join('');
        },

        // Generate the header chunk
        makeHeader : function () {
            var data = this.data;

            var header = [
                "RIFF",
                pack("V", NbPtTotal*2), // total lenght
                "WAVE"
            ];
            return header.join('');
        }

    };

}());




/***********************fin adaptateur.js***********/
