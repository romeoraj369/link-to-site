 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";
 import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
 import { Badge } from "@/components/ui/badge";
 
 const experiences = [
   {
     company: "Ernst & Young GDS India LLP",
     role: "Technical Lead",
     location: "Hyderabad, Telangana",
     period: "September 2024 – Present",
     type: "current",
     highlights: [
       "Successfully delivered an Indonesian project developed from scratch",
       "Extensively worked with ISO8583 protocol in all required format types",
       "Established async TCP socket connections for 11 banks with health checks",
       "Achieved 80% code coverage with high-quality test cases",
       "Led a team of 4 software engineers with technical mentorship",
       "Developed POCs and templates used across 13 microservices",
       "AI certification holder with Solution Architect badge",
     ],
     technologies: ["Java", "Spring Boot", "ISO8583", "TCP/IP", "Microservices", "Sonar"],
   },
   {
     company: "RQB Technologies Pvt Ltd",
     role: "Senior Software Engineer",
     location: "Hyderabad, Telangana",
     period: "October 2021 – September 2024",
     type: "past",
     highlights: [
       "Created and released three Spring applications from scratch",
       "Extensive experience in analysis, design, development of web apps",
       "Worked on Spring Boot, Java/J2EE, Hibernate ORM and JPA",
       "Created React components and integrated with backend",
       "Deployed applications on AWS, GCP, and Heroku",
       "Integrated third-party services: Razorpay, Agora, Firebase",
       "Developed CRM, PMT, SCM, and MDM solutions",
     ],
     technologies: ["Java 8", "React.js", "AWS", "GCP", "Heroku", "Razorpay", "Firebase"],
   },
   {
     company: "Get Set Healthy Pvt Ltd",
     role: "Software Engineer",
     location: "Hyderabad, Telangana",
     period: "June 2020 – September 2021",
     type: "past",
     highlights: [
       "Designed multi-tier applications using Spring MVC and Spring Boot",
       "Expert in Java SE: Collections, Threading, Core Java",
       "Used Java 8 features: Lambda expressions, Streams",
       "Created RESTful Web services with JSON communication",
       "Worked on microservices with Kubernetes, Docker, Helm",
       "Utilized Kafka for messaging and Azure Cosmos DB for storage",
       "100% on-time delivery rate with Agile methodology",
       "Worked on HL7 FHIR healthcare standards",
     ],
     technologies: ["Java 8", "Spring Boot", "Docker", "Kubernetes", "Kafka", "Azure", "HL7 FHIR"],
   },
 ];
 
 export const ExperienceSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
       {/* Background Pattern */}
       <div className="absolute inset-0 pattern-dots opacity-30" />
       
       <div className="container mx-auto px-4 md:px-8 relative" ref={ref}>
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-mono mb-4">
             Work Experience
           </span>
           <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
             My <span className="text-gradient">Professional Journey</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Building impactful solutions across diverse industries
           </p>
           <div className="w-24 h-1 bg-gradient-forest mx-auto rounded-full mt-4" />
         </motion.div>
 
         {/* Timeline */}
         <div className="relative max-w-4xl mx-auto">
           {/* Timeline Line */}
           <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block" />
 
           {experiences.map((exp, index) => (
             <motion.div
               key={exp.company}
               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
               className={`relative mb-12 md:mb-16 ${
                 index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
               } md:w-1/2`}
             >
               {/* Timeline Dot */}
               <motion.div
                 className={`hidden md:flex absolute top-6 w-4 h-4 rounded-full border-4 border-background z-10 ${
                   exp.type === "current" ? "bg-primary glow-primary" : "bg-secondary"
                 } ${index % 2 === 0 ? "-right-2 md:right-[-9px]" : "-left-2 md:left-[-9px]"}`}
                 animate={exp.type === "current" ? { scale: [1, 1.2, 1] } : {}}
                 transition={{ duration: 2, repeat: Infinity }}
               />
 
               <Card className={`border-border/50 hover:shadow-xl transition-all duration-300 group ${
                 exp.type === "current" ? "border-primary/30 bg-primary/5" : ""
               }`}>
                 <CardHeader className="pb-3">
                   {exp.type === "current" && (
                     <Badge className="w-fit mb-2 bg-primary text-primary-foreground">
                       Current Position
                     </Badge>
                   )}
                   <CardTitle className="text-xl font-heading flex flex-col gap-1">
                     <span className="text-foreground">{exp.role}</span>
                     <span className="text-base font-normal text-primary flex items-center gap-1 justify-start md:justify-end">
                       <Building2 className="h-4 w-4" />
                       {exp.company}
                     </span>
                   </CardTitle>
                   <div className={`flex flex-wrap gap-3 text-sm text-muted-foreground ${
                     index % 2 === 0 ? "md:justify-end" : ""
                   }`}>
                     <span className="flex items-center gap-1">
                       <MapPin className="h-3 w-3" />
                       {exp.location}
                     </span>
                     <span className="flex items-center gap-1">
                       <Calendar className="h-3 w-3" />
                       {exp.period}
                     </span>
                   </div>
                 </CardHeader>
                 <CardContent>
                   <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                     {exp.highlights.slice(0, 4).map((highlight, hIndex) => (
                       <motion.li
                         key={hIndex}
                         className="flex items-start gap-2 text-sm text-muted-foreground"
                         initial={{ opacity: 0, x: -10 }}
                         animate={isInView ? { opacity: 1, x: 0 } : {}}
                         transition={{ delay: 0.5 + index * 0.2 + hIndex * 0.1 }}
                       >
                         <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                         <span>{highlight}</span>
                       </motion.li>
                     ))}
                   </ul>
                   <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                     {exp.technologies.map((tech) => (
                       <Badge key={tech} variant="secondary" className="text-xs">
                         {tech}
                       </Badge>
                     ))}
                   </div>
                 </CardContent>
               </Card>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };