import express from 'express';
import { serpRouter, specRouter } from '@app/api/routers';
// import { CONST_PARAM_SEARCH_ENGINE_ID, CONST_PARAM_SEARCH_TERM } from '@app/config/consts';

const app = express();

app.use(express.json());
app.use(`/api/v1/serp/:searchEngineId/:searchTerm`, serpRouter);
app.use('/api/v1/spec', specRouter);

export { app };
