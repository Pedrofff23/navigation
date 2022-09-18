import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/param/123">Param #01</Link>
        </li>
        <li>
          <Link to="/param/nice">Param #02</Link>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
