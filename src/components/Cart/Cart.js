import { useState } from "react";
import CartItem from "./CartItem";
import {
  EmptyCart,
  Container,
  CartItems,
  TotalPrice,
  BottomRow,
  ClearCart,
} from "./styled";
import CartModal from "../Modals/CartModal";
import { GlobalStyle } from "../Modals/styled";

const Cart = ({ cart, removeFromCart, setCart }) => {
  const [showModal, setShowModal] = useState(false);
  const deleteAll = () => {
    setCart([]);
    setShowModal((prev) => !prev);
  };
  if (!cart || !cart.length) {
    return <EmptyCart>No item in the cart</EmptyCart>;
  }
  const cartItems = cart.map((item) => (
    <CartItem key={item.id} product={item} removeFromCart={removeFromCart} />
  ));
  const modalTrigger = () => {
    setShowModal((prev) => !prev);
  };

  const noChange = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <CartItems>{cartItems}</CartItems>
      <BottomRow>
        <TotalPrice>
          Total Price: $
          {cart
            ? cart.reduce((total, item) => total + item.price * item.count, 0)
            : 0}
        </TotalPrice>
        <ClearCart onClick={modalTrigger}>Delete All</ClearCart>
      </BottomRow>
      <CartModal
        showModal={showModal}
        deleteAll={deleteAll}
        noChange={noChange}
      />
      <GlobalStyle />
    </Container>
  );
};

export default Cart;
