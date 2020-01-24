class Usuario {
    constructor(nombre, edad){
        this.nombre = nombre,
        this.edad = edad;
    }

    mostrarSaludo(mensaje){
        return mensaje;
    }

    mostrarInformacion(){
        return `EL nombre del usuario es ${this.nombre} y la edad es ${this.edad}`;
    }
}

const carlos = new Usuario('Pter Pmnta M', 30);
console.log(carlos.mostrarInformacion());

class Estudiante extends Usuario{
    constructor(nombre, edad, carrera){
        super(nombre, edad);
        this.carrera = carrera;
    }

    mostrarInformacion(){
        return `EL nombre del usuario es ${this.nombre} y la edad es ${this.edad} y su carrera es ${this.carrera}`;
    }
}

const alejandro = new Estudiante('Isaac Newton', 18, 'Arte y Cultura');
console.log(alejandro.mostrarInformacion());
