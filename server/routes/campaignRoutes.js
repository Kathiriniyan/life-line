import express from 'express';
import { upload } from '../configs/multer.js';
import authAdmin from '../middlewares/authAdmin.js';
import { addCampaign, campaignById, campaignList, changeApprove, changeEmergency } from '../controllers/campaignController.js';
import authPatient from '../middlewares/authPatient.js';

const campaignRouter = express.Router();

campaignRouter.post('/add', upload.array(["images"],4), authPatient, addCampaign);
campaignRouter.get('/list', campaignList )
campaignRouter.get('/id', campaignById )
campaignRouter.post('/approve', authAdmin, changeApprove )
campaignRouter.post('/emergency', authAdmin, changeEmergency )

export default campaignRouter;