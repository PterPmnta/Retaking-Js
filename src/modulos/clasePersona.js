export default class Persona {

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarDatos(){
        console.log(`El nombre es ${this.nombre} y tiene ${this.edad} años`);
    }

}