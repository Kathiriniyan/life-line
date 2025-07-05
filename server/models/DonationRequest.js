import mongoose from "mongoose";

const donationrequestSchema = new mongoose.Schema({
    campaign: { type: String, required: true, ref: 'campaign' },
    patientId: { type: String, required: true, ref: 'patient' }, // add this if not present
    amount: { type: Number, required: true },
    message: { type: String, default: null }, // reason from patient
    status: { type: String, enum: ['Pending', 'Rejected', 'Sended'], default: "Pending" },
    adminReply: { type: String, default: null }, // Reason for rejection or other info
}, { timestamps: true });

const DonationRequest = mongoose.models.donationrequest || mongoose.model('donationrequest', donationrequestSchema);
export default DonationRequest;