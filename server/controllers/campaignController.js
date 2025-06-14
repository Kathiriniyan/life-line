import { v2 as cloudinary } from "cloudinary"
import Campaign from "../models/Campaign.js"

// Add Campaign : /api/campaign/add
export const addCampaign = async (req, res)=>{
    try {
        let campaignData = JSON.parse(req.body.campaignData)

        const images = req.files

        let imagesUrl = await Promise.all(
            images.map(async (item)=>{
                let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
                return result.secure_url
            })
        )

        await Campaign.create({...campaignData, image: imagesUrl})

        res.json({success: true, message: "Campaign Created"})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message })
    }
}

// Get Campaign : /api/campaign/list
export const campaignList = async (req, res)=>{
    try {
        const campaigns = await Campaign.find({})
        res.json({success: true, campaigns})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message })
    }
    
}

// Get single Campaign : /api/campaign/id
export const campaignById = async (req, res)=>{
    try {
        const { id } = req.body
        const campaign = await Campaign.findById(id)
        res.json({success: true, campaign})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message })
    }
}

// change campain Approve : /api/campaign/approve
export const changeStock = async (req, res)=>{
    try {
        const { id, inStock } = req.body
        await Campaign.findByIdAndUpdate(id, {inStock})
        res.json({success: true, message: "Stock Updated"})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message })
    }
}

// change campain Approve : /api/campaign/approve
export const changeApprove = async (req, res)=>{
    try {
        const { id, isApprove } = req.body
        await Campaign.findByIdAndUpdate(id, {isApprove})
        res.json({success: true, message: "Campaign Verified"})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message })
    }
}