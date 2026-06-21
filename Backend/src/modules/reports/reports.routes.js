import express from "express";
import { getTrialBalance } from "./reports.controller.js";
import { auth } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/trial-balance/:companyId", auth, getTrialBalance);

export default router;