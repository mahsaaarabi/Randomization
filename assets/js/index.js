var DATA = [
    "Mahsa",
    "Hamed",
    "Reza",
    "Mahdiyeh",
    "Shahla"
];



function Random() {
    document.getElementById("word").innerText = DATA[Math.floor(Math.random() * DATA.length)];
}