import Cart from "./components/Cart";
import Menu from "./components/Menu";
import Products from "./components/Products";

function App() {
  return (
    <div className="p-4 w-96 mx-auto">
      <Menu />
      <Products />
      <Cart />
    </div>
  );
}

export default App;
