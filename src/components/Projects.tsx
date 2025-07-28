import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star, GitBranch } from 'lucide-react';
const Projects = () => {
  const projects = [{
    name: "Tween Tools",
    description: "Powerful tweening library for Unity with support for custom easing functions, chaining, and callbacks. Ideal for creating smooth animations and transitions.",
    technologies: ["C#", "Unity", "Editor Tools"],
    githubUrl: "https://github.com/romuloScripts/AnimatedValueSystem",
    language: "C#",
    featured: true
  }, {
    name: "Game Engine 2D",
    description: "Custom game engine built from scratch using modern C++. Features include a component-based architecture, rendering engine, physics system, and asset management.",
    technologies: ["C++", "SDL", "Lua", "CMake"],
    githubUrl: "https://github.com/romuloScripts/GameEngine2D",
    language: "C++",
    featured: true
  }, {
    name: "Card Game Example",
    description: "A complete card game example built with Unreal Engine, showcasing turn-based mechanics, card interactions, and multiplayer support.",
    technologies: ["C++", "Unreal", "Multiplayer", "Card Game"],
    githubUrl: "https://github.com/romuloScripts/ole-cardgame-unreal",
    language: "C++"
  }, {
    name: "Math Library",
    description: "A comprehensive math library for game development, providing advanced mathematical functions, vector and matrix operations, and geometry calculations.",
    technologies: ["C#", "Unity", "HLSL", "Math"],
    githubUrl: "https://github.com/romuloScripts/MathExamples",
    language: "C#"
  }, {
    name: "Procedural Content Generation Examples",
    description: "Collection of examples demonstrating procedural content generation techniques in Unreal Engine, including procedural meshes, buildings, vegetation, and noise functions.",
    technologies: ["C++", "Unreal", "PCG", "Noise Generation"],
    githubUrl: "https://github.com/romuloScripts/PCGProject",
    language: "C++"
  }, {
    name: "Game AI Framework",
    description: "AI algorithms for game development featuring Flocking, Vector Field, Min Max, Auction, AStar, Dijkstra, Breadth first and Depth first searchs.",
    technologies: ["C#", "Unity", "AI", "Editor Tools"],
    githubUrl: "https://github.com/romuloScripts/game-ai-framework",
    language: "C#"
  }, {
    name: "Shader Collection",
    description: "Collection of optimized shaders for various visual effects including water simulation, particle systems, post-processing effects, and stylized rendering.",
    technologies: ["GLSL", "HLSL", "ShaderLab", "Shader Graph", "Unity", "C#"],
    githubUrl: "https://github.com/romuloScripts/Shader-Collection",
    language: "GLSL"
  }, {
    name: "Gameplay Utils Library ",
    description: "A collection of modular Unity scripts to streamline gameplay development, including actions, conditions, attributes, movement, states, cheats, checkpoints, pooling, and more.",
    technologies: ["C#", "Unity", "Performance", "Editor Tools", "Design Patterns"],
    githubUrl: "https://github.com/romuloScripts/GameplayUtils",
    language: "C#"
  }];
  return <section id="projects" className="py-20 bg-gaming-bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gaming-text mb-6">
              Open Source <span className="text-gaming-primary">Projects</span>
            </h2>
            <p className="text-xl text-gaming-text-muted max-w-3xl mx-auto">
              Personal projects and contributions to the game development community. 
              These tools and frameworks help developers create better games more efficiently.
            </p>
          </div>

          {/* GitHub Stats */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Card className="p-6 text-center bg-gradient-card border-gaming-bg-tertiary">
              <div className="text-3xl font-bold text-gaming-primary mb-2">20+</div>
              <p className="text-gaming-text-muted">Public Repositories</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-card border-gaming-bg-tertiary">
              <div className="text-3xl font-bold text-gaming-primary mb-2">5000+</div>
              <p className="text-gaming-text-muted">Contributions</p>
            </Card>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => <Card key={index} className={`p-6 bg-gradient-card border-gaming-bg-tertiary hover:shadow-gaming transition-all duration-300 ${project.featured ? 'ring-2 ring-gaming-primary/50' : ''}`}>
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gaming-text">
                        {project.name}
                      </h3>
                      {project.featured && <span className="bg-gaming-primary text-gaming-bg-primary px-2 py-1 rounded text-xs font-semibold">
                          Featured
                        </span>}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gaming-text-muted mb-3">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-gaming-primary rounded-full"></div>
                        {project.language}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gaming-text-muted mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => <span key={techIndex} className="px-3 py-1 bg-gaming-bg-tertiary text-gaming-text-muted text-sm rounded-full">
                        {tech}
                      </span>)}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button variant="gaming-outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  {project.liveUrl && <Button variant="gaming" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>}
                </div>
              </Card>)}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="gaming-outline" size="lg" asChild>
              <a href="https://github.com/romuloScripts" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Projects;