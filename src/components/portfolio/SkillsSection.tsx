 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 
 const skillCategories = [
   {
     title: "Languages & Core",
     color: "primary",
     skills: [
       { name: "Java 8+", level: 95 },
       { name: "JavaScript", level: 85 },
       { name: "TypeScript", level: 80 },
       { name: "HTML/CSS", level: 85 },
       { name: "SQL", level: 90 },
     ]
   },
   {
     title: "Frameworks",
     color: "secondary",
     skills: [
       { name: "Spring Boot", level: 95 },
       { name: "Spring MVC", level: 90 },
       { name: "React.js", level: 85 },
       { name: "React Native", level: 75 },
       { name: "Hibernate/JPA", level: 90 },
     ]
   },
   {
     title: "Cloud & DevOps",
     color: "accent",
     skills: [
       { name: "AWS (EC2, S3, RDS)", level: 85 },
       { name: "GCP", level: 80 },
       { name: "Azure", level: 75 },
       { name: "Docker", level: 85 },
       { name: "Kubernetes", level: 80 },
     ]
   },
   {
     title: "Tools & Database",
     color: "forest",
     skills: [
       { name: "PostgreSQL/MySQL", level: 90 },
       { name: "Kafka", level: 85 },
       { name: "Git/CI-CD", level: 90 },
       { name: "Elasticsearch", level: 80 },
       { name: "Aerospike", level: 75 },
     ]
   },
 ];
 
 const techLogos = [
   "Java", "Spring", "React", "AWS", "Docker", "Kubernetes", 
   "PostgreSQL", "Kafka", "Git", "TypeScript", "GCP", "Azure"
 ];
 
 export const SkillsSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="skills" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
       {/* Background Elements */}
       <motion.div
         className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
         animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
         transition={{ duration: 20, repeat: Infinity }}
       />
       <motion.div
         className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
         animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
         transition={{ duration: 20, repeat: Infinity }}
       />
 
       <div className="container mx-auto px-4 md:px-8 relative" ref={ref}>
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-mono mb-4">
             Technical Skills
           </span>
           <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
             My <span className="text-gradient">Tech Stack</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             A comprehensive toolkit built over 5+ years of professional experience
           </p>
           <div className="w-24 h-1 bg-gradient-steel mx-auto rounded-full mt-4" />
         </motion.div>
 
         {/* Scrolling Tech Logos */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={isInView ? { opacity: 1 } : {}}
           transition={{ delay: 0.3 }}
           className="mb-16 overflow-hidden"
         >
           <div className="flex gap-8 animate-scroll">
             {[...techLogos, ...techLogos].map((tech, index) => (
               <motion.div
                 key={index}
                 className="flex-shrink-0 px-6 py-3 glass-effect rounded-full text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                 whileHover={{ scale: 1.05, y: -2 }}
               >
                 {tech}
               </motion.div>
             ))}
           </div>
         </motion.div>
 
         {/* Skills Grid */}
         <div className="grid md:grid-cols-2 gap-8">
           {skillCategories.map((category, catIndex) => (
             <motion.div
               key={category.title}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.2 + catIndex * 0.15 }}
               className="glass-effect rounded-2xl p-6 hover:shadow-lg transition-shadow"
             >
               <h3 className={`text-xl font-heading font-semibold mb-6 text-${category.color}`}>
                 {category.title}
               </h3>
               
               <div className="space-y-5">
                 {category.skills.map((skill, skillIndex) => (
                   <div key={skill.name}>
                     <div className="flex justify-between items-center mb-2">
                       <span className="text-sm font-medium text-foreground">{skill.name}</span>
                       <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                     </div>
                     <div className="h-2 bg-muted rounded-full overflow-hidden">
                       <motion.div
                         className={`h-full rounded-full bg-${category.color}`}
                         initial={{ width: 0 }}
                         animate={isInView ? { width: `${skill.level}%` } : {}}
                         transition={{ 
                           duration: 1, 
                           delay: 0.5 + catIndex * 0.15 + skillIndex * 0.1,
                           ease: "easeOut"
                         }}
                         style={{
                           background: category.color === 'primary' 
                             ? 'hsl(var(--primary))' 
                             : category.color === 'secondary' 
                             ? 'hsl(var(--secondary))' 
                             : category.color === 'accent' 
                             ? 'hsl(var(--accent))' 
                             : 'hsl(var(--forest))'
                         }}
                       />
                     </div>
                   </div>
                 ))}
               </div>
             </motion.div>
           ))}
         </div>
 
         {/* Additional Skills Tags */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 0.8 }}
           className="mt-12 text-center"
         >
           <p className="text-sm text-muted-foreground mb-4">Also experienced with:</p>
           <div className="flex flex-wrap justify-center gap-2">
             {["Microservices", "ISO8583", "TCP/IP", "REST APIs", "HL7 FHIR", "Agile/Scrum", "JDBC", "Jenkins", "JFrog", "Splunk", "Heroku", "Firebase", "Razorpay"].map((tag, index) => (
               <motion.span
                 key={tag}
                 className="px-3 py-1.5 bg-card border border-border rounded-lg text-xs text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-default"
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={isInView ? { opacity: 1, scale: 1 } : {}}
                 transition={{ delay: 1 + index * 0.03 }}
                 whileHover={{ scale: 1.05 }}
               >
                 {tag}
               </motion.span>
             ))}
           </div>
         </motion.div>
       </div>
 
       {/* CSS for scrolling animation */}
       <style>{`
         @keyframes scroll {
           0% { transform: translateX(0); }
           100% { transform: translateX(-50%); }
         }
         .animate-scroll {
           animation: scroll 30s linear infinite;
         }
         .animate-scroll:hover {
           animation-play-state: paused;
         }
       `}</style>
     </section>
   );
 };