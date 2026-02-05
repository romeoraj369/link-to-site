 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 import { Code2, Database, Cloud, Users, Award, Coffee } from "lucide-react";
 import { Card, CardContent } from "@/components/ui/card";
 
 const highlights = [
   { icon: Code2, label: "5+ Years", description: "Java Development" },
   { icon: Database, label: "100+", description: "APIs Created" },
   { icon: Cloud, label: "3", description: "Cloud Platforms" },
   { icon: Users, label: "4+", description: "Team Leadership" },
   { icon: Award, label: "AI", description: "Certified Expert" },
   { icon: Coffee, label: "15", description: "Years Yoga Volunteer" },
 ];
 
 export const AboutSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="about" className="py-20 md:py-32 relative overflow-hidden">
       {/* Background Pattern */}
       <div className="absolute inset-0 pattern-grid opacity-30" />
       
       <div className="container mx-auto px-4 md:px-8 relative" ref={ref}>
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-mono mb-4">
             About Me
           </span>
           <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
             Passionate Developer &{" "}
             <span className="text-gradient">Problem Solver</span>
           </h2>
           <div className="w-24 h-1 bg-gradient-forest mx-auto rounded-full" />
         </motion.div>
 
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Left: Image/Visual */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative"
           >
             <div className="relative aspect-square max-w-md mx-auto">
               {/* Decorative Background */}
               <motion.div
                 className="absolute inset-4 bg-gradient-forest rounded-3xl opacity-20"
                 animate={{ rotate: [0, 5, 0] }}
                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               />
               <motion.div
                 className="absolute inset-8 bg-gradient-steel rounded-3xl opacity-15"
                 animate={{ rotate: [0, -5, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               />
               
               {/* Profile Card */}
               <div className="absolute inset-12 glass-effect rounded-3xl flex items-center justify-center overflow-hidden">
                 <div className="text-center p-6">
                   <motion.div
                     className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-forest flex items-center justify-center text-4xl font-heading font-bold text-white"
                     animate={{ scale: [1, 1.05, 1] }}
                     transition={{ duration: 3, repeat: Infinity }}
                   >
                     GD
                   </motion.div>
                   <h3 className="text-xl font-heading font-bold mb-1">Sri Ganapathi Dulla</h3>
                   <p className="text-muted-foreground text-sm">Technical Lead @ EY</p>
                 </div>
               </div>
 
               {/* Floating Tech Icons */}
               {["☕", "⚛️", "☁️", "🚀"].map((emoji, index) => (
                 <motion.div
                   key={index}
                   className="absolute w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-xl shadow-lg"
                   style={{
                     top: `${20 + index * 20}%`,
                     left: index % 2 === 0 ? "0%" : "auto",
                     right: index % 2 === 1 ? "0%" : "auto",
                   }}
                   animate={{ 
                     y: [0, -10, 0],
                     rotate: [0, 5, -5, 0]
                   }}
                   transition={{ 
                     duration: 3 + index,
                     repeat: Infinity,
                     delay: index * 0.5
                   }}
                 >
                   {emoji}
                 </motion.div>
               ))}
             </div>
           </motion.div>
 
           {/* Right: Content */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.4 }}
           >
             <h3 className="text-2xl font-heading font-semibold mb-4">
               Building Scalable Solutions with <span className="text-primary">Clean Code</span>
             </h3>
             
             <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
               <p>
                 I'm an experienced developer with over <span className="text-foreground font-medium">5 years in Java 8</span> and{" "}
                 <span className="text-foreground font-medium">2 years in React.js</span>. My expertise lies in building 
                 enterprise-grade applications using Spring Boot and microservices architecture.
               </p>
               <p>
                 I've created more than <span className="text-primary font-medium">100+ APIs</span> and deployed applications 
                 across <span className="text-secondary font-medium">AWS, GCP, and Azure</span>. I thrive on solving complex 
                 problems and delivering high-quality, maintainable code.
               </p>
               <p>
                 Beyond coding, I'm a <span className="text-accent font-medium">15-year volunteer with Art of Living</span> and 
                 a semi-qualified Yoga instructor. I believe in continuous learning and giving back to the community.
               </p>
             </div>
 
             {/* Quick Stats */}
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
               {highlights.map((item, index) => (
                 <motion.div
                   key={item.label}
                   initial={{ opacity: 0, y: 20 }}
                   animate={isInView ? { opacity: 1, y: 0 } : {}}
                   transition={{ delay: 0.6 + index * 0.1 }}
                 >
                   <Card className="border-border/50 hover:border-primary/50 transition-colors group">
                     <CardContent className="p-4 text-center">
                       <item.icon className="h-6 w-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                       <p className="text-lg font-heading font-bold text-foreground">{item.label}</p>
                       <p className="text-xs text-muted-foreground">{item.description}</p>
                     </CardContent>
                   </Card>
                 </motion.div>
               ))}
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };