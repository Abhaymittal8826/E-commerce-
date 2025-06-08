import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products,currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const[size,SetSize]=useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData? (
    <div className="border-t-2 pt-10 translate-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images   */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justfiy-normal">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className="pl-2">(122)</p>
            </div>
            <p className=" mt-5 text-3xl font-medium">{currency}{productData.price}</p>
            <p className=" mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
            <div>
              <p>Select Size</p>
              <div className="flex gap-3">{
                productData.sizes.map((item,index)=>(
                  <button onClick={()=>SetSize(item)} className={` border rounded py-2 px-4 bg-gray-100 ${item===size ? ' ease-in duration-300 bg-orange-500 text-white' : ""} `} key={index}>{item}</button>
                ))
                }
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,size)} className="mt-5 bg-black text-white py-3 px-8 text-sm active:bg-orange-500">ADD TO CART</button>
            <hr className="mt-8 sm:w-4/5" /> 
            <div className="flex flex-col gap-1 mt-5 text-gray-500 text-sm">  
            <p>100% Original product.</p>
            <p>Cash on delivery is availabe on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>   
            </div>
        </div>   
      </div>
      {/*----------------- Description and review section----------------- */}
       <div className="mt-20">
        {/* upper boxes */}
        <div className="flex"> 
                <p className="border px-5 py-3 text-sm">Desctiption</p>
                <p className="border px-5 py-3 text-sm">Reviews (122) </p>
        </div>

        {/* below boxes descrptions */}
        <div className="border text-gray-600 flex flex-col gap-4 px-6 py-6 text-sm">
                <p>An e-commerce website is that which can fullfuill demand of consuemers to buy their favourite clothes online by just clicks.</p>
                <p>E-commerce website typically display products or services alon with detailed options for buyers to have multiple options to choose from.</p>
        </div>
       </div>
       {/*------------------ Display related products------------- */}
       <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className=" opacity-0"></div>
};

export default Product;
