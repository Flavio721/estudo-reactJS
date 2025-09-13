import Login from "./authContext";
import Header from "./Header";
import LoginUsuario from "./loginPage";

function App() {
  return (
    <Login>
      <div>
        <Header />
        <LoginUsuario />
      </div>
    </Login>
  );
}
export default App;
