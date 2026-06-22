import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./modules/auth/auth.routes.js";
import companyRoutes from "./modules/company/company.routes.js";
import ledgerRoutes from "./modules/ledger/ledger.routes.js";
import voucherRoutes from "./modules/voucher/voucher.routes.js";
import reportsRoutes from "./modules/reports/reports.routes.js";

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/ledger", ledgerRoutes);
app.use("/api/voucher", voucherRoutes);
app.use("/api/reports", reportsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});