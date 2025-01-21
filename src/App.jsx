
import { Outlet, useLocation } from "react-router-dom";
import Footer from './Footer';
import HeaderNav from './HeaderNav';



function App() {
  const location = useLocation();

  let toponbar = "";

  switch (location.pathname) {
    case "/":
      toponbar = "hidden";
      break;
    default:
      toponbar = "block";
  }



  return (
    <>

      <HeaderNav toponbar={toponbar} />
      <Outlet />
      <Footer />

    </>
  )
}

export default App
