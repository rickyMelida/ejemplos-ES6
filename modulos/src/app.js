import {mensajeAlerta, otro} from './modulos/mensajeAlerta';

//Cuando lo importamos por defecto esta no necesitaria usar llaver, y podemos cambiarle el nombre del elemento
import MiClase from './modulos/clasePersona';

//mensajeAlerta('sale con export al ...');

//otro();

const per = new MiClase('Anahi', 23);

per.mostrarInfo();