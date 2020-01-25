const texto = 'Hola mundo';

console.log(`${texto}, empieza con la letra _ h/H _, Resultado:`, texto.startsWith('H'));

console.log(`${texto}, termina con la letra _ o/O _, Resultado:`, texto.endsWith('o'));

console.log(`${texto}, incluye la palabra _ arbol _, Resultado:`, texto.includes('arbol'));

const personas = ['carlos', 'alejandro', 'manuel'];

console.log(`Manuel existe en este arreglo, Resultado:`, personas.includes('manuel'))

console.log(`Persona que tenga mas de 6 caracteres en su nombre, Resultado:`, personas.find( amigo => amigo.length > 6 ));

console.log(`Posicion persona, Resultado:`, personas.findIndex( amigo =>amigo === 'manuel' ));
