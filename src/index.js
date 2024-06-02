import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
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
import Profile from "./pages/auth/Profile.jsx";

//Auth Screens
import SignIn from "./pages/auth/Signin.jsx";
import SignUp from "./pages/auth/Signup.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import CreatePassword from "./pages/auth/CreatePassword.jsx";

// const user = true;

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  // const user = sessionStorage.get('user')
  const user = localStorage.getItem("loggedInUser");
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
    element: <ProtectedRoute element={<App />} />,
    errorElement: <div>Page not found</div>,
    children: [
      { path: "/", element: <ProtectedRoute element={<Index />} /> },
      { path: "/new", element: <ProtectedRoute element={<NewIndex />} /> },
      {
        path: "/apparel",
        element: <ProtectedRoute element={<ApparelIndex />} />,
      },
      {
        path: "/accessories",
        element: <ProtectedRoute element={<AccessoriesIndex />} />,
      },
      { path: "/brands", element: <ProtectedRoute element={<BrandIndex />} /> },
      {
        path: "/gadgets",
        element: <ProtectedRoute element={<GadgetIndex />} />,
      },
      { path: "/sales", element: <ProtectedRoute element={<SalesIndex />} /> },
      { path: "/cart", element: <ProtectedRoute element={<CartIndex />} /> },
      {
        path: "/product-view/:productId",
        element: <ProtectedRoute element={<ProductIndex />} />,
      },
      {
        path: "/product/:id",
        element: <ProtectedRoute element={<Product />} />,
      },
      {
        path: "/brands/:id",
        element: <ProtectedRoute element={<BrandProducts />} />,
      },
      {
        path: "/profile",
        element: <ProtectedRoute element={<Profile />} />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
