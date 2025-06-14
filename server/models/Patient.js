import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required:true, unique: true},
    password: {type: String, required:true },
}, {timestamps: true})

const Patient = mongoose.models.patient || mongoose.model('patient', patientSchema)

export default Patient