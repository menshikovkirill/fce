import path from 'path';

const __dirname = path.resolve(path.dirname(''));

export const staticFolder = process.env.NODE_ENV == "production" ? "/home/c50268/fcesait.na4u.ru/app/dist" : "dist";
export const PORT = Number(process.env.APP_PORT) || 3000;
export const IP = process.env.APP_IP || "::";
export const indexHtmlPath = process.env.NODE_ENV == "production" 
    ? '/home/c50268/fcesait.na4u.ru/app/dist/index.html' 
    : path.resolve("..", __dirname, "dist", "index.html");
