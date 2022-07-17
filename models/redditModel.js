let conn = require('./connection');
//Creamos un objeto al que llamaremos contenidos
var contenidos = {};

//Obtenemos todos los contenidos
contenidos.getContenidos = (callback) => {
    if (conn) {
        conn.query('SELECT * FROM contenido',  (error, rows)=> {
            if (error) {
                throw error;
            } else {
                callback(null, rows);
            }
        });
    }
}


//Añadir un nuevo contenido
contenidos.insertContenido =  (contenidoData, callback)=> {
    if (conn) {
        conn.query('INSERT INTO contenido SET ?', contenidoData, (error, result) =>{
            if (error) {

                throw error;
            } else {
                //devolvemos el id del contenido insertado
                callback(null, result.insertId);
            }
        });
    }
}

//Obtenemos un usuario por su id
contenidos.getContenidoById = (id,callback)=>{
	if (conn) {
		let sql = 'SELECT * FROM contenido WHERE id = ' + conn.escape(id);
		conn.query(sql, (error, row) => {
			if(error){
				throw error;
			}
			else{
				callback(null, row);
			}
		});
	}
}



module.exports = contenidos;