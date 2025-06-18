import Donation from "../models/Donation.js";
import Donor from "../models/Donor.js";

// GET /api/donor/list
export const listDonors = async (req, res) => {
  try {
    const donors = await Donor.find({});
    res.json({ success: true, donors });
  } catch (e) {
    res.json({ success: false, message: e.message });
  }
};




