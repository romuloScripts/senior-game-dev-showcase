import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, Star, Users } from 'lucide-react';
import clawballImage from '@/assets/clawball.png';
import pixel78Image from '@/assets/pixel78.jpg';
import yukiImage from '@/assets/yuki.png';

const Games = () => {
  const games = [
    {
      title: "Clawball",
      role: "Associate Principal Gameplay Programmer",
      year: "2023-2025",
      description: "Clawball is a multiplayer Cat vs. Cat VR Soccer Game featuring fast-paced action, physics-based gameplay, and a vibrant art style.",
      technologies: ["Unreal", "C++", "Networking", "Physics", "Blueprint", "UI" , "VR"],
      stats: { company: "ARVORE Immersive", platform: "Meta Quest" },
      image: clawballImage,
      playLink: "https://clawball.com/",
      featured: true
    },
    {
      title: "Pixel Ripped 1978",
      role: "Lead Gameplay Programmer",
      year: "2021-2023",
      description: "Pixel Ripped 1978 is a VR game where you play as a programmer at Atari in 1978, blending 2D retro gameplay with a 3D VR world.",
      technologies: ["Unity", "C#", "Custom Tools", "Analytics", "HLSL", "VR"],
      stats: { company: "ARVORE Immersive", platform: "PC, PS5, Meta Quest" },
      image: pixel78Image,
      playLink: "https://atari.com/products/pixel-ripped-1978?srsltid=AfmBOor0ciKK9Wr7FNesLyRSHNW1WehfJQKXLd_IgSecgegn810y541F"
    },
    {
      title: "Yuki Space Ranger",
      role: "Lead Gameplay Programmer",
      year: "2020-2021",
      description: "Yuki is a VR Bullet Hell Roguelike mashup where you embody a space ranger and venture through a fantastic cosmos, dodging obstacles and bullets and fighting hordes of space monsters.",
      technologies: ["Unity", "C#", "Performance Optimization", "Graphics Programming", "VR","Procedural Generation"],
      stats: { company: "ARVORE Immersive", platform: "PC, PS4, Meta Quest" },
      image: yukiImage,
      playLink: "https://arvore.io/games/yuki-space-ranger"
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