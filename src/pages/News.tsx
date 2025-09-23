import Footer from "../components/footer";
import Header from "../components/navHeader";
import NewsHeroSection from "../components/news/newsHeroSection";
import PressRelease from "../components/news/pressRelease";

function News() {
  return (
    <>
      <Header />
      <NewsHeroSection />
      <PressRelease />
      <Footer />
    </>
  );
}

export default News;