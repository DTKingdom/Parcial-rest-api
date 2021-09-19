const express = require('express');
const router = express.Router();

const mysqlConnection = require('../bd/db-config');

//get
router.get('/maestros', (req, res) => {
    console.log('get maestros')
    mysqlConnection.query('Select * from wwpcyt9y8klyvijr.docente', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Leer
router.get('/maestros/:id', (req, res) => {
    console.log('get maestros')
    mysqlConnection.query('Select nombre,apellido,fecha_nacimiento,Direccion from persona Inner Join docente ON persona.id = docente.id_persona where docente.id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Crear
router.post('/maestros', (req, res) => {
    let doc = req.body;
    console.log('insert maestros')
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
router.put("/maestros/:id", (req, res) => {
    console.log("update maestros");
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
router.delete("/maestros/:id", (req, res) => {
    console.log("update maestros ");
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