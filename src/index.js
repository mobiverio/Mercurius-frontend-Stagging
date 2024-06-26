import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "@plume-ui-react/spinner/dist/index.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import Missing from "./components/molecules/404.js";

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
import Profile from "./pages/auth/Profile.jsx";

//Auth Screens
import SignIn from "./pages/auth/Signin.jsx";
import SignUp from "./pages/auth/Signup.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import CreatePassword from "./pages/auth/CreatePassword.jsx";

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  const user = sessionStorage.getItem("loggedInUser");
  return user ? element : <Navigate to="/signin" />;
};

const router = createBrowserRouter([
  // Authentication Pages
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/resetPassword", element: <ResetPassword /> },
  { path: "/createPassword", element: <CreatePassword /> },

  // Authenticated Pages
  {
    path: "/",
    element: <App />,
    errorElement: <Missing />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/new", element: <NewIndex /> },
      { path: "/apparel", element: <ApparelIndex /> },
      { path: "/accessories", element: <AccessoriesIndex /> },
      { path: "/gadgets", element: <GadgetIndex /> },
      { path: "/sales", element: <SalesIndex /> },
      { path: "/product-view/:productId", element: <ProductIndex /> },
      { path: "/cart", element: <CartIndex /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/brands/:id", element: <BrandProducts /> },
      { path: "/brands", element: <BrandIndex /> },
      { path: "/profile", element: <ProtectedRoute element={<Profile />} /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position={"top-right"} limit={2} />
  </React.StrictMode>
);
