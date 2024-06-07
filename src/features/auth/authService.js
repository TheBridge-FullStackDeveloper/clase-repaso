import axios from "axios";

const API_URL = "http://localhost:3002";

const register = async (userData) => {
  const res = await axios.post(API_URL + "/users", userData);
  return res.data;
};

const login = async(user)=>{
    const res = await axios.post(`${API_URL}/users/login`,user)
    if(res.data){
        localStorage.setItem("user",JSON.stringify(res.data.user))
        localStorage.setItem("token",res.data.token)
    }
    return res.data
}

const logout = async()=>{
    const token = localStorage.getItem("token")
    const res = await axios.delete(`${API_URL}/users/logout`,{
        headers:{
            Authorization:token
        }
    })
    if(res.data){
        localStorage.clear()
    }
    return res.data
}

const authService = {
  register,
  login,
  logout
};

export default authService;
