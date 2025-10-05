var express = require('express');
var router = express.Router();
const fs = require('fs');

const usuarios = [];

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


router.post('/register', (req,res) => {
const { username, email, password,  } = req.body;

  if(username && email && password){
    const usuario = { username, email, password};
    usuarios.push(usuario);
    fs.writeFileSync('./database/users.json', JSON.stringify(usuarios, null, 2));
    console.log('Usuário salvo com sucesso!');
    return res.render('home', { title: 'Game Zone', message: 'Usuário cadastrado com sucesso!', usuario});
  }
  return res.render('register', { title: 'cadastro', message: 'Falha no Cadastro' })
})

module.exports = router;
