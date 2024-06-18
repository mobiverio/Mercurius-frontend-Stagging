import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  //   const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("parent")?.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
};

export default ScrollToTop;
