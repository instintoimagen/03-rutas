import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/*  <nav>
        <Link to="/about"> About </Link>
        <Link to="/contact">Contact</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/doc">Documentación</Link>
      </nav> */}
      <main>
        <h3>Bienvenidos a la página HOME</h3>
        <h4
          style={{
            backgroundColor: "#000",
            color: "#bbb",
            display: "table",
            padding: "1rem",
            margin: "0 0 .5rem",
          }}
        >
          Esta home está hecha en otro componente
        </h4>
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
};

export default Home;
