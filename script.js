
let indicador1;
let indicador2;
let indicador3;
let valor1 = 0;
let valor1formatado = 0;
let valor2 = 0;
let valor2formatado = 0;
let valor3 = 0;
let valor3formatado = 0;

function selec(comida) {
    indicador1 = comida.querySelector(".valor");
    valor1 = indicador1.innerHTML;
    valor1formatado = parseFloat(valor1)
    const divclicada = document.querySelector(".seleciona");
    if (divclicada !== null) {
        divclicada.classList.remove("seleciona");
    }
    comida.classList.add("seleciona");
}

function selec2(bebidas) {
    indicador2 = bebidas.querySelector(".valor");
    valor2 = indicador2.innerHTML;
    valor2formatado = parseFloat(valor2)
    const divclicada = document.querySelector(".opcoesbebidas .seleciona");
    if (divclicada !== null) {
        divclicada.classList.remove("seleciona");
    }
    bebidas.classList.add("seleciona");
}

function selec3(sobremesa) {
    indicador3 = sobremesa.querySelector(".valor");
    valor3 = indicador3.innerHTML;
    valor3formatado = parseFloat(valor3)
    const divclicada = document.querySelector(".opcoessobremesa .seleciona");
    if (divclicada !== null) {
        divclicada.classList.remove("seleciona");
    }
    sobremesa.classList.add("seleciona");
}
function loga() {
    let conta = valor1formatado + valor2formatado + valor3formatado;
    console.log(valor1formatado);
    console.log(valor2formatado);
    console.log(valor3formatado);
    console.log(conta);
}
        
