const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('./connection');
const app = express();

//Configuración
app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

//Lista de rutas base
app.use('/api/productos', require('./routes/productos.routes'));
app.use('/api/clientes', require('./routes/clientes.routes'));

//Arranque
app.listen(app.get('port'), ()=> {
	console.log(process.env.npm_package_name + " iniciado en puerto "+ app.get('port'))
});

