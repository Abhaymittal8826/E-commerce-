import {v2 as cloudinary} from "cloudinary"
import productModel from "../models/productModel.js";

//function to add product
const addProduct= async(req,res)=>{
    try{
        const {name, description, price, category, subCategory, sizes, bestSeller} =req.body // we get product details

        const image1= req.files.image1 && req.files.image1[0];
        const image2= req.files.image2 && req.files.image2[0];
        const image3= req.files.image3 && req.files.image3[0];
        const image4= req.files.image4 && req.files.image4[0];

        const images=[image1,image2,image3,image4].filter((item)=>item!==undefined)

        let imagesUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path, {resource_type:'image'});
                return result.secure_url
            })
        )

        const productData={
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestSeller : bestSeller === "true" ? true : false,
            sizes : JSON.parse(sizes),
            images : imagesUrl,
            date : Date.now()
        }


        console.log(productData)

        const product = new productModel(productData)
        await product.save()

            
                    console.log(name, description, price, category, subCategory, sizes, bestSeller)
                    console.log(imagesUrl)
                    
        res.json({success:true, message: "product added"})
        

    }
    catch(error){
        console.log(error)
        res.json({success:false, message:error.message })
    }
}
//function to list product
const listProducts= async(req,res)=>{
    try{
        //fetch all products from MongDB
        const products = await productModel.find();

        //send product list as response
        res.json({
            success:true,
            data: products,
        });
    }
    catch(error){
        console.log(error);
        res.json({
            success:false,
            message : error.message
        })
    }
}
//function to remove product
const removeProduct= async(req,res)=>{
    try{
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message:"product removed"})
    }
    catch(error){
        console.log(error);
        res.json({
            success:false,
            message : error.message
        })
    }
}
//function to add single product info
const singleProduct= async(req,res)=>{
    try{
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        res.json({success:true, product})
    }
    catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export {listProducts, addProduct, removeProduct, singleProduct}