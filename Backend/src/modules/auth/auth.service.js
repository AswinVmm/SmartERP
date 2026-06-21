import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { supabase } from "../../config/db.js";

export const register = async (email, password) => {
    const hash = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
        .from("users")
        .insert([{ email, password: hash }])
        .select();

    if (error) throw error;
    return data[0];
};

export const login = async (email, password) => {
    const { data } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();

    if (!data) throw new Error("User not found");

    const valid = await bcrypt.compare(password, data.password);
    if (!valid) throw new Error("Invalid password");

    const token = jwt.sign({ id: data.id }, process.env.JWT_SECRET);

    return token;
};