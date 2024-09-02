import { configDotenv } from 'dotenv';
import express from 'express';
import router from './routes/github.routes.js';
import webhookRouter from './routes/webhook.routes.js';

configDotenv()

const app = express();

app.use(express.json());

//routes
app.use('/github',router);
app.use('/webhook',webhookRouter);

app.listen(process.env["NODE_PORT"], () => {process.env["NODE_ENV"] == 'test'?'':console.log(`Server is running on port http://localhost:${process.env["NODE_PORT"]}/`)});

export default app