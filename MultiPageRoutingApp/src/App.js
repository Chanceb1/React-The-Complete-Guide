import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Root from "./pages/Root";
import Error from "./pages/Error";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home />},
      { path: '/products', element: <Products/>},
      { path: '/products/:productId', element: <ProductDetails/>},    
    ],
  },
  // this is a way to include different routes for different users
  // {
  //   path: '/admin',
  //   children: [

  //   ]
  // }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
