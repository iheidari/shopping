import CartItem from "./CartItem";
import {
  EmptyCart,
  Container,
  CartItems,
  TotalPrice,
  BottomRow,
  ClearCart,
} from "./styled";

const Cart = ({ cart, removeFromCart, removeAll }) => {
  if (!cart || !cart.length) {
    return <EmptyCart>No item in the cart</EmptyCart>;
  }

  const cartItems = cart.map((item) => (
    <CartItem key={item.id} product={item} removeFromCart={removeFromCart} />
  ));
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
        <ClearCart onClick={removeAll}>Delete All</ClearCart>
      </BottomRow>
    </Container>
  );
};

export default Cart;
