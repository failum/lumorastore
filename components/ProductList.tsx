// components/ProductList.tsx
import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";
import Link from "next/link";

const ProductList = async () => {
  const products = await getProducts();
  const limitedProducts = products.slice(0, 32); // Show only first 8

  return (
    <div className="w-full max-w-7xl mx-auto px-5 py-8">
      <p className="text-heading1-bold text-center mb-6 sm:mb-8">Featured Products</p>

      {!limitedProducts || limitedProducts.length === 0 ? (
        <p className="text-body-bold text-center">No products found</p>
      ) : (
        <>
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
            {limitedProducts.map((product: ProductType) => (
              <div key={product._id} className="w-full flex justify-center">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Show "View All" button if there are more products */}
          {products.length > 8 && (
            <div className="text-center mt-8">
              <Link 
                href="/products"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                View All Products ({products.length})
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;