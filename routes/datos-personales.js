const express = require('express');
const router = express.Router();

const mysqlConnection = require('../bd/db-config');
router.get('/', (req, res) => {
    console.log(' nombre: Dylan Alexis Tobar Orellana, carnet: 0907-18-9913')
    
});

module.exports = router;