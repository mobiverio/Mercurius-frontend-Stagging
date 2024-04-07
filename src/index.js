import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

//Main Screens
import App from "./App.jsx";
import Index from "./pages/landingpage/index.jsx";
import NewIndex from "./pages/newIn/NewIndex.jsx";
import ApparelIndex from "./pages/apparel/ApparelIndex.jsx";
import AccessoriesIndex from "./pages/accessories/AccessoriesIndex.jsx";
import BrandIndex from "./pages/brands/BrandsIndex.jsx";
import GadgetIndex from "./pages/gadgets/GadgetIndex.jsx";
import SalesIndex from "./pages/sales/SalesIndex.jsx";
import CartIndex from "./pages/cart/CartIndex";
import ProductIndex from "./pages/product-listing/ProductIndex.jsx";
import { Product } from "./pages/product-single/Product.jsx";
import BrandProducts from "./pages/brands/BrandProducts.jsx";

//Auth Screens
import SignIn from "./pages/auth/Signin.jsx";
import SignUp from "./pages/auth/Signup.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import CreatePassword from "./pages/auth/CreatePassword.jsx";

const router = createBrowserRouter([
  //Authentication Pages
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/resetPassword", element: <ResetPassword /> },
  { path: "/createPassword", element: <CreatePassword /> },

  //Authenticated Pages
  {
    path: "/",
    element: <App />,
    errorElement: <div>Page not found</div>,
    children: [
      { path: "/", element: <Index /> },
      { path: "/new", element: <NewIndex /> },
      { path: "/apparel", element: <ApparelIndex /> },
      { path: "/accessories", element: <AccessoriesIndex /> },
      { path: "/brands", element: <BrandIndex /> },
      { path: "/gadgets", element: <GadgetIndex /> },
      { path: "/sales", element: <SalesIndex /> },
      { path: "/cart", element: <CartIndex /> },
      { path: "/product-view/:productId", element: <ProductIndex /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/brands/:id", element: <BrandProducts /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
