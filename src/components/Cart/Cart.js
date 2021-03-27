import CartItem from "./CartItem";
import { Container } from "./styled";

const Cart = ({ cart, removeFromCart }) => {
  const cartItems = cart.map((item) => (
    <CartItem key={item.id} product={item} removeFromCart={removeFromCart} />
  ));
  return <Container>{cartItems}</Container>;
};

export default Cart;
