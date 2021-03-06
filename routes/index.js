

const router = require('express').Router();

const videosController = require('../controllers/index');


router.get('/', videosController.listIndex);
router.get('/api', videosController.list);
router.get('/detail/:id', videosController.detail);

router.post('/detail/:id', videosController.detail);

router.get('/api/detail/:id', videosController.details);
router.post('/api/detail/:id', videosController.details);

router.post('/results', videosController.results);
router.get('/results', (req, res) => {
    res.render('results');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});




module.exports = router;
