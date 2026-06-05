import "./App.css";

import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <Navbar />
      <Hero />
      <Brands />
      <Products />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;