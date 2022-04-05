import { Link } from 'react-router-dom'

export const Menu: React.FC<{}> = (props) => {
    return (
        <div>
            <Link to="/">Home</Link>  |  <Link to="/param/15">Param Route</Link>  |    <Link to="/query?name=MeuNome">Query Route</Link>  |  <Link to="/about">About</Link>
        </div>
    )
}