import { useState } from "react";
import { cn } from "@/lib/utils.js"

const skills = [
    
    // Programming Languages
    {name: "Java", category: "Programming Languages"},
    {name: "JavaScript", category: "Programming Languages"},
    {name: "TypeScript", category: "Programming Languages"},
    {name: "Python", category: "Programming Languages"},
    {name: "C#", category: "Programming Languages"},
    {name: "PHP", category: "Programming Languages"},

    // Front-End
    {name: "HTML", category: "Front-End Development"},
    {name: "Tailwind CSS", category: "Front-End Development"},
    {name: "Bootstrap", category: "Front-End Development"},
    {name: "React", category: "Front-End Development"},
    {name: "Angular", category: "Front-End Development"},
    {name: "Nunjucks", category: "Front-End Development"},
    {name: "XML", category: "Front-End Development"},
    {name: "WordPress", category: "Front-End Development"},

    // Back-End
    {name: "Node", category: "Back-End Development"},
    {name: "Express.js", category: "Back-End Development"},
    {name: "Spring Boot", category: "Back-End Development"},
    {name: "Spring Framework", category: "Back-End Development"},
    {name: "Spring Security", category: "Back-End Development"},
    {name: "ASP.NET Core", category: "Back-End Development"},
    {name: ".NET Framework", category: "Back-End Development"},

    // Databases
    {name: "MySQL", category: "Databases"},
    {name: "MS SQL Server", category: "Databases"},
    {name: "PostgreSQL", category: "Databases"},
    {name: "Java Persistence API (JPA)", category: "Databases"},
    {name: "Hibernate", category: "Databases"},
    {name: "MongoDB", category: "Databases"},

    // Cloud Computing
    {name: "Amazon Web Services (AWS)", category: "Cloud Computing"},

    // Tools
    {name: "Postman", category: "Tools"},
    {name: "Swagger", category: "Tools"},
    {name: "Lombok", category: "Tools"},
    {name: "Model Mapper", category: "Tools"},
    {name: "Git", category: "Tools"},
    {name: "Netbeans", category: "Tools"},
    {name: "IntelliJ", category: "Tools"},
    {name: "Eclipse", category: "Tools"},
    {name: "Visual Studio Code", category: "Tools"},
    {name: "Claude", category: "Tools"},
    {name: "Gemini", category: "Tools"},
    {name: "Cursor", category: "Tools"},

    // Other Skills
    {name: "SAP", category: "Other Skills"},
    {name: "Microsoft Office", category: "Other Skills"},
    {name: "Google Workspace", category: "Other Skills"},
    {name: "Zendesk", category: "Other Skills"},
    {name: "Freshdesk", category: "Other Skills"},
    {name: "Jira", category: "Other Skills"},
    {name: "Adobe Photoshop", category: "Other Skills"},
    {name: "Adobe Illustrator", category: "Other Skills"},
    {name: "Canva", category: "Other Skills"},

];

const categories = ["All", "Programming Languages", "Front-End Development", "Back-End Development", "Databases", "Cloud Computing", "Tools", "Other Skills"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredSkills = skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory);

    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                                (activeCategory === category) ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover hover:bg-primary">
                            <div className="text-center mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}