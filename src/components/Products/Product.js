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
import emptyImage from "../../resources/images/empty.jpeg";

const Product = ({ product, addToCart }) => {
  return (
    <ProductContainer>
      <div>
        <Image src={product.image || emptyImage} alt={product.name} />
      </div>
      <TextBody>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
      </TextBody>
      <div>
        <Price>${product.price}</Price>
        <Button onClick={() => addToCart(product)}>Buy</Button>
      </div>
    </ProductContainer>
  );
};

export default Product;
