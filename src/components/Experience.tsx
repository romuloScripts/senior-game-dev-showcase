import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "ARVORE Immersive Experiences",
      position: "Associate Principal Gameplay Developer",
      location: "São Paulo, Brazil",
      period: "2022 - Present",
      description: "Leading VR development teams and defining project direction while delivering immersive experiences across multiple VR platforms.",
      achievements: [
        "Delivered 3 VR projects for Rift, Quest, Vive, and PSVR platforms",
        "Designed clean architecture and documentation, improving onboarding and maintainability",
        "Applied performance optimization techniques in 2 products to ensure fluid gameplay",
        "Led and mentored developer teams on 2 projects, fostering the growth of 5 developers",
        "Reduced overtime by 100% through strategic planning and fostering personal accountability",
        "Boosted team productivity by implementing Git version control, Git Flow, and code reviews"
      ],
      technologies: ["Unreal", "C++", "Unity", "VR SDKs", "C#", "Git Flow", "Optimization", "Team Leadership"]
    },
    {
      company: "Iron Studios",
      position: "Senior Gameplay Programmer - Freelance",
      location: "Remote",
      period: "2023-2024",
      description: "Contributed to gameplay systems for Residiuum demo, a third-person action game using Unreal Engine.",
      achievements: [
        "Contributed to gameplay systems for Residiuum demo (third-person action game)",
        "Used Unreal Engine and C++ to implement core mechanics",
        "Delivered high-quality features aligned with project goals and deadlines",
        "Collaborated with Boogie Race project made in custom engine in rust language",
      ],
      technologies: ["Unreal Engine", "C++", "Custom Engine", "Rust", "Gameplay Programming", "Third-Person Action"]
    },
    {
      company: "ARVORE Immersive Experiences",
      position: "Senior Game Developer",
      location: "São Paulo, Brazil",
      period: "2021 - 2022",
      description: "Developed VR experiences across multiple platforms while collaborating with cross-functional teams to enhance user experience.",
      achievements: [
        "Delivered 3 VR projects for multiple headsets (Rift, Quest, Vive, PSVR)",
        "Applied performance improvements in 2 titles to enhance user experience",
        "Built tools and workflows in collaboration with designers",
        "Contributed to project direction and scope alongside producers and directors"
      ],
      technologies: ["Unity", "VR Development", "C#", "Performance Optimization", "Cross-Platform"]
    },
    {
      company: "ARVORE Immersive Experiences",
      position: "Game Developer",
      location: "São Paulo, Brazil",
      period: "2019 - 2021",
      description: "Delivered VR projects across major platforms while creating tools and pipelines to support design and production teams.",
      achievements: [
        "Delivered 3 VR projects across major VR platforms",
        "Created tools and pipelines to support design and production teams",
        "Assisted in defining scope and project goals with stakeholders"
      ],
      technologies: ["Unity", "VR Platforms", "C#", "Tool Development", "Pipeline Creation"]
    },
    {
      company: "Magitech Games",
      position: "Gameplay Programmer",
      location: "Brazil",
      period: "2017 - 2019",
      description: "Developed and integrated gameplay systems for PC games while building tools to streamline production processes.",
      achievements: [
        "Delivered 3 PC games by developing and integrating gameplay systems",
        "Built tools and libraries to streamline production processes",
        "Accelerated prototyping for 3 games, enabling rapid iteration and validation"
      ],
      technologies: ["Unity", "C#", "PC Development", "Tool Development", "Rapid Prototyping"]
    },
    {
      company: "Sansar",
      position: "Senior Game Programmer - Freelance",
      location: "Remote",
      period: "2018",
      description: "Developed gameplay features and maintained UI systems for a virtual world platform.",
      achievements: [
        "Developed gameplay features to enhance user engagement",
        "Maintained and optimized UI elements and internal engine systems",
        "Diagnosed and resolved complex bugs, improving stability and scalability"
      ],
      technologies: ["Custom Engine", "C++", "UI Systems", "Bug Fixing", "Performance Optimization"]
    },
    {
      company: "Tower Up Studios",
      position: "Gameplay Programmer",
      location: "Belo Horizonte, Brazil",
      period: "2014 - 2017",
      description: "Developed comprehensive game systems and ported games to multiple platforms while creating visual enhancements.",
      achievements: [
        "Developed systems for controls, cameras, audio, UI, animation, and character behaviors",
        "Ported 2 games to mobile and console platforms",
        "Created over 20 shaders to improve in-game visuals",
        "Developed level design tools to increase production efficiency and meet deadlines"
      ],
      technologies: ["Unity", "C#", "Shader Development", "Multi-Platform", "Level Design Tools", "Mobile Development" , "Console Development"]
    },
    {
      company: "PUC Minas",
      position: "Game Programmer & Research Student",
      location: "Belo Horizonte, Brazil",
      period: "2013 - 2015",
      description: "Developed mobile games and conducted user research while serving as Assistant Teacher for Programming Languages.",
      achievements: [
        "Developed and tested 2 mobile games using Unity",
        "Conducted playtesting sessions that identified and resolved usability issues",
        "Addressed key design flaws in UI and gameplay based on user feedback",
        "Helped students improve performance by assisting with programming exercises"
      ],
      technologies: ["Unity", "Mobile Development", "User Research", "Playtesting", "Teaching"]
    },
    {
      company: "Hospital Mater Dei",
      position: "IT Intern",
      location: "Belo Horizonte, Brazil",
      period: "2011",
      description: "Provided IT support and resolved software issues for a large healthcare organization.",
      achievements: [
        "Resolved software issues impacting over 1000 users",
        "Gained experience in enterprise software support and troubleshooting"
      ],
      technologies: ["IT Support", "Software Troubleshooting", "Enterprise Systems"]
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
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-gaming-primary rounded-full transform md:-translate-x-2 mt-6 z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-1/2 md:pl-8'}`}>
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