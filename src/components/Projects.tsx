import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star, GitBranch } from 'lucide-react';
const Projects = () => {
  const projects = [{
    name: "Unity Performance Toolkit",
    description: "Open-source Unity package for performance profiling and optimization. Includes custom inspectors, runtime analyzers, and automated optimization suggestions.",
    technologies: ["C#", "Unity", "Editor Tools", "Profiling"],
    githubUrl: "https://github.com/romuloScripts/unity-performance-toolkit",
    liveUrl: "https://unity-perf-toolkit.com",
    stars: 1205,
    forks: 234,
    language: "C#",
    featured: true
  }, {
    name: "Game Engine Architecture",
    description: "Custom game engine built from scratch using modern C++. Features include ECS architecture, vulkan renderer, physics simulation, and cross-platform support.",
    technologies: ["C++", "Vulkan", "OpenGL", "CMake"],
    githubUrl: "https://github.com/romuloScripts/custom-game-engine",
    stars: 892,
    forks: 156,
    language: "C++",
    featured: true
  }, {
    name: "Procedural World Generator",
    description: "Advanced procedural generation system for creating infinite open worlds. Includes terrain generation, biome systems, and structure placement algorithms.",
    technologies: ["C#", "Unity", "Compute Shaders", "Noise Generation"],
    githubUrl: "https://github.com/romuloScripts/procedural-world-gen",
    liveUrl: "https://procgen-demo.com",
    stars: 654,
    forks: 98,
    language: "C#"
  }, {
    name: "Game AI Framework",
    description: "Flexible AI framework for game development featuring behavior trees, state machines, utility AI, and pathfinding systems with visual debugging tools.",
    technologies: ["C#", "Unity", "AI", "Editor Tools"],
    githubUrl: "https://github.com/romuloScripts/game-ai-framework",
    stars: 445,
    forks: 87,
    language: "C#"
  }, {
    name: "Shader Collection",
    description: "Collection of optimized shaders for various visual effects including water simulation, particle systems, post-processing effects, and stylized rendering.",
    technologies: ["HLSL", "GLSL", "Shader Graph", "Unity"],
    githubUrl: "https://github.com/romuloScripts/shader-collection",
    liveUrl: "https://shader-demos.com",
    stars: 334,
    forks: 76,
    language: "HLSL"
  }, {
    name: "Multiplayer Networking Library",
    description: "Lightweight networking library for real-time multiplayer games with prediction, rollback, and lag compensation features.",
    technologies: ["C#", "Networking", "Unity", "Performance"],
    githubUrl: "https://github.com/romuloScripts/multiplayer-lib",
    stars: 278,
    forks: 45,
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
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center bg-gradient-card border-gaming-bg-tertiary">
              <div className="text-3xl font-bold text-gaming-primary mb-2">20+</div>
              <p className="text-gaming-text-muted">Public Repositories</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-card border-gaming-bg-tertiary">
              <div className="text-3xl font-bold text-gaming-primary mb-2">3.2K+</div>
              <p className="text-gaming-text-muted">GitHub Stars</p>
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
                        <Star className="h-4 w-4" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitBranch className="h-4 w-4" />
                        {project.forks}
                      </div>
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