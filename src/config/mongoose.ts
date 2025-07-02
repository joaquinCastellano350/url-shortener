import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

export async function connectDB() {
    try {
        if(!MONGO_URI) throw new Error('DATABASE URI NOT DEFINED ON .env')
        await mongoose.connect(MONGO_URI)
        console.log("Conectado a la base de datos.")
    }catch(error){
        console.error("Hubo un error al conectarse a la base de datos:" , error);
        process.exit(1)
    }
}