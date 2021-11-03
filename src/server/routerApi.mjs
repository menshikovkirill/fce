import mysql from 'mysql';
import express from 'express';
import { router } from './routes.mjs';

export const routerApi = express.Router();

var con = mysql.createConnection({
    socketPath: "/var/run/mysqld/mysqld.sock",
    user: "c46622_fce_sait_na4u_ru",
    password: "ToTtoWofdusah87", 
    database: 'c46622_fce_sait_na4u_ru'
});

const sendResponse = (response, data) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    response.json(data);
}

const selectQuery = (req, res, table, condition) => {
    con.connect(function(err) {
      //  console.log("Connected!");
    });

    const select = `SELECT * FROM ${table}${condition ? " WHERE " + condition : ""}`;
  //  console.log(condition)
    con.query(select, (err, data, results) => {
        sendResponse(res, data);
    });
}

routerApi.get('/api/dictionary/list', (req, res) => selectQuery(req, res, 'dictionary'));
routerApi.get('/api/dictionary/chapter/list', (req, res) => selectQuery(req, res, 'chapter'));
routerApi.get('/api/dictionary/list/:chapterId', (req, res) => {
    console.log(req.params.chapterId)
    selectQuery(req, res, 'dictionary', `chapterId = ${req.params.chapterId}`)
});
routerApi.get('/api/:chapterId', (req, res) => {
    res.send(req.params.chapterId);
});
    
