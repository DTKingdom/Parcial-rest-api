//get
app.get('/curso', (req, res) => {
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
app.get('/curso/:id', (req, res) => {
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
app.post('/curso', (req, res) => {
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