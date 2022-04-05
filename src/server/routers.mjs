import express from 'express';
import path from 'path';
import fetch from "node-fetch";
import {indexHtmlPath, __dirname} from './config/index.mjs';
import fs from 'fs'

import * as api from './controllers/api/index.mjs';

const indexHtml = (req, res) => {    
    res.sendFile(indexHtmlPath);
};

export const router = express.Router();
router.use(express.static(path.join(__dirname, 'public')));
//router for pages
router.get('/', indexHtml);
router.get('/dicionary', indexHtml);
router.get('/tests', indexHtml);
router.get('/articles', indexHtml);
router.get('/articles/:id', (req, res) => {   
    let fileContent = fs.readFileSync(path.resolve("..", __dirname, "public", "articles",  `${req.params.id}.html`), "utf8"); 

    res.send(fileContent);
});


//router for api dictionary
router.get('/api/dictionary/list', api.getAllWords);
router.get('/api/dictionary/list/:chapterId', api.getWordsByChapter);
router.get('/api/dictionary/list/delete/:id', api.deleteWordById);
router.get('/api/dictionary/chapter/list', api.getChapterNames);
router.get('/api/dictionary/create/:russia/:english/:chapter/', api.createWord);

