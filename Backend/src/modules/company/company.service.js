import { supabase } from "../../config/db.js";

export const createCompany = async (userId, data) => {
    const { data: companies } = await supabase
        .from("companies")
        .select("*")
        .eq("user_id", userId);

    if (companies.length >= 5) {
        throw new Error("Max 5 companies allowed");
    }

    const { data: company } = await supabase
        .from("companies")
        .insert([{ ...data, user_id: userId }])
        .select();

    return company[0];
};

export const getCompanies = async (userId) => {
    const { data } = await supabase
        .from("companies")
        .select("*")
        .eq("user_id", userId);

    return data;
};