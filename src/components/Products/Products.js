import Product from "./Product";
import { Container } from "./styled";

const mockData = [
  {
    id: 1,
    name: "Pen",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81A%2Bbhs4jkL._AC_SL1500_.jpg",
    description: "Pen in different colors",
    price: 5,
  },
  {
    id: 2,
    name: "Pencil",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81A%2Bbhs4jkL._AC_SL1500_.jpg",
    description: "Pencil in different colors",
    price: "10",
  },
  {
    id: 1,
    name: "Cup",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81A%2Bbhs4jkL._AC_SL1500_.jpg",
    description: "Cup in different colors",
    price: "4",
  },
];

const Products = (props) => {
  const productsComponent = mockData.map((product) => (
    <Product
      key={product.id}
      name={product.name}
      description={product.description}
      image={product.image}
      price={product.price}
    />
  ));
  return <Container>{productsComponent}</Container>;
};

export default Products;
