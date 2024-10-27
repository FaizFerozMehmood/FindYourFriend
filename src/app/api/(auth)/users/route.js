import { dbConnection } from "@/helpers/dbConnect"
import { NextResponse } from "next/server"

export const GET = async(request)=>{
    try {
        await dbConnection()
        return NextResponse.json("Hello world")
        
    } catch (error) {
        
    }
}