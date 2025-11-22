export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      {/* Title Skeleton */}
      <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>

      {/* Grid Skeleton */}
      <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 rounded-lg border border-gray-100"
          >
            {/* Image skeleton */}
            <div className="w-[70px] h-[70px] bg-gray-200 rounded-md animate-pulse"></div>

            {/* Text skeleton */}
            <div className="flex flex-col gap-2 w-full">
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
