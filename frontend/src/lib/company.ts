export const getCompany = () => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("companyId");
};