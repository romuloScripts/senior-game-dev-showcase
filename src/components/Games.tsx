import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, Star, Users } from 'lucide-react';
import clawballImage from '@/assets/clawball.png';
import pixel78Image from '@/assets/pixel78.jpg';
import yukiImage from '@/assets/yuki.png';
import thelineImage from '@/assets/theline.jpg';
import sansarImage from '@/assets/sansar.jpg';
import residiuumImage from '@/assets/residiuum.jpg';
import boogieImage from '@/assets/boogie.jpg';
import lonelandImage from '@/assets/loneland.jpg';
import shieldimpactImage from '@/assets/shieldimpact.jpg';
import wellsImage from '@/assets/wells.jpg';
import jequiImage from '@/assets/jequi.jpg';

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
      technologies: ["Unity", "C#", "Custom Tools", "Analytics", "HLSL", "VR", "AI"],
      stats: { company: "ARVORE Immersive", platform: "PC, PS5, Meta Quest" },
      image: pixel78Image,
      playLink: "https://atari.com/products/pixel-ripped-1978?srsltid=AfmBOor0ciKK9Wr7FNesLyRSHNW1WehfJQKXLd_IgSecgegn810y541F"
    },
    {
      title: "Yuki Space Ranger",
      role: "Lead Gameplay Programmer",
      year: "2020-2021",
      description: "Yuki is a VR Bullet Hell Roguelike mashup where you embody a space ranger and venture through a fantastic cosmos, dodging obstacles and bullets and fighting hordes of space monsters.",
      technologies: ["Unity", "C#", "Optimization", "Graphics", "VR","Procedural Generation"],
      stats: { company: "ARVORE Immersive", platform: "PC, PS4, Meta Quest" },
      image: yukiImage,
      playLink: "https://arvore.io/games/yuki-space-ranger"
    },
    {
      title: "The Line",
      role: "Gameplay Programmer",
      year: "2019",
      description: "The Line is an interactive VR narrative where users explore a magical world and follow the love story of Pedro and Rosa, two miniature dolls hesitant to break boundaries to be together.",
      technologies: ["Unity", "C#", "VR"],
      stats: { company: "ARVORE Immersive", platform: "PC, Meta Quest" },
      image: thelineImage,
      playLink: "https://arvore.io/games/the-line"
    },
    {
      title: "Boogie Race",
      role: "Senior Gameplay Programmer",
      year: "2024",
      description: "Boogie Race is an online multiplayer racing game based on a pre-existing Iron Studios IP.",
      technologies: ["Custom Engine", "Rust", "Gameplay", "Networking", "UI"],
      stats: { company: "Iron Studios", platform: "PC" },
      image: boogieImage,
    },
    {
      title: "Residiuum",
      role: "Senior Gameplay Programmer",
      year: "2023",
      description: "Residiuum is a third-person action game in development by Iron Studios, featuring impressive graphics and immersive gameplay.",
      technologies: ["Unreal", "C++", "Gameplay", "Animation", "AI"],
      stats: { company: "Iron Studios", platform: "PC" },
      image: residiuumImage,
      playLink: "https://www.youtube.com/watch?v=ELy1kiE4PqY"
    },
    {
      title: "Sansar",
      role: "Gameplay Programmer",
      year: "2018",
      description: "Sansar is the ultimate playground for creative mind and virtual explorers. Create your avatar, design worlds and join events organized by the community.",
      technologies: ["Custom Engine", "C++", "Networking", "UI", "Noesis"],
      stats: { company: "Sansar", platform: "PC" },
      image: sansarImage,
      playLink: "https://www.sansar.com/"
    },
    {
      title: "Lone Land ",
      role: "Gameplay Programmer",
      year: "2018-2019",
      description: "Lone Land is a contemplative platformer where you play as an unknown protagonist exploring a mysterious world revealed through environmental storytelling.",
      technologies: ["Unreal", "C++", "Optimization", "Gameplay", "UI"],
      stats: { company: "Magitech Games", platform: "PC" },
      image: lonelandImage,
      playLink: "https://store.steampowered.com/app/771680/Shield_Impact/"
    },
    {
      title: "Shield Impact",
      role: "Gameplay Programmer",
      year: "2017-2018",
      description: "Shield Impact is an action survival game where a gladiator with only one shield will be challenged by rising hordes of enemies in an arena in ancient Rome.",
      technologies: ["Unity", "C#", "Gameplay", "UI", "Custom Tools"],
      stats: { company: "Magitech Games", platform: "PC" },
      image: shieldimpactImage,
      playLink: "https://www.sansar.com/"
    },
    {
      title: "Wells",
      role: "Gameplay Programmer",
      year: "2014-2017",
      description: "Wells is an action side-scrolling game into a steampunk universe with a lot of enemies, explosions and gigantic bosses.",
      technologies: ["Unity", "C#", "Gameplay", "UI", "Custom Tools", "AI", "HLSL", "Graphics"],
      stats: { company: "Magitech Games", platform: "Xbox One, PC, MAC, Linux" },
      image: wellsImage,
      playLink: "https://towerupstudios.com/wells/"
    },
    {
      title: "Jequi`s Dream",
      role: "Junior Gameplay Programmer",
      year: "2015-2016",
      description: "Jequi's Dream is a dual-character endless runner where collecting water restores life and helps a new valley come to bloom.",
      technologies: ["Unity", "C#", "Gameplay", "UI"],
      stats: { company: "Magitech Games", platform: "Android, iOS" },
      image: jequiImage,
      playLink: "https://towerupstudios.com/jequi/en/"
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
        </div>
      </div>
    </section>
  );
};

export default Games;