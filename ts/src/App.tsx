import { RouterProvider } from "react-router-dom"
import appRoutes from "./Router/Routes"

const App = () => {
  return <RouterProvider router={appRoutes} />
}

export default App