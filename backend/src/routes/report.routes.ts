import express from "express";
const router = express.Router();

// middlewares
import upload from '../middlewares/image.upload.middleware'
import { authenticateUser } from '../middlewares/authentication.middleware'

// controllers
import {
	createReport,
	getReportById,
	getReportList,
	deleteReport
} from '../controllers/report.controller';

router.post('/create',
	authenticateUser,
	upload.single('image'),
	createReport);

router.get(
	'/get-report/:reportId',
	authenticateUser,
	getReportById
);

router.post(
	'/get-all',
	authenticateUser,
	getReportList
);

router.delete(
	'/delete/:reportId',
	authenticateUser,
	deleteReport
);

export default router;
