import Product from "./Product";
import { Container } from "./styled";

const Products = (props) => {
  return (
    <Container className="w-1/2 mx-auto bg-gray-300 flex flex-col">
      <Product
        id="1"
        name="Pen"
        image="https://images-na.ssl-images-amazon.com/images/I/81A%2Bbhs4jkL._AC_SL1500_.jpg"
        description="Pen in different colors"
        price="5"
      />
      <Product
        id="1"
        name="Pen"
        image="https://images-na.ssl-images-amazon.com/images/I/81A%2Bbhs4jkL._AC_SL1500_.jpg"
        description="Pen in different colors"
        price="5"
      />
      <Product
        id="1"
        name="Pen"
        image="https://images-na.ssl-images-amazon.com/images/I/81A%2Bbhs4jkL._AC_SL1500_.jpg"
        description="Pen in different colors"
        price="5"
      />
    </Container>
  );
};

export default Products;
