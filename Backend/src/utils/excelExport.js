import ExcelJS from "exceljs";

export const exportExcel = async (res, data) => {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet("Data");

    ws.columns = Object.keys(data[0]).map((key) => ({
        header: key,
        key,
    }));

    ws.addRows(data);

    res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    await wb.xlsx.write(res);
    res.end();
};