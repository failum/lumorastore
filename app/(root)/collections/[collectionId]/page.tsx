import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

// Define ProductType
type ProductType = {
  _id: string;
  title: string;
  description: string;
  media: [string];
  category: string;
  collections: [string];
  tags: [string];
  price: number;
  cost: number;
  sizes: [string];
  colors: [string];
  createdAt: string;
  updatedAt: string;
  quantity: number;
  datasheet: string;
};

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-8 flex flex-col items-center gap-8">
      {/* Collection Image */}
      <div className="w-full max-w-6xl">
        <Image
          src={collectionDetails.image}
          width={1500}
          height={1000}
          alt={collectionDetails.title}
          className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-xl shadow-2xl"
          priority
        />
      </div>

      {/* Collection Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center">
        {collectionDetails.title}
      </h1>

      {/* Collection Description */}
      <p className="text-body-normal text-grey-2 text-center max-w-[900px]">
        {collectionDetails.description}
      </p>

      {/* Products Count */}
      <div className="text-lg text-gray-500">
        {collectionDetails.products.length} {collectionDetails.products.length === 1 ? 'product' : 'products'} in this collection
      </div>

      {/* Products Grid - HORIZONTAL LAYOUT */}
      <div className="w-full max-w-7xl">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Products in This Collection
        </h2>

        {/* Horizontal Scrollable Container */}
        <div className="flex overflow-x-auto gap-6 pb-4 px-2 scrollbar-hide">
          {collectionDetails.products.map((product: ProductType) => (
            <div
              key={product._id}
              className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Product Name Above Image */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 text-center truncate">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm text-center mt-1 line-clamp-2">
                  {product.description.substring(0, 60)}...
                </p>
              </div>

              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                {product.media && product.media[0] ? (
                  <Image
                    src={product.media[0]}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
                
                {/* Price Badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  KSh {product.price.toLocaleString()}
                </div>
              </div>

              {/* Additional Info Below Image */}
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">Category:</span> {product.category}
                  </div>
                  
                  <div>
                    {product.quantity > 0 ? (
                      <span className="text-green-600 text-sm font-bold">In Stock</span>
                    ) : (
                      <span className="text-red-600 text-sm font-bold">Out of Stock</span>
                    )}
                  </div>
                </div>

                {/* Use ProductCard for consistency */}
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>

        {/* Grid Layout for desktop */}
        <div className="hidden lg:block mt-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Browse All Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {collectionDetails.products.map((product: ProductType) => (
              <ProductCard key={`grid-${product._id}`} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Empty State */}
      {collectionDetails.products.length === 0 && (
        <div className="text-center py-12 px-8 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-dashed border-blue-300 max-w-2xl">
          <div className="text-8xl mb-6">✨</div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Coming Soon!
          </h3>
          <p className="text-xl text-gray-600">
            Exciting products are on their way to this collection!
          </p>
        </div>
      )}
    </div>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";