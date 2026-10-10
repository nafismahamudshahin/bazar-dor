export const dateTime = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

export const toBanglaNumber = (number: number | string) => {
    return number.toLocaleString("bn-BD")
};


// translate to bangla
export const unitFinder = (unit: string): string => {
    if (unit.toLowerCase().trim() == "piece") {
        return "পিস"
    } else if (unit.toLowerCase() == "litre") {
        return "লিটার";
    } else if (unit.toLowerCase() == "dozen") {
        return "ডজন";
    }
    return "কেজি";
}