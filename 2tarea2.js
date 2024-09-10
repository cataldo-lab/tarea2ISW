//Funciones

let nombre="BENJAMIM";
let nom="benjamin";
let numero1="1789";
let numero2="2";
let num1="666";
let num2="6";

function mini(palabra){
    return palabra.toLowerCase();
  //return palabra.toUpperCase();
}

function maxi(palabra){
    return palabra.toUpperCase();
}

function restep(palabra,kadabra){
  palabra=(parseInt(palabra)-parseInt(kadabra));
  return palabra;
}

function dives(palabra,kadabra){
  palabra=(parseInt(palabra)/parseInt(kadabra));
  return palabra;
}

function multipass(palabra,kadabra){
  palabra=(parseInt(palabra)*parseInt(kadabra));
  return palabra;
}

function longitud(palabra){
  return palabra.length;
  
}

console.log("1. Crea una función que reciba un string y retorne el string en mayúsculas.");
console.log(mini(nombre));

console.log("2. Crea una función que reciba un string y retorne el string en minúsculas.");
console.log(maxi(nom));

console.log("3. Crear una función que reciba como parámetro 2 números y los reste.");
console.log(restep(numero1,numero2));

console.log("4. Crear una función que reciba como parámetro 2 números y los divida.");
console.log(dives(num1,num2));

console.log("5. Crear una función que reciba como parámetro 2 números y los multiplique.");
console.log(multipass(num1,num2));

console.log("6. Crear una función que reciba un string y devuelva la longitud del string.");
console.log(longitud(nombre));