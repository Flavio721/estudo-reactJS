import Context from "./Context";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <Context>
      <div>
        <Header />
        <Footer />
      </div>
    </Context>
  );
}
export default App;
