import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { clerkMiddleware } from '@clerk/express'
import connectDB from './configs/db.js'
import userRouter from './routes/userRoute.js'
import adminRouter from './routes/AdminRoutes.js'
import connectCloudinary from './configs/cloudinary.js'
import campaignRouter from './routes/campaignRoutes.js'
import cartRouter from './routes/cartRoutes.js'
import addressRouter from './routes/addressRoute.js'
import orderRouter from './routes/orderRoutes.js'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

const app = express()

// Vercel: Connect DB in each request (middleware if needed)
app.use(async (req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    await connectDB()
  }
  next()
})

await connectCloudinary()

const allowedOrigins = ['http://localhost:5173']

app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: allowedOrigins, credentials: true }))
app.use(clerkMiddleware())

app.get('/', (req, res) => res.send("API is Working"))
app.use('/api/inngest', serve({ client: inngest, functions }))
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)
app.use('/api/campaign', campaignRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter)
app.use('/api/order', orderRouter)

// DO NOT USE app.listen

export default app // <---- FOR VERCEL!
