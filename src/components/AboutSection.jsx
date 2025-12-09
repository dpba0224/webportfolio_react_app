import { UsersRound, Code, Headset } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                    About
                    <span className="text-primary">{" "}Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Quote Section */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer, Engineer & IT Tech Support</h3>
                        
                        <p className="text-muted-foreground">
                            Despite the differences between my previous career as a professional chemical engineer, I successfully transitioned into my first role in tech, where I was responsible for addressing technical issues faced by clients using a web-based application. This application is a Software as a Service (SaaS) platform that functions as a Laboratory Information System (LIS), managing medical records and transactions for various medical institutions across the Philippines.
                        </p>

                        <p className="text-muted-foreground">
                            As time passes, I gained my interest in building web applications using Java as my chosen programming language and Spring Boot as the framework for the back end development. I believe that it has several advantages such as its scalability and performance, security, and also for its enterprise-grade reliability.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in touch with me!
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a 
                                href="https://drive.google.com/file/d/1IeYMIQN0O9LWOt9ndpBt7Mm69XTZFLUK/view?usp=sharing" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                {" "}
                                Download Resume
                            </a>

                            {/* <a 
                                href="https://drive.google.com/file/d/1MtDmYbEyOGJDPnB5yUFGz3osdSG0bwAT/view?usp=drive_link" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                {" "}
                                Download Resume (Technical Support)
                            </a> */}
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="grid grid-cols-1 gap-6">
                        
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Headset className="h-6 w-6 text-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">IT Technical Support</h4>
                                    <p className="text-muted-foreground">Provides exceptional solutions, integrated testing and first-level troubleshooting to address software issues raised by clients.</p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Creates responsive full-stack web applications that can solve the problems and needs of businesses using React and Spring Boot.</p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <UsersRound className="h-6 w-6 text-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Leadership</h4>
                                    <p className="text-muted-foreground">Mentored Technical Support Engineers, and Interns and collaborated with their projects that promote efficiency in their workflows and reduce company's expenses.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}