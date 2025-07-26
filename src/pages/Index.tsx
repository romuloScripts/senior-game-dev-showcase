import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Games from '@/components/Games';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-bg-primary">
      <Header />
      <Hero />
      <About />
      <Games />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
