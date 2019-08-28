const promesas = new Promise((resolve, reject) => {
    //Accion a ejecutar
    setTimeout(()=> {
        const exito = true;

        if(exito) {
            //Esto se podria enviar con o sin mensaje
            resolve('El mensaje tuvo exito');
        }else {
            //Esto se podria enviar con o sin mensaje
            reject('El mensaje no tuvo exito');
        }   
    }, 4000);
});

//Se ejecuta then cuando retorna el metodo resolve()
promesas.then((mensaje)=>{
    alert(mensaje);
});


//Se va a ejecutar catch cuando retorne el parametro reject()
promesas.catch((mensaje)=>{
    alert(mensaje);
});