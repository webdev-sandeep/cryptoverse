import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Layout } from "antd";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Outlet />
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default App;
