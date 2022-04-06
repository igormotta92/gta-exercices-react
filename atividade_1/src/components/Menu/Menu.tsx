import { NavLink } from "react-router-dom";
import { IMenuProps } from "../../common/types";

const active = ({ isActive }: any) => (isActive ? {backgroundColor: '#383c40'} : {})
const navigation = [
  { path: '/', text: 'Home' },
  { path: '/movies', text: 'Movies' },
  { path: '/series', text: 'Series' },
  { path: '/contacts', text: 'Contacts' }
] 

function Menu({ children }: IMenuProps) {
  return (
    <div className="container">
      <header className="nav__header">
        <nav>
          <ul>
            {navigation.map(({path, text}) => (
              <li key={path}>
                <NavLink to={path} style={active}>{text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Menu;
