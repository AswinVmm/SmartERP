import * as service from "./voucher.service.js";
import { success, error } from "../../utils/apiresponse.js";

export const createSales = async (req, res) => {
    try {
        const voucher = await service.createSalesVoucher(
            req.body.companyId,
            req.body
        );

        success(res, voucher);
    } catch (err) {
        error(res, err.message);
    }
};

export const createPurchase = async (req, res) => {
    try {
        const voucher = await service.createPurchaseVoucher(
            req.body.companyId,
            req.body
        );

        success(res, voucher);
    } catch (err) {
        error(res, err.message);
    }
};