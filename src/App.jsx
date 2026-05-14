import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import About from "./components/About";
import Amenities from "./components/Amenities";
import FloorPlans from "./components/FloorPlans";
import MasterPlan from "./components/MasterPlan";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#020202] text-white scroll-smooth">
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <FloorPlans />
      <MasterPlan />
      <Amenities />
      <Gallery />
      <Location />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
