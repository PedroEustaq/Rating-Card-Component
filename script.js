var Num = "p";
function clicou(V) {
    var Varia = document.getElementById(V);
    Num = Varia.innerHTML;
    var b1 = document.getElementById("1");
    var b2 = document.getElementById("2");
    var b3 = document.getElementById("3");
    var b4 = document.getElementById("4");
    var b5 = document.getElementById("5");
    b1.style.backgroundColor = "hsl(213, 18%, 20%)";
    b2.style.backgroundColor = "hsl(213, 18%, 20%)";
    b3.style.backgroundColor = "hsl(213, 18%, 20%)";
    b4.style.backgroundColor = "hsl(213, 18%, 20%)";
    b5.style.backgroundColor = "hsl(213, 18%, 20%)";   
    b1.style.color = "hsl(217, 12%, 63%)";
    b2.style.color = "hsl(217, 12%, 63%)";
    b3.style.color = "hsl(217, 12%, 63%)";
    b4.style.color = "hsl(217, 12%, 63%)";
    b5.style.color = "hsl(217, 12%, 63%)";
    var Final = document.getElementById(Num);
    Final.style.backgroundColor = "white";
}
function OnOver(V) {
    var b1 = document.getElementById(V);
    b1.style.backgroundColor = "hsl(25, 97%, 53%)"; 
}
function OnLeave(V) {
    var b1 = document.getElementById(V);
    b1.style.backgroundColor = "hsl(213, 18%, 20%)"; 
    if (Num == V) {
        b1.style.backgroundColor ="white";
        b1.style.color ="black";
    }
}
function submitou() {
    if (Num == "p") {
        window.alert("Mark a number!")
    } else {
    var CaixaPrim = document.getElementById('Prim')
    var CaixaEnce = document.getElementById('after');
    CaixaPrim.style.display = "none";
    CaixaEnce.style.display = "flex"
    var TextMu = document.getElementById("Mudar");
    TextMu.innerText = "You selected "+Num+" out of 5";
}
}










/*function clicou(V) {
    var Varia = document.getElementById(V)
    var b1 = document.getElementById("1");
    var b2 = document.getElementById("2");
    var b3 = document.getElementById("3");
    var b4 = document.getElementById("4");
    var b5 = document.getElementById("5");
    b1.style.backgroundColor = "hsl(213, 18%, 20%)";
    b2.style.backgroundColor = "hsl(213, 18%, 20%)";
    b3.style.backgroundColor = "hsl(213, 18%, 20%)";
    b4.style.backgroundColor = "hsl(213, 18%, 20%)";
    b5.style.backgroundColor = "hsl(213, 18%, 20%)";   
    Varia.style.backgroundColor = "white";
}
function OnOver(V) {
    var b1 = document.getElementById(V);
    b1.style.backgroundColor = "hsl(25, 97%, 53%)"; 
}
function OnLeave(V) {
    var b1 = document.getElementById(V);
    b1.style.backgroundColor = "hsl(213, 18%, 20%)"; 
} */