var operandoa;
var operandob;
var operacion;

function iniciarVariables() {
    resultado = document.querySelector(".resultado")
    uno = document.querySelector(".uno")
    dos = document.querySelector(".dos")
    tres = document.querySelector(".tres")
    cuatro = document.querySelector(".cuatro")
    cinco = document.querySelector(".cinco")
    seis = document.querySelector(".seis")
    siete = document.querySelector(".siete")
    ocho = document.querySelector(".ocho")
    nueve = document.querySelector(".nueve")
    zero = document.querySelector(".zero")
    suma = document.querySelector(".suma")
    resta = document.querySelector(".resta")
    multiplicacion = document.querySelector(".multiplicacion")
    division = document.querySelector(".division")
    resetear = document.querySelector(".resetear")
    igual = document.querySelector(".igual")

    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1"
    }
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2"
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3"
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4"
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5"
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6"
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7"
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8"
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9"
    }
    zero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0"
    }
    suma.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "+"
        limpiar()
    }
    resta.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "-"
        limpiar()
    }
    multiplicacion.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "*"
        limpiar()
    }
    division.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "/"
        limpiar()
    }
    resetear.onclick = function(e) {
        operandoa = 0
        operandob = 0
        operacion = ""
        resultado.textContent = ""
    }
    igual.onclick = function(e) {
        operandob = resultado.textContent;
        calcular()
    }


    function limpiar() {
        resultado.textContent = ""

    }

    function calcular() {
        var result = 0;
        switch (operacion) {
            case "+":
                result = parseFloat(operandoa) + parseFloat(operandob)
                break;
            case "-":
                result = parseFloat(operandoa) - parseFloat(operandob)
                break;
            case "*":
                result = parseFloat(operandoa) * parseFloat(operandob)
                break;
            case "/":
                result = parseFloat(operandoa) / parseFloat(operandob)
                break;

        }

        limpiar()
        resultado.textContent = result;

    }

}