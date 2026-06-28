import { supabase } from "../../config/db.js";

/* ================= GROUPS ================= */

export const createGroup = async (data) => {
    const { data: res } = await supabase
        .from("stock_groups")
        .insert([data])
        .select();

    return res[0];
};

export const getGroups = async (companyId) => {
    const { data } = await supabase
        .from("stock_groups")
        .select("*")
        .eq("company_id", companyId);

    return data;
};

/* ================= UNITS ================= */

export const createUnit = async (data) => {
    const { data: res } = await supabase
        .from("units")
        .insert([data])
        .select();

    return res[0];
};

export const getUnits = async (companyId) => {
    const { data } = await supabase
        .from("units")
        .select("*")
        .eq("company_id", companyId);

    return data;
};

/* ================= STOCK ITEMS ================= */

export const createItem = async (data) => {
    const { name, selling_price, company_id } = data;

    const { data: res, error } = await supabase
        .from("items")
        .insert([{
            name,
            selling_price,
            company_id
        }])
        .select();

    if (error) throw new Error(error.message);

    return res[0];
};

export const getStock = async (companyId) => {
    const { data, error } = await supabase
        .from("items")
        .select("*")
        .eq("company_id", companyId);

    if (error) throw new Error(error.message);
    return data;
};

export const updateItem = async (id, data) => {
    const { data: res, error } = await supabase
        .from("items")
        .update(data)
        .eq("id", id)
        .select();

    if (error) throw new Error(error.message);
    return res[0];
};

export const deleteItem = async (id) => {
    const { error } = await supabase
        .from("items")
        .delete()
        .eq("id", id);

    if (error) throw new Error(error.message);
};