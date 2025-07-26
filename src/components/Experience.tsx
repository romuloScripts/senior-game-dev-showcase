import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Nexus Games Studio",
      position: "Senior Game Developer & Technical Lead",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: "Leading a team of 8 developers in creating AAA console games. Architected scalable game systems, optimized performance for multiple platforms, and mentored junior developers.",
      achievements: [
        "Led development of 3 successful game titles with 5M+ downloads",
        "Reduced loading times by 60% through engine optimization",
        "Implemented custom rendering pipeline increasing FPS by 40%",
        "Mentored 5 junior developers, 3 promoted to senior roles"
      ],
      technologies: ["Unity", "Unreal Engine", "C++", "C#", "HLSL", "Agile"]
    },
    {
      company: "Pixel Perfect Games",
      position: "Game Developer",
      location: "Los Angeles, CA", 
      period: "2019 - 2021",
      description: "Developed gameplay systems for mobile and PC games. Specialized in physics simulation, AI behavior, and multiplayer networking.",
      achievements: [
        "Shipped 4 commercial games across mobile and PC platforms",
        "Implemented multiplayer systems supporting 100+ concurrent players",
        "Developed AI systems with advanced pathfinding and behavior trees",
        "Optimized games for low-end mobile devices improving compatibility by 70%"
      ],
      technologies: ["Unity", "C#", "Photon", "Firebase", "Mobile Optimization"]
    },
    {
      company: "Indie Game Collective",
      position: "Gameplay Programmer",
      location: "Austin, TX",
      period: "2017 - 2019", 
      description: "Worked on various indie game projects, focusing on innovative gameplay mechanics and rapid prototyping.",
      achievements: [
        "Contributed to 6 indie games, 2 winning industry awards",
        "Developed experimental gameplay mechanics for VR platforms",
        "Created modular systems reducing development time by 30%",
        "Collaborated with artists and designers to prototype game concepts"
      ],
      technologies: ["Unity", "C#", "VR SDKs", "Rapid Prototyping", "Game Design"]
    },
    {
      company: "Digital Dreams Studio",
      position: "Junior Game Developer",
      location: "Seattle, WA",
      period: "2016 - 2017",
      description: "Started my career working on mobile games and learning fundamental game development principles.",
      achievements: [
        "Implemented UI systems and player progression mechanics",
        "Fixed over 200 bugs improving game stability",
        "Learned industry best practices and development workflows",
        "Contributed to 2 mobile games reaching top 100 in app stores"
      ],
      technologies: ["Unity", "C#", "Mobile Development", "Version Control"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gaming-bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gaming-text mb-6">
              Professional <span className="text-gaming-primary">Experience</span>
            </h2>
            <p className="text-xl text-gaming-text-muted max-w-3xl mx-auto">
              My journey through the gaming industry, from junior developer to technical leader, 
              working on projects that have entertained millions of players worldwide.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gaming-primary transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-gaming-primary rounded-full transform md:-translate-x-2 mt-6"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-1/2 md:pl-12'}`}>
                  <Card className="p-6 bg-gradient-card border-gaming-bg-tertiary hover:shadow-gaming transition-all duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gaming-text mb-2">
                        {exp.position}
                      </h3>
                      <div className="flex items-center text-gaming-primary font-semibold mb-2">
                        <Building className="h-4 w-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gaming-text-muted">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gaming-text-muted mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-gaming-text font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gaming-text-muted text-sm flex items-start">
                            <span className="text-gaming-primary mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-gaming-text font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-gaming-bg-tertiary text-gaming-text-muted text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;