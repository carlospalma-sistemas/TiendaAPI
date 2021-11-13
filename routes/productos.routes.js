const router = require('express').Router();
const operacion = require('../operations/productos.operations');

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

router.get('/', 	operacion.getProductos);
router.get('/:id', 	operacion.getProducto);
router.post('/', 	operacion.crearProducto);
router.put("/:id",	operacion.actualizarProducto);
router.delete('/:id', operacion.borrarProducto);

module.exports = router