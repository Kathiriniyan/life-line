import mongoose from "mongoose";

const donationrequestSchema = new mongoose.Schema({
    campaign: { type: String, required: true, ref: 'campaign' },
    amount: { type: Number, required: true },
    message: { type: String, default: null },
    status: { type: String, default: "Pending"},
}, { timestamps: true });

const DonationRequest = mongoose.models.donationrequest || mongoose.model('donationrequest', donationrequestSchema);
export default DonationRequest;