import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { UserContext } from "../context/userContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "../Store/appStore";

const Layout = () => {
  const [demo, setDemo] = useState("Harry");
  return (
    <div>
      <Provider store={appStore}>
        <UserContext.Provider value={{ userName: demo, setDemo }}>
          <Navbar />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

export default Layout;
