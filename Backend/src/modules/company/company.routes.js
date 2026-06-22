import express from "express";
import * as controller from "./company.controller.js";
import { auth } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", auth, controller.createCompany);
router.get("/", auth, controller.getCompanies);

export default router;