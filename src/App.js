import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Layout, Typography, Space } from "antd";

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
        <div className="footer" style={{ textAlign: "center" }}>
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to={"/"}>Home</Link>
            <Link to={"/exchanges"}>Exchanges</Link>
            <Link to={"/news"}>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
