import "./App.css";
import Features from "./components/Features";
import Features2 from "./components/Features2";
import Menu from "./components/Menu";
import NewItems from "./components/NewItems";
import Products from "./components/Products";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Menu />
      <Features />
      <NewItems />
      <Features2 />
      <Products />
    </div>
  );
}

export default App;
