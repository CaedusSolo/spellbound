import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <h1>App Component</h1>
      <Footer />
      <Outlet />
    </>
  );
}

export default App;
