import validator from "validator";
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"


const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;

        const user=await userModel.findOne({email});

        if(!user){
            return res.json({success: false, message:"User does not exists"})
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(isMatch){
            const token=createToken(user._id)
              res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // true in production
        sameSite: 'lax', // use 'none' if frontend & backend are on different domains with HTTPS
      });

            res.json({ success: true, message: 'Login successful' });
        }
        else{
            res.json({success:false, message:"Invalid Credentials"})
        }


    }
    catch(error){
        console.log(error);
        res.json({success:false, message:error.message})
    }

}

// route for register
const registerUser=async(req,res)=>{
    try{
        const {name, email, password} =req.body;

        //check if user already exists or not
        const exists= await userModel.findOne({email});
        if(exists){
            return res.json({success: false, message:"User already exists"})
        }

        //validating email and password
        // if(!validator.isEmail(email)){
        //     return res.json({success: false, message:"Enter valid email"})
        // }
        // if(password.length<1){
        //     return res.json({success: false, message:"Enter strong password"})
        // }

        //hasing user password
        const salt= await bcrypt.genSalt(10)  //from 0 to 15, more will take more time
        const hashedPassword=await bcrypt.hash(password,salt)

        const newUser = new userModel({  // this will store new user data in db
            name,
            email,
            password : hashedPassword
        })

        const user= await newUser.save();

        const token = createToken(user._id)

           res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

        res.json({success:true, token})

    }
    catch(error){
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

//route for admin
const adminLogin=async(req,res)=>{

try {
    const {email, password} =req.body
    if(email === process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASS){
        const token = jwt.sign({email:process.env.ADMIN_EMAIL, role:"admin"},process.env.JWT_SECRET,{expiresIn:"1h"})
        res.json({success:true, token})
    }   
    else{
        res.json({success:false, message:"Invalid Credentials"})
    }
} catch (error) {
    console.log(error);
    res.json({success:false, message:error.message})    
}

}

export {loginUser,registerUser, adminLogin}