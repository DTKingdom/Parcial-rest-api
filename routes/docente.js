

//get
app.get('/docente', (req, res) => {
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
app.get('/docente/:id', (req, res) => {
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
app.post('/docente', (req, res) => {
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