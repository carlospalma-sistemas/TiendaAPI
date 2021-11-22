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

module.exports = operaciones