import { Card } from '@/components/ui/card';
import { Code, Zap, Users, Award } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Programming Languages",
      items: ["C#", "C++", "JavaScript", "Python", "HLSL/GLSL"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Game Engines",
      items: ["Unity", "Unreal Engine", "Custom Engines", "Godot"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Specializations",
      items: ["Gameplay Programming", "Engine Architecture", "Graphics Programming", "Performance Optimization"]
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Additional Skills",
      items: ["Team Leadership", "Agile/Scrum", "Version Control", "CI/CD"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gaming-bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gaming-text mb-6">
              About <span className="text-gaming-primary">Me</span>
            </h2>
            <p className="text-xl text-gaming-text-muted max-w-3xl mx-auto">
              With over 8 years of experience in game development, I've worked on everything from 
              indie mobile games to AAA console titles. My passion lies in creating engaging 
              gameplay experiences and pushing the boundaries of what's possible in interactive entertainment.
            </p>
          </div>

          {/* Bio */}
          <div className="mb-16">
            <Card className="p-8 bg-gradient-card border-gaming-bg-tertiary">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gaming-text mb-4">My Journey</h3>
                  <p className="text-gaming-text-muted mb-4">
                    I started my career as a junior programmer at a small indie studio, where I learned 
                    the fundamentals of game development and discovered my love for problem-solving 
                    through code.
                  </p>
                  <p className="text-gaming-text-muted mb-4">
                    Over the years, I've evolved into a senior developer, leading teams and architecting 
                    game systems that power millions of players' experiences. I specialize in performance 
                    optimization, engine development, and creating scalable game architectures.
                  </p>
                  <p className="text-gaming-text-muted">
                    When I'm not coding, you'll find me exploring new game technologies, contributing to 
                    open-source projects, or mentoring aspiring game developers.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gaming-primary rounded-full"></div>
                    <span className="text-gaming-text-muted">8+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gaming-primary rounded-full"></div>
                    <span className="text-gaming-text-muted">15+ Shipped Games</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gaming-primary rounded-full"></div>
                    <span className="text-gaming-text-muted">Team Leadership</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gaming-primary rounded-full"></div>
                    <span className="text-gaming-text-muted">Performance Optimization Expert</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-gaming-bg-tertiary hover:shadow-gaming transition-all duration-300">
                <div className="text-gaming-primary mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gaming-text mb-3">
                  {skill.title}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gaming-text-muted text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;