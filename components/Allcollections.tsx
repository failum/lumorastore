import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

// Define the Collection type based on your data structure
interface Collection {
  _id: string;
  title: string;
  description: string;
  image: string;
  products: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Allcollections = async () => {
  const collections: Collection[] = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5 overflow-hidden">
      <p className="text-2xl sm:text-xl xs:text-lg font-bold">All categories</p>

      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No main categories found</p>
      ) : (
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collections.map((collection: Collection) => (
            <Link
              href={`/collections/${collection._id}`}
              key={collection._id}
              className="flex items-center gap-4 hover:bg-gray-100 p-3 rounded-lg"
            >
              <Image
                src={collection.image}
                alt={collection.title}
                width={70}
                height={70}
                className="rounded-md object-cover"
              />
              <span className="font-semibold text-lg">{collection.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Allcollections;
