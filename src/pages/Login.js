import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h3>Login</h3>
      <div className="inputCenter">
        <form className="login">
          <label>Usuario</label>
          <input type="text" />
          <label>Contraseña</label>
          <input type="password" />
          <Link to="/dashboard">Ingresar</Link>
          <Link to="/">¿Olvidaste tu contraseña?</Link>
        </form>
      </div>
    </>
  );
};

export default Login;
