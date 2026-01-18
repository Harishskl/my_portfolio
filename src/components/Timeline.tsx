import { Award, Calendar, Briefcase, Users } from "lucide-react";

const timelineData = [
  {
    year: "2023",
    title: "Higher Secondary Education (HSC)",
    description: "Completed Higher Secondary Education with focus on Mathematics, Physics, and Chemistry",
    type: "education",
  },
  {
    year: "2023",
    title: "Higher Diploma in Computer Applications (HDCA)",
    description: "Completed the HDCA course with practical training in MS Office (Word, Excel, PowerPoint), C programming, and Python programming, developing strong fundamentals in computer applications, programming logic, and basic software development.",
    type: "certification",
  },
  {
    year: "2023",
    title: "Started BE at Coimbatore Institute of Technology",
    description: "Began Bachelor of Engineering in Mechanical Engineering with specialization in Thermal Sciences",
    type: "education",
  },
  {
    year: "2024",
    title: "SolidWorks Workshop at NIT Trichy",
    description: "Attended advanced SolidWorks workshop at National Institute of Technology, Trichy",
    type: "certification",
  },
  {
    year: "2024-2025",
    title: "AutoCAD Level 1 & 2 Certification",
    description: "Completed professional certification in AutoCAD software",
    type: "certification",
  },
  {
    year: "2024-2025",
    title: "NSS Executive Member",
    description: "Participated in social service initiatives and community development programs",
    type: "extracurricular",
  },
  {
    year: "2024-2025",
    title: "Mechnotron 2K25 Event Convener",
    description: "Organized and managed technical events for the Mechnotron2K25 symposium",
    type: "extracurricular",
  },
  {
    year: "May - June 2025",
    title: "Summer Intern - Safety Research Institute (SRI), Kalpakkam",
    description: "Developed analytical model for natural convection in Passive Autocatalytic Recombiners. Investigated temperature stratification and multi-zone flow.",
    type: "internship",
  },
  {
    year: "2025",
    title: "InnovateX'25 – National Level Technical Hackathon",
    description: "Participated in InnovateX'25, a national-level technical hackathon at Coimbatore Institute of Technology, presenting an IoT–AI based smart farming solution focused on early disease detection and precision pesticide spraying, emphasizing scalability, sustainability, and real-world agricultural impact.",
    type: "Hackathon",
  },
  {
    year: "2025-2026",
    title: "Mechanical Engineering Association Website Team Member",
    description: "Contributing to the development and maintenance of the department website",
    type: "extracurricular",
  },
  {
    year: "2025-2026",
    title: "NSS Coordinator",
    description: "Coordinating social service activities and community outreach programs",
    type: "extracurricular",
  },
  {
    year: "2025-2026",
    title: "Quiz Club Executive Director",
    description: "Directing quiz club activities and organizing inter-college competitions",
    type: "extracurricular",
  },
  {
    year: "2025-2026",
    title: "Mechnotron 2K26 Website Team Head",
    description: "Leading the website development team for the Mechnotron2K26 technical symposium",
    type: "extracurricular",
  },
  {
    year: "2026",
    title: "TechSprint Hackathon – Top 20 Finalist (GDG On Campus, CIT)",
    description: "Recognized as a Top 20 Finalist at the TechSprint Hackathon conducted by Google Developer Group (GDG) On Campus, Coimbatore Institute of Technology, for demonstrating strong technical expertise, innovative problem-solving, and effective teamwork in a competitive hackathon environment.",
    type: "Hackathon",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">My Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Key milestones and achievements in my academic and professional path
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {item.type === "internship" ? (
                      <Briefcase className="w-5 h-5" />
                    ) : item.type === "extracurricular" ? (
                      <Users className="w-5 h-5" />
                    ) : (
                      <Award className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {item.year}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
