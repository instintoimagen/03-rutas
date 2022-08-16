import { useNavigate, useLocation } from "react-router";

const Productos = () => {
  let { search } = useLocation();
  let query = new URLSearchParams(search);

  const LIMIT = 6; // Cantidad de productos por página. Cuantos más se van a cargar con el botón "siguiente" o "adelante".

  let start = parseInt(query.get("inicio")) || 1; // Obtenemos los datos de búsqueda desde la ruta en la barra de dirección, con el método .get()  Pero necesitamos transformarlos a número con el método parseInt()  Y si no se encuentran en la ruta que ponga el número 1
  let end = parseInt(query.get("fin")) || LIMIT;

  let navigate = useNavigate();

  const handlePrev = () => {
    navigate({ search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}` });
  };
  const handleNext = () => {
    navigate({ search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}` });
  };

  return (
    <div className="productos">
      <h3>Estos son nuestros productos</h3>
      <h4>
        Mostrando desde el nº {start} hasta el nº {end}
      </h4>
      <div className="botonesproductos">
        {/* Conditional Render para que el botón Atrás aparezca si se puede volver hacia atrás. (Que el valor no se vuelva negativo) */}
        {start > LIMIT && (
          <button onClick={handlePrev} className="botonatras">
            ◀️Atrás
          </button>
        )}
        <button onClick={handleNext} className="botonadelante">
          Adelante▶️
        </button>
      </div>
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
    </div>
  );
};

export default Productos;
