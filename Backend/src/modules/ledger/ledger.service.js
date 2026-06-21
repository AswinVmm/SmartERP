import { supabase } from "../../config/db.js";

export const createLedger = async (companyId, data) => {
    const { data: ledger } = await supabase
        .from("ledgers")
        .insert([{ ...data, company_id: companyId }])
        .select();

    return ledger[0];
};