let pedido1;
let pedido2;
let pedido3;

let pedido1formatado;
let pedido2formatado;
let pedido3formatado;

let indicador1;
let indicador2;
let indicador3;

let valor1 = 0;
let valor1formatado = 0;

let valor2 = 0;
let valor2formatado = 0;

let valor3 = 0;
let valor3formatado = 0;

let url;
let conta

function selec(comida) {
    indicador1 = comida.querySelector(".valor");
    pedido1 = comida.querySelector(".titulo");

    pedido1formatado = pedido1.innerHTML;
    valor1 = indicador1.innerHTML;
    valor1formatado = parseFloat(valor1)

    const divclicada = document.querySelector(".opcoescomida .seleciona");
    const iconeliga = comida.querySelector(".icone");
    const iconedesliga = document.querySelector(".opcoescomida .aparece");
    if (divclicada !== null) {
        divclicada.classList.remove("seleciona");
        iconedesliga.classList.remove("aparece");
    }

    comida.classList.add("seleciona");
    iconeliga.classList.add("aparece");
    loga();
}

function selec2(bebidas) {
    indicador2 = bebidas.querySelector(".valor");
    pedido2 = bebidas.querySelector(".titulo");

    pedido2formatado = pedido2.innerHTML;
    valor2 = indicador2.innerHTML;
    valor2formatado = parseFloat(valor2)

    const divclicada = document.querySelector(".opcoesbebidas .seleciona");
    const iconeliga = bebidas.querySelector(".icone");
    const iconedesliga = document.querySelector(".opcoesbebidas .aparece");
    if (divclicada !== null) {
        divclicada.classList.remove("seleciona");
        iconedesliga.classList.remove("aparece");
    }
    bebidas.classList.add("seleciona");
    iconeliga.classList.add("aparece");
    loga();

}

function selec3(sobremesa) {
    indicador3 = sobremesa.querySelector(".valor");
    pedido3 = sobremesa.querySelector(".titulo");

    pedido3formatado = pedido3.innerHTML;
    valor3 = indicador3.innerHTML;
    valor3formatado = parseFloat(valor3)

    const divclicada = document.querySelector(".opcoessobremesa .seleciona");
    const iconeliga = sobremesa.querySelector(".icone");
    const iconedesliga = document.querySelector(".opcoessobremesa .aparece");
    if (divclicada !== null) {
        divclicada.classList.remove("seleciona");
        iconedesliga.classList.remove("aparece");
    }
    sobremesa.classList.add("seleciona");
    iconeliga.classList.add("aparece");
    loga();
}
function loga() {

    if (indicador1 && indicador2 && indicador3) {
        const botao = document.querySelector(".finalizar");
        botao.classList.add("apaga");
        botao.innerHTML = 'Fechar pedido'

        conta = valor1formatado + valor2formatado + valor3formatado;    
    }   
}
function finalizar() {
    url = "Olá, gostaria de fazer o pedido:\n - Prato: "+ pedido1formatado +"\n - Bebida: "+ pedido2formatado +"\n - Sobremesa: "+ pedido3formatado +"\n Total: R$ "+conta;
    
    let urlfinal = encodeURIComponent(url);
    let urlfinal2 = "https://api.whatsapp.com/send?phone=5512996269383&text=" + encodeURIComponent(url);
    if (indicador1 && indicador2 && indicador3) {
        window.open(urlfinal2);  
    }
}