import express, { json } from 'express';
import { corsMiddleware } from './middlewares/corsmiddleware.js';

export const createApp = ({ ThingController, UserController }) => {
    const app = express();
    app.use(json());
    app.use(corsMiddleware(0));
    app.disable('x-powered-by');
    
    return app;
}

export const startingApp= (app)=>{
    const PORT = process.env.PORT ?? 3001
    app.listen(PORT, () => {
        console.log('server listening')
    })
    return app;
}