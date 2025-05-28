import bodyParser from 'body-parser';
import express from 'express';

import eventRoutes from './routes/events.js';
// adding comment to trigger job.
const app = express();

app.use(bodyParser.json());

app.use(eventRoutes);

app.listen(process.env.PORT);
