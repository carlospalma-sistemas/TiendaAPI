const mongoose = require ('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
	nombres : { type: String, required: true },
	apellidos : { type: String, required: true },
	identificacion : { 
		tipo : { type: String, required: true },
		numero : { type: Number, required: true },
	}
});

module.exports = mongoose.model('Cliente', esquema);
