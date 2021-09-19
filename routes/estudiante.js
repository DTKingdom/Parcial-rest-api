

//get
app.get('/estudiante', (req, res) => {
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
app.get('/estudiante/:id', (req, res) => {
    console.log('get estudiante')
    mysqlConnection.query('Select * from wwpcyt9y8klyvijr.estudiante where id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Crear
app.post('/estudiante', (req, res) => {
    let est = req.body;
    console.log('insert estudiante')
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