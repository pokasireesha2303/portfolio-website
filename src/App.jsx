import Hero from './components/Hero';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 hidden md:block">
        <SidebarLeft />
      </aside>

      <main className="flex-1">
        <Hero />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
      </main>

      <aside className="w-64 hidden lg:block">
        <SidebarRight />
      </aside>
    </div>
  );
}

export default App;