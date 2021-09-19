const express = require('express');
const router = express.Router();

const mysqlConnection = require('../bd/db-config');

//get
router.get('/persona', (req, res) => {
    console.log('get persona')
    mysqlConnection.query('Select * from wwpcyt9y8klyvijr.persona', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Leer
router.get('/persona/:id', (req, res) => {
    console.log('get persona')
    mysqlConnection.query('Select * from wwpcyt9y8klyvijr.persona where id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Crear
router.post('/persona', (req, res) => {
    let per = req.body;
    console.log('insert persona')
    mysqlConnection.query('insert into wwpcyt9y8klyvijr.persona (nombre, apellido, fecha_nacimiento, Direccion) values (?,?,?,?)',
        [per.nombre, per.apellido, per.fecha_nacimiento, per.Direccion], (err, result) => {
            if (!err) {
                res.send('Creado');
            } else {
                console.log(err);
                res.send('error');
            }
        })
});

//Actualizar
router.put("/persona/:id", (req, res) => {
    console.log("update persona");
    let per = req.body;
    console.log(per);
    mysqlConnection.query('update wwpcyt9y8klyvijr.persona set nombre = ?, apellido = ?, fecha_nacimiento = ?, Direccion=? where id = ?',
        [per.nombre, per.apellido, per.fecha_nacimiento, per.Direccion, req.params.id], (err, result) => {
            if (!err) {
                console.log(result);

                res.status(202).send("Actualizado");
            } else {
                console.log(err);
                res.send('error' + err);
            }
        });
});

//Eliminar
router.delete("/persona/:id", (req, res) => {
    console.log("update persona ");
    mysqlConnection.query('delete from wwpcyt9y8klyvijr.persona where id = ?',
        [req.params.id], (err, result) => {
            if (!err) {
                console.log(result);

                res.status(202).send("Eliminado");
            } else {
                console.log(err);
                res.send('error' + err);
            }
        });
});



module.exports = router;