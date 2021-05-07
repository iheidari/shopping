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
  CartImage,
} from "./styled";
import image1 from "../../resources/images/image1.jpg";

const Cart = ({
  cart,
  removeFromCart,
  removeAll,
  handelClickUp,
  handelClickDown,
}) => {
  const [showModal, setShowModal] = useState(false);
  if (!cart || !cart.length) {
    return (
      <div>
        <CartImage src={image1} alt="cartImage" />
        <hr />
        <EmptyCart>No item in the cart</EmptyCart>;
      </div>
    );
  }

  const cartItems = cart.map((item) => (
    <CartItem
      key={item.id}
      product={item}
      removeFromCart={removeFromCart}
      handelClickUp={handelClickUp}
      handelClickDown={handelClickDown}
    />
  ));

  return (
    <div>
      <CartImage src={image1} alt="cartImage" />
      <hr />
      <Container>
        <CartItems>{cartItems}</CartItems>
        <BottomRow>
          <TotalPrice>
            Total Price: $
            {cart
              ? cart
                  .reduce((total, item) => total + item.price * item.count, 0)
                  .toFixed(2)
              : 0}
          </TotalPrice>
          <ClearCart disabled={showModal} onClick={() => setShowModal(true)}>
            Delete All
          </ClearCart>
        </BottomRow>
        <CartModal
          showModal={showModal}
          deleteAll={removeAll}
          noChange={() => setShowModal()}
        />
        <GlobalStyle />
      </Container>
    </div>
  );
};

export default Cart;
