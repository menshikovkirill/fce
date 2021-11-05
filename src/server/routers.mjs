import express from 'express';
import path from 'path';
import fetch from "node-fetch";
import {indexHtmlPath} from './config/index.mjs';

import * as api from './controllers/api/index.mjs';

const indexHtml = (req, res) => {    
    res.sendFile(indexHtmlPath);
};

export const router = express.Router();

//router for pages
router.get('/', indexHtml);
router.get('/dicionary', indexHtml);
router.get('/tests', indexHtml);
router.get('/manuals', indexHtml);


//router for api dictionary
router.get('/api/dictionary/list', api.getAllWords);
router.get('/api/dictionary/list/:chapterId', api.getWordsByChapter);
router.get('/api/dictionary/list/delete/:id', api.deleteWordById);
router.get('/api/dictionary/chapter/list', api.getChapterNames);
router.get('/api/dictionary/create/:russia/:english/:chapter/', api.createWord);

