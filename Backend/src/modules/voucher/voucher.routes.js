import express from "express";
import { createSales, createPurchase } from "./voucher.controller.js";
import { auth } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/sales", auth, createSales);
router.post("/purchase", auth, createPurchase);

export default router;