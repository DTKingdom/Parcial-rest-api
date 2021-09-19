
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'j8oay8teq9xaycnm.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'p3u55u0nuazag777',
  password: 'i3tivaaoxudqf4jn',
  database: 'wwpcyt9y8klyvijr',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;