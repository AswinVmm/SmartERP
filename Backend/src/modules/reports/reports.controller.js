import { trialBalance } from "./trialBalance.service.js";

export const getTrialBalance = async (req, res) => {
    try {
        const companyId = req.params.companyId;

        const data = await trialBalance(companyId);

        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};