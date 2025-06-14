import Campaign from "../models/Campaign.js";
import stripe from "stripe";
import { v4 as uuidv4 } from 'uuid';
import Donation from "../models/Donation.js";


// Donation : /api/donation
export const donation = async (req, res) => {
    try {
        const donorId = req.donorId;
        const { items, message, isAnonymous } = req.body;

        if (!Array.isArray(items) || items.length === 0) {
            return res.json({ success: false, message: "Invalid data" });
        }

        const newDonation = await Donation.create({
            _id: uuidv4(), // use a unique string, or remove this line if you want Mongo to auto-create it as ObjectId
            donorId,
            items,
            message,
            isAnonymous: !!isAnonymous,
        });

        return res.json({ success: true, message: "Donation Successful", donationId: newDonation._id });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};







// Get Donations by Donor ID: /api/donation/user
export const getDonorDonation = async (req, res) => {
    try {
        // For Clerk-authenticated donors
        const donorId = req.donorId || req.auth?.userId;
        if (!donorId) return res.json({ success: false, message: "Not authorized" });

        const donations = await Donation.find({ donorId })
            .populate("items.campaign")
            .sort({ createdAt: -1 });

        res.json({ success: true, donations });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};


//Get All Orders ( for admin) : /api/order/admin
export const getAllDonation = async (req, res) => {
    try {
        // Only accessible to admin (protected by your JWT middleware)
        const donations = await Donation.find({})
            .populate("items.campaign")
            .sort({ createdAt: -1 });

        res.json({ success: true, donations });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
