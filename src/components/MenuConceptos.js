import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <h3>Menu</h3>
      <ol>
        <li>
          <span>
            Enlaces HTML <br /> (no recomendado por renderizar todo el DOM)
          </span>
          <a href="/">Home</a>
          <a href="/about">Acerca</a>
          <a href="/contact">Contacto</a>
        </li>
        <li>
          <span>
            Componente Link
            <br />
            (Recomendado por no renderizar todo el DOM)
          </span>
          <Link to="/">Home</Link>
          <Link to="/about">Acerca</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/doc">Documentación</Link>
          <Link to="/No-existe">Error 404</Link>
        </li>
        <li>
          <span>Componente NavLink</span>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/about" activeclassname="active">
            Acerca
          </NavLink>
          <NavLink to="/contact" activeclassname="active">
            Contacto
          </NavLink>
          <NavLink to="/productos" activeclassname="active">
            Productos
          </NavLink>
        </li>
        <li>
          <span>Parámetros</span>
          <NavLink to="/usuario/sergio" activeclassname="active">
            Perfil
          </NavLink>
        </li>
        <li>
          <span>Redirecciones: </span>
          <Link to="/acerca">Acerca ={">"} About</Link>
          <Link to="/contacto">Contacto ={">"} Contact</Link>
        </li>
        <li>
          <span>Rutas Anidadas: </span>
          <Link to="/react">React</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
