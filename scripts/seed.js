import connectDB from "../config/database.js";
import Property from "../models/Property.js";
import data from "../properties.json" assert { type: "json" };

const seedDatabase = async () => {
  try {
    await connectDB();

    // Delete existing data
    await Property.deleteMany({});

    // Insert new data
    await Property.insertMany(data);

    console.log("Database seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
