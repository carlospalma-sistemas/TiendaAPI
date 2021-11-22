const mongoose = require ('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
	nombre : { type: String, required: true },
	tipo : { type: String, required: true },
	precio : { type: Number, required: true },
	presentacion : { type: String, required: true },
	cantidad : { type: Number, required: true },
});

module.exports = mongoose.model('Producto', esquema);


