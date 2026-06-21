export const success = (res, data) => {
    res.json({ success: true, data });
};

export const error = (res, message, code = 500) => {
    res.status(code).json({ success: false, message });
};