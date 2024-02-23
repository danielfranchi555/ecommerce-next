// DATABASE CONNECTION
import mongoose from 'mongoose';

const conn = {
   isConnected: false,
}

export async function connectDB() {
    if (conn.isConnected) return;
 
    try {
       console.log('Intentando establecer conexión a MongoDB...');
       await mongoose.connect(process.env.URI);
       conn.isConnected = true;
       console.log('Conexión a MongoDB establecida');
 
       // Verificar el estado de la conexión
       if (mongoose.connection.readyState === 1) {
          console.log('La conexión a MongoDB está abierta');
       } else {
          console.log('La conexión a MongoDB está cerrada');
       }
    } catch (error) {
       console.error('Error de conexión a MongoDB:', error);
    }
}

export default connectDB;
