import express from "express";
import { createSales } from "./voucher.controller.js";
import { auth } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/sales", auth, createSales);

export default router;