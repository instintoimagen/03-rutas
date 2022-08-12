import { useParams } from "react-router";

const Usuario = () => {
  // let params = useParams();
  // console.log(params);
  let { username } = useParams();

  return (
    <>
      <div className="perfil">
        <div>
          <h3>Perfil del usuario</h3>
          <p>
            Nombre del usuario: <b>{username}</b>
          </p>
        </div>
        <div className="fotoperfil">
          <img src="/assets/user-icon.png" alt="user" />
        </div>
      </div>
    </>
  );
};

export default Usuario;
