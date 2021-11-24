const coleccionClientes = require('../schemas/clientes.schema')
const operaciones = {};

operaciones.getClientes = async function(req, res) {
	try {	
		const clientes = await coleccionClientes.find(req.query)
		if (clientes!=null) {
			res.status(200).json(clientes);
		}
		else {
			res.status(404).json({message: "Not found"})
		}
	}
	catch(err) {
		res.status(400).json({message: "Bad request"})
	}
}

operaciones.getCliente = async function(req, res) {
	try {
		const cliente = await coleccionClientes.findById(req.params.id)
		if (cliente != null) {
			res.status(200).json(cliente);	
		}
		else {
			res.status(404).json({message: "Not found"})	
		}
	}
	catch(err) {
		res.status(400).json({message: "Bad request"})
	}
}

operaciones.guardarCliente = async function(req, res) {
	try {
		const cliente = new coleccionClientes(req.body)
		await cliente.save()
		res.status(201).json(cliente);	
	}
	catch(err) {
		res.status(400).json({message: "Bad request"})	
	}
}

operaciones.actualizarCliente = async function(req, res) {
	try {
		const cliente = {
			nombres: req.body.nombres,
	    	apellidos: req.body.apellidos,
	    	identificacion : {
	    		tipo: req.body.identificacion.tipo,
	        	numero: req.body.identificacion.numero
	        }
		}
		await coleccionClientes.findByIdAndUpdate(req.params.id, {$set: cliente}, {new: true});
		res.status(200).json(cliente);
	}
	catch(err) {
		res.status(400).json({message: "Bad request"})	
	}
}

operaciones.borrarCliente = async function(req, res) {
	try {
		const cliente = await coleccionClientes.findByIdAndRemove(req.params.id);
		if (cliente != null) {
			res.status(200).json({message: "Deleted"});	
		}
		else {
			res.status(404).json({message: "Not found"})	
		}
	}
	catch(err) {
		res.status(400).json({message: "Bad request"})		
	}

}

module.exports = operaciones