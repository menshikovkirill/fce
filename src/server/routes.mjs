import express from 'express';
import path from 'path';
import fetch from "node-fetch";

const __dirname = path.resolve(path.dirname(''));

const indexHtml = (req, res) => {
    res.sendFile(path.resolve("..", __dirname, "dist", "index.html"));
    //res.sendFile('/home/c46622/fce-sait.na4u.ru/app/dist/index.html')
};

export const router = express.Router();

router.get('/', indexHtml);
router.get('/dicionary', indexHtml);
router.get('/tests', indexHtml);
router.get('/manuals', indexHtml);

router.get('/dicionary/list', (req,res) => {
    fetch('http://fce-sait.na4u.ru/api/dictionary/list').then(result => result.json()).then(data => res.json(data))
});