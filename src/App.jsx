import Clients from "./sections/Clients";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto">
        <About />
        <Experience />
        <Projects />
        <Clients />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;
