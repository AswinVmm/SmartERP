import dotenv from "dotenv";
dotenv.config();

export const env = {
    JWT_SECRET: process.env.JWT_SECRET,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
};