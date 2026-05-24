

function sjekkIQ() {
    let poeng = document.querySelectorAll('input[value="riktig"]:checked').length;

    let iq;
    if (poeng <= 3) iq = 85;
    else if (poeng <= 6) iq = 95;
    else if (poeng <= 9) iq = 105;
    else if (poeng <= 12) iq = 115;
    else iq = 130;

    document.getElementById("resultat").innerText = "Du fikk " + poeng + " av 15 riktige. Din IQ er: " + iq;
}