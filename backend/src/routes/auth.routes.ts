import express from "express";
const router = express.Router();

// controllers
import {
	Register, Login
} from '../controllers/auth.controller';

router.post('/register',
	Register);

router.post(
	'/login',
	Login
);


export default router;
