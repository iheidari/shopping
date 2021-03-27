import { Link } from "react-router-dom";

const Menu = ({ cartCount }) => {
  return (
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
  );
};

export default Menu;
