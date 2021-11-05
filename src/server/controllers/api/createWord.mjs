import express from 'express';
import { connection } from './utils.mjs';
import { sendResponse } from './utils.mjs';
export function createWord(req, res) {
    connection.connect(err => {});

    connection.query(`INSERT INTO dictionary 
        (id, russia, english, chapterId) VALUES 
        (NULL, '${req.params.russia}', '${req.params.english}', '${req.params.chapter}')`, (err, data, results) => {
        
        sendResponse(res, data);
    });
}