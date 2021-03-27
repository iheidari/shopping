import { Link } from "react-router-dom";

const Menu = ({ cartCount }) => {
  return (
    <nav>
      <h1>Shopping</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart(<span>{cartCount}</span>)
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
