import express from 'express';
import { router } from './routes.mjs';
import path from 'path';
import mysql from 'mysql';
const port = Number(process.env.APP_PORT) || 3000;
const ip = process.env.APP_IP || "::";
// const pathToDist = process.env.APP_DIR || "dist"
const app = express();
console.log(process.env.APP_DIR)
app.use(express.json());
//app.use('/', express.static("/home/c46622/fce-sait.na4u.ru/app/dist"));
app.use('/', express.static("dist"));
app.use('/', router);

app.listen(port, ip, () => {
    console.log(path.resolve(path.dirname('')))
});

//"start": "cross-env APP_DIR= 'E:/fce/dist/index.html' APP_PORT=3000 APP_PORT=:: node ./src/server/index.js",

// app.listen(process.env.APP_PORT, process.env.APP_IP, () => {
//     console.log("jere")
// });