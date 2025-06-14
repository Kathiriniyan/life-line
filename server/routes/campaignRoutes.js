import express from 'express';
import { upload } from '../configs/multer.js';
import authAdmin from '../middlewares/authAdmin.js';
import { addCampaign, campaignById, campaignList, changeStock } from '../controllers/campaignController.js';

const campaignRouter = express.Router();

campaignRouter.post('/add', upload.array(["images"]), authAdmin, addCampaign);
campaignRouter.get('/list', campaignList )
campaignRouter.get('/id', campaignById )
campaignRouter.post('/stock', authAdmin, changeStock )

export default campaignRouter;