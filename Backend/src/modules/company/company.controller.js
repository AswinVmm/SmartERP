import * as service from "./company.service.js";
import { success, error } from "../../utils/apiresponse.js";

export const createCompany = async (req, res) => {
    try {
        const company = await service.createCompany(req.user.id, req.body);
        success(res, company);
    } catch (err) {
        error(res, err.message);
    }
};

export const getCompanies = async (req, res) => {
    try {
        const companies = await service.getCompanies(req.user.id);
        success(res, companies);
    } catch (err) {
        error(res, err.message);
    }
};