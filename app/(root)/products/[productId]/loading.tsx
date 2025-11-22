export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Main product info skeleton */}
      <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
        {/* Gallery skeleton */}
        <div className="flex justify-center items-center w-96 h-96 bg-gray-200 rounded-lg">
          <div className="w-full h-full bg-gray-300 rounded-lg"></div>
        </div>

        {/* Product info skeleton */}
        <div className="flex-1 max-w-md">
          <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded mb-2 w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded mb-4 w-full"></div>
          <div className="h-4 bg-gray-200 rounded mb-4 w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded mb-4 w-4/6"></div>
          
          {/* Price skeleton */}
          <div className="h-10 bg-gray-200 rounded mb-6 w-1/3"></div>
          
          {/* Button skeletons */}
          <div className="h-12 bg-gray-200 rounded mb-3 w-full"></div>
          <div className="h-12 bg-gray-200 rounded w-full"></div>
        </div>
      </div>

      {/* Related products skeleton */}
      <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
        <div className="h-8 bg-gray-200 rounded w-48 mb-8"></div>
        <div className="flex flex-wrap gap-16 mx-auto mt-8">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="w-[250px] h-[350px] bg-gray-200 rounded-lg"
            >
              <div className="w-full h-48 bg-gray-300 rounded-t-lg mb-3"></div>
              <div className="h-6 bg-gray-300 rounded mb-2 mx-3"></div>
              <div className="h-6 bg-gray-300 rounded mx-3 w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}