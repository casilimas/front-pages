import { Link } from 'react-router-dom';
import '../../src/components/NavBar'; 
import '../App.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/home" className="nav-link-Home">Home</Link>
        </li>
        <li>
          <Link to="/crear" className="nav-link-Crear">Crear</Link>
        </li>
        <li>
          <Link to="/buscar" className="nav-link-Buscar">Buscar</Link>
        </li>
        <li>
          <Link to="/listar" className="nav-link-Listar">Listar</Link>
        </li>
        <li>
          <Link to="/editar" className="nav-link-Editar">Editar</Link>
        </li>
        <li>
          <Link to="/borrar" className="nav-link-Borrar">Borrar</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
