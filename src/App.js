import "./App.css";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";
import PaintsPage from "./pages/PaintsPage";
import CartPage from "./pages/CartPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcTotals, getCartItems } from "./features/cartSlice";
import { getPaints } from "./features/paintsSlice";
import Account from "./pages/Account";
import Protected from "./components/Protected";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isLoading } = useSelector((store) => store.paints);
  const dispatch = useDispatch();
  const content = (
    <Routes>
      <Route path="contact" element={<Contact />} />
      <Route path="paints" element={<PaintsPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route
        path="account/*"
        element={
          <Protected>
            <Account />
          </Protected>
        }
      />
      <Route path="/" element={<Home />} />
    </Routes>
  );
  const header = <Header />;
  const footer = <Footer />;
  const menu = <Menu />;

  useEffect(() => {
    dispatch(calcTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getPaints(""));
  }, []);

  if (isLoading) return <div>loading...</div>;

  return (
    <Router>
      <div className="w-full max-w-[1440px] mx-auto bg-white">
        <Layout content={content} menu={menu} header={header} footer={footer} />
      </div>
    </Router>
  );
}

export default App;
