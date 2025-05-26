import connectDB from "../config/database.js";
import Property from "../models/Property.js";

const checkDatabase = async () => {
  try {
    console.log("Connecting to database...");
    await connectDB();

    console.log("Checking for properties...");
    const count = await Property.countDocuments();
    console.log(`Found ${count} properties in the database`);

    if (count > 0) {
      const properties = await Property.find({}).lean();
      console.log("Sample property:", properties[0]);
    }

    process.exit(0);
  } catch (error) {
    console.error("Error checking database:", error);
    process.exit(1);
  }
};

checkDatabase();
