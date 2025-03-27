import Footer from "./components/footer";
import HeroSection from "./components/home/heroSection";
import About from "./components/home/about";
import Goals from "./components/home/goals";
// import Header from "./components/header";
import Header from "./components/navHeader";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <HeroSection />
      <About />
      <Goals />
      <Footer />
    </>
  );
}

export default App;
