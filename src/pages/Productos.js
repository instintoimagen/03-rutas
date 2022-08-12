import { useLocation } from "react-router";

const Productos = () => {
  // let location = useLocation();
  // console.log(location);

  let { search } = useLocation();
  let query = new URLSearchParams(search);
  // console.log(query);

  // Obtenemos los datos de búsqueda de la ruta, con el método .get()
  let start = query.get("inicio");
  let end = query.get("fin");
  console.log(start, end);

  return (
    <div className="productos">
      <h3>Estos son nuestros productos</h3>
      <h4>
        Mostrando desde el nº {start} hasta el nº {end}
      </h4>
      <div className="gridproductos">
        <figure>
          <img src="https://placeimg.com/300/300/people" alt="Productos" />
          <figcaption>Productos de Gente</figcaption>
        </figure>
        <figure>
          <img src="https://placeimg.com/300/300/tech" alt="Productos" />
          <figcaption>Productos de Tecnología</figcaption>
        </figure>
        <figure>
          <img src="https://placeimg.com/300/300/animals" alt="Productos" />
          <figcaption>Productos de Animales</figcaption>
        </figure>
        <figure>
          <img src="https://placeimg.com/300/300/tech" alt="Productos" />
          <figcaption>Productos de Tecnología</figcaption>
        </figure>
        <figure>
          <img src="https://placeimg.com/300/300/arch" alt="Productos" />
          <figcaption>Productos de arquitectura</figcaption>
        </figure>
        <figure>
          <img src="https://placeimg.com/300/300/nature" alt="Productos" />
          <figcaption>Productos de naturaleza</figcaption>
        </figure>
      </div>
      <div className="botonesproductos">
        <button className="botonatras">Atrás</button>
        <button className="botonadelante">Adelante</button>
      </div>
    </div>
  );
};

export default Productos;
