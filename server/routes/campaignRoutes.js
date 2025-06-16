import express from 'express';
import { upload } from '../configs/multer.js';
import authAdmin from '../middlewares/authAdmin.js';
import { addCampaign, campaignById, campaignList, campaignsByPatient, campaignsByPatientId, changeApprove, changeEmergency } from '../controllers/campaignController.js';
import authPatient from '../middlewares/authPatient.js';

const campaignRouter = express.Router();

campaignRouter.post('/add', upload.array(["images"],4), authPatient, addCampaign);
campaignRouter.get('/list', campaignList )
campaignRouter.get('/id', campaignById )
campaignRouter.get('/by-patient', authPatient, campaignsByPatient); 
campaignRouter.post('/approve', authAdmin, changeApprove )
campaignRouter.post('/emergency', authAdmin, changeEmergency )

campaignRouter.get('/by-patient', authPatient, campaignsByPatient); // For logged-in patient
campaignRouter.get('/by-patient/:id', campaignsByPatientId);          // For admin, by patient ID


export default campaignRouter;