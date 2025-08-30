import Home from "./Pages/Home";
import {createBrowserRouter} from "react-router"
import { RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
])

function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
