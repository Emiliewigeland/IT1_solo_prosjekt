 let spørsmål = [
    "Hvilket tall kommer neste? 1, 1, 2, 3, 5, 8, ?",
    "Hvis du snur NOITULOS baklengs, hvilket ord får du?",
    "Hvilket tall mangler? 2, 6, 12, 20, 30, ?",
    "En togstasjon har 4 plattformer. Hvert tog stopper på 2 plattformer. Hvor mange tog trengs for at alle plattformer er brukt likt?",
    "Hvilket ord hører ikke hjemme? Kvadrat, Sirkel, Rektangel, Diagonal",
    "Hvis alle bloomer er zoom, og alle zoom er glim - er alle bloomer glim?",
    "Hvilket tall kommer neste? 3, 9, 27, 81, ?",
    "En butikk selger epler for 3kr og bananer for 5kr. Du betaler 37kr. Hvor mange epler kjøpte du hvis du kjøpte 5 bananer?",
    "Hvilket tall mangler? 144, 121, 100, 81, ?",
    "Hvis januar = 1, mars = 3, hva er oktober?",
    "Hvilket tall kommer neste? 2, 3, 5, 7, 11, 13, ?",
    "Hva er 17 x 13?",
    "Hvilket ord er alltid en del av 'skog'?",
    "Hvilket tall mangler? 1, 4, 9, 16, 25, ?",
    "En klokke viser 3:15. Hvilken vinkel er det mellom viserne?"
];

let svaralternativer = [
    ["13", "11", "12", "10"],
    ["SOLUTION", "PROBLEM", "ANSWER", "RESULT"],
    ["42", "40", "38", "44"],
    ["4", "2", "6", "8"],
    ["Diagonal", "Sirkel", "Kvadrat", "Rektangel"],
    ["Ja", "Nei", "Umulig å si", "Av og til"],
    ["243", "162", "180", "270"],
    ["4", "3", "5", "6"],
    ["64", "72", "60", "70"],
    ["10", "8", "9", "11"],
    ["17", "15", "16", "19"],
    ["221", "211", "231", "201"],
    ["Trær", "Elg", "Sopp", "Bekk"],
    ["36", "30", "32", "35"],
    ["7.5°", "0°", "15°", "22.5°"]
];

let fasit = [
    "13",
    "SOLUTION",
    "42",
    "4",
    "Diagonal",
    "Ja",
    "243",
    "4",
    "64",
    "10",
    "17",
    "221",
    "Trær",
    "36",
    "7.5°"
];

let i = 0;
let poeng = 0;

function visSpørsmål() {

    if (i === spørsmål.length) {

        let iq;

        if (poeng <= 3) iq = 85;
        else if (poeng <= 6) iq = 95;
        else if (poeng <= 9) iq = 105;
        else if (poeng <= 12) iq = 115;
        else iq = 130;

        document.getElementById("questions").innerHTML = "Du fikk " + poeng + " av 15 riktige. Din IQ er: " + iq;
        document.getElementById("svar-btn").innerHTML = "";
        return;
    }

    document.getElementById("questions").innerText = spørsmål[i];

    let svarBoks = document.getElementById("svar-btn");
    svarBoks.innerHTML = "";

    for (let j = 0; j < svaralternativer[i].length; j++) {
        let knapp = document.createElement("button");
        knapp.innerText = svaralternativer[i][j];
        svarBoks.appendChild(knapp);

        knapp.onclick = function () {
            if (knapp.innerText === fasit[i]) {
                poeng++;
            }
            i++;
            visSpørsmål();
        }
    }
}

visSpørsmål();