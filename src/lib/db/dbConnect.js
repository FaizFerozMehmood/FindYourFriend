import mongoose from "mongoose";

export async function dbConnect(){
    try {
        let connect = await mongoose.connect(process.env.MONGODB_URI)
        console.info("mongoDB CONNECTED=>");
        
        
    } catch (error) {
        console.log('error in connection =>',error);
        
    }
}