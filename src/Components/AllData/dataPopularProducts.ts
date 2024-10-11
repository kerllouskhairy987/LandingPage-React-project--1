interface IDataPopularProducts {
    url: string;
    type: string;
    title: string;
    rate: string;
    rateNumber: number;
    ammount: number;
    price: number;
    oldPrice?: number;
    status?: string;
    discount?: number
}
export const dataPopularProduts: IDataPopularProducts[] = [
    {
        url: "https://freshcart-tailwind.codescandy.com/assets/images/products/product-img-1.jpg",
        type: "Snack & Munchies",
        title: "Haldiram's Sev Bhujia",
        rate: "⭐⭐⭐⭐⭐",
        rateNumber: 5,
        ammount: 129,
        price: 18,
        oldPrice: 22,
        status: "sale"
    },
    {
        url: "https://freshcart-tailwind.codescandy.com/assets/images/products/product-img-2.jpg",
        type: "Bakery & Biscuits",
        title: "NutriChoice Digestive",
        rate: "⭐⭐⭐⭐",
        rateNumber: 4,
        ammount: 25,
        price: 24,
        discount: 14,
    },
    {
        url: "https://freshcart-tailwind.codescandy.com/assets/images/products/product-img-3.jpg",
        type: "Bakery & Biscuits",
        title: "Cadbury 5 Star Chocolate",
        rate: "⭐⭐⭐⭐⭐",
        rateNumber: 5,
        ammount: 469,
        price: 32,
        oldPrice: 35,
    },
    {
        url: "https://freshcart-tailwind.codescandy.com/assets/images/products/product-img-4.jpg",
        type: "Snack & Munchies",
        title: "Onion Flavour Potato",
        rate: "⭐⭐⭐",
        rateNumber: 3,
        ammount: 432,
        price: 3,
        oldPrice: 5,
        status: "Hot"
    },
    {
        url: "https://freshcart-tailwind.codescandy.com/assets/images/products/product-img-5.jpg",
        type: "Instant Food",
        title: "Salted Instant Popcorn",
        rate: "⭐⭐⭐⭐",
        rateNumber: 4,
        ammount: 39,
        price: 13,
        oldPrice: 18,
    },
    {
        url: "https://freshcart-tailwind.codescandy.com/assets/images/products/product-img-6.jpg",
        type: "Dairy, Bread & Eggs",
        title: "Blueberry Greek Yogurt",
        rate: "⭐⭐⭐⭐",
        rateNumber: 4,
        ammount: 139,
        price: 18,
        oldPrice: 24,
        status: "sale"
    },
    {
        url: "https://freshcart-tailwind.codescandy.com/assets/images/products/product-img-7.jpg",
        type: "Dairy, Bread & Eggs",
        title: "Britannia Cheese Slices",
        rate: "⭐⭐⭐⭐⭐",
        rateNumber: 5,
        ammount: 369,
        price: 24,
    },
    {
        url: "https://freshcart-tailwind.codescandy.com/assets/images/products/product-img-8.jpg",
        type: "Instant Food",
        title: "Kellogg's Original Cereals",
        rate: "⭐⭐⭐⭐",
        rateNumber: 4,
        ammount: 90,
        price: 32,
        oldPrice: 35
    },
    {
        url: "https://freshcart-tailwind.codescandy.com/assets/images/products/product-img-9.jpg",
        type: "Snack & Munchies",
        title: "Slurrp Millet Chocolate",
        rate: "⭐⭐⭐⭐⭐",
        rateNumber: 5,
        ammount: 90,
        price: 3,
        oldPrice: 5
    },
    {
        url: "https://freshcart-tailwind.codescandy.com/assets/images/products/product-img-10.jpg",
        type: "Dairy, Bread & Eggs",
        title: "Amul Butter - 500 g",
        rate: "⭐⭐⭐⭐",
        rateNumber: 4,
        ammount: 90,
        price: 13,
        oldPrice: 18
    },
];
