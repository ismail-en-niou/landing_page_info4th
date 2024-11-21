import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Pricing />
      <Team />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
