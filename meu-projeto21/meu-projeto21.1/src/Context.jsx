import { useContext, createContext } from "react";

const userContext = createContext();

export const useUser = () => useContext(userContext);

function Context({ children }) {
  const user = "Livia";

  return (
    <userContext.Provider value={{ user }}>
      {/* Componente filho */}
      {children}
    </userContext.Provider>
  );
}
export default Context;
