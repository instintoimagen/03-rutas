import { Link } from "react-router-dom";

const Doc = () => {
  return (
    <>
      {/* <Link to="/"> Home </Link>
      <Link to="/about">About </Link>
      <Link to="/productos">Productos</Link>
      <Link to="/contact">Contacto</Link> */}
      <h3>La Documentación de esta Librería</h3>
      <h4>Esta es una librería genial!</h4>
      <p>
        En esta librería trabajamos con las siguientes partes.
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor aut
        eveniet, animi blanditiis ad consequatur provident, obcaecati mollitia
        vitae unde quas saepe molestias nobis sit ex eos laborum nisi? Neque!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus,
        dolore. Molestias corrupti laboriosam, velit aliquam optio officia
        facilis unde magnam dicta officiis, perferendis quam a necessitatibus,
        libero voluptates hic labore. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Nulla, esse nemo. Minima dolorum magnam reiciendis
        maiores laudantium cum veritatis. Sint, esse recusandae itaque in dicta
        rem nam vel necessitatibus eveniet!
      </p>
      <img
        style={{ display: "flex", width: "100%" }}
        src="https://placeimg.com/600/300/tech"
        alt="Tecnologia"
      />
    </>
  );
};

export default Doc;
