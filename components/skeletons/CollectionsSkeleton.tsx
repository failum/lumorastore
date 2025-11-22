"use client";

const CollectionsSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-2xl font-bold bg-gray-200 rounded w-48 h-6 animate-pulse" />
      <div className="flex gap-6 overflow-x-auto w-full max-w-7xl justify-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center animate-pulse"
          >
            <div className="h-[180px] w-[250px] bg-gray-200 rounded-lg mb-3" />
            <div className="h-5 w-32 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-24 bg-gray-100 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsSkeleton;
