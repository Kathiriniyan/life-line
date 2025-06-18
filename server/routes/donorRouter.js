import express from 'express';
import {  listDonors } from '../controllers/donorController.js';

const donorRouter = express.Router();
donorRouter.get('/list', listDonors);



export default donorRouter;
