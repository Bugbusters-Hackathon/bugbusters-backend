import { createApp, startingApp } from "./index.js"
import { JobDataController } from "./controllers/poleemploiAPI/jobData.js";

export const LocalApp = () => createApp({JobDataController} )
const app=LocalApp();
startingApp(app);

