//Let's create the schema for the requests
import mongoose from "mongoose";
import  { Schema, model, models } from "mongoose"

//CREAMOS EL SCHEMA PARA PERMITIR QUE DATOS VAN A VENIR DE MONGODB
const productSchema = new Schema({
    _id:Schema.Types.ObjectId,
    name: String,
    price: Number,
    description: String,
    image: String,
    category: String,
    offert: Boolean
})

//Necesitamos el MODEL para poder operar con la base de datos. NO PODES EXPORTAR EL SCHEMA PORQUE SOLAMENTE ES UNA DEFINICION 

//VERIFICAMOS SI ENTRE TODOS LOS MODELOS EXISTE EL MODELO DE 'PRODUCTS' Y SI NO CREAMOS UNO NUEVO
const Product = mongoose.models.Products || mongoose.model('Products', productSchema);

export default Product