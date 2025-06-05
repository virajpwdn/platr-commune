import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';

const Header = () => {
  // console.log("Header component is Rendered");
  let [btnName , setBtnName] = useState('Login');
  // Creating a state variable

  useEffect(()=>{
    // console.log("useEffect is Rendered");
  },[])

  const isOnline = useOnlineStatus()
  console.log(isOnline);
 

  return (
    <div className="header p-3 m-5">
      <div className="logo">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <Link className='li' to="/">Home</Link>
          <Link className='li' to="/about">About Us</Link>
          <Link className='li' to="/contact">Contact Us</Link>
          <Link className='li' to="cart">Cart</Link>
          <button className='login' onClick={()=> {
            btnName === "Login" ? setBtnName('Logout') : setBtnName('Login');
          } }>{btnName}</button>
          <li>{isOnline ? "Online ✅" : "Offline 🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;