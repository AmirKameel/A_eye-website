import express from 'express'
import  connection  from './dbConnection/connection.js'
import userRouter from './src/modules/user/user.router.js'
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
dotenv.config();
//require("dotenv").config()
const app=express()
const port=3022
app.use(express.json())
app.use(cors());
connection()
app.use(userRouter)
app.use(bodyParser.json());
const __dirname = path.dirname(new URL('.', import.meta.url).pathname);

app.use(express.static(path.join(__dirname, 'css project')));
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})