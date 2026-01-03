import { ArrowRight, Github } from "lucide-react";

const projects = [
    {
        id: 1, 
        title: "Mayette's Rice Store and Bakery Supplies", 
        description: "An E-commerce API using Spring Boot which includes the creation of products, product categories, cart, and placement of orders made by the user. This also includes user registration, authentication and authorization so that all customers and store employees can utilize the web application. Data is stored using a relational database and can be deployed in the cloud.",
        image: "/projects/project01.jpg",
        tags: ["Spring Boot", "Spring Security", "Spring Data JPA", "MySQL", "Lombok", "AWS", "Postman", "Swagger"],
        githubUrl: "https://github.com/dpba0224/mayette_ricestore_springboot_app"
    },
    {
        id: 2, 
        title: "Kuya Guard (Authentication App)", 
        description: "A full-stack web application that serves as a complete authentication system using React in the front end and Spring Boot at the backend. APIs are integrated with Spring Security using JWT-based token mechanism. E-mail functionalities are also added once the user registers, verifies the e-mail address and forgot the password.",
        image: "/projects/project03.jpg",
        tags: ["Spring Boot", "Spring Security", "Thymeleaf", "MySQL", "Lombok", "Postman", "React", "CSS", "Bootstrap"],
        githubUrl: "https://github.com/dpba0224/kuyaguard_authentication_springboot_app"
    },
    {
        id: 3, 
        title: "InvoEase (Invoice Generator App)", 
        description: "A full-stack web application that generates invoice that fits the needs of most business using Spring Boot, React and MongoDB. This can help improve the efficiency of current workflows of businesses that generates invoice. In addition, users can save, download a .pdf copy of invoice, and send a copy to an e-mail address for their own reference. Authentication is supported using Clerk to ensure that all users can log in with ease and secure while using this application.",
        image: "/projects/project04.png",
        tags: ["Spring Boot", "Spring Security", "MongoDB", "Lombok", "Axios", "React", "CSS", "Bootstrap"],
        githubUrl: "https://github.com/dpba0224/invoease_docsgenapp"
    },
    {
        id: 4, 
        title: "Mayette’s Rice Store and Baking Goods Inventory Management System", 
        description: "A Full-Stack Application that helped the business to efficiently manage and document product inventory for customer sales. This includes user authentication, profile viewing, creation of components and business logic for products, product categories, suppliers, transactions, purchases and sold products for great documentation purposes.",
        image: "/projects/project05.png",
        tags: ["HTML", "CSS", "Angular", "TypeScript", "Spring Boot", "Spring Security", "JWT", "JPA", "Hibernate", "MySQL", "Postman"],
        githubUrl: "https://github.com/dpba0224/mayette_inventory_springboot_app"
    },
    {
        id: 5, 
        title: "SKY Perfumes", 
        description: "A Full-Stack Application which includes the E-commerce API using the MERN Stack (MongoDB, Express.js, React.js, Node.js).",
        image: "/projects/project02.png",
        tags: ["CSS", "Bootstrap", "React", "Node.js", "Express.js", "MongoDB", "Postman"],
        githubUrl: "https://github.com/dpba0224/mayette_ricestore_springboot_app"
    },
    {
        id: 6, 
        title: "Coming soon!", 
        description: "Will fill up the details of the project once done.",
        image: "/projects/projectcs.jpg",
        tags: [],
        githubUrl: "#"
    },
    
];

export const ProjectsSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that I built as a proof of using the skills I have learned:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-41 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full oject-cover transition-transform duration-500 group-hover:110"/>
                            </div>

                            <div className="p-6">
                                <div className="min-h-28">
                                    <div className="flex flex-wrap gap-2 mb-4 ">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                            
                                <div className="mb-1 min-h-90">
                                    <h3 className="text-xl text-left font-semibold mb-3">{project.title}</h3>

                                    <p className="text-muted text-left foreground text-sm mb-4 min-h-70">{project.description}</p>

                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <a 
                                                href={project.githubUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <Github size={30}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        href="https://github.com/dpba0224"
                        target="_blank"
                    >
                        Check out my GitHub Profile <ArrowRight size={20}/>
                    </a>
                </div>
            </div>
        </section>
    );
}