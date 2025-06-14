import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    donorId : {type: String, required: true, ref: 'donor'},
    patientId : {type: String, required: true, ref: 'patient'},
    items: [{
        campaign: {type: String, required: true, ref: 'campaign'},
        amount: {type: Number, required: true}
    }],
    message: {type: String, default:null},
    isAnonymous: { type: Boolean, default: false },
}, { timestamps: true })

const Account = mongoose.models.account || mongoose.model('account', accountSchema)

export default Account;
