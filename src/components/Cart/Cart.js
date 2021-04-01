import CartItem from "./CartItem";
import { Container } from "./styled";

const Cart = ({ cart, removeFromCart }) => {
  const cartItems = cart.map((item) => (
    <CartItem key={item.id} product={item} removeFromCart={removeFromCart} />
  ));
  return (
    <Container>
      {cartItems}
      <hr />
      Total Price: $
      {cart.reduce((total, item) => total + item.price * item.count, 0)}
    </Container>
  );
};

export default Cart;
