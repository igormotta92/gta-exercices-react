import { Link } from "react-router-dom";
import "./styles.css";

const Menu: React.FC<{}> = (props) => {
  return (
    <>
      <nav className="c-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/series">Series</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>
      {props.children}
    </>
  )
}

export default Menu;
