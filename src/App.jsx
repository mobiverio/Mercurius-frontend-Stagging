import Header from "./components/molecules/Header";
import Footers from "./components/molecules/Footers";
import { Outlet } from "react-router";
import { ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footers />
      <ScrollRestoration />
    </div>
  );
}

export default App;
