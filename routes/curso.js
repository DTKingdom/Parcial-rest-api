const express = require('express');
const router = express.Router();

const mysqlConnection = require('../bd/db-config');

//get
router.get('/curso', (req, res) => {
    console.log('get estudiantes')
    mysqlConnection.query('Select * from wwpcyt9y8klyvijr.curso', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Leer
router.get('/curso/:id', (req, res) => {
    console.log('get curso')
    mysqlConnection.query('Select * from wwpcyt9y8klyvijr.curso where id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Crear
router.post('/curso', (req, res) => {
    let cur = req.body;
    console.log('insert curso')
    mysqlConnection.query('insert into wwpcyt9y8klyvijr.curso (nombre, descripcion) values (?,?)',
        [cur.nombre, cur.descripcion], (err, result) => {
            if (!err) {
                res.send('Creado');
            } else {
                console.log(err);
                res.send('error');
            }
        })
});


module.exports = router;