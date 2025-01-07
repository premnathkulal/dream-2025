import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MasterMenu from "./components/menu/MasterMenu";

function App() {
  return (
    <div className="app">
      <Header />
      <MasterMenu />
      <div className="app-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
