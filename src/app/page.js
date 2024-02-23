import connectDB from "@/utils/mongoose";
import Products from "./models/Products";
import Container from "@/components/Container/Container";

//CONNECTION DB
async function loadProducts() {
  connectDB()
  const products = await Products.find()
  return products
}


export default async function Home() {



  return (
    <main className="w-[95%] mx-auto  ">
      <Container />
    </main>
  );
}
