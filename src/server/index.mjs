import express from 'express';
import { router } from './routes.mjs';
import { routerApi } from './routerApi.mjs';
import {PORT, staticFolder, IP} from './config/index.mjs';
import path from 'path';

const app = express();
app.use(express.json());
app.use('/', express.static(staticFolder));
app.use('/', router);
app.use('/', routerApi);

app.listen(PORT, IP, () => {
    console.log(path.resolve(path.dirname('')))
});
