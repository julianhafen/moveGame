// Navbar Aside Change Color
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

//____________________________________________________________________________

const RESETBTN = document.getElementById("resetButton");
const BTN1 = document.getElementById("bestellBtn1");
const BTN2 = document.getElementById("bestellBtn2");
const BTN3 = document.getElementById("bestellBtn3");
const BTN4 = document.getElementById("bestellBtn4");
/*const BESTELLBUTTONS = BTN1 + BTN2 + BTN3 + BTN4;
console.log(BESTELLBUTTONS);
console.log(BTN1, BTN2); */

function bestellung(e) {
    /*
    document.getElementById("bestellBtn1").style.backgroundColor = "#3da727";
    document.getElementById("bestellBtn1").style.color = "#ffffff";
    document.getElementById("bestellBtn1").innerHTML = "Bestellt";
    document.getElementById("bestellImg1").style.opacity = "0.55"; */
    e.style.backgroundColor = "#3da727";
    e.style.color = "#ffffff";
    e.innerHTML = "Bestellt";
    e.style.opacity = "1";
    e.style.cursor = "default";
    RESETBTN.style.opacity = "1";
    RESETBTN.style.cursor = "pointer";
    /*
    console.log(e);
    console.log(e.id); */
}

function resetButton() {
    /*BESTELLBUTTONS.style = null;
    BESTELLBUTTONS.innerHTML = "Bestellen";*/

    BTN1.style = null;
    BTN1.innerHTML = "Bestellen";

    BTN2.style = null;
    BTN2.innerHTML = "Bestellen";

    BTN3.style = null;
    BTN3.innerHTML = "Bestellen";

    BTN4.style = null;
    BTN4.innerHTML = "Bestellen";

    RESETBTN.style = null;

    /* Auswahl aller Buttons in einer Zeile (Funktioniert nicht!)
    let y = document.getElementsByClassName("btn bestellButton");
    let z = document.getElementById("bestellBtn4");
    console.log(y);
    console.log(z); */

    console.log("Klick Resetbutton");
}
