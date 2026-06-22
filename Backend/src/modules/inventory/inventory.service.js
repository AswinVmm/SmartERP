import { supabase } from "../../config/db.js";

export const getStock = async (companyId) => {
    const { data } = await supabase
        .from("stock_items")
        .select("*")
        .eq("company_id", companyId);

    return data;
};