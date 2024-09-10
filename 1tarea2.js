//Variables y Tipos de datos.
console.log('=========================================');
console.log("Variables y tipos de datos---------------");
console.log('_________________________________________');

let nombre='Benjamin';
let edad=32;
let puedoConducir=true;

console.log('Mi nombre es: '+nombre+' .Tengo '+edad+' annos');
console.log('Tipo de nombre: '+typeof nombre);
console.log('Tipo de edad: '+typeof edad)
console.log('Tipo de puedoConducir: '+typeof puedoConducir);

console.log('=========================================');
console.log('Operadores Aritmeticos-------------------');
console.log('_________________________________________');

const numero1=20;
const numero2=40;

let suma=numero1+numero2;
let resta=numero1-numero2;
let multipliccaion=numero1*numero2;
let division=numero1/numero2;
let modulo=numero2%numero1;

console.log('Resultado de suma '+suma);
console.log('Resultado de resta '+resta);
console.log('Resultado de multiplicacion '+multipliccaion);
console.log('Resultado de division '+division);
console.log('Resultado de modulo '+modulo);

console.log('=========================================');
console.log('Operadores de asignación y comparación---');
console.log('_________________________________________');

const number1=15;
const number2=20;
const number3='25';

console.log('¿Numero1 es >= que el Numero2? ');
console.log(number1>=number2);

console.log('\n¿Numero1 es <= que el Numero2? ');
console.log(number1<=number2);

console.log('\n¿numero1 es menor que numero3?');
console.log(number1<number3);

console.log('\n¿numero3 es menor que numero2?');
console.log(number3<number2);

console.log('\nnumero3 es estrictamente diferente que numero1');
console.log(number3===number1);

console.log('\nnumero1 es estrictamente diferente que numero2');
console.log(number1===number2);

console.log('=========================================');
console.log('Condicionales----------------------------');
console.log('_________________________________________');

const num1=10;
const num2=20;
const num3=30;
let mayor=0;
let menor=0;

if(num1>num2 && num1>num3){
    mayor=num1;}else{}
if(num3>num2 && num3>num1){
    mayor=num3;}else{}
if(num1<num2 && num1<num3){
    menor=num1;}else{}
if(num3<num2 && num3<num1){
    menor=num3;}else{}

console.log('Numero mayor de los 3: '+mayor);
console.log('Numero mayor de los 3: '+menor);

if(num1%2 == 0){
    console.log('numero1 es par')
}else{console.log('numero1 es impar')}

if(num2%2 == 0){
    console.log('numero2 es par')
}else{console.log('numero2 es impar')}

if(num3%2 == 0){
    console.log('numero3 es par')
}else{console.log('numero3 es impar')}

if(num1%5 == 0){
    console.log('numero1 es multiplo de 5')
}else{console.log('numero1 no es multiplo de 5')}

if(num2%5 == 0){
    console.log('numero2 es multiplo de 5')
}else{console.log('numero2 no es multiplo de 5')}

if(num3%5 == 0){
    console.log('numero3 es multiplo de 5')
}else{console.log('numero3 no es multiplo de 5')}

console.log('=========================================');
console.log('Ciclos-----------------------------------');
console.log('_________________________________________');

console.log('Ejercicio 1 de ciclos: ');
for(let i=0; i<=10;i++){
    console.log(i);
}

console.log('\nEjercicio 2 de ciclos: ');
for(let i=10; i>=0;i--){
    console.log(i);
}

console.log('\nEjercicio 3 de ciclos');
for(let i=0; i<=10;i++){
    if(i%2==0){
    console.log(i);  
    }
}

console.log('\nEjercicio 4 de ciclos');
for(let i=0; i<=10;i++){
    if(i%3==0){
    console.log(i);  
    }
}

console.log('\nEjercicio 5 de ciclos');
for(let i=0; i<=10;i++){
    if(i%5==0){
    console.log(i);  
    }
}

console.log('\nEjercicio 6 de ciclos');
for(let i=0; i<=10;i++){
    if(i%3==0 && i%5==0 && i!=0){
    console.log(i);  
    }
}
console.log('-->Este ejercicio no da ningun resultado.')

console.log('\nEjercicio 7 de ciclos');
for(let i=0; i<=10;i++){
    if(i%3==0 || i%5==0){
    console.log(i);  
    }
}

