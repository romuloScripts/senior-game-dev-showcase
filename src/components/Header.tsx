import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Gamepad2, User, Briefcase, Mail, Github } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gaming-bg-primary/95 backdrop-blur-sm border-b border-gaming-bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-gaming-primary" />
            <span className="text-xl font-bold text-gaming-text">GameDev Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gaming-text-muted hover:text-gaming-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('games')}
              className="text-gaming-text-muted hover:text-gaming-primary transition-colors"
            >
              Games
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gaming-text-muted hover:text-gaming-primary transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gaming-text-muted hover:text-gaming-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gaming-text-muted hover:text-gaming-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* GitHub Link */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/romuloScripts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gaming-text-muted hover:text-gaming-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <Button variant="gaming-outline" size="sm">
              Available for Freelance
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gaming-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gaming-bg-secondary">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gaming-text-muted hover:text-gaming-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('games')}
                className="text-gaming-text-muted hover:text-gaming-primary transition-colors text-left"
              >
                Games
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gaming-text-muted hover:text-gaming-primary transition-colors text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gaming-text-muted hover:text-gaming-primary transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gaming-text-muted hover:text-gaming-primary transition-colors text-left"
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-4">
                <a 
                  href="https://github.com/romuloScripts" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gaming-text-muted hover:text-gaming-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <Button variant="gaming-outline" size="sm">
                  Available for Freelance
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;