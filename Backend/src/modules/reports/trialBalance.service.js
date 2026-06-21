import { supabase } from "../../config/db.js";

export const trialBalance = async (companyId) => {
    const { data, error } = await supabase.rpc("trial_balance", {
        company_id: companyId,
    });

    if (error) throw error;

    return data;
};