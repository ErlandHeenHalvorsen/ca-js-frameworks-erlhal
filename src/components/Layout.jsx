import { Outlet } from "react-router";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div className="app-container">
      <style>
        {`
          .app-container {
            display: flex;
            flex-direction: column;
            height: 100vh;
          }
          main {
            flex: 1;
          }
        `}
      </style>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
