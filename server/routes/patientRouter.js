// server/routes/patientRouter.js
import express from 'express';
import { isAuth, login, logout, register } from '../controllers/patientController.js';
import authPatient from '../middlewares/authPatient.js';

const patientRouter = express.Router();

patientRouter.post('/register', register)
patientRouter.post('/login', login)
patientRouter.get('/is-auth', authPatient, isAuth)
patientRouter.get('/logout', authPatient, logout)

export default patientRouter;
