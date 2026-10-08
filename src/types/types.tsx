export interface ICategoryType {
    id: string,
    slug: string,
    nameBn: string,
    icon: string,
}

export interface IProductType {
    id: string,
    nameBn: string,
    categoryIcon: string,
    "unit": string,
    "image": string,
    "today": number,
    change: {
        "dir": string,
        "pct": number,
    },
}