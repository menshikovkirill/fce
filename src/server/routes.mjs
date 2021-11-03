import express from 'express';
import path from 'path';
import fetch from "node-fetch";
import {indexHtmlPath} from './config/index.mjs';

const indexHtml = (req, res) => {    
    res.sendFile(indexHtmlPath);
};

export const router = express.Router();

router.get('/', indexHtml);
router.get('/dicionary', indexHtml);
router.get('/tests', indexHtml);
router.get('/manuals', indexHtml);

router.get('/dicionary/list', (req,res) => {
    fetch('http://fce-sait.na4u.ru/api/dictionary/list').then(result => result.json()).then(data => res.json(data))
});