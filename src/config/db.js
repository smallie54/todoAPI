import chalk from "chalk"
import mongoose from "mongoose"



export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.info(chalk('connected to DB'))
    } catch (error) {
       console.error('failed to connect to DB') 
       process.exit(1)
    }
}