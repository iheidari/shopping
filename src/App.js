import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const _LOCAL_STORAGE_SHOPPING_CART = "_LOCAL_STORAGE_SHOPPING_CART";

function App() {
  const [cart, setCart] = useState();

  useEffect(() => {
    if (cart === undefined) {
      const lsCart = window.localStorage.getItem(_LOCAL_STORAGE_SHOPPING_CART);
      if (lsCart) {
        setCart(JSON.parse(lsCart));
      }
    } else {
      window.localStorage.setItem(
        _LOCAL_STORAGE_SHOPPING_CART,
        JSON.stringify(cart)
      );
    }
  }, [cart]);

  const addToCart = (product) => {
    let isNew = true;

    const newCart = cart
      ? cart.map((item) => {
          if (item.id === product.id) {
            item.count++;
            isNew = false;
          }
          return item;
        })
      : [];
    if (isNew) {
      newCart.push({ ...product, count: 1 });
    }
    setCart(newCart);
  };

  const removeFromCart = (product) => {
    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        item.count--;
      }
      return item;
    });

    setCart(newCart.filter((item) => item.count > 0));
  };

  const removeAll = () => {
    setCart([]);
  };

  return (
    <Router>
      <Menu
        cartCount={
          cart
            ? cart.reduce((total, item) => {
                return total + item.count;
              }, 0)
            : 0
        }
      />
      <Switch>
        <Route path="/" exact>
          <Products addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            removeAll={removeAll}
            addToCart={addToCart}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
