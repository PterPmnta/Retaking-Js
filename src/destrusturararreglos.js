let persona;

persona = ['Juan', 35, 'Salvador', 'Admin. Empresas'];

const [nombre, edad, pais, profesion] = persona

const mostrarInfo = ([nombre, edad, pais, profesion] = persona) => {
    console.log(nombre, edad);    
}

mostrarInfo(persona);
