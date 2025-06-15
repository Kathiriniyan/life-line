import cookieParser from 'cookie-parser';
import express from'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config';
import connectCloudinary from './configs/cloudinary.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"
import patientRouter from './routes/patientRouter.js';
import addressRouter from './routes/addressRoute.js';
import accountRouter from './routes/accountRoute.js';



const app = express();
const port = process.env.PORT || 4000;

await connectDB()
await connectCloudinary()

// Allow multiple orgins
const allowedOrigins = ['http://localhost:5173']

// Middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));
app.use(clerkMiddleware())

app.get('/',(req, res) => res.send("API is Working"));
app.use('/api/inngest', serve({ client: inngest, functions }))
app.use('/api/patient', patientRouter)
app.use('/api/address', addressRouter)
app.use('/api/account', accountRouter)



app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})