// import React, { useState, useEffect } from 'react';
// import { fetchProducts } from '../API/productsApi';
// import StatsCards from '../Component/UI/StatsCards';

// const ProductCard = ({ product }) => {
//     // استخراج الروابط من الـ API بدون وضع صورة افتراضية
//     const getImages = () => {
//         if (product.images && Array.isArray(product.images) && product.images.length > 0) {
//             return product.images.map(img => (typeof img === 'object' ? img.url : img));
//         }
//         if (product.image) {
//             return Array.isArray(product.image) ? product.image : [product.image];
//         }
//         if (product.thumbnail) {
//             return [product.thumbnail];
//         }
//         return []; // مصفوفة فارغة لو مفيش صور خالص
//     };

//     const imagesList = getImages();
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     const nextImage = (e) => {
//         e.stopPropagation();
//         if (imagesList.length > 0) {
//             setCurrentImageIndex((prev) => (prev + 1) % imagesList.length);
//         }
//     };

//     const prevImage = (e) => {
//         e.stopPropagation();
//         if (imagesList.length > 0) {
//             setCurrentImageIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length);
//         }
//     };

//     return (
//         <div className="bg-[#121829] border border-gray-800 rounded-2xl p-5 flex flex-col justify-between hover:border-blue-500/50 transition shadow-xl overflow-hidden relative min-h-[520px]">
            
//             {/* معرض الصور (Image Carousel) */}
//             <div className="relative h-60 rounded-xl overflow-hidden mb-4 bg-gray-950 border border-gray-800 flex items-center justify-center group">
//                 {imagesList.length > 0 ? (
//                     <img 
//                         src={imagesList[currentImageIndex]} 
//                         alt={product.title || product.name} 
//                         className="w-full h-full object-cover opacity-95 transition-all duration-300"
//                     />
//                 ) : (
//                     <div className="text-gray-500 text-xs">No image available</div>
//                 )}
                
//                 {/* أسهم التبديل (تظهر فقط لو فيه أكثر من صورة) */}
//                 {imagesList.length > 1 && (
//                     <>
//                         <button 
//                             onClick={prevImage}
//                             className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-sm transition border border-white/10 shadow-md"
//                         >
//                             ‹
//                         </button>
//                         <button 
//                             onClick={nextImage}
//                             className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-sm transition border border-white/10 shadow-md"
//                         >
//                             ›
//                         </button>

//                         {/* نقاط التنقل (Dots) */}
//                         <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">
//                             {imagesList.map((_, idx) => (
//                                 <span 
//                                     key={idx} 
//                                     className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-cyan-400 w-3' : 'bg-white/50'}`}
//                                 />
//                             ))}
//                         </div>
//                     </>
//                 )}
                
//                 {/* بادج المخزون */}
//                 <div className="absolute top-3 right-3">
//                     <span className={`text-xs px-3 py-1 rounded-full font-medium backdrop-blur-md shadow-md ${
//                         product.stock > 0 
//                             ? 'bg-emerald-950/90 text-emerald-400 border border-emerald-500/30' 
//                             : 'bg-rose-950/90 text-rose-400 border border-rose-500/30'
//                     }`}>
//                         {product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock'}
//                     </span>
//                 </div>

//                 {/* بادج المميز */}
//                 {product.isFeatured && (
//                     <div className="absolute top-3 left-3">
//                         <span className="text-xs bg-amber-500/90 text-black font-bold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
//                             ★ Featured
//                         </span>
//                     </div>
//                 )}
//             </div>

//             {/* تفاصيل المنتج والعناوين */}
//             <div className="flex-1 flex flex-col justify-between">
//                 <div>
//                     <div className="text-[11px] uppercase tracking-wider text-gray-400 mb-1 font-medium">
//                         {product.category || 'ELECTRONICS · ACCESSORIES'}
//                     </div>
//                     <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
//                         {product.title || product.name}
//                     </h3>
//                     <p className="text-gray-400 text-xs mb-4 line-clamp-2">
//                         {product.description || 'High quality product available in Koda Store inventory.'}
//                     </p>

//                     <div className="flex flex-wrap gap-1.5 mb-4">
//                         <span className="bg-[#1a2234] text-gray-300 text-[10px] px-2.5 py-1 rounded-md border border-gray-800">mac</span>
//                         <span className="bg-[#1a2234] text-gray-300 text-[10px] px-2.5 py-1 rounded-md border border-gray-800">trackpad</span>
//                     </div>
//                 </div>

//                 <div>
//                     <div className="flex items-baseline gap-2 mb-4">
//                         <span className="text-2xl font-black text-white">${product.price}</span>
//                         {product.discount && (
//                             <span className="text-emerald-400 text-xs font-semibold">-{product.discount} off</span>
//                         )}
//                     </div>

//                     {/* أزرار التحكم والعمليات */}
//                     <div className="pt-3 border-t border-gray-800/80 grid grid-cols-4 gap-1.5">
//                         <button className="py-1.5 bg-[#1a2234] hover:bg-blue-600/20 hover:border-blue-500/40 text-gray-300 hover:text-blue-400 rounded-lg border border-gray-700/60 transition text-xs font-medium flex items-center justify-center gap-1">
//                             View
//                         </button>
//                         <button className="py-1.5 bg-[#1a2234] hover:bg-blue-600/20 hover:border-blue-500/40 text-gray-300 hover:text-blue-400 rounded-lg border border-gray-700/60 transition text-xs font-medium flex items-center justify-center gap-1">
//                             Edit
//                         </button>
//                         <button className="py-1.5 bg-[#1a2234] hover:bg-blue-600/20 hover:border-blue-500/40 text-gray-300 hover:text-blue-400 rounded-lg border border-gray-700/60 transition text-xs font-medium flex items-center justify-center gap-1">
//                             Quick
//                         </button>
//                         <button className="py-1.5 bg-rose-950/30 hover:bg-rose-900/50 text-rose-400 rounded-lg border border-rose-900/40 transition text-xs font-medium flex items-center justify-center gap-1">
//                             Delete
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Products = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         const getProductsData = async () => {
//             setLoading(true);
//             const data = await fetchProducts();
//             setProducts(data.products || data || []);
//             setLoading(false);
//         };

//         getProductsData();
//     }, []);

//     const filteredProducts = products.filter(product =>
//         product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.name?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center min-h-screen bg-[#0b0f19] text-white">
//                 <div className="text-xl font-semibold animate-pulse">جاري تحميل لوحة التحكم...</div>
//             </div>
//         );
//     }

//     return (
//         <div className="p-6 bg-[#0b0f19] min-h-screen text-white">
            
//             {/* 1. العنوان الرئيسي وزر الإضافة */}
//             <div className="flex justify-between items-center mb-6">
//                 <div>
//                     <span className="text-xs text-blue-400 uppercase tracking-widest font-semibold">PRODUCT DASHBOARD</span>
//                     <h1 className="text-3xl font-bold mt-1">Products</h1>
//                 </div>
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition flex items-center gap-2 shadow-lg shadow-blue-600/20">
//                     <span>+</span> Add Product
//                 </button>
//             </div>

//             <StatsCards products={products} />

//             <div className="bg-[#121829] border border-gray-800 rounded-xl p-4 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center shadow-md">
//                 <div className="relative flex-1 w-full">
//                     <input
//                         type="text"
//                         placeholder="Search products..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="w-full bg-[#0b0f19] border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
//                     />
//                 </div>

//                 <div className="flex items-center gap-3 w-full md:w-auto justify-end">
//                     <button className="bg-[#1e293b] hover:bg-gray-800 text-gray-300 px-4 py-2.5 rounded-lg border border-gray-700 font-medium text-sm flex items-center gap-2 transition">
//                         Filters
//                     </button>
//                     <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-5 py-2.5 rounded-lg text-sm transition shadow-md shadow-cyan-500/10">
//                         Search
//                     </button>
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
//                 {filteredProducts.length > 0 ? (
//                     filteredProducts.map((product) => (
//                         <ProductCard key={product._id || product.id} product={product} />
//                     ))
//                 ) : (
//                     <div className="col-span-full text-center py-12 bg-[#121829] border border-gray-800 rounded-xl text-gray-400">
//                         No products found matching your search.
//                     </div>
//                 )}
//             </div>

//         </div>
//     );
// };

// export default Products;