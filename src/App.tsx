import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CaseStudies />
        <Experience />
        <Blog />
        <Certifications />
        <Education />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
