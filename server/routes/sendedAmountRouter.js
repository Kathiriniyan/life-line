import express from "express";
import { sendedAmountsByPatient } from "../controllers/SendedAmountControllers.js";
import authPatient from "../middlewares/authPatient.js";




const sendedAmountRouter = express.Router();
sendedAmountRouter.get('/my', authPatient ,sendedAmountsByPatient);
export default sendedAmountRouter;