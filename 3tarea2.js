//Arrays
const numeros=[1,1,2,3,5,8,11,19,23]
const words=["vaca","oveja","cabra","caballo","cerdo","dragon"];

/*
1. Crea una función que reciba como parámetro un array de números y 
retorne la suma de todos los números del array.

2. Crea una función ( o varias) que reciba como parámetro un array 
de números y retorne el promedio de todos los números del array.

3. Crea una función que tome un arreglo de strings como parámetro y 
devuelva un nuevo arreglo que contenga los mismos strings pero con 
todas las letras en mayúsculas.

4. Crea una función que tome un arreglo de números como parámetro y 
devuelva un nuevo arreglo que contenga solo los números pares.
*/

function sumarNumeros(numeros){
    return numeros.reduce((acc,num)=>acc+num,0);
}

function promedioNumeros(numeros){
    let suma =sumarNumeros(numeros);
    return suma/numeros.length;
}

function convMayus(words){
    return words.map(str=>str.toUpperCase());
}

function numerosPares(numeros){
    return numeros.filter(num => num%2===0);
}

console.log("1. Suma de numeros: "+ sumarNumeros(numeros));
console.log("2. Promedio de los numeros: "+promedioNumeros(numeros));
console.log("3. Convertir minusculas a mayusculas");
console.log("  Minusculas :"+words);
console.log("  Mayusculas: "+convMayus(words));
console.log("4. Numeros pares: "+numerosPares(numeros));
console.log("  Numeros originales: "+numeros);

