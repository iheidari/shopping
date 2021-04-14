import CartItem from "./CartItem";
import { Container, TotalContainer } from "./styled";

const Cart = ({ cart, removeFromCart }) => {
  const cartItems = cart.map((item) => (
    <CartItem key={item.id} product={item} removeFromCart={removeFromCart} />
  ));
  return (
    <div>
      <Container>{cartItems}</Container>
      <hr />
      <TotalContainer>
        Total Price: $
        {cart.reduce((total, item) => total + item.price * item.count, 0)}
      </TotalContainer>
    </div>
  );
};

export default Cart;
