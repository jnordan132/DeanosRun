import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Donate from "./components/Donate";
// import PreOrder from "./components/PreOrder";
import Gallery from "./components/Gallery";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Events />
      <Donate />
      {/* <PreOrder /> */}
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
