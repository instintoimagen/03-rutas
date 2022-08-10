import ConceptosBasicos from "./components/ConceptosBasicos";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router</h1>
        <a
          href="https://reactrouter.com/docs/en/v6"
          target="_blank"
          rel="noreferrer"
        >
          Documentación Router Library
        </a>
        <hr />
        <ConceptosBasicos />
      </div>
    </BrowserRouter>
  );
}

export default App;
