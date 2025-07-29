import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gaming-bg-primary border-t border-gaming-bg-secondary py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-gaming-text mb-4">Rômulo Santos Silva</h3>
              <p className="text-gaming-text-muted mb-4">
                Crafting immersive gaming experiences with passion and precision. 
                Let's build the next generation of interactive entertainment together.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/romuloScripts" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gaming-text-muted hover:text-gaming-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/romulogamedev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gaming-text-muted hover:text-gaming-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:romulossan@gmail.com"
                  className="text-gaming-text-muted hover:text-gaming-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gaming-text mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gaming-text-muted hover:text-gaming-primary transition-colors"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gaming-text-muted hover:text-gaming-primary transition-colors"
                  >
                    Featured Games
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gaming-text-muted hover:text-gaming-primary transition-colors"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gaming-text-muted hover:text-gaming-primary transition-colors"
                  >
                    Open Source
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-gaming-text mb-4">Contact</h4>
              <div className="space-y-2 text-gaming-text-muted">
                <p>Curitiba, Brasil</p>
                <p>romulossan@gmail.com</p>
                <p>+55 (31) 9 9116-7675</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gaming-bg-secondary pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gaming-text-muted text-sm mb-4 md:mb-0">
                © {currentYear} Romulo Senior Game Developer Portfolio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;