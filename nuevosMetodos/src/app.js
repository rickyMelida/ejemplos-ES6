let texto = 'Hola mundo';

//Comprobamos si el texto empieza con la letra h mayuscula
console.log(texto, 'empieza con H:', texto.toLowerCase().startsWith('h'));

//comprobamos si el texto termina con la letra o 
console.log(texto, 'termina con o:', texto.toLowerCase().endsWith('o'));

//Verificamos si el texto tiene la palabra ricardo
console.log(texto.includes('ricardo'));

let frutas = ['Manzana', 'Banana', 'Pera', 'Pomelo'];

//Verificamos si Pera esta dentro del arreglo de frutas
console.log('Existe la fruta pera: ', frutas.includes('Pera'));


//Buscamos si existe un elemento que tenga 5 caracteres
//Este retorna el primer elemento que cumple con la condicion
console.log(frutas.find( (frutas)=> {
    return frutas.length > 5
} ));
//Lo podemos resumir en una sola linea
//console.log(frutas.find( frutas=> frutas.length > 5 ));

//Retrnamos el indice en el cual se encuentra el elemento 'Pera'
//y lo retornamos dentro de la variable fruta
console.log(frutas.findIndex((fruta)=> {
    //Si nos devuelve -1 quiere decir que no se encuentra en el arreglo
    return fruta === 'Pera';
}));