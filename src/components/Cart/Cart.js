import { useState } from "react";
import CartItem from "./CartItem";
import CartModal from "../Modals/CartModal";
import { GlobalStyle } from "../Modals/styled";

import {
  EmptyCart,
  Container,
  CartItems,
  TotalPrice,
  BottomRow,
  ClearCart,
} from "./styled";

const Cart = ({ cart, removeFromCart, setCart,removeAll,addToCart }) => {
  const [showModal, setShowModal] = useState(false);
  // const deleteAll = () => {
  //   setCart([]);
  //   setShowModal((prev) => !prev);
  // };
  if (!cart || !cart.length) {
    return <EmptyCart>No item in the cart</EmptyCart>;
  }
  const cartItems = cart.map((item) => (
    <CartItem key={item.id} product={item}
    addTocart={addToCart}
     removeFromCart={removeFromCart} />
  ));
  // const modalTrigger = () => {
  //   setShowModal((prev) => !prev);
  // };

  // const noChange = () => {
  //   setShowModal(false);
  // };

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
        {/* <ClearCart onClick={modalTrigger}>Delete All</ClearCart> */}
        <ClearCart disabled={showModal} onClick={() => setShowModal(true)}>
          Delete Alll
        </ClearCart>
      </BottomRow>
      <CartModal
        showModal={showModal}
        deleteAll={removeAll}
        noChange={()=> setShowModal()}
      />
      <GlobalStyle />
    </Container>
  );
};

export default Cart;
