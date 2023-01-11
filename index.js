let prato;
let bebida;
let sobremesa;

function escolherFrango() {
document.getElementById("frango").style.borderColor = "green";
document.getElementById("carne").style.borderColor = "white";
prato = "Frango";
}

function escolherCarne() {
document.getElementById("carne").style.borderColor = "green";
document.getElementById("frango").style.borderColor = "white";
prato = "Carne";
}

function escolherCoca() {
document.getElementById("coca-cola").style.borderColor = "green";
document.getElementById("refresco").style.borderColor = "white";
bebida = "Coca";
}

function escolherRefresco() {
document.getElementById("refresco").style.borderColor = "green";
document.getElementById("coca-cola").style.borderColor = "white";
bebida = "Refresco";
}

function escolherPudim() {
document.getElementById("pudim").style.borderColor = "green";
document.getElementById("sorvete").style.borderColor = "white";
sobremesa = "Pudim";
}

function escolherSorvete() {
document.getElementById("sorvete").style.borderColor = "green";
document.getElementById("pudim").style.borderColor = "white";
sobremesa = "Sorvete";
}

function finalizarPedido(){
let mensagem;
mensagem = "Olá, gostaria de pedir um combo: " + prato + ", " + bebida + " e " + sobremesa;

window.open("https://wa.me/+5521999999999?text=" + mensagem);

}