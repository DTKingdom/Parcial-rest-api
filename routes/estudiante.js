const express = require('express');
const router = express.Router();

const mysqlConnection = require('../bd/db-config');

//get
router.get('/estudiantes', (req, res) => {
    console.log('get estudiantes')
    mysqlConnection.query('Select * from wwpcyt9y8klyvijr.estudiante', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Leer
router.get('/estudiantes/:id', (req, res) => {
    console.log('get estudiantes')
    mysqlConnection.query('Select nombre,apellido,fecha_nacimiento,Direccion from persona Inner Join estudiante ON persona.id = estudiante.id_persona where persona.id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Crear
router.post('/estudiantes', (req, res) => {
    let est = req.body;
    console.log('insert estudiantes')
    mysqlConnection.query('insert into wwpcyt9y8klyvijr.estudiante (id_persona, fecha_ingreso, carnet, status) values (?,?,?,?)',
        [est.id_persona, est.fecha_ingreso, est.carnet, est.status], (err, result) => {
            if (!err) {
                res.send('Creado');
            } else {
                console.log(err);
                res.send('error');
            }
        })
});

//Actualizar
router.put("/estudiantes/:id", (req, res) => {
    console.log("update estudiantes");
    let est = req.body;
    console.log(est);
    mysqlConnection.query('update wwpcyt9y8klyvijr.estudiante set id_persona = ?, fecha_ingreso = ?, carnet = ?, status = ? where id = ?',
        [est.id_persona, est.fecha_ingreso,est.carnet, est.status, req.params.id], (err, result) => {
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
router.delete("/estudiantes/:id", (req, res) => {
    console.log("update estudiantes ");
    mysqlConnection.query('delete from wwpcyt9y8klyvijr.estudiante where id = ?',
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