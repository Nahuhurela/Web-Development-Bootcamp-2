let edad = prompt("escribe tu edad")

let sexo = prompt("¿Eres hombre o mujer?")

if (sexo == "mujer" && edad >= 60 || sexo == "hombre" && edad >= 65)
{ alert("Te podes jubilar")}
else
{ alert("No te podes jubilar") }
