import MainHeader from "../MainHeader/MainHeader";
import MiniNavbar from "../MiniNavbar/MiniNavbar";
import Footer from "../Footer/Footer";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <MainHeader />
      <MiniNavbar />
      <main className="layOut__container">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
