import { Link } from "react-router-dom";

const Productos = () => {
  return (
    <>
      <Link to="/"> Home </Link>
      <Link to="/about">About </Link>
      <Link to="/doc">Documentacion</Link>
      <Link to="/contact">Contacto</Link>
      <h3>Estos son nuestros productos</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 300px)",
          margin: ".5rem",
        }}
      >
        <figure
          style={{
            backgroundColor: "#ddd",
            padding: "1.5rem",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src="https://placeimg.com/300/300/people" alt="Productos" />
          <figcaption style={{ display: "inline" }}>
            Productos de Tecnología
          </figcaption>
        </figure>
        <figure
          style={{
            backgroundColor: "#ddd",
            padding: "1.5rem",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src="https://placeimg.com/300/300/tech" alt="Productos" />
          <figcaption style={{ display: "inline" }}>
            Productos de Tecnología
          </figcaption>
        </figure>
        <figure
          style={{
            backgroundColor: "#ddd",
            padding: "1.5rem",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src="https://placeimg.com/300/300/animals" alt="Productos" />
          <figcaption style={{ display: "inline" }}>
            Productos de Tecnología
          </figcaption>
        </figure>
        <figure
          style={{
            backgroundColor: "#ddd",
            padding: "1.5rem",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src="https://placeimg.com/300/300/tech" alt="Productos" />
          <figcaption style={{ display: "inline" }}>
            Productos de Tecnología
          </figcaption>
        </figure>
        <figure
          style={{
            backgroundColor: "#ddd",
            padding: "1.5rem",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src="https://placeimg.com/300/300/arch" alt="Productos" />
          <figcaption style={{ display: "inline" }}>
            Productos de Tecnología
          </figcaption>
        </figure>
        <figure
          style={{
            backgroundColor: "#ddd",
            padding: "1.5rem",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src="https://placeimg.com/300/300/nature" alt="Productos" />
          <figcaption style={{ display: "inline" }}>
            Productos de Tecnología
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default Productos;
