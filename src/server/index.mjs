import express from 'express';
import { router } from './routers.mjs';
import {PORT, staticFolder, IP} from './config/index.mjs';

const app = express();
app.use(express.json());

app.use('/', express.static(staticFolder));
app.use('/', router);

app.listen(PORT, IP, () => {});
