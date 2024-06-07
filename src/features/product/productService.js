import axios from "axios"

const API_URL = "http://localhost:3002/products"

const getAllProducts =async()=>{
    const res = await axios.get(API_URL)
    return res.data
}

const like = async(id)=>{
    const token = localStorage.getItem("token")
    const res = await axios.put(API_URL +"/like/"+id,{},{
        headers:{
            Authorization:token
        }
    })
    return res.data
}

const productService ={
    getAllProducts,
    like
}

export default productService