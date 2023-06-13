import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function Layout() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
