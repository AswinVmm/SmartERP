import express from "express";
import * as controller from "./ledger.controller.js";
import { auth } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", auth, controller.createLedger);
router.get("/:companyId", auth, controller.getLedgers);
router.put("/:id", auth, controller.updateLedger);
router.delete("/:id", auth, controller.deleteLedger);

export default router;