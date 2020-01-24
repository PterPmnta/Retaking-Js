let nombres;
nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];

const numerosCaracteres = nombres.map((nombre) => {
  return `El usuario de ${nombre} tiene ${nombre.length} de caracteres en su nombre`;
});

console.log(numerosCaracteres);
