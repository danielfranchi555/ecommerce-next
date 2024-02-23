import Products from "@/app/models/Products";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
   connectDB()
   const products = await Products.find()
   console.log(products);
   return NextResponse.json({ message: products })
}