import express from "express"
import dotenv from "dotenv"
import chalk from "chalk"
import { connectDB } from "./config/db.js"
import routes from "./routes/index.js"

dotenv.config()

//creating an app
const app = express()
const PORT = process.env.PORT


//creating middleware
app.use(express.json())


app.use('/', routes)



connectDB().then(() => {
    app.listen(PORT, ()=>{
        console.info(chalk.blue(`SERVER is LIVE http://localhost:${PORT}`))
    })
})
 
