import express from "express";
import * as controller from "./company.controller.js";
import { auth } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", auth, controller.createCompany);
router.get("/", auth, controller.getCompanies);
router.put("/:id", auth, controller.updateCompany);
router.delete("/:id", auth, controller.deleteCompany);

export default router;