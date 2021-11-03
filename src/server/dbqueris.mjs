import mysql from 'mysql';
import express from 'express';

export const router = express.Router();

var con = mysql.createConnection({
    socketPath: "/var/run/mysqld/mysqld.sock",
    user: "c46622_fce_sait_na4u_ru",
    password: "ToTtoWofdusah87", 
    database: 'c46622_fce_sait_na4u_ru'
});

router.get('/api/dictionary/list', (req, response) => {
    con.connect(function(err) {
        console.log("Connected!");
    });
        
    con.query("SELECT * FROM dictionary", (err, data, results) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        response.json(data);
    });
})