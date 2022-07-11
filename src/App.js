import "./App.css";
import Features from "./components/Features";
import Features2 from "./components/Features2";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import NewItems from "./components/NewItems";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Header />
      <Menu />
      <Features />
      <NewItems />
      <Features2 />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
