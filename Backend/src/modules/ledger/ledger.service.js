import { supabase } from "../../config/db.js";

export const createLedger = async (companyId, data) => {
    const { name, type } = data;
    const { data: ledger, error } = await supabase
        .from("ledgers")
        .insert([{
            name,
            type,
            company_id: companyId
        }])
        .select();

    if (error) {
        throw new Error(error.message);
    }

    return ledger[0];
};

export const getLedgers = async (companyId) => {
    const { data } = await supabase
        .from("ledgers")
        .select("*")
        .eq("company_id", companyId);

    return data;
};

export const updateLedger = async (id, data) => {
    const { data: ledger } = await supabase
        .from("ledgers")
        .update(data)
        .eq("id", id)
        .select();

    return ledger[0];
};

export const deleteLedger = async (id) => {
    await supabase.from("ledgers").delete().eq("id", id);
};