import PropertiesCard from "@/components/PropertiesCard";
import Link from "next/link";
import { connectToDatabase } from "@/config/database";
import Property from "@/models/Property";

const HomeProperties = async () => {
  await connectToDatabase();

  // Get the 3 latest properties
  const recentProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  return (
    <div>
      <section className="px-4 py-6">
        <div className=" container-xl lg:container m-auto px-4 py-6 ">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          {recentProperties.length === 0 ? (
            <h1>No properties found</h1>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              {recentProperties.map((property) => (
                <PropertiesCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="m-auto max-w-xl my-10 px-6 text-center">
        <Link
          href="/properties"
          className=" block bg-black text-white py-4 px-6 rounded-xl hover:bg-gray-500"
        >
          View all Properties
        </Link>
      </section>
    </div>
  );
};

export default HomeProperties;
