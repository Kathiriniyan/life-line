import Address from "../models/Address.js"


// ADD Aaddress : /api/address/add
export const addAddress = async(req, res)=>{
    try {
        const patientId = req.patientId; // get from JWT middleware
        const { address } = req.body
        await Address.create({...address, patientId})
        res.json({success: true, message: "Address added Successfully"})
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message});
    }
}

//Get Address : /api/address/get
export const getAddress = async(req, res)=>{
    try {
        const patientId = req.patientId;
        const addresses = await Address.find({patientId})
        res.json({success: true, addresses})
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message});
    }
}