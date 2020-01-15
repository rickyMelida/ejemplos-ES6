// Funciones tipo flecha

let nombre = ['Ricardo', 'David', 'Santiago', 'Jose'];

/*let numero_caracter = nombre.map(function(nombre) {
    //console.log(nombre);
    console.log(`${nombre} tiene ${nombre.length} caracteres`);
});*/

/*let numero_caracter = nombre.map((nombre) => {
    console.log(`${nombre} esta en la posicion ${nombre.length}`);
});*/

//Esto solo funciona de esta forma si le pasamos un solo parametro
//y tambien debemos poner la palabra return
let fun_reducida = nombre.map( nombre => ` Lo estamos reduciendo al maximo ${nombre} ` );

console.log(fun_reducida);