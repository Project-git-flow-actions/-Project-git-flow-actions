var express = require('express');
var router = express.Router();

//rota home
router.get('/', (req, res) => {
  res.render('home', { title: 'Game Zone' });
});

//rota para pagina de login
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

//rota para pagina de cadastro
router.get('/register', (req, res) => {
  res.render('register', { title: 'cadastro' });
});

module.exports = router;
