import { configDotenv } from 'dotenv';
import express from 'express';

configDotenv()

const app = express();

app.use(express.json());

app.listen(process.env["NODE_PORT"], () => {process.env["NODE_ENV"] == 'test'?'':console.log(`Server is running on port http://localhost:${process.env["NODE_PORT"]}/`)});

export default app