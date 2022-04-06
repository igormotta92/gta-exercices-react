import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";

interface IProps {
  children: ReactNode;
}

function Menu({ children }: IProps) {

  const active = ({ isActive }: any) => (isActive ? {backgroundColor: '#383c40'} : {backgroundColor: ''})

  return (
    <>
      <nav className="nav">
        <ul>
          <li><NavLink to="/" style={active}>Home</NavLink></li>
          <li><NavLink to="/movies" style={active}>Movies</NavLink></li>
          <li><NavLink to="/series" style={active}>Series</NavLink></li>
          <li><NavLink to="/contacts" style={active}>Contacts</NavLink></li>
        </ul>
      </nav>
      <section>
        {children}
      </section>
    </>
  )
}

export default Menu;
