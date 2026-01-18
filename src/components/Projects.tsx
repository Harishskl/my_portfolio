import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Analytical Model for Passive Autocatalytic Recombiner",
    description:
      "Developed a high-accuracy analytical model for natural convection in Passive Autocatalytic Recombiners (PARs), enhancing hydrogen mitigation analysis. Investigated temperature stratification and multi-zone flow.",
    tags: ["Thermal Analysis", "Modeling", "Research"],
    image: "/par-project.png",
    reportUrl: "/intern_report.pdf",
    demoUrl: null,
  },
  {
    title: "AI-Based Deepfake Detection System for Social Media Content",
    description:
     "Designed and implemented an AI-driven deepfake detection pipeline for social media images and videos using computer vision and deep learning. The system integrates the Google Gemini API for multimodal content analysis and AI-generated content attribution, enabling automated authenticity verification, tamper detection, and content quality control across major social platforms. ",
    tags: ["Artificial Intelligence", "Deep Learning", "Computer Vision", "Image & Video Forensics", "Social Media Security", "Gemini API"],
    image: "/ai-deepfake-project.png",
    repoUrl: "https://github.com/Harishskl/vibecode_ai",
    demoUrl: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Project Gallery</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A showcase of my mechanical engineering projects
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-4xl font-bold gradient-text opacity-50">
                      ⚙️
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.reportUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.reportUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View Report
                      </a>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button size="sm" className="bg-primary text-primary-foreground" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
