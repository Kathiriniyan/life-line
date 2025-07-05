import Campaign from "../models/Campaign.js";
import DonationRequest from "../models/DonationRequest.js";


// Get all withdrawal requests by patient (for patient dashboard)
export const getPatientRequests = async (req, res) => {
    try {
        const patientId = req.patientId;
        // Find all campaigns by this patient
        const campaigns = await Campaign.find({ patientId }).select('_id');
        const campaignIds = campaigns.map(c => c._id);
        // Find requests for these campaigns
        const requests = await DonationRequest.find({ campaign: { $in: campaignIds } }).populate('campaign');
        res.json({ success: true, requests });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Create new request
export const createRequest = async (req, res) => {
    try {
        const { campaignId, amount, message } = req.body;
        // Only allow if patient owns this campaign!
        const campaign = await Campaign.findById(campaignId);
        if (!campaign) return res.json({ success: false, message: "Campaign not found" });
        if (String(campaign.patientId) !== req.patientId) {
            return res.json({ success: false, message: "Unauthorized" });
        }
        // Collected amount validation
        if (amount > campaign.collectedAmount)
            return res.json({ success: false, message: "Amount exceeds collected amount" });

        // Only one pending request per campaign at a time
        const existing = await DonationRequest.findOne({ campaign: campaignId, status: "Pending" });
        if (existing) return res.json({ success: false, message: "A pending request already exists" });

        const request = await DonationRequest.create({
            campaign: campaignId,
            amount,
            message,
            status: "Pending"
        });
        res.json({ success: true, request });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Cancel a request (patient)
export const cancelRequest = async (req, res) => {
    try {
        const { id } = req.body;
        const request = await DonationRequest.findById(id).populate('campaign');
        if (!request) return res.json({ success: false, message: "Request not found" });
        // Only if status is Pending and campaign belongs to this patient
        if (request.status !== "Pending") return res.json({ success: false, message: "Cannot cancel this request" });
        if (String(request.campaign.patientId) !== req.patientId)
            return res.json({ success: false, message: "Unauthorized" });
        await DonationRequest.findByIdAndDelete(id);
        res.json({ success: true, message: "Request cancelled" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
