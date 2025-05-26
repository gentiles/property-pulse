// import data from "@/properties.json";
import PropertiesCard from "@/components/PropertiesCard";
import { connectToDatabase } from "@/config/database";
import Property from "@/models/Property";

const PropertiesPage = async () => {
  // try {
  console.log("Connecting to database...");
  await connectToDatabase();
  console.log("Database connected successfully");

  // Fetch properties from database
  console.log("Fetching properties...");
  const properties = await Property.find({}).lean();
  console.log("Number of properties found:", properties.length);
  console.log("Properties data:", JSON.stringify(properties, null, 2));

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <h1 className="text-2xl mb-4">Browse Properties</h1>
        {properties.length == 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertiesCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
  //   } catch (error) {
  //     console.error("Error in PropertiesPage:", error);
  //     return (
  //       <section className="px-4 py-6">
  //         <div className="container-xl lg:container m-auto px-4 py-6">
  //           <h1 className="text-2xl mb-4 text-red-500">
  //             Error loading properties
  //           </h1>
  //           <p>{error.message}</p>
  //         </div>
  //       </section>
  //     );
  //   }
};

export default PropertiesPage;
