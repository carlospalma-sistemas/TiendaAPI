const router = require('express').Router();
const operacion = require('../operations/clientes.operations');

/*
	Archivo de operaciones
	-----------------------------------------
	const operacion = require('<ARCHIVO DE OPERACIONES>');

	Ruta base
	-----------------------------------------
	'/api/productos'

	Puntos de conexión (endpoints)
	-----------------------------------------
	crear un dato: 				post('/',      operacion.metodo)
	obtener todos los datos: 	get('/',       operacion.metodo)
	obtener un dato: 			get('/:id',    operacion.metodo)
	modificar un dato: 			put('/:id',    operacion.metodo)
	eliminar un dato: 			delete('/:id', operacion.metodo)
*/

router.get('/', 	operacion.getClientes);
//router.get('/:id', 	operacion.getCliente);
//router.post('/', 	operacion.crearCliente);
//router.put("/:id",	operacion.actualizarCliente);
//router.delete('/:id', operacion.borrarCliente);

module.exports = router