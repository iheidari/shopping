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

const CartItem = ({ product, removeFromCart, addTocart }) => {
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
        <Price>
          ${product.price} * {product.count}
        </Price>
        <Button onClick={() => removeFromCart(product)}>Remove</Button>
        <hr />
        <hr />
     <Button onClick={()=> addTocart(product)}>+</Button>
     <Button onClick={()=> removeFromCart(product)}>-</Button>
      </div>
    </ProductContainer>
  );
};

export default CartItem;
