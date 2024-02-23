import { NextResponse } from "next/server";
import connectDB from "@/utils/mongoose";
import Product from "@/app/models/Products";



export async function GET(request, { params }) {
    connectDB(); // Asegúrate de establecer la conexión a la base de datos
    console.log('id del get:', params.id);
    const productFound = await Product.findById(params.id)
    try {
        console.log(productFound);
        if (!productFound) {
            return NextResponse.error('No se encontro el producto:', { status: 404 })
        }

    } catch (error) {
        return NextResponse.error({ message: error })
    }

    return NextResponse.json(productFound)
}