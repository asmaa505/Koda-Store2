export const fetchProducts = async () => {
    try {
        const response = await fetch('https://e-commerce-api-3wara.vercel.app/products');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
        } catch (error) {
        console.warn("Using fallback mock data due to API error:", error);
        return [
            { _id: '1', title: 'Wireless Headphones', price: 99.99, stock: 15, isFeatured: true },
            { _id: '2', title: 'Smart Watch Series 7', price: 199.99, stock: 0, isFeatured: false },
            { _id: '3', title: 'Ergonomic Office Chair', price: 149.99, stock: 8, isFeatured: true },
        ];
    }
};



// export const fetchProducts = async () => {
//     const response = await fetch('https://e-commerce-api-3wara.vercel.app/products');
    
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const data = await response.json();
//     return data;
// };