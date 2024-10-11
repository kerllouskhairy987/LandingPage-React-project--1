interface IDataBestSells {
    url: string;
    type: string;
    title: string;
    rate: string;
    rateNumber: number;
    price: number;
    oldPrice: number;
}

export const dataBestSells: IDataBestSells[] = [
    {
        url: "https://freshcart-tailwind.codescandy.com/assets/images/products/product-img-11.jpg",
        type: "Tea, Coffee & Drinks",
        title: "Roast Ground Coffee",
        rate: "⭐⭐⭐⭐",
        rateNumber: 4,
        price: 13,
        oldPrice: 18
    },
    {
        url: "https://freshcart-tailwind.codescandy.com/assets/images/products/product-img-12.jpg",
        type: "Fruits & Vegetables",
        title: "Crushed Tomatoes",
        rate: "⭐⭐⭐⭐⭐",
        rateNumber: 5,
        price: 16,
        oldPrice: 20
    },
    {
        url: "https://freshcart-tailwind.codescandy.com/assets/images/products/product-img-13.jpg",
        type: "Fruits & Vegetables",
        title: "Golden Pineapple",
        rate: "⭐⭐⭐⭐⭐",
        rateNumber: 5,
        price: 10,
        oldPrice: 30
    },
]