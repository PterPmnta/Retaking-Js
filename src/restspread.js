//Rest

const mostrarDatos = (...datos) => {
    console.log(datos);
}

mostrarDatos(`Ventana`, 300, `Piso 2`, `Lejos`)

//Spread

const arregloDatos = [`Puerta`, 520, `Piso 14`, `Aqui`]

const mostrarEsporas = (...datosArreglos) => {
    console.log(datosArreglos);    
}

mostrarEsporas(...arregloDatos)
