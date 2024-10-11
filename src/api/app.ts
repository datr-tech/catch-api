import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { serpRouter, schemaRouter } from '@app/api/routers';
import schemaV1 from '@app/api/schemas/schema.v1.json';

const app = express();

app.use(express.json());

app.use('/api/schema/:schemaVersion', schemaRouter);
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(schemaV1));
app.use(`/api/v1/serp/:searchEngineId/:searchTerm`, serpRouter);

export { app };
