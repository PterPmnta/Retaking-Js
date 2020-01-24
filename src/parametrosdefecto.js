function parametros(nombre, pais, correo, telefono = 'No Designo'){
    return `Nombre:${nombre} Pais:${pais} Correo:${correo} Telefono:${telefono}`;
}

console.log(parametros('Isaac', 'Arabia', 'correo@correo.com'));