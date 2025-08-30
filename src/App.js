import Home from "./Pages/Home";
import {createBrowserRouter} from "react-router-dom"
import { RouterProvider } from "react-router-dom";

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
