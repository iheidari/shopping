import CartItem from "./CartItem";
import { Container,Text } from "./styled";

const Cart = ({ cart, removeFromCart }) => {
  if(!cart || !cart.length) {
    return <Text>your cart is currently empty</Text>
  }
  const cartItems = cart.map((item) => (
    <CartItem key={item.id} product={item} removeFromCart={removeFromCart} />
  ));
  return (
    <Container>
      {cartItems}
      Total Price: $
      {cart.reduce((total, item) => total + item.price * item.count, 0)}
    </Container>
  );
};

export default Cart;
