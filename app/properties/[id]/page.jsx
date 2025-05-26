import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import { connectToDatabase } from "@/config/database";
import Property from "@/models/Property";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
Link;
const PropertyPage = async ({ params }) => {
  await connectToDatabase();
  const properties = await Property.findById(params.id).lean();

  return (
    <section>
      <PropertyHeaderImage image={properties.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
      <section class="bg-blue-50">
        <div class="container m-auto py-10 px-6">
          <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6"></div>
          {/* PROPERTY INFO */}
          <p>ID page {properties.name}</p>
        </div>
      </section>
    </section>
  );
};

export default PropertyPage;
