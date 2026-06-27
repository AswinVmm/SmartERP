import express from "express";
import * as ctrl from "./inventory.controller.js";
import { auth } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/:companyId", auth, ctrl.getStock);

router.post("/group", auth, ctrl.createGroup);
router.post("/unit", auth, ctrl.createUnit);
router.post("/item", auth, ctrl.createItem);

router.put("/item/:id", auth, ctrl.updateItem);
router.delete("/item/:id", auth, ctrl.deleteItem);

export default router;