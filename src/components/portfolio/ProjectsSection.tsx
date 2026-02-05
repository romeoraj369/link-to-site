 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 import { ExternalLink, Github, Smartphone, Globe, Server, Heart } from "lucide-react";
 import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
 import { Badge } from "@/components/ui/badge";
 import { Button } from "@/components/ui/button";
 
 const projects = [
   {
     title: "MithraX AI Assistant",
     description: "An Android personal AI assistant built with Java and XML, enhanced with GPT-2 and TensorFlow Lite for offline AI interactive guidance.",
     icon: Smartphone,
     tags: ["Java", "Android", "GPT-2", "TensorFlow Lite", "XML"],
     color: "primary",
     featured: true,
   },
   {
     title: "Rapido Clone",
     description: "A ride-sharing application recreation using Java 8 for backend services and React Native for cross-platform mobile experience.",
     icon: Globe,
     tags: ["Java 8", "React Native", "Mobile App", "Real-time"],
     color: "secondary",
     featured: true,
   },
   {
     title: "Full Stack Web Application",
     description: "A comprehensive website built with Java 8 backend and React.js frontend, showcasing full-stack development capabilities.",
     icon: Server,
     tags: ["Java 8", "React.js", "REST APIs", "Full Stack"],
     color: "accent",
     featured: true,
   },
   {
     title: "Blood Bank Application",
     description: "A blood donation management system developed using Spring framework and JSP for efficient blood bank operations.",
     icon: Heart,
     tags: ["Spring", "JSP", "MySQL", "Healthcare"],
     color: "rose",
     featured: false,
   },
 ];
 
 export const ProjectsSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="projects" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
       {/* Background Elements */}
       <motion.div
         className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
         animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
         transition={{ duration: 15, repeat: Infinity }}
       />
 
       <div className="container mx-auto px-4 md:px-8 relative" ref={ref}>
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-mono mb-4">
             Personal Projects
           </span>
           <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
             Featured <span className="text-gradient">Work</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Side projects that showcase my passion for building innovative solutions
           </p>
           <div className="w-24 h-1 bg-gradient-forest mx-auto rounded-full mt-4" />
         </motion.div>
 
         {/* Projects Grid */}
         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {projects.map((project, index) => (
             <motion.div
               key={project.title}
               initial={{ opacity: 0, y: 40 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
               className={project.featured ? "md:col-span-1" : ""}
             >
               <Card className="h-full border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                 {/* Card Header with Icon */}
                 <div className={`h-2 bg-${project.color}`} style={{
                   background: project.color === 'primary' 
                     ? 'hsl(var(--primary))' 
                     : project.color === 'secondary' 
                     ? 'hsl(var(--secondary))' 
                     : project.color === 'accent' 
                     ? 'hsl(var(--accent))' 
                     : 'hsl(var(--rose))'
                 }} />
                 <CardHeader>
                   <div className="flex items-start justify-between">
                     <motion.div
                       className={`p-3 rounded-xl`}
                       style={{
                         background: project.color === 'primary' 
                           ? 'hsl(var(--primary) / 0.1)' 
                           : project.color === 'secondary' 
                           ? 'hsl(var(--secondary) / 0.1)' 
                           : project.color === 'accent' 
                           ? 'hsl(var(--accent) / 0.1)' 
                           : 'hsl(var(--rose) / 0.1)'
                       }}
                       whileHover={{ scale: 1.1, rotate: 5 }}
                     >
                       <project.icon className="h-6 w-6" style={{
                         color: project.color === 'primary' 
                           ? 'hsl(var(--primary))' 
                           : project.color === 'secondary' 
                           ? 'hsl(var(--secondary))' 
                           : project.color === 'accent' 
                           ? 'hsl(var(--accent))' 
                           : 'hsl(var(--rose))'
                       }} />
                     </motion.div>
                     {project.featured && (
                       <Badge variant="secondary" className="text-xs">
                         Featured
                       </Badge>
                     )}
                   </div>
                   <CardTitle className="text-xl font-heading mt-4 group-hover:text-primary transition-colors">
                     {project.title}
                   </CardTitle>
                   <CardDescription className="text-muted-foreground">
                     {project.description}
                   </CardDescription>
                 </CardHeader>
                 <CardContent>
                   <div className="flex flex-wrap gap-2 mb-4">
                     {project.tags.map((tag) => (
                       <Badge key={tag} variant="outline" className="text-xs font-mono">
                         {tag}
                       </Badge>
                     ))}
                   </div>
                   <div className="flex gap-3">
                     <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
                       <Github className="h-4 w-4 mr-1" />
                       Code
                     </Button>
                     <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
                       <ExternalLink className="h-4 w-4 mr-1" />
                       Demo
                     </Button>
                   </div>
                 </CardContent>
               </Card>
             </motion.div>
           ))}
         </div>
 
         {/* CTA */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 0.8 }}
           className="text-center mt-12"
         >
           <p className="text-muted-foreground mb-4">
             Want to see more? Check out my repositories
           </p>
           <Button variant="outline" size="lg" asChild>
             <a href="https://github.com/ganapathi-raja369" target="_blank" rel="noopener noreferrer">
               <Github className="h-5 w-5 mr-2" />
               View GitHub Profile
             </a>
           </Button>
         </motion.div>
       </div>
     </section>
   );
 };