import ConceptosBasicos from "./components/ConceptosBasicos";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router</h1>
        <a
          href="https://v5.reactrouter.com/web/guides/quick-start"
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
