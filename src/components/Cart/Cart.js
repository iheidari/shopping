import CartItem from "./CartItem";
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
          <ClearCart onClick={removeAll}>Delete All</ClearCart>
        </BottomRow>
      </Container>
    </div>
  );
};

export default Cart;
