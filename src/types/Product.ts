export interface IProduct {
    _id: string;
    title: string;
    description: string;
    images: string[];
    imagePublicIds: string[];
    price: number;
    compareAtPrice: number;
    isTaxable: boolean;
    purchaseCost?: number;
    barcode?: string;
    weight?: number;
    weightUnit?: string;
    stock: number;
    isStockTrackable: boolean;
    isOnSale: boolean;
}
