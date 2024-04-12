import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import db, { connectDB } from './db/index.js';

const app = express();

app.set('trust proxy', 1)
app.use(bodyParser.json())
app.use(cors());
app.use(helmet());

const PORT = process.env.PORT;
const startServer = async () => {
    try{
        await connectDB();
        app.listen(PORT, () => 
            console.log(`Server listening at PORT: ${PORT}`)
        )
    }catch(error){
        console.error(`Error while connecting to the server: ${error}`);
    }
}
startServer();