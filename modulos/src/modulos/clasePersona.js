class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarInfo() {
        console.log(`${this.nombre} tiene ${this.edad} años`);  
    }
}

//cundo tenemos un solo elemento(clase, metodo, array, etc) para exportar lo podemos dejar por defecto(default)
export default Persona;