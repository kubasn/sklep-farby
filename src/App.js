import "./App.css";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";

function App() {
  const content = (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
  const header = <Header />;
  const footer = <Footer />;
  const menu = <Menu />;

  return (
    <Router>
      <div className="w-full max-w-[1440px] mx-auto bg-white">
        <Layout content={content} menu={menu} header={header} footer={footer} />
      </div>
    </Router>
  );
}

export default App;
