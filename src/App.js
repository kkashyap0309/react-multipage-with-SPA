import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import ProductsPage from "./Pages/Products";
import RootLayout from "./Pages/Root";
import ErrorPage from "./Pages/Error";
import ProductDetails from "./Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/root",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      //removed earlier "/" from the path to convert it to relative path from absolute path
      // this will first identify the parent "root" and will append the paths defined.

      { index: true, element: <HomePage /> }, //We can replace path with index attribute if the same page
      // should be loaded when the parent  "/root to be called"

      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
