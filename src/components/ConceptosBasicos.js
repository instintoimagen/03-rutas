import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Doc from "../pages/Doc";
import Productos from "../pages/Productos";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import MenuConceptos from "./MenuConceptos";
import Usuario from "../pages/Usuario";
import ReactTopics from "../pages/ReactTopics";
import Topic from "./Topic";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

const ConceptosBasicos = (Docum) => {
  return (
    <div>
      <h3># Nuevo Menú con Hash Router #</h3>
      <HashRouter>
        {/* SE REEMPLAZÓ BrowserRouter por HashRouter. 
        Antes se había traído del archivo App.js. El menú siempre fuera de Routes. */}
        <MenuConceptos />
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/doc" element={<Doc />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/usuario/:username" element={<Usuario />} />
          <Route path="/acerca" element={<Navigate to="/about" />} />
          <Route path="/contacto" element={<Navigate to="/contact" />} />
          <Route path="/react" element={<ReactTopics />}>
            <Route path=":topic" element={<Topic />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
          {/* <Route
            path="/dashboard"
            element={auth ? <Dashboard /> : <Navigate to="/login" />}
          /> */}
        </Routes>
      </HashRouter>
    </div>
  );
};

// Si se activan <Link> aquí abajo, deben importarse arriba desde "react-router-dom"
/* const Home = () => {
  return (
    <>
      <nav>
        <Link to="/about"> About </Link>
        <Link to="/contact">Contact</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/doc">Documentación</Link>
      </nav>
      <main>
        <h3>Bienvenidos a la página HOME</h3>
        <img src="https://placeimg.com/300/300/people" alt="Gente" />
        <p>
          Este es la web y la página de inicio con un texto que habla de
          muchísimas cosas. Saludos <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cum
          deleniti temporibus impedit suscipit maiores inventore nam aliquam ex
          reprehenderit sed corrupti iusto omnis deserunt, repudiandae in.
          Tempore, maxime fugit?
        </p>
      </main>
    </>
  );
}; */
const Contact = () => {
  return (
    <>
      {/*       <nav>
        <Link to="/"> Home </Link>
        <Link to="/about">About </Link>
        <Link to="/productos">Productos</Link>
        <Link to="/doc">Documentación</Link>
      </nav> */}
      <main>
        <h3>Estemos en contacto</h3>
        <form className="login">
          <label>Ingresa tu nombre</label>
          <input type="text" placeholder="Nombre" />
          <label>Ingresa tu mail</label>
          <input type="email" placeholder="mail" />
        </form>
        <img src="https://placeimg.com/300/300/animals" alt="Animales" />
        <p>
          Estemos en contacto por mail <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cum
          deleniti temporibus impedit suscipit maiores inventore nam aliquam ex
          reprehenderit sed corrupti iusto omnis deserunt, repudiandae in.
          Tempore, maxime fugit?
        </p>
      </main>
    </>
  );
};
const About = () => {
  return (
    <>
      {/*       <nav>
        <Link to="/"> Home </Link>
        <Link to="/contact">Contact</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/doc">Documentación</Link>
      </nav> */}
      <main>
        <h3>Acerca de nosotros</h3>
        <img src="https://placeimg.com/300/300/tech" alt="Tecnologia" />
        <p>
          En la tecnología trabajamos y somos miles. <br />
          Estemos en contacto por mail <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cum
          deleniti temporibus impedit suscipit maiores inventore nam aliquam ex
          reprehenderit sed corrupti iusto omnis deserunt, repudiandae in.
          Tempore, maxime fugit?
        </p>
      </main>
    </>
  );
};

export default ConceptosBasicos;
