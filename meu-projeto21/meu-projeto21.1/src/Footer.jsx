import { useUser } from "./Context";

function Footer() {
  const { user } = useUser();

  return (
    <footer>
      <h2>Usuário logado: {user}</h2>
    </footer>
  );
}
export default Footer;
