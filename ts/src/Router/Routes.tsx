import { createBrowserRouter } from "react-router";
import Services from "../components/Default/Services";
import About from "../components/Default/About";
import Layout from "./Layout";
import Hero from "../components/Hero/Hero";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);

export default appRoutes;
