import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, like } from "../../features/product/productSlice";

const Product = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch()
  
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product._id}>
            <p>{product.name}</p>
            <p>{product.price} €</p>
            <p>{product.likes.length} likes</p>
            <button onClick={()=>{
                dispatch(like(product._id))
                // setTimeout(() => {
                //     dispatch(getAllProducts())
                // }, 1000);
                }}>Dar like</button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
