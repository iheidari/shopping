import "./App.css";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Menu />
      <Products />
      <Cart />
    </div>
  );
}

export default App;
