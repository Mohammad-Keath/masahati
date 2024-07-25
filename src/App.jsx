import "./App.css";
import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Services from "./components/services";

function App() {
  return (
    <div>
      <div className="header">
        <img className="logo" src="/logo.png" alt="logo" />
        <div className="navBar">
          <h3>Home</h3>
          <h3>About Us</h3>
          <h3>Services</h3>
        </div>
      </div>
      <Hero />
      <AboutUs />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
