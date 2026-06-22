import * as service from "./auth.service.js";
import { success, error } from "../../utils/apiresponse.js";

export const register = async (req, res) => {
    try {
        const user = await service.register(req.body.email, req.body.password);
        success(res, user);
    } catch (err) {
        error(res, err.message);
    }
};

export const login = async (req, res) => {
    try {
        const token = await service.login(req.body.email, req.body.password);

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
            secure: false,
        });

        success(res, { token });
    } catch (err) {
        error(res, err.message);
    }
};