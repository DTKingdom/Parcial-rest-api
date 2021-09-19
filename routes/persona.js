

//get
app.get('/persona', (req, res) => {
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
app.get('/persona/:id', (req, res) => {
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
app.post('/persona', (req, res) => {
    let per = req.body;
    console.log('insert persona')
    mysqlConnection.query('insert into wwpcyt9y8klyvijr.persona (nombre, apellido, fecha_nacimiento, Direccion) values (?,?,?,?)',
        [per.nombre, per.aperllido, per.fecha_nacimiento, per.Direccion], (err, result) => {
            if (!err) {
                res.send('Creado');
            } else {
                console.log(err);
                res.send('error');
            }
        })
});