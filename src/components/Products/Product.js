import React from "react";
import {
  ProductContainer,
  Description,
  Image,
  TextBody,
  Title,
  Price,
} from "./styled";

const Product = (props) => {
  return (
    <ProductContainer>
      <div>
        <Image src={props.image} alt={props.name} />
      </div>
      <TextBody>
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>
      </TextBody>
      <div>
        <Price>${props.price}</Price>
      </div>
    </ProductContainer>
  );
};

export default Product;
