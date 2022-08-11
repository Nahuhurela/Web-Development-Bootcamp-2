let num = parseInt(prompt("Ingrese su número"))
let numeros_positivos = 0;
while (num > 0) {

    if (num % 2 == 0)
        alert("Tu número es par")
    else
        alert("Tu número es impar")

    numeros_positivos = numeros_positivos + 1;

    num = prompt("Elegiste el número: " + num + " Elige otro,por favor")
}
alert("Rompiste el bucle")
alert("Números positivos: " + numeros_positivos)