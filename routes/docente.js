const express = require('express');
const router = express.Router();

const mysqlConnection = require('../bd/db-config');

//get
router.get('/docente', (req, res) => {
    console.log('get docente')
    mysqlConnection.query('Select * from wwpcyt9y8klyvijr.docente', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Leer
router.get('/docente/:id', (req, res) => {
    console.log('get docente')
    mysqlConnection.query('Select * from wwpcyt9y8klyvijr.docente where id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Crear
router.post('/docente', (req, res) => {
    let dec = req.body;
    console.log('insert docente')
    mysqlConnection.query('insert into wwpcyt9y8klyvijr.docente (id_persona, fecha_ingreso) values (?,?)',
        [doc.id_persona, doc.fecha_ingreso], (err, result) => {
            if (!err) {
                res.send('Creado');
            } else {
                console.log(err);
                res.send('error');
            }
        })
});

//Actualizar
router.put("/docente/:id", (req, res) => {
    console.log("update docente");
    let doc = req.body;
    console.log(doc);
    mysqlConnection.query('update wwpcyt9y8klyvijr.docente set id_persona = ?, fecha_ingreso = ? where id = ?',
        [doc.id_persona, doc.fecha_ingreso, req.params.id], (err, result) => {
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
router.delete("/docente/:id", (req, res) => {
    console.log("update docente ");
    mysqlConnection.query('delete from wwpcyt9y8klyvijr.docente where id = ?',
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