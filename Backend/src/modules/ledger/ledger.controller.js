import * as service from "./ledger.service.js";
import { success, error } from "../../utils/apiresponse.js";

export const createLedger = async (req, res) => {
    try {
        const ledger = await service.createLedger(req.body.companyId, req.body);
        success(res, ledger);
    } catch (err) {
        error(res, err.message);
    }
};

export const getLedgers = async (req, res) => {
    try {
        const ledgers = await service.getLedgers(req.params.companyId);
        success(res, ledgers);
    } catch (err) {
        error(res, err.message);
    }
};