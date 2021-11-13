const coleccionProductos = require('../schemas/productos.schema');
const operaciones = {};

operaciones.getProductos = async function(req, res) {
	const datos = await coleccionProductos.find()
	res.json(datos);
}

operaciones.getProducto = async function(req, res) {
	const dato = await coleccionProductos.findById(req.params.id);
	res.json(dato);
}

operaciones.crearProducto = async function(req, res) {
	const producto = new coleccionProductos(req.body);
	console.log(producto)
	await producto.save();
	res.json({"status":"Dato de producto guardado"});	
}

operaciones.actualizarProducto = async function(req, res) {
	const { id } = req.params;
	const producto = {
		nombre: req.body.nombre,
    	tipo: req.body.tipo,
    	precio: req.body.precio,
        presentacion: req.body.presentacion
	}
	console.log(producto)
	await coleccionProductos.findByIdAndUpdate(req.params.id, {$set: producto}, {new: true});
	res.json({"status":"Dato de producto actualizado"});
}

operaciones.borrarProducto = async function(req, res) {
	await coleccionProductos.findByIdAndRemove(req.params.id);
	res.json({"status":"Dato de producto borrado"});	

}

module.exports = operaciones