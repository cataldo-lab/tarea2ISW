//Objetos

/*
1. **Crear un objeto de persona**: Define un objeto llamado "persona" 
que tenga propiedades como nombre, edad y género. Luego, muestra la información 
de esa persona por la consola.
2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, 
fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero
 por consola, imprimir cada propiedad del objeto y el tipo de dato que es.

*/

const persona={
    nombre:"\nBenjamin",
    edad:33,
    genero:"Masculino"
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.genero);
console.log("\n");

const caja={
    cuadernos:{
        estado:"Buen estado"
    },
    lapices:{
        estado:"Mal estado"
    },
    papel:{
        estado:"Buen estado"
    },
    fotografias:{
        estado:"Mal estado"
    },

}

console.log(caja); 
console.log("\nImprimir de forma individial lo anterior: ");
console.log("Cuaderno: ",caja.cuadernos);
console.log("Lapices: ",caja.lapices);
console.log("Papel: ",caja.papel);
console.log("Fotografias: ",caja.fotografias);
