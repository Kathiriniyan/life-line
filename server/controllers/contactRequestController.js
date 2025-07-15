import ContactRequest from '../models/ContactRequest.js';

// Create (POST)
export const submitContactRequest = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }
    const newRequest = await ContactRequest.create({ name, email, subject, message });
    res.json({ success: true, message: "Your request has been submitted!", request: newRequest });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Read (GET, admin)
export const getAllContactRequests = async (req, res) => {
  try {
    const requests = await ContactRequest.find().sort({ createdAt: -1 });
    res.json({ success: true, requests });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
