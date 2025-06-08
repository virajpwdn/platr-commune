import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { UserContext } from "../context/userContext";
import { useState } from "react";

const Layout = () => {
  const [demo, setDemo] = useState("Harry");
  return (
    <div>
      <UserContext.Provider value={{userName: demo,  setDemo}}>
        <Navbar />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

export default Layout;
