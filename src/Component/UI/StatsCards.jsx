import React from 'react';

const StatsCards = ({ products = [] }) => {
    const totalProducts = products.length;
    const featuredProducts = products.filter(p => p.isFeatured).length;
    const inStockProducts = products.filter(p => p.stock > 0).length;
    const outOfStockProducts = products.filter(p => p.stock === 0).length;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        <div className="bg-[#121829] border border-gray-800 p-5 rounded-xl text-white shadow-md">
            <div className="text-gray-400 text-sm mb-2">Total</div>
            <div className="text-3xl font-bold">{totalProducts}</div>
        </div>

        <div className="bg-[#121829] border border-gray-800 p-5 rounded-xl text-white shadow-md">
            <div className="text-gray-400 text-sm mb-2">Featured</div>
            <div className="text-3xl font-bold">{featuredProducts}</div>
        </div>

        <div className="bg-[#121829] border border-gray-800 p-5 rounded-xl text-white shadow-md">
            <div className="text-gray-400 text-sm mb-2">In Stock</div>
            <div className="text-3xl font-bold">{inStockProducts}</div>
        </div>

        <div className="bg-[#121829] border border-gray-800 p-5 rounded-xl text-white shadow-md">
            <div className="text-gray-400 text-sm mb-2">Out of Stock</div>
            <div className="text-3xl font-bold">{outOfStockProducts}</div>
        </div>
        </div>
    );
};

export default StatsCards;