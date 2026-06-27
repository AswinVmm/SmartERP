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

export const createGroup = async (req, res) => {
    try {
        const data = await service.createGroup(req.body);
        success(res, data);
    } catch (err) {
        error(res, err.message);
    }
};

export const createUnit = async (req, res) => {
    try {
        const data = await service.createUnit(req.body);
        success(res, data);
    } catch (err) {
        error(res, err.message);
    }
};

export const createItem = async (req, res) => {
    try {
        const data = await service.createItem(req.body);
        success(res, data);
    } catch (err) {
        error(res, err.message);
    }
};

export const updateItem = async (req, res) => {
    try {
        const data = await service.updateItem(req.params.id, req.body);
        success(res, data);
    } catch (err) {
        error(res, err.message);
    }
};

export const deleteItem = async (req, res) => {
    try {
        await service.deleteItem(req.params.id);
        success(res, "Deleted");
    } catch (err) {
        error(res, err.message);
    }
};