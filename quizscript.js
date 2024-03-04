var cos = {
    1: ["$$ cos(\\frac{\\pi }{6}) $$", "s3/2"],
    2: ["$$ cos(\\frac{\\pi }{4}) $$", "s2/2"],
    3: ["$$ cos(\\frac{\\pi }{3}) $$", "1/2"],
    4: ["$$ cos(\\frac{\\pi }{2}) $$", "0"],
    5: ["$$ cos(\\frac{2\\pi }{3}) $$", "-1/2"],
    6: ["$$ cos(\\frac{3\\pi }{4}) $$", "-s2/2"],
    7: ["$$ cos(\\frac{5\\pi }{6}) $$", "-s3/2"], 
    8: ["$$ cos(\\pi) $$", "-1"],
    9: ["$$ cos(\\frac{7\\pi }{6}) $$", "-s3/2"],
    10: ["$$ cos(\\frac{5\\pi }{4}) $$", "-s2/2"],
    11: ["$$ cos(\\frac{4\\pi }{3}) $$", "-1/2"],
    12: ["$$ cos(\\frac{3\\pi }{2}) $$", "0"],
    13: ["$$ cos(\\frac{5\\pi }{3}) $$", "1/2"],
    14: ["$$ cos(\\frac{7\\pi }{4}) $$", "s2/2"],
    15: ["$$ cos(\\frac{11\\pi }{6}) $$", "s3/2"],
    16: ["$$ cos(0) $$", "1"]
}

var sin = {
    1: ["$$ sin(\\frac{\\pi }{6}) $$", "1/2"],
    2: ["$$ sin(\\frac{\\pi }{4}) $$", "s2/2"],
    3: ["$$ sin(\\frac{\\pi }{3}) $$", "s3/2"],
    4: ["$$ sin(\\frac{\\pi }{2}) $$", "1"],
    5: ["$$ sin(\\frac{2\\pi }{3}) $$", "s3/2"],
    6: ["$$ sin(\\frac{3\\pi }{4}) $$", "s2/2"],
    7: ["$$ sin(\\frac{5\\pi }{6}) $$", "1/2"], 
    8: ["$$ sin(\\pi) $$", "0"],
    9: ["$$ sin(\\frac{7\\pi }{6}) $$", "-1/2"],
    10: ["$$ sin(\\frac{5\\pi }{4}) $$", "-s2/2"],
    11: ["$$ sin(\\frac{4\\pi }{3}) $$", "-s3/2"],
    12: ["$$ sin(\\frac{3\\pi }{2}) $$", "-1"],
    13: ["$$ sin(\\frac{5\\pi }{3}) $$", "-s3/2"],
    14: ["$$ sin(\\frac{7\\pi }{4}) $$", "-s2/2"],
    15: ["$$ sin(\\frac{11\\pi }{6}) $$", "-1/2"],
    16: ["$$ sin(0) $$", "0"]
}

var tan = {
    1: ["$$ tan(\\frac{\\pi }{6}) $$", "s3/3"],
    2: ["$$ tan(\\frac{\\pi }{4}) $$", "1"],
    3: ["$$ tan(\\frac{\\pi }{3}) $$", "s3"],
    4: ["$$ tan(\\frac{\\pi }{2}) $$", "u"],
    5: ["$$ tan(\\frac{2\\pi }{3}) $$", "-s3"],
    6: ["$$ tan(\\frac{3\\pi }{4}) $$", "-1"],
    7: ["$$ tan(\\frac{5\\pi }{6}) $$", "-s3/3"], 
    8: ["$$ tan(\\pi) $$", "0"],
    9: ["$$ tan(\\frac{7\\pi }{6}) $$", "s3/3"],
    10: ["$$ tan(\\frac{5\\pi }{4}) $$", "1"],
    11: ["$$ tan(\\frac{4\\pi }{3}) $$", "s3"],
    12: ["$$ tan(\\frac{3\\pi }{2}) $$", "u"],
    13: ["$$ tan(\\frac{5\\pi }{3}) $$", "-s3"],
    14: ["$$ tan(\\frac{7\\pi }{4}) $$", "-1"],
    15: ["$$ tan(\\frac{11\\pi }{6}) $$", "-s3/3"],
    16: ["$$ tan(0) $$", "0"]
}

var sec = {
    1: ["$$ sec(\\frac{\\pi }{6}) $$", "2s3/3"],
    2: ["$$ sec(\\frac{\\pi }{4}) $$", "s2"],
    3: ["$$ sec(\\frac{\\pi }{3}) $$", "2"],
    4: ["$$ sec(\\frac{\\pi }{2}) $$", "u"],
    5: ["$$ sec(\\frac{2\\pi }{3}) $$", "-2"],
    6: ["$$ sec(\\frac{3\\pi }{4}) $$", "-s2"],
    7: ["$$ sec(\\frac{5\\pi }{6}) $$", "-2s3/3"], 
    8: ["$$ sec(\\pi) $$", "-1"],
    9: ["$$ sec(\\frac{7\\pi }{6}) $$", "-2s3/3"],
    10: ["$$ sec(\\frac{5\\pi }{4}) $$", "-s2"],
    11: ["$$ sec(\\frac{4\\pi }{3}) $$", "-2"],
    12: ["$$ sec(\\frac{3\\pi }{2}) $$", "u"],
    13: ["$$ sec(\\frac{5\\pi }{3}) $$", "-2"],
    14: ["$$ sec(\\frac{7\\pi }{4}) $$", "s2"],
    15: ["$$ sec(\\frac{11\\pi }{6}) $$", "2s3/3"],
    16: ["$$ sec(0) $$", "1"]
}

var csc = {
    1: ["$$ csc(\\frac{\\pi }{6}) $$", "2"],
    2: ["$$ csc(\\frac{\\pi }{4}) $$", "s2"],
    3: ["$$ csc(\\frac{\\pi }{3}) $$", "2s3/3"],
    4: ["$$ csc(\\frac{\\pi }{2}) $$", "1"],
    5: ["$$ csc(\\frac{2\\pi }{3}) $$", "2s3/3"],
    6: ["$$ csc(\\frac{3\\pi }{4}) $$", "s2"],
    7: ["$$ csc(\\frac{5\\pi }{6}) $$", "2"], 
    8: ["$$ csc(\\pi) $$", "u"],
    9: ["$$ csc(\\frac{7\\pi }{6}) $$", "-2"],
    10: ["$$ csc(\\frac{5\\pi }{4}) $$", "-s2"],
    11: ["$$ csc(\\frac{4\\pi }{3}) $$", "-2s3/3"],
    12: ["$$ csc(\\frac{3\\pi }{2}) $$", "-1"],
    13: ["$$ csc(\\frac{5\\pi }{3}) $$", "-2s3/3"],
    14: ["$$ csc(\\frac{7\\pi }{4}) $$", "s2"],
    15: ["$$ csc(\\frac{11\\pi }{6}) $$", "-2"],
    16: ["$$ csc(0) $$", "u"]
}

var cot = {
    1: ["$$ cot(\\frac{\\pi }{6}) $$", "s3"],
    2: ["$$ cot(\\frac{\\pi }{4}) $$", "1"],
    3: ["$$ cot(\\frac{\\pi }{3}) $$", "s3/3"],
    4: ["$$ cot(\\frac{\\pi }{2}) $$", "0"],
    5: ["$$ cot(\\frac{2\\pi }{3}) $$", "-s3/3"],
    6: ["$$ cot(\\frac{3\\pi }{4}) $$", "-1"],
    7: ["$$ cot(\\frac{5\\pi }{6}) $$", "-s3"], 
    8: ["$$ cot(\\pi) $$", "u"],
    9: ["$$ cot(\\frac{7\\pi }{6}) $$", "s3"],
    10: ["$$ cot(\\frac{5\\pi }{4}) $$", "1"],
    11: ["$$ cot(\\frac{4\\pi }{3}) $$", "s3/3"],
    12: ["$$ cot(\\frac{3\\pi }{2}) $$", "0"],
    13: ["$$ cot(\\frac{5\\pi }{3}) $$", "-s3"],
    14: ["$$ cot(\\frac{7\\pi }{4}) $$", "-1"],
    15: ["$$ cot(\\frac{11\\pi }{6}) $$", "-s3/3"],
    16: ["$$ cot(0) $$", "u"]
}

var master1 = {
    1: ["$$ cos(\\frac{\\pi }{6}) $$", "s3/2"],
    2: ["$$ cos(\\frac{\\pi }{4}) $$", "s2/2"],
    3: ["$$ cos(\\frac{\\pi }{3}) $$", "1/2"],
    4: ["$$ cos(\\frac{\\pi }{2}) $$", "0"],
    5: ["$$ cos(\\frac{2\\pi }{3}) $$", "-1/2"],
    6: ["$$ cos(\\frac{3\\pi }{4}) $$", "-s2/2"],
    7: ["$$ cos(\\frac{5\\pi }{6}) $$", "-s3/2"], 
    8: ["$$ cos(\\pi) $$", "-1"],
    9: ["$$ cos(\\frac{7\\pi }{6}) $$", "-s3/2"],
    10: ["$$ cos(\\frac{5\\pi }{4}) $$", "-s2/2"],
    11: ["$$ cos(\\frac{4\\pi }{3}) $$", "-1/2"],
    12: ["$$ cos(\\frac{3\\pi }{2}) $$", "0"],
    13: ["$$ cos(\\frac{5\\pi }{3}) $$", "1/2"],
    14: ["$$ cos(\\frac{7\\pi }{4}) $$", "s2/2"],
    15: ["$$ cos(\\frac{11\\pi }{6}) $$", "s3/2"],
    16: ["$$ cos(0) $$", "1"],
    17: ["$$ sin(\\frac{\\pi }{6}) $$", "1/2"],
    18: ["$$ sin(\\frac{\\pi }{4}) $$", "s2/2"],
    19: ["$$ sin(\\frac{\\pi }{3}) $$", "s3/2"],
    20: ["$$ sin(\\frac{\\pi }{2}) $$", "1"],
    21: ["$$ sin(\\frac{2\\pi }{3}) $$", "s3/2"],
    22: ["$$ sin(\\frac{3\\pi }{4}) $$", "s2/2"],
    23: ["$$ sin(\\frac{5\\pi }{6}) $$", "1/2"], 
    24: ["$$ sin(\\pi) $$", "0"],
    25: ["$$ sin(\\frac{7\\pi }{6}) $$", "-1/2"],
    26: ["$$ sin(\\frac{5\\pi }{4}) $$", "-s2/2"],
    27: ["$$ sin(\\frac{4\\pi }{3}) $$", "-s3/2"],
    28: ["$$ sin(\\frac{3\\pi }{2}) $$", "-1"],
    29: ["$$ sin(\\frac{5\\pi }{3}) $$", "-s3/2"],
    30: ["$$ sin(\\frac{7\\pi }{4}) $$", "-s2/2"],
    31: ["$$ sin(\\frac{11\\pi }{6}) $$", "-1/2"],
    32: ["$$ sin(0) $$", "0"],
    33: ["$$ tan(\\frac{\\pi }{6}) $$", "s3/3"],
    34: ["$$ tan(\\frac{\\pi }{4}) $$", "1"],
    35: ["$$ tan(\\frac{\\pi }{3}) $$", "s3"],
    36: ["$$ tan(\\frac{\\pi }{2}) $$", "u"],
    37: ["$$ tan(\\frac{2\\pi }{3}) $$", "-s3"],
    38: ["$$ tan(\\frac{3\\pi }{4}) $$", "-1"],
    39: ["$$ tan(\\frac{5\\pi }{6}) $$", "-s3/3"], 
    40: ["$$ tan(\\pi) $$", "0"],
    41: ["$$ tan(\\frac{7\\pi }{6}) $$", "s3/3"],
    42: ["$$ tan(\\frac{5\\pi }{4}) $$", "1"],
    43: ["$$ tan(\\frac{4\\pi }{3}) $$", "s3"],
    44: ["$$ tan(\\frac{3\\pi }{2}) $$", "u"],
    45: ["$$ tan(\\frac{5\\pi }{3}) $$", "-s3"],
    46: ["$$ tan(\\frac{7\\pi }{4}) $$", "-1"],
    47: ["$$ tan(\\frac{11\\pi }{6}) $$", "-s3/3"],
    48: ["$$ tan(0) $$", "0"]
}

var master2 = {
    1: ["$$ sec(\\frac{\\pi }{6}) $$", "2s3/3"],
    2: ["$$ sec(\\frac{\\pi }{4}) $$", "s2"],
    3: ["$$ sec(\\frac{\\pi }{3}) $$", "2"],
    4: ["$$ sec(\\frac{\\pi }{2}) $$", "u"],
    5: ["$$ sec(\\frac{2\\pi }{3}) $$", "-2"],
    6: ["$$ sec(\\frac{3\\pi }{4}) $$", "-s2"],
    7: ["$$ sec(\\frac{5\\pi }{6}) $$", "-2s3/3"], 
    8: ["$$ sec(\\pi) $$", "-1"],
    9: ["$$ sec(\\frac{7\\pi }{6}) $$", "-2s3/3"],
    10: ["$$ sec(\\frac{5\\pi }{4}) $$", "-s2"],
    11: ["$$ sec(\\frac{4\\pi }{3}) $$", "-2"],
    12: ["$$ sec(\\frac{3\\pi }{2}) $$", "u"],
    13: ["$$ sec(\\frac{5\\pi }{3}) $$", "-2"],
    14: ["$$ sec(\\frac{7\\pi }{4}) $$", "s2"],
    15: ["$$ sec(\\frac{11\\pi }{6}) $$", "2s3/3"],
    16: ["$$ sec(0) $$", "1"],
    17: ["$$ csc(\\frac{\\pi }{6}) $$", "2"],
    18: ["$$ csc(\\frac{\\pi }{4}) $$", "s2"],
    19: ["$$ csc(\\frac{\\pi }{3}) $$", "2s3/3"],
    20: ["$$ csc(\\frac{\\pi }{2}) $$", "1"],
    21: ["$$ csc(\\frac{2\\pi }{3}) $$", "2s3/3"],
    22: ["$$ csc(\\frac{3\\pi }{4}) $$", "s2"],
    23: ["$$ csc(\\frac{5\\pi }{6}) $$", "2"], 
    24: ["$$ csc(\\pi) $$", "u"],
    25: ["$$ csc(\\frac{7\\pi }{6}) $$", "-2"],
    26: ["$$ csc(\\frac{5\\pi }{4}) $$", "-s2"],
    27: ["$$ csc(\\frac{4\\pi }{3}) $$", "-2s3/3"],
    28: ["$$ csc(\\frac{3\\pi }{2}) $$", "-1"],
    29: ["$$ csc(\\frac{5\\pi }{3}) $$", "-2s3/3"],
    30: ["$$ csc(\\frac{7\\pi }{4}) $$", "s2"],
    31: ["$$ csc(\\frac{11\\pi }{6}) $$", "-2"],
    32: ["$$ csc(0) $$", "u"],
    33: ["$$ cot(\\frac{\\pi }{6}) $$", "s3"],
    34: ["$$ cot(\\frac{\\pi }{4}) $$", "1"],
    35: ["$$ cot(\\frac{\\pi }{3}) $$", "s3/3"],
    36: ["$$ cot(\\frac{\\pi }{2}) $$", "0"],
    37: ["$$ cot(\\frac{2\\pi }{3}) $$", "-s3/3"],
    38: ["$$ cot(\\frac{3\\pi }{4}) $$", "-1"],
    39: ["$$ cot(\\frac{5\\pi }{6}) $$", "-s3"], 
    40: ["$$ cot(\\pi) $$", "u"],
    41: ["$$ cot(\\frac{7\\pi }{6}) $$", "s3"],
    42: ["$$ cot(\\frac{5\\pi }{4}) $$", "1"],
    43: ["$$ cot(\\frac{4\\pi }{3}) $$", "s3/3"],
    44: ["$$ cot(\\frac{3\\pi }{2}) $$", "0"],
    45: ["$$ cot(\\frac{5\\pi }{3}) $$", "-s3"],
    46: ["$$ cot(\\frac{7\\pi }{4}) $$", "-1"],
    47: ["$$ cot(\\frac{11\\pi }{6}) $$", "-s3/3"],
    48: ["$$ cot(0) $$", "u"]    
}

var master3 = {
    1: ["$$ cos(\\frac{\\pi }{6}) $$", "s3/2"],
    2: ["$$ cos(\\frac{\\pi }{4}) $$", "s2/2"],
    3: ["$$ cos(\\frac{\\pi }{3}) $$", "1/2"],
    4: ["$$ cos(\\frac{\\pi }{2}) $$", "0"],
    5: ["$$ cos(\\frac{2\\pi }{3}) $$", "-1/2"],
    6: ["$$ cos(\\frac{3\\pi }{4}) $$", "-s2/2"],
    7: ["$$ cos(\\frac{5\\pi }{6}) $$", "-s3/2"], 
    8: ["$$ cos(\\pi) $$", "-1"],
    9: ["$$ cos(\\frac{7\\pi }{6}) $$", "-s3/2"],
    10: ["$$ cos(\\frac{5\\pi }{4}) $$", "-s2/2"],
    11: ["$$ cos(\\frac{4\\pi }{3}) $$", "-1/2"],
    12: ["$$ cos(\\frac{3\\pi }{2}) $$", "0"],
    13: ["$$ cos(\\frac{5\\pi }{3}) $$", "1/2"],
    14: ["$$ cos(\\frac{7\\pi }{4}) $$", "s2/2"],
    15: ["$$ cos(\\frac{11\\pi }{6}) $$", "s3/2"],
    16: ["$$ cos(0) $$", "1"],
    17: ["$$ sin(\\frac{\\pi }{6}) $$", "1/2"],
    18: ["$$ sin(\\frac{\\pi }{4}) $$", "s2/2"],
    19: ["$$ sin(\\frac{\\pi }{3}) $$", "s3/2"],
    20: ["$$ sin(\\frac{\\pi }{2}) $$", "1"],
    21: ["$$ sin(\\frac{2\\pi }{3}) $$", "s3/2"],
    22: ["$$ sin(\\frac{3\\pi }{4}) $$", "s2/2"],
    23: ["$$ sin(\\frac{5\\pi }{6}) $$", "1/2"], 
    24: ["$$ sin(\\pi) $$", "0"],
    25: ["$$ sin(\\frac{7\\pi }{6}) $$", "-1/2"],
    26: ["$$ sin(\\frac{5\\pi }{4}) $$", "-s2/2"],
    27: ["$$ sin(\\frac{4\\pi }{3}) $$", "-s3/2"],
    28: ["$$ sin(\\frac{3\\pi }{2}) $$", "-1"],
    29: ["$$ sin(\\frac{5\\pi }{3}) $$", "-s3/2"],
    30: ["$$ sin(\\frac{7\\pi }{4}) $$", "-s2/2"],
    31: ["$$ sin(\\frac{11\\pi }{6}) $$", "-1/2"],
    32: ["$$ sin(0) $$", "0"],
    33: ["$$ tan(\\frac{\\pi }{6}) $$", "s3/3"],
    34: ["$$ tan(\\frac{\\pi }{4}) $$", "1"],
    35: ["$$ tan(\\frac{\\pi }{3}) $$", "s3"],
    36: ["$$ tan(\\frac{\\pi }{2}) $$", "u"],
    37: ["$$ tan(\\frac{2\\pi }{3}) $$", "-s3"],
    38: ["$$ tan(\\frac{3\\pi }{4}) $$", "-1"],
    39: ["$$ tan(\\frac{5\\pi }{6}) $$", "-s3/3"], 
    40: ["$$ tan(\\pi) $$", "0"],
    41: ["$$ tan(\\frac{7\\pi }{6}) $$", "s3/3"],
    42: ["$$ tan(\\frac{5\\pi }{4}) $$", "1"],
    43: ["$$ tan(\\frac{4\\pi }{3}) $$", "s3"],
    44: ["$$ tan(\\frac{3\\pi }{2}) $$", "u"],
    45: ["$$ tan(\\frac{5\\pi }{3}) $$", "-s3"],
    46: ["$$ tan(\\frac{7\\pi }{4}) $$", "-1"],
    47: ["$$ tan(\\frac{11\\pi }{6}) $$", "-s3/3"],
    48: ["$$ tan(0) $$", "0"],
    49: ["$$ sec(\\frac{\\pi }{6}) $$", "2s3/3"],
    50: ["$$ sec(\\frac{\\pi }{4}) $$", "s2"],
    51: ["$$ sec(\\frac{\\pi }{3}) $$", "2"],
    52: ["$$ sec(\\frac{\\pi }{2}) $$", "u"],
    53: ["$$ sec(\\frac{2\\pi }{3}) $$", "-2"],
    54: ["$$ sec(\\frac{3\\pi }{4}) $$", "-s2"],
    55: ["$$ sec(\\frac{5\\pi }{6}) $$", "-2s3/3"], 
    56: ["$$ sec(\\pi) $$", "-1"],
    57: ["$$ sec(\\frac{7\\pi }{6}) $$", "-2s3/3"],
    58: ["$$ sec(\\frac{5\\pi }{4}) $$", "-s2"],
    59: ["$$ sec(\\frac{4\\pi }{3}) $$", "-2"],
    60: ["$$ sec(\\frac{3\\pi }{2}) $$", "u"],
    61: ["$$ sec(\\frac{5\\pi }{3}) $$", "-2"],
    62: ["$$ sec(\\frac{7\\pi }{4}) $$", "s2"],
    63: ["$$ sec(\\frac{11\\pi }{6}) $$", "2s3/3"],
    64: ["$$ sec(0) $$", "1"],
    65: ["$$ csc(\\frac{\\pi }{6}) $$", "2"],
    66: ["$$ csc(\\frac{\\pi }{4}) $$", "s2"],
    67: ["$$ csc(\\frac{\\pi }{3}) $$", "2s3/3"],
    68: ["$$ csc(\\frac{\\pi }{2}) $$", "1"],
    69: ["$$ csc(\\frac{2\\pi }{3}) $$", "2s3/3"],
    70: ["$$ csc(\\frac{3\\pi }{4}) $$", "s2"],
    71: ["$$ csc(\\frac{5\\pi }{6}) $$", "2"], 
    72: ["$$ csc(\\pi) $$", "u"],
    73: ["$$ csc(\\frac{7\\pi }{6}) $$", "-2"],
    74: ["$$ csc(\\frac{5\\pi }{4}) $$", "-s2"],
    75: ["$$ csc(\\frac{4\\pi }{3}) $$", "-2s3/3"],
    76: ["$$ csc(\\frac{3\\pi }{2}) $$", "-1"],
    77: ["$$ csc(\\frac{5\\pi }{3}) $$", "-2s3/3"],
    78: ["$$ csc(\\frac{7\\pi }{4}) $$", "s2"],
    79: ["$$ csc(\\frac{11\\pi }{6}) $$", "-2"],
    80: ["$$ csc(0) $$", "u"],
    81: ["$$ cot(\\frac{\\pi }{6}) $$", "s3"],
    82: ["$$ cot(\\frac{\\pi }{4}) $$", "1"],
    83: ["$$ cot(\\frac{\\pi }{3}) $$", "s3/3"],
    84: ["$$ cot(\\frac{\\pi }{2}) $$", "0"],
    85: ["$$ cot(\\frac{2\\pi }{3}) $$", "-s3/3"],
    86: ["$$ cot(\\frac{3\\pi }{4}) $$", "-1"],
    87: ["$$ cot(\\frac{5\\pi }{6}) $$", "-s3"], 
    88: ["$$ cot(\\pi) $$", "u"],
    89: ["$$ cot(\\frac{7\\pi }{6}) $$", "s3"],
    90: ["$$ cot(\\frac{5\\pi }{4}) $$", "1"],
    91: ["$$ cot(\\frac{4\\pi }{3}) $$", "s3/3"],
    92: ["$$ cot(\\frac{3\\pi }{2}) $$", "0"],
    93: ["$$ cot(\\frac{5\\pi }{3}) $$", "-s3"],
    94: ["$$ cot(\\frac{7\\pi }{4}) $$", "-1"],
    95: ["$$ cot(\\frac{11\\pi }{6}) $$", "-s3/3"],
    96: ["$$ cot(0) $$", "u"]
}

var order = [];
var qNum = 1;
var children = {};
var usedArr = {};
const main = document.createElement("div");

document.addEventListener("DOMContentLoaded", function() {
    loadItems();
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13 &&  usedArr !== null) {
        checkAnswer(usedArr);
    }
});

function generateRandomizedArray(size) {
    const numbers = Array.from({ length: size }, (_, index) => index + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
}

function loadItems() {
    var currentURL = window.location.href;
    var filename = currentURL.substring(currentURL.lastIndexOf('/') + 1);
    filename = filename.replace('.html', '');
    main.id="container";
    if (filename == "mixedv1") {
        order = generateRandomizedArray(48);
        console.log(order);
        usedArr = master1;
        generateItems(master1, 48);
        document.body.appendChild(main);
        children = Array.from(main.children);
        startQuiz();
        return;
    }
    if (filename == "mixedv2") {
        order = generateRandomizedArray(48);
        console.log(order);
        usedArr = master2;
        generateItems(master2, 48);
        document.body.appendChild(main);
        children = Array.from(main.children);
        startQuiz();
        return;
    }
    if (filename == "mixedv3") {
        order = generateRandomizedArray(96);
        console.log(order);
        usedArr = master3;
        generateItems(master3, 96);
        document.body.appendChild(main);
        children = Array.from(main.children);
        startQuiz();
        return;
    }


    order = generateRandomizedArray(16);
    usedArr = (() => {
        switch(filename) {
            case "cos": return cos;
            case "sin": return sin;
            case "tan": return tan;
            case "sec": return sec;
            case "csc": return csc;
            case "cot": return cot;
        }
    })();
    generateItems(usedArr, 16);
    document.body.appendChild(main);
    children = Array.from(main.children);
    startQuiz();
}

function generateItems(arr, qty) {
    for (let i = 1; i <= qty; i++) {
        const qDiv = document.createElement("div");
        qDiv.classList.add("questionDiv");
        const question = document.createElement("p");
        question.classList.add("questionText");
        if (arr[order[i]]) {
            question.innerHTML = arr[order[i]][0];
            const input = document.createElement("input");
            input.setAttribute("type", "text");
            input.classList.add("questionInput");
            qDiv.appendChild(question);
            qDiv.appendChild(input);
            main.appendChild(qDiv);
        }
    }
}

function startQuiz() {
    children.forEach((child, index) => {
        if (index !== 0) {
            child.style.display = "none";
        }
    });
    children[0].querySelector('input').focus();
}

function checkAnswer(arr) {
    var input = children[qNum-1].querySelector('input').value;
    if (input == arr[order[qNum]][1]) {
        children[qNum-1].style.display = "none";
        if (qNum == 15) {
            backToMain();
            return;
        }
        children[qNum].style.display = "flex";
        children[qNum].querySelector('input').focus();
        qNum++;
    } else {
        children[qNum - 1].style.border = "3px solid red";
        setTimeout(function() {
        children[qNum - 1].style.border = "none";
        }, 250);
    }
}

function backToMain() {
    window.location.href = "../index.html";
}
