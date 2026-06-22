import PDFDocument from "pdfkit";

export const generateInvoice = (res, invoice) => {
    const doc = new PDFDocument();

    res.setHeader("Content-Type", "application/pdf");

    doc.pipe(res);

    doc.text("SmartERP Invoice");
    doc.text(`Customer: ${invoice.customer}`);

    invoice.items.forEach((item) => {
        doc.text(`${item.name} - ${item.qty} x ${item.price}`);
    });

    doc.end();
};