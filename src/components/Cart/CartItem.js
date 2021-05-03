import React from "react";
import {
  ProductContainer,
  Description,
  Image,
  TextBody,
  Title,
  Price,
  Button,
} from "./styled";

const CartItem = ({
  product,
  removeFromCart,
  handelClickDown,
  handelClickUp,
}) => {
  return (
    <ProductContainer>
      <div>
        <Image src={product.image} alt={product.name} />
      </div>
      <TextBody>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
      </TextBody>
      <div>
        <Button onClick={() => handelClickUp(product)}>+</Button>
        {product.count}
        <Button onClick={() => handelClickDown(product)}>-</Button>
        <Button onClick={() => removeFromCart(product)}>Remove</Button>
      </div>
      <Price>${product.price}</Price>
    </ProductContainer>
  );
};

export default CartItem;
