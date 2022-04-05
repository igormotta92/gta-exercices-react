import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

interface IProps {
  children: ReactNode;
}

function Menu({ children }: IProps) {
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
      <section>
        {children}
      </section>
    </>
  )
}

export default Menu;
