
const crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad,
        mostrarInfo: () => {
            return `El nombre es ${nombre} y su edad es ${edad}`;
        }
    };
};

console.log(crearObjeto('Carlos Yair', 55). mostrarInfo());
