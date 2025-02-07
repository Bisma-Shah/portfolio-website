import Hero from "./components/hero";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
