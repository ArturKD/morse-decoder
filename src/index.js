const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let word = expr.match(new RegExp(".{1," + 10 + "}", "g"));

    for (let i = 0; i < word.length; i++) {
        let lette = word[i].match(new RegExp(".{1," + 2 + "}", "g"));

        word[i] = lette.map( y => {
            if ( y === "10") return ".";
            if ( y === "11") return "-";
            if ( y === "00") return "";
            return y;
        }).join("");

        word[i] = word[i].replace("**********", " ");
    }
    word = word.map( y => MORSE_TABLE[y] || y);
    return word.join("");
}

module.exports = {
    decode
}