import "./App.css";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import SidebarNav from "./components/SidebarNav";
import Spotlight from "./components/SpotLight";

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl lg:flex bg-[#0f172a] text-gray-300 font-sans">
      <Spotlight />
      <aside className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col">
        <div className="hidden lg:block py-12">
          <Hero />
        </div>
        <div className="hidden lg:block">
          <SidebarNav />
        </div>
        <div className="hidden lg:block py-36">
          <Contact />
        </div>
      </aside>

      <main className="w-full lg:w-1/2 py-12 space-y-32">
        <div className="block lg:hidden">
          <Hero />
          <Contact />
        </div>
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
