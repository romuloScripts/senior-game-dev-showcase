import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, Star, Users } from 'lucide-react';
import clawballImage from '../assets/clawball.png';

const Games = () => {
  const games = [
    {
      title: "Clawball",
      role: "Associate Principal Gameplay Programmer",
      year: "2023-2025",
      description: "Clawball is a multiplayer Cat vs. Cat VR Soccer Game featuring fast-paced action, physics-based gameplay, and a vibrant art style.",
      technologies: ["Unreal", "C++", "Networking", "Physics", "Blueprint", "UI" , "VR"],
      stats: { company: "ARVORE Immersive Experiences", platform: "Meta Quest 3" },
      image: clawballImage,
      playLink: "https://clawball.com/",
      featured: true
    },
    {
      title: "Mystic Realms",
      role: "Senior Engine Programmer",
      year: "2022",
      description: "Open-world fantasy RPG with custom rendering pipeline and procedural world generation.",
      technologies: ["Unreal Engine", "C++", "Blueprint", "HLSL"],
      stats: { rating: "4.6", players: "1.5M+", platform: "PC, PS5, Xbox" },
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      playLink: "#"
    },
    {
      title: "Neon Strike",
      role: "Gameplay & Graphics Programmer",
      year: "2021",
      description: "Fast-paced arcade shooter with dynamic lighting and particle systems.",
      technologies: ["Unity", "C#", "Shader Graph", "Post-Processing"],
      stats: { rating: "4.4", players: "800K+", platform: "Mobile, PC" },
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&h=400&fit=crop",
      playLink: "#"
    },
    {
      title: "Puzzle Dimensions",
      role: "Technical Lead",
      year: "2020",
      description: "Award-winning puzzle game with innovative mechanics and beautiful minimalist design.",
      technologies: ["Unity", "C#", "Custom Tools", "Analytics"],
      stats: { rating: "4.9", players: "500K+", platform: "Mobile" },
      image: "https://images.unsplash.com/photo-1486401899868-0e435eec1093?w=600&h=400&fit=crop",
      playLink: "#"
    }
  ];

  return (
    <section id="games" className="py-20 bg-gaming-bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gaming-text mb-6">
              Featured <span className="text-gaming-primary">Games</span>
            </h2>
            <p className="text-xl text-gaming-text-muted max-w-3xl mx-auto">
              A showcase of the games I've worked on, 
              demonstrating my expertise across different genres and platforms.
            </p>
          </div>

          {/* Games Grid */}
          <div className="space-y-8">
            {games.map((game, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden bg-gradient-card border-gaming-bg-tertiary hover:shadow-gaming transition-all duration-300 ${
                  game.featured ? 'ring-2 ring-gaming-primary/50' : ''
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Game Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {game.featured && (
                      <div className="absolute top-4 left-4 bg-gaming-primary text-gaming-bg-primary px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Game Info */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gaming-text mb-2">
                          {game.title}
                        </h3>
                        <p className="text-gaming-primary font-semibold">
                          {game.role} • {game.year}
                        </p>
                      </div>
                      {game.playLink && game.playLink !== "#" && (
                        <ExternalLink 
                          className="h-5 w-5 text-gaming-text-muted hover:text-gaming-primary cursor-pointer transition-colors" 
                          onClick={() => window.open(game.playLink, '_blank', 'noopener,noreferrer')}
                        />
                      )}
                    </div>

                    <p className="text-gaming-text-muted mb-6">
                      {game.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gaming-text mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {game.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gaming-bg-tertiary text-gaming-text-muted text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <span className="text-gaming-text font-semibold block mb-1">{game.stats.company}</span>
                        <p className="text-gaming-text-muted text-sm">Company</p>
                      </div>
                      <div className="text-center">
                        <span className="text-gaming-text font-semibold block mb-1">{game.stats.platform}</span>
                        <p className="text-gaming-text-muted text-sm">Platform</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="gaming-outline" size="lg">
              View All Games
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;