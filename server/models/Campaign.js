import mongoose from "mongoose";


const campaignSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    patientId: { type: String, required: true, ref: 'patient' },
    title: { type: String, required: true },
    description: { type: Array, required: true },
    category: { type: String, required: true },
    items: [{
        goal_amount: { type: Number, required: true },
        collected_amount: { type: Number, default: 0 },
    }],
    end_date: { type: String, required: true },
    address: { type: String, required: true, ref: 'address' },
    account: { type: String, required: true, ref: 'account' },
    isApprove: { type: Boolean, default: false },
    isEmergency: { type: Boolean, default: false },
}, { timestamps: true })

const Campaign = mongoose.models.campaign || mongoose.model('campaign', campaignSchema)

export default Campaign