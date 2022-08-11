let miAuto = Object();

miAuto["Marca"] = "Ford";

miAuto["Año"] = 1967;

miAuto["Nuevo"] = true;

let propertyKey = "modelo";

miAuto[propertyKey] = "Mustang";

let anotherPropertyKey = "precio";

miAuto[anotherPropertyKey] = "$99";

let nextProperty = "color";

miAuto[nextProperty] = "amarillo";

for (let propiedad in miAuto) {
  console.log(propiedad + " : " + miAuto[propiedad]);
}

