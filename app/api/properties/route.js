import { NextResponse } from "next/server";
import connectDB from "@/config/database";
import Property from "@/models/Property";

export async function GET() {
  try {
    await connectDB();

    const properties = await Property.find({}).lean();

    return NextResponse.json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { error: "Error fetching properties" },
      { status: 500 }
    );
  }
}
