import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Patient from '../models/Patient.js';


//Register Patient : /api/patient/register
export const register = async (req, res)=>{
    try {
        const {name, email, password } = req.body;

        if(!name || !email || !password){
            return res.json({success: false, message:'Missing Details'})
        }

        const existingPatient = await Patient.findOne({email})

        if(existingPatient)
            return res.json({success: false, message: 'Patient already exists'})

        const hashedPassword = await bcrypt.hash(password, 10)

        const patient = await Patient.create({name, email, password: hashedPassword})

        const token = jwt.sign({id: patient._id}, process.env.JWT_SECRET, {expiresIn:'7d'});

        res.cookie('token', token, {
            httpOnly: true, //Prevent Javascript to access cookie
            secure: process.env.NODE_ENV === 'production', //Use secure cookies in production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', // CSRF protection
            maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time
        })

        return res.json({success: true, patient: {email: patient.email, name: patient.name}})
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message})
    }
}

// Login Patient: /api/patient/login

export const login = async (req, res)=>{
    try {
        const { email, password } = req.body;

        if(!email || !password)
            return res.json({success: false, message: 'Email and Password are required'});
        const patient = await Patient.findOne({email});

        if(!patient){
            return res.json({success: false, message: 'invalid email or password'})
        }

        const isMatch = await bcrypt.compare(password, patient.password)

        if(!isMatch)
            return res.json({success: false, message: 'invalid email or password'})

        const token = jwt.sign({id: patient._id}, process.env.JWT_SECRET, {expiresIn:'7d'});

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, 
        })

        return res.json({success: true, patient: {email: patient.email, name: patient.name}})
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message})
    }
}


// Check Auth: /api/patient/is-auth
export const isAuth = async(req, res)=>{
    try {
        const patientId = req.patientId;
        const patient = await Patient.findById(patientId).select("-password")
        return res.json({success: true, patient})
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message})
    }
}

// Check Auth: /api/patient/logout
export const logout = async(req, res)=>{
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        });
        // Always respond with success, don't care if token existed!
        return res.json({success: true, message: "Logged Out" })
    } catch (error) {
        res.json({ success: false, message: error.message})
    }
}




// Get Campaign : /api/campaign/list
export const patientList = async (req, res) => {
  try {
    const patients = await Patient.find({}).select('-password');
    res.json({ success: true, patients });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


// controllers/patientController.js
export const getPatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findById(id).select("-password");
    if (!patient) return res.json({ success: false, message: "Not found" });
    res.json({ success: true, patient });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
