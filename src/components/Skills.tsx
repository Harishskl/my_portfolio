import { useState } from "react";
import { Cog, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    id: "technical",
    label: "Technical Skills",
    icon: Cog,
    skills: [
      { 
        name: "AutoCAD", 
        level: "Advanced", 
        logo: "data:image/png;base64,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"
      },
      { 
        name: "SolidWorks", 
        level: "Intermediate", 
        logo: "https://cdn.worldvectorlogo.com/logos/solidworks.svg"
      },
      { 
        name: "ANSYS Workbench", 
        level: "Intermediate", 
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAqFBMVEUAAACafACggASMbwRzXQcmHAD/0gP/zgn/1Qb/7i85PB//wQD/wwD/xgXmmgDjpTH8/uo5OTpjTwH/vAD/vQWAQQCFfXb////HmAD/vwBJIQCenZqWlpb7qgDR0c7v7u+GZgC4fQBRUFDfqAFSNQB2dnjCwsI4KgD/yQDssAAQDwyuhACWdADc3Nx7YAAcEwBcW1odHRsuJQBfSAAsKypXPADjqgBxUwDVECLhAAAAz0lEQVR4AbTORQJCMQxF0YdLWyyF4O768f3vjBSHfoacYSW5+L9INBZP/LpLppLpTBahlFYmly8UEaJkyKpyhRkhqoqoVm8wN+Ez1lILbeYOPF25rPXAoo9vA/mohyMWY3yZTIlqM8zZwZeFJjtdAitmP8mlTgFIrZe0lktdBWSunzSwRKYEMWbRxpuNIbIWTsDOFi9LQzW9AJzOd9KsRrXUDsJP2k+J1AA3B3aCV05NWpe4W30kHVOqZhUeRuwUH5enwWBwxtN4JQJcNggBAAmNFSxdARk9AAAAAElFTkSuQmCC"
      },
      { 
        name: "SSCNC", 
        level: "Intermediate", 
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADCUlEQVR4AXSSA3gcURSFp7Zt225s2xPbXMe2bdu2k9q2bVvn6+6kxuPl/0j8WSRkFRes3CTMFpTVaxJXMT8lqmR8fLuYWsXCFZstaWzOWOJ/paSuZcgixWALIW33B6RdMHhd28YfWpbeUDdzh7Ih88sqUZOzK+Q5Uu09nYP/TB66XDMpeq1RwWcB4wToOUVD35nbHSNA2gZBkwsRVHXEDD4rTBBgvJso6mHW3ts1AOnsqB7Mp+lKW29c8HmbXRME6L0Qdm6BrF02DOlxFIS3E1FNGibzO2HCTidMkQp8u1aBJkkBrNkhs56/fP2F1/UjT+HXTrokcncTBQFtTwiq0zCN3x7TBJ3xPZ7OcBlPLJD1pX1P5s1/wgQNIrFCKwnzZbwwVYjB1QOpOG2H8C/zV2zRIebJBTX+mvAniGRmY7l2CubIBmAKF8Cz8VumQ9bUH5tFNVOJWZLeZ7YYJOLo+TswD++HIKP/B0jaMgH8ZCAWq0aDG4dJAjQKsIxMwUr1EGyXM28lpolwTs+VC4SpXzXOXXsI36y9EHaqxyaLCkibBEPDyh/8GixskHPEAmFLCrCQzMQMrVzMVIopJibz2TfNFONgvlwASPdynL7yEJdvPkJ6xW7QfROhY+3D/QduUDVmQ8lw4AgL9AowUzsfM9Qz/YmFq/mCxTUdIKzhhOUyDKzTjkZQzi5cvvMcr9+8Q31rHzRMXaFixISGhQcFmKtXzAN8lnTKESUkpKRWyWrZvVYxYkFWl4YZgg6YKszCKtUA7Dp8Hg+ePIeenS+UTdxgTA+nALPIQszUyjsUnlU9nGhrLh+8dqtI0Pdb94ktRnxhK7oOnsHRK/dh5FcIWUM3aFj7U8lSQT281d+uNUgWIb4Xmov9KAe6eykvIKv7JMjIJmx3zMNctRhMV4yGhkMkKHj5ScwmC99NU4wza+/r/jrU/JBfkMXhFZ5RDlKIDZdN3flXJnLxFZ3Y6a67Du6HacYEFZPXCGqnzEnw6ti/ILjv0B7Xup27VKLnT9ON7A0o6pjPia4eAJVEEPBsVTA2AAAAAElFTkSuQmCC"
      },
    ],
  },
  {
    id: "programming",
    label: "Programming",
    icon: Code2,
    skills: [
      { 
        name: "C", 
        level: "Intermediate", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
      },
      { 
        name: "Python", 
        level: "Beginner", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      { 
        name: "HTML", 
        level: "Intermediate", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      { 
        name: "CSS", 
        level: "Intermediate", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      },
      { 
        name: "JavaScript", 
        level: "Intermediate", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      { 
        name: "React", 
        level: "Beginner", 
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
    ],
  },
];

const levelColors: Record<string, string> = {
  Advanced: "bg-primary/20 text-primary border-primary/30",
  Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Beginner: "bg-muted text-muted-foreground border-border",
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("technical");

  const activeSkills = skillCategories.find((c) => c.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technical proficiency in mechanical engineering and software tools
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground glow-box"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                )}
              >
                <Icon className="w-5 h-5" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeSkills.map((skill, index) => {
            return (
              <div
                key={skill.name}
                className="skill-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                    <img 
                      src={skill.logo} 
                      alt={`${skill.name} logo`}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        // Fallback to a generic icon if image fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                </div>
                <span
                  className={cn(
                    "inline-block px-3 py-1 text-xs font-medium rounded-full border",
                    levelColors[skill.level]
                  )}
                >
                  {skill.level}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
