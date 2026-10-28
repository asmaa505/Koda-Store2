import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../API/productsApi';
import StatsCards from '../Component/UI/StatsCards';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getProductsData = async () => {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data.products || data || []);
        setLoading(false);
        };

        getProductsData();
    }, []);

    // تصفية المنتجات بناءً على البحث
    const filteredProducts = products.filter(product =>
        product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div className="text-white p-6 bg-[#0b0f19] min-h-screen">جاري تحميل المنتجات...</div>;
    }

    return (
        <div className="p-6 bg-[#0b0f19] min-h-screen text-white">
        
        <div className="flex justify-between items-center mb-6">
            <div>
            <span className="text-xs text-blue-400 uppercase tracking-widest font-semibold">PRODUCT DASHBOARD</span>
            <h1 className="text-3xl font-bold mt-1">Products</h1>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition flex items-center gap-2">
            <span>+</span> Add Product
            </button>
        </div>

        
        <StatsCards products={products} />

        
        <div className="bg-[#121829] border border-gray-800 rounded-xl p-4 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative flex-1 w-full">
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0b0f19] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button className="bg-[#1e293b] hover:bg-gray-800 text-gray-300 px-4 py-2.5 rounded-lg border border-gray-700 font-medium text-sm flex items-center gap-2 transition">
                Filters
            </button>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-5 py-2.5 rounded-lg text-sm transition">
                Search
            </button>
            </div>
        </div>
        </div>
    );
};

export default Products;