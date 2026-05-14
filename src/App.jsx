
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Platform from "./components/sections/Platform";
import Science from "./components/sections/Science";
import Workflow from "./components/sections/Workflow";
import MetricsBand from "./components/sections/MetricsBand";
import Contact from "./components/sections/Contact";
 
export default function App() {
  return (
    <div className="min-h-screen bg-[#08111f] text-white">
      <Navbar />
 
      <main id="top">
        <Hero />
        <Platform />
        <Science />
        <Workflow />
        <MetricsBand />
        <Contact />
      </main>
 
      <Footer />
    </div>
  );
}
 
