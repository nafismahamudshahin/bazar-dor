export const dateTime = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

export const toBanglaNumber = (number: number | string) => {
    return number.toLocaleString("bn-BD")
};
