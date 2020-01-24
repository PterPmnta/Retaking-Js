const usuario = {
    nombre: 'Pedro',
    edad: 31,
    telefono: '3025478965',
    pais: 'Canada'
};

const {nombre, edad, telefono, pais} = usuario;

const mostrarInfo = ( {nombre, telefono} ) => {
    console.log(`Nombre es ${nombre} y su telefono es ${telefono}`);    
};

mostrarInfo(usuario);