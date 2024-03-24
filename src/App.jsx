import { Outlet } from "react-router";
import Header from "./components/molecules/Header";
import Footers from "./components/molecules/Footers";
// import { Product } from "./pages/product-single/Product";
// import ProductIndex from "./pages/product-listing/ProductIndex";
// import Signup from "./pages/auth/Signup";
// import Signin from "./pages/auth/Signin";
// import CreatePassword from "./pages/auth/CreatePassword";
// import ResetPassword from "./pages/auth/ResetPassword";
// import ProductDescription from "./pages/product-listing/ProductDesc";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footers />
    </div>
  );
}

export default App;
