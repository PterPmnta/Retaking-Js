import {mensajeAlerta} from './modulos/saludo';
import Persona from './modulos/clasePersona';

mensajeAlerta('Hola Mundo');

const infoPersona = new Persona('Miguel', 23);
infoPersona.mostrarDatos();