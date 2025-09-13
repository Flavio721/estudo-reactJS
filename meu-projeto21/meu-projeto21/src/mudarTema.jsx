// ThemeContext.js
import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}

// Hook personalizado (opcional, mas deixa o código mais limpo)
export function useTheme() {
  return useContext(ThemeContext);
}
export default ThemeProvider;
