var express = require('express');
var router = express.Router();
const redditController = require('../controllers/redditController');

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index');
});

/* GET listar los contenidos. */
router.get('/api/reddit/v1/contenidos', redditController.list);

/* GET obtener un contenido por su id. */
router.get('/api/reddit/v1/contenido/:id', redditController.getContenidoById);

/* POST agregar un nuevo contenido. */
router.post('/api/reddit/v1/contenido', redditController.save);

module.exports = router;
