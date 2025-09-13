import { useTheme } from "./mudarTema";

function Header() {
  const { theme } = useTheme();

  return (
    <header>
      <h1>Tema atual: {theme}</h1>
    </header>
  );
}

export default Header;
