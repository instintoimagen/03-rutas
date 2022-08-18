import { Link, Outlet } from "react-router-dom";
// import Topic from "../components/Topic";

const ReactTopics = () => {
  return (
    <div>
      <h3>Notas de React</h3>
      <ul className="menuReact">
        <li>
          <Link to="nature">Naturaleza</Link>
        </li>
        <li>
          <Link to="arch">Arquitectura</Link>
        </li>
        <li>
          <Link to="people">Gente</Link>
        </li>
        <li>
          <Link to="animals">Animales</Link>
        </li>
      </ul>

      <Outlet />
      {/* <Routes>
        <Route path=":topic" element={<Topic />} />
      </Routes> */}

      <img className="react-img" src="/assets/react.jpg" alt="notas de react" />
    </div>
  );
};

export default ReactTopics;
