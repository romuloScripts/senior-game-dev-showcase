import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gaming-bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Name introduction */}
          <h2 className="text-2xl md:text-3xl text-gaming-text mb-4">
            Rômulo Santos Silva
          </h2>
          
          {/* Main heading with gradient text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gaming-text">Senior </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Game Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gaming-text-muted mb-8 max-w-2xl mx-auto">
            Crafting immersive gaming experiences with cutting-edge technology. 
            Specialized in Unity, Unreal Engine, and custom game engine development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('games')}
            >
              View My Games
            </Button>
            <Button 
              variant="gaming-outline" 
              size="xl"
              asChild
            >
              <a href="https://romulosan.com/RomuloSantosSilvaResume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/romuloScripts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gaming-text-muted hover:text-gaming-primary transition-colors p-3 rounded-full hover:bg-gaming-bg-secondary"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/romulogamedev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gaming-text-muted hover:text-gaming-primary transition-colors p-3 rounded-full hover:bg-gaming-bg-secondary"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gaming-primary hover:text-gaming-secondary transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gaming-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gaming-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;