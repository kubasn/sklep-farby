import "./App.css";
import Features from "./components/Features";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Menu />
      <Features />
    </div>
  );
}

export default App;
