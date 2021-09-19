


//get
app.get('/curso_docente', (req, res) => {
    console.log('get estudiantes')
    mysqlConnection.query('Select * from wwpcyt9y8klyvijr.curso_docente', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Leer
app.get('/curso_docente/:id', (req, res) => {
    console.log('get curso_docente')
    mysqlConnection.query('Select * from wwpcyt9y8klyvijr.curso_docente where id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

//Crear
app.post('/curso_docente', (req, res) => {
    let cdoc = req.body;
    console.log('insert curso_docente')
    mysqlConnection.query('insert into wwpcyt9y8klyvijr.curso_docente (id_docente, d_curso, status, fecha_inicio,fecha_fin ) values (?,?,?,?,?)',
        [cdoc.id_docente, cdoc.d_curso, cdoc.status, cdoc.fecha_inicio, cdoc.fecha_fin], (err, result) => {
            if (!err) {
                res.send('Creado');
            } else {
                console.log(err);
                res.send('error');
            }
        })
});