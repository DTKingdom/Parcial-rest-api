const express = require('express');
const router = express.Router();

const mysqlConnection = require('../bd/db-config');

//get
router.get('/personas', (req, res) => {
    console.log('get personas')
    mysqlConnection.query('Select * from wwpcyt9y8klyvijr.persona', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Leer
router.get('/personas/:id', (req, res) => {
    console.log('get personas')
    mysqlConnection.query('Select * from wwpcyt9y8klyvijr.persona where id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Crear
router.post('/personas', (req, res) => {
    let per = req.body;
    console.log('insert personas')
    mysqlConnection.query('insert into wwpcyt9y8klyvijr.persona (nombre, apellido, fecha_nacimiento, direccion) values (?,?,?,?)',
        [per.nombre, per.apellido, per.fecha_nacimiento, per.direccion], (err, result) => {
            if (!err) {
                res.send('Creado');
            } else {
                console.log(err);
                res.send('error');
            }
        })
});

//Actualizar
router.put("/personas/:id", (req, res) => {
    console.log("update personas");
    let per = req.body;
    console.log(per);
    mysqlConnection.query('update wwpcyt9y8klyvijr.persona set nombre = ?, apellido = ?, fecha_nacimiento = ?, direccion=? where id = ?',
        [per.nombre, per.apellido, per.fecha_nacimiento, per.direccion, req.params.id], (err, result) => {
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
router.delete("/personas/:id", (req, res) => {
    console.log("update personas");
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