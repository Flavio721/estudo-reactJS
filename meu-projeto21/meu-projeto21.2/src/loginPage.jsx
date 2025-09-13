import { useUser } from "./authContext";

function LoginUsuario() {
  const { user, loginUsuario, logoutUsuario } = useUser();

  return (
    <div>
      {user ? (
        <button onClick={logoutUsuario}>Logout</button>
      ) : (
        <button onClick={loginUsuario}>Login</button>
      )}
    </div>
  );
}
export default LoginUsuario;
