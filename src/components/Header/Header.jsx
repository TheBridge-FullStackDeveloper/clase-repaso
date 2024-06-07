import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  return (
    <div>
      <Link to="/">Products</Link>
      {token ? (
        <button onClick={()=> dispatch(logout())}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Header;
