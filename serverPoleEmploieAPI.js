import { createApp, startingApp } from "./index.js"
import { JobDataController } from "./controllers/poleemploiAPI/jobData.js";

const appWithPoleEmploiAPI = () => createApp({ JobDataController })
const app = appWithPoleEmploiAPI();
startingApp(app);

