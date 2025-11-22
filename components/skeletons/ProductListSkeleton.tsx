"use client";

const ProductListSkeleton = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-5 py-8 animate-pulse">
      <p className="text-heading1-bold text-center mb-6 sm:mb-8 bg-gray-200 rounded w-64 h-6 mx-auto" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-full h-56 bg-gray-200 rounded-lg mb-3" />
            <div className="h-4 w-32 bg-gray-100 rounded mb-2" />
            <div className="h-4 w-20 bg-gray-100 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListSkeleton;
