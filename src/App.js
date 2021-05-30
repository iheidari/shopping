import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import Products from "./components/Products";
import { AddItemToList, RemoveFromCart } from "./util";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const _LOCAL_STORAGE_SHOPPING_CART = "_LOCAL_STORAGE_SHOPPING_CART";

function App() {
  const [cart, setCart] = useState();

  // always -> componentDidMount
  // dependencies -> componetDidUpdate
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

    // effect
    // if Cart is undefined:
    // 1. check local storage(LS), if there is any information for cart
    // 2. load cart data from LS
    // 3. save loaded data to cart(state)
    //else
    // 1. save cart to LS
  }, [cart]);

  const addToCart = (product) => setCart(AddItemToList(cart, product));

  const removeFromCart = (product) => setCart(RemoveFromCart(cart, product));

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
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
