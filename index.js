const express = require('express');
const app = express();

app.use(express.json());
app.set('port', process.env.PORT || 3000);

//routes
app.use(require('./routes/persona'));
/*app.use(require('./routes/estudiante_curso'));
app.use(require('./routes/docente'));
app.use(require('./routes/estudiante'));
app.use(require('./routes/curso_docente'));
app.use(require('./routes/curso'));*/


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });