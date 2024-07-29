import Header from "./components/molecules/Header";
import Footers from "./components/molecules/Footers";
import { Outlet } from "react-router";
import { ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mt-12 sm:mt-[8.5rem]">
        <Outlet />
      </div>
      <Footers />
      <ScrollRestoration />
    </div>
  );
}

export default App;
