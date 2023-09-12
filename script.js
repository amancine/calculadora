
const calculadora = document.querySelector(".calculadora");
const resultado = document.getElementById("resultado");
const operacion = document.getElementById("operacion");
let oper1, oper2, anterior, long;
let valoresAceptados = /^[0-9]+$/;

// resultado.textContent = 'resultado'
// operacion.textContent = 'operacion'

function limpia() {
    resultado.textContent = '';
    operacion.textContent = '';
    oper1=0;  
    oper2=0;
}

function limpianterior() {
    long = operacion.textContent.length
    operacion.textContent = operacion.textContent.substring(0, long - 1)
    oper1 = eval(operacion.textContent);
    resultado.textContent = oper1;
}

function display(n)  {
    operacion.textContent = operacion.textContent + n;
    oper1 = eval(operacion.textContent);
    resultado.textContent = oper1;
}

function calculo(oper) {
    long = operacion.textContent.length;
    anterior = operacion.textContent.slice(-1);
    if (oper == '-' && 
       (long == 0 || anterior == '*' || anterior == '/')) {
        display (oper);
    }
    if (anterior.match(valoresAceptados)) {
       display(oper);
    }
}

function igual() {
    operacion.textContent = resultado.textContent;
}

function punto() {
    anterior = operacion.textContent.slice(-1);
        if (anterior !== '.')  display('.');
}

