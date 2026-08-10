import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { AboutAndSkills } from './sections/AboutAndSkills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <AboutAndSkills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;