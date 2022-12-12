// Button 1 - <button id="btn1">Button (btn1)</button>
document.getElementById("btn1").onclick = function changeColor() {
    document.getElementById("farbeBlau").style.color = "#3939b8";
};

// Button 2 - <button id="btn2">Button (btn2)</button>
document.getElementById("btn2").onclick = function changeColorTest() {
    document.getElementById("btn2").style.backgroundColor = "#923192";
};

// Button 3 - <button id="btn3" onclick="changeColorTest02()">Button (btn3)</button>
function changeColorTest02() {
    document.getElementById("btn3").style.backgroundColor = "#af2b2b";
}

// resetButton - alle drei Befehle wieder ansprechen nur die Farbangabe leer lassen
function resetButton() {
    document.getElementById("farbeBlau").style.color = "";
    document.getElementById("btn2").style.backgroundColor = "";
    document.getElementById("btn3").style.backgroundColor = "";
}

// Stylesheet mode switch
function darkMode() {
    var x = document.getElementById("styleCss");
    x.setAttribute("href", "css/javascriptCssDarkMode.css");
}

function lightMode() {
    var x = document.getElementById("styleCss");
    x.setAttribute("href", "css/javascriptCss.css");
}
