import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
// import userModel from './models/userModel.js' // Uncomment if you need to use userModel directly
// import productModel from './models/productModel.js' // Uncomment if you need to use productModel directly        
import cookieParser from 'cookie-parser'    



//App config
const app=express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middleware
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true              
}));
//api endpoints

app.use(cookieParser()) // Middleware to parse cookies
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)  //where is this /product? 

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>console.log("Server stared on PORT: "+ port))     //start express server