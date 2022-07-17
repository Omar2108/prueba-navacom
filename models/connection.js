const mysql = require('mysql');

//conexion a la base de datos de MySQL

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba'
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('conectado como id ' + connection.threadId);
});

module.exports = connection;