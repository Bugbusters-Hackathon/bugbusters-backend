import express, { json } from 'express';
import { corsMiddleware } from './middlewares/corsmiddleware.js';
import { createJobRouter } from './routes/jobData.js';

export const createApp = ({ JobDataController }) => {
    const app = express();
    app.use(json());
    app.use(corsMiddleware(0));
    app.disable('x-powered-by');
    app.use('/jobdata', createJobRouter({ JobDataController }))

    return app;
}

export const startingApp = (app) => {
    const PORT =  3001
    app.listen(PORT, () => {
        console.log('server listening')
    })
    return app;
}