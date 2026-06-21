import { supabase } from "../../config/db.js";

export const createSalesVoucher = async (companyId, payload) => {
    const { customerLedger, salesLedger, items, total } = payload;

    // 1. Create voucher
    const { data: voucher } = await supabase
        .from("vouchers")
        .insert([{ company_id: companyId, type: "sales", total }])
        .select();

    const voucherId = voucher[0].id;

    // 2. Double entry
    await supabase.from("voucher_entries").insert([
        {
            voucher_id: voucherId,
            ledger_id: customerLedger,
            debit: total,
        },
        {
            voucher_id: voucherId,
            ledger_id: salesLedger,
            credit: total,
        },
    ]);

    // 3. Inventory OUT
    for (let item of items) {
        await supabase.from("stock_transactions").insert([
            {
                item_id: item.id,
                type: "OUT",
                qty: item.qty,
                rate: item.price,
                voucher_id: voucherId,
            },
        ]);
    }

    return voucher[0];
};