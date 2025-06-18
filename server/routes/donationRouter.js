import express from 'express';
import { createDonation, allDonations, userDonations, campaignDonations, donationsByDonor } from '../controllers/donationController.js';


const donationRouter = express.Router();
donationRouter.post('/add', createDonation);          // Make donation
donationRouter.get('/all', allDonations);                       // All donations (admin)
donationRouter.get('/mine', userDonations);           // Current user's donations
donationRouter.get('/campaign/:campaignId', campaignDonations); // For a specific campaign
donationRouter.get('/donor/:id', donationsByDonor);

export default donationRouter;
