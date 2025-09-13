import { useContext, createContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

function Login({ children }) {
  const [user, setUser] = useState(null);

  function loginUsuario() {
    setUser({ nome: "João" });
  }
  function logoutUsuario() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, loginUsuario, logoutUsuario }}>
      {children}
    </UserContext.Provider>
  );
}
export default Login;
