const express = require('express');
const morgan = require('morgan');
const mongoose = require('./connection');
const app = express();

//Configuración
app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'))
app.use(express.json())

//Lista de rutas base
app.use('/api/productos', require('./routes/productos.routes'));

//Arranque
app.listen(app.get('port'), ()=> {
	console.log(process.env.npm_package_name + " iniciado en puerto "+ app.get('port'))
});

