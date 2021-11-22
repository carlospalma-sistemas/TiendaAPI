const coleccionProductos = require('../schemas/productos.schema')
const operaciones = {};

operaciones.getProductos = async function(req, res) {
	try {	
		const productos = await coleccionProductos.find(req.query)
		if (productos!=null) {
			res.status(200).json(productos);
		}
		else {
			res.status(404).json({message: "Not found"})
		}
	}
	catch(err) {
		res.status(400).json({message: "Bad request"})
	}
}

operaciones.getProducto = async function(req, res) {
	try {
		const producto = await coleccionProductos.findById(req.params.id);
		if (producto!=null) {
			res.status(200).json(producto);
		}
		else {
			res.status(404).json({message: "Not found"})
		}
	}
	catch(err) {
		res.status(400).json({message: "Bad request"})
	}
}

operaciones.crearProducto = async function(req, res) {
	try {
		const producto = new coleccionProductos(req.body);
		await producto.save();
		res.status(201).json(producto);	
	}
	catch(err) {
		res.status(400).json({message: "Bad request"})	
	}
}

operaciones.actualizarProducto = async function(req, res) {
	try {
		const producto = {
			nombre: req.body.nombre,
	    	tipo: req.body.tipo,
	    	precio: req.body.precio,
	        presentacion: req.body.presentacion
		}
		await coleccionProductos.findByIdAndUpdate(req.params.id, {$set: producto}, {new: true});
		res.status(200).json(producto);
	}
	catch(err) {
		res.status(400).json({message: "Bad request"})	
	}
}

operaciones.borrarProducto = async function(req, res) {
	try {
		await coleccionProductos.findByIdAndRemove(req.params.id);
		res.status(200).json({message: "Deleted"});
	}
	catch(err) {
		res.status(400).json({message: "Bad request"})		
	}

}

module.exports = operaciones