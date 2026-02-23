import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolioData';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <Hero data={portfolioData.hero} />
      <About data={portfolioData.about} />
      <Projects data={portfolioData.projects} />
      <Contact data={portfolioData.contact} />
    </div>
  );
}

export default App;
