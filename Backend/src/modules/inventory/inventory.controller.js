import * as service from "./inventory.service.js";
import { success, error } from "../../utils/apiresponse.js";

export const getStock = async (req, res) => {
    try {
        const data = await service.getStock(req.params.companyId);
        success(res, data);
    } catch (err) {
        error(res, err.message);
    }
};