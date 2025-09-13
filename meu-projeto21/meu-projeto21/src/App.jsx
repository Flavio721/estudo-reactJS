import ThemeProvider from "./mudarTema";
import Header from "./Header";

function App() {
  return (
    <ThemeProvider>
      <div style={styles}>
        <Header />
      </div>
    </ThemeProvider>
  );
}
export default App;
