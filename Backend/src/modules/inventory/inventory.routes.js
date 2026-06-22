import express from "express";
import { getStock } from "./inventory.controller.js";
import { auth } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/:companyId", auth, getStock);

export default router;