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
    13: ["$$ csc(\\frac{5\\pi }{3}) $$", "2s3/3"],
    14: ["$$ csc(\\frac{7\\pi }{4}) $$", "s2"],
    15: ["$$ csc(\\frac{11\\pi }{6}) $$", "2"],
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

var order = [];
var qNum = 1;
var children = {};
var usedArr = {};
const main = document.createElement("div");

document.addEventListener("DOMContentLoaded", function() {
    loadItems();
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        checkAnswer();
    }
});

function generateRandomizedArray() {
    const numbers = Array.from({ length: 16 }, (_, index) => index + 1);
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
    order = generateRandomizedArray();
    main.id="container";
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
    generateItems(usedArr);
    document.body.appendChild(main);
    children = Array.from(main.children);
    startQuiz(main);
}

function generateItems(usedArr) {
    for (let i = 1; i <= 16; i++) {
        const qDiv = document.createElement("div");
        qDiv.classList.add("questionDiv");
        const question = document.createElement("p");
        question.classList.add("questionText");
        if (usedArr[order[i]]) {
            question.innerHTML = usedArr[order[i]][0];
            const input = document.createElement("input");
            input.setAttribute("type", "text");
            // input.setAttribute("placeholder", "Answer")
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

function checkAnswer() {
    var input = children[qNum-1].querySelector('input').value;
    console.log(qNum);
    if (input == usedArr[order[qNum]][1]) {
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