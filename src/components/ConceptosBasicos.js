import { Routes, Route, Link } from "react-router-dom";
import Doc from "../pages/Doc";
import Productos from "../pages/Productos";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";

const ConceptosBasicos = (Docum) => {
  return (
    <div>
      <h3>Conceptos Básicos de la librería ROUTER</h3>
      <h2>Rutas declarativas y Error 404</h2>
      <hr />
      <Routes>
        {/* El Error 404 No necesariamente va al final, ya que desde la versión 6 ya no se usa la propiedad "exact" */}
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/doc" element={<Doc />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

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
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about">About </Link>
        <Link to="/productos">Productos</Link>
        <Link to="/doc">Documentación</Link>
      </nav>
      <main>
        <h3>Estemos en contacto</h3>
        <form>
          <input type="text" placeholder="Nombre" />
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
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/contact">Contact</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/doc">Documentación</Link>
      </nav>
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
