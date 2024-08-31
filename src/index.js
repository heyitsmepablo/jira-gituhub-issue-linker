import { configDotenv } from 'dotenv';
import express from 'express';

configDotenv()

const app = express();


app.listen(process.env["NODE_PORT"], () => {console.log(`Server is running on port http://localhost:${process.env["NODE_PORT"]}/`)});