import express from 'express';
import authPatient from '../middlewares/authPatient.js';
import { cancelRequest, createRequest, getPatientRequests } from '../controllers/DonationRequestControllers.js';


const DonationRequestRouter = express.Router();

DonationRequestRouter.get('/my-requests', authPatient, getPatientRequests);     // All my withdrawal requests
DonationRequestRouter.post('/add', authPatient, createRequest);                // New request
DonationRequestRouter.post('/cancel', authPatient, cancelRequest);             // Cancel

export default DonationRequestRouter;
