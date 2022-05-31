const express = require('express');
const router = express.Router();

router.get ('/hello', (req,res) =>res.send('Hola mundo'));

router.get('/paises', (req, res) => {

    const paises = ['España', 'Francia', 'Portugal'];

 return res.send(paises);
});

module.exports = router;