const contenidoModel = require('../models/redditModel');


//controlador para retornar todos los contenidos de reddit
exports.list = (req, res) => {
    contenidoModel.getContenidos((error, data) => {
        if (error) {
            //Hay un error a la hora de conectarse a la BBDD
            res.send(JSON.stringify({
                "status": 500,
                "error": error,
                "response": null
            }));

        } else {
            //Se envian todos los contenidos
            res.status(200).json(data);

        }

    });
};

exports.save = async (req, res) => {

    let datosContenido = {
        id: req.body.id,
        header_img: req.body.header_img,
        lang: req.body.lang,
        title: req.body.title,
        url: req.body.url,
        description: req.body.description,
        created: req.body.created
    };
    contenidoModel.insertContenido(datosContenido, (error, datos) => {
        if (datos) {
            res.status(200).json({
                "Mensaje": "Creado con exito"
            });
            console.log(datos);
        } else {
            console.log(error);
            res.status(500).json({
                "Mensaje": "Error"
            });
        }
    });

};

exports.getContenidoById = (req, res) => {
    const id = req.params.id;
    contenidoModel.getContenidoById(id, (error, datos)=> {

        if (datos.length > 0) {
            res.status(200).json(datos);
        } else {
            console.log(error);
            res.status(404).json({
                "Mensaje": "No existe el contenido en la DB."
            });
        }
    });
}