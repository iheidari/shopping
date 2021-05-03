import CartItem from "./CartItem";
import ConfirmationPopUp from "./ConfirmationPopUp";
import { useState } from "react";
import {
  EmptyCart,
  Container,
  CartItems,
  TotalPrice,
  BottomRow,
  ClearCart,
} from "./styled";

const Cart = ({ cart, removeFromCart, removeAll,addToCart }) => {
  const [showPop, setShowPop] = useState(false);
  if (!cart || !cart.length) {
    return <EmptyCart>No item in the cart</EmptyCart>;
  }

  const cartItems = cart.map((item) => (
    <CartItem key={item.id} product={item} addTocart={addToCart} removeFromCart={removeFromCart} />
  ));
  return (
    <Container>
      <CartItems>{cartItems}</CartItems>
      <BottomRow>
      <TotalPrice>
          Total Price: $
          {cart.reduce((total, item) => total + item.price * item.count, 0)}
        </TotalPrice>
        <ClearCart disabled={showPop} onClick={() => setShowPop(true)}>
          Delete All
        </ClearCart>
        <ConfirmationPopUp
          show={showPop}
          onCancel={() => setShowPop(false)}
          onConfirm={() => removeAll()}
        />
      </BottomRow>
    </Container>
  );
};

export default Cart;