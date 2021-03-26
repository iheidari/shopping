import { useState } from "react";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((state) => [...state, product]); //async
  };

  const removeFromCart = (product) => {};

  return (
    <Router>
      <div className="p-4 w-96 mx-auto">
        <Menu cartCount={cart.length} />
        <Switch>
          <Route path="/" exact>
            <Products addToCart={addToCart} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
