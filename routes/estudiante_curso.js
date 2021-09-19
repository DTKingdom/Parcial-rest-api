

//get
app.get('/estudiante_curso', (req, res) => {
    console.log('get estudiante_curso')
    mysqlConnection.query('Select * from wwpcyt9y8klyvijr.estudiante_curso', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Leer
app.get('/estudiante_curso/:id', (req, res) => {
    console.log('get estudiante_curso')
    mysqlConnection.query('Select * from wwpcyt9y8klyvijr.estudiante_curso where id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Crear
app.post('/estudiante_curso', (req, res) => {
    let estc = req.body;
    console.log('insert estudiante_curso')
    mysqlConnection.query('insert into wwpcyt9y8klyvijr.estudiante_curso (id_estudiante, id_curso, status, fecha_inicio, fecha_fin) values (?,?,?,?,?)',
        [estc.id_estudiante, estc.id_curso, estc.status, estc.fecha_inicio, estc.fecha_fin], (err, result) => {
            if (!err) {
                res.send('Creado');
            } else {
                console.log(err);
                res.send('error');
            }
        })
});