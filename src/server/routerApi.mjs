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

const sendResponse = (res, data) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.json(data);
}

const selectQuery = (req, res, table, condition) => {
    con.connect(err => {});

    const select = `SELECT * FROM ${table}${condition ? " WHERE " + condition : ""}`;
    con.query(select, (err, data, results) => {
        sendResponse(res, data);
    });
}

routerApi.get('/api/dictionary/list', (req, res) => selectQuery(req, res, 'dictionary'));
routerApi.get('/api/dictionary/list/:chapterId', (req, res) => {
    console.log(req.params.chapterId)
    selectQuery(req, res, 'dictionary', `chapterId = ${req.params.chapterId}`)
});

routerApi.delete('/api/dictionary/list/:id', (req, res) =>{
    con.connect(err => {});
    con.query(`DELETE FROM dictionary WHERE id=${req.params.id}`, (err, data, results) => {
        res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        res.send({"ok": "ok"});
    });
});
const urlencodedParser = express.urlencoded({extended: false});

routerApi.post('/api/dictionary/create/', urlencodedParser, (req, res) =>{
    con.connect(err => {});
    con.query(`INSERT INTO dictionary (id, russia, english, chapterId) VALUES (NULL, '${req.body.russia}', '${req.body.english}', '1')`, (err, data, results) => {
        res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
        res.redirect('/dicionary');
    });
});

routerApi.get('/api/dictionary/chapter/list', (req, res) => selectQuery(req, res, 'chapter'));
    

