import express from 'express';
import { getPatientById, isAuth, login, logout, patientList, register } from '../controllers/patientController.js';
import authPatient from '../middlewares/authPatient.js';

const patientRouter = express.Router();

patientRouter.post('/register', register)
patientRouter.post('/login', login)
patientRouter.get('/is-auth',authPatient, isAuth)
patientRouter.get('/logout',authPatient, logout)
patientRouter.get('/all-patients', patientList)
patientRouter.get('/single/:id', getPatientById);
export default patientRouter;
