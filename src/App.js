import "./styles/app.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
