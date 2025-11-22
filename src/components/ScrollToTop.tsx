import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => { 
    // "0,0" means top left coordinates of the window
    window.scrollTo(0, 0);
  }, [pathname]); // Runs every time the route path changes

  return null; // This component doesn't render anything visible
};

export default ScrollToTop;