// Datum
function datumHeute() {
    let dat = new Date();
    let tag = dat.getDate();
    let monat = dat.getMonth() + 1;
    let jahr = dat.getFullYear();

    if (tag < 10) {
        tag = "0" + tag;
    }

    if (monat < 10) {
        monat = "0" + monat;
    }

    let datum = tag + "." + monat + "." + jahr;
    document.getElementById("datum").innerHTML = "<b>Heute ist der </b>" + datum;
}
datumHeute();
// document.addEventListener("DOMContentLoaded", uhrzeit);
// Funktion aufrufen

//___________________________________________________________

//Uhrzeit
function uhrzeit() {
    let jetzt = new Date();
    stunde = jetzt.getHours();
    minute = jetzt.getMinutes();
    sekunde = jetzt.getSeconds();
    stunde = fuehrendeNull(stunde);
    minute = fuehrendeNull(minute);
    sekunde = fuehrendeNull(sekunde);
    document.getElementById("uhrzeit").innerHTML =
        "<b>Die Uhrzeit beträgt </b>" + stunde + ":" + minute + ":" + sekunde;
    setTimeout(uhrzeit, 1000); // auch möglich: let interval = setInterval(uhrzeit, 1000);
}

function fuehrendeNull(zahl) {
    zahl = (zahl < 10 ? "0" : "") + zahl;
    return zahl;
}
document.addEventListener("DOMContentLoaded", uhrzeit);
// uhrzeit();    auch möglich um die Funktion aufzurufen

//___________________________________________________________

// While Schleife
const MIN = 0;
const MAX = 20;
let testNumber = 15;
let i = 1;

while (MAX) {
    let randomValue = Math.floor(Math.random() * (MAX - MIN)) + MIN;

    if (randomValue == testNumber) {
        break;
    }

    console.log("Runde " + i + ": " + randomValue);
    i++;
}

console.log(
    "Das Script lief " + i + " Runden bevor es die Nummer " + testNumber + " gefunden hat."
);

// Text für HTML Seite (While Schleife)
document.getElementById("randomHeader").innerHTML =
    "Random Auswahl bis die richtige Zahl gefunden wird";

document.getElementById("random").innerHTML =
    "Das Script lief " +
    i +
    " Runden bevor es die Nummer " +
    testNumber +
    " gefunden hat. (siehe <i>console.log</i>)";

//___________________________________________________________

// Funktion
function findBiggestFraction(a, b) {
    let result;
    a > b ? (result = ["firstFraction", a]) : (result = ["secondFraction", b]);
    return result;
}

let firstFraction = 3 / 4;
let secondFraction = 5 / 7;

let fractionResult = findBiggestFraction(firstFraction, secondFraction);
console.log(fractionResult);
//___________________________________________________________

// Kurs
function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function () {
        return ++this.views;
    };
}

let courses = [
    new Course("JavaScript Essential Training", "Kevin Birrer", 1, true, 0),
    new Course("Up and Running with ECMAScript 6", "Eve Procello", 1, true, 123456),
];

console.log(courses[0].instructor);
//___________________________________________________________

// Morpheus Tutorial JavaScript #33 Kontruktoren
function meinEvent() {
    function Pinguin(name, alter, geschw) {
        this.name = name;
        this.alter = alter;
        this.schwimmgeschwindigkeit = geschw;
    }
    let franz = new Pinguin("Franz", 40, 4);
    let franziska = new Pinguin("Franziska", 39, 5);

    document.getElementById("konstruktoren").innerHTML =
        "Ausgabe Name von Franz: " +
        franz.name +
        "<br />" +
        "Ausgabe Schwimmgeschwindigkeit von Franziska: " +
        franziska.schwimmgeschwindigkeit;
}
meinEvent();
