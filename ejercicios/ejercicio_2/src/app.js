let div = document.getElementById('todo');

//con los parametros res, solo colocamos ...(tres puntos) y el nombre de como se van a llamar los datos
const parametrosRest = (...datos) => {
    console.log(datos);
}

//parametrosRest('Ricardo', 27, 'correo@correo.com', 'Paraguay');


/*  Recibimos parametros de un arreglo */
const parametrosSpread = (...datos) => {
    console.log(datos);
}

otrosParametros = (...arreglo) => {
    for(let i=0;i<arreglo.length;i++) {
        div.innerHTML = arreglo[i] + '</br>';

    }
}

const arregloDatos = ['Anahi', 18, 'correo@correo.com', 'Paraguay']; 

parametrosSpread(...arregloDatos);

otrosParametros(arregloDatos);