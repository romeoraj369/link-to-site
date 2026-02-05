 import { motion } from "framer-motion";
 import { ArrowDown, MapPin, Mail, Phone, Linkedin, Github, Download } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 export const HeroSection = () => {
   const text = "Senior Software Engineer";
   
   return (
     <section
       id="home"
       className="relative min-h-screen flex items-center justify-center overflow-hidden"
     >
       {/* Animated Background Elements */}
       <div className="absolute inset-0 pattern-dots opacity-50" />
       
       {/* Floating Orbs */}
       <motion.div
         className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
         animate={{ 
           x: [0, 50, 0],
           y: [0, 30, 0],
           scale: [1, 1.1, 1]
         }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
       />
       <motion.div
         className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
         animate={{ 
           x: [0, -40, 0],
           y: [0, -50, 0],
           scale: [1, 1.2, 1]
         }}
         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
       />
       <motion.div
         className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/15 rounded-full blur-3xl"
         animate={{ 
           x: [0, 30, 0],
           y: [0, -30, 0],
         }}
         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
       />
 
       {/* Spinning Decorative Ring */}
       <motion.div
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full"
         animate={{ rotate: 360 }}
         transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
       >
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full" />
       </motion.div>
       <motion.div
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-secondary/10 rounded-full"
         animate={{ rotate: -360 }}
         transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
       >
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary rounded-full" />
       </motion.div>
 
       {/* Main Content */}
       <div className="container mx-auto px-4 md:px-8 relative z-10">
         <div className="text-center max-w-4xl mx-auto">
           {/* Greeting */}
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-muted-foreground font-mono text-sm md:text-base mb-4"
           >
             👋 Hello, I'm
           </motion.p>
 
           {/* Name */}
           <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.6 }}
             className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-4"
           >
             <span className="text-gradient">Sri Ganapathi</span>{" "}
             <span className="text-foreground">Dulla</span>
           </motion.h1>
 
           {/* Title with Typing Effect */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8 }}
             className="flex items-center justify-center gap-2 mb-6"
           >
             <span className="text-xl md:text-2xl text-muted-foreground font-heading">
               {text.split("").map((char, index) => (
                 <motion.span
                   key={index}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1 + index * 0.05 }}
                 >
                   {char}
                 </motion.span>
               ))}
             </span>
             <motion.span
               className="w-0.5 h-7 bg-primary"
               animate={{ opacity: [1, 0] }}
               transition={{ duration: 0.8, repeat: Infinity }}
             />
           </motion.div>
 
           {/* Location */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.5 }}
             className="flex items-center justify-center gap-2 text-muted-foreground mb-8"
           >
             <MapPin className="h-4 w-4 text-primary" />
             <span className="text-sm">Visakhapatnam, India</span>
           </motion.div>
 
           {/* Description */}
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.7 }}
             className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
           >
             5+ years crafting scalable web applications with{" "}
             <span className="text-primary font-medium">Java</span>,{" "}
             <span className="text-secondary font-medium">Spring Boot</span>, and{" "}
             <span className="text-accent font-medium">React.js</span>.
             Expertise in microservices, cloud platforms, and building elegant solutions.
           </motion.p>
 
           {/* CTA Buttons */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.9 }}
             className="flex flex-wrap items-center justify-center gap-4 mb-12"
           >
             <Button
               size="lg"
               className="bg-gradient-forest hover:opacity-90 transition-opacity glow-primary text-white"
               asChild
             >
               <a href="#contact">
                 Get In Touch
               </a>
             </Button>
             <Button
               size="lg"
               variant="outline"
               className="group"
               asChild
             >
               <a href="#projects">
                 View Projects
                 <motion.span
                   animate={{ x: [0, 5, 0] }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                 >
                   →
                 </motion.span>
               </a>
             </Button>
           </motion.div>
 
           {/* Social Links */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 2.1 }}
             className="flex items-center justify-center gap-4"
           >
             {[
               { icon: Mail, href: "mailto:meetme.ganapathi@gmail.com", label: "Email" },
               { icon: Phone, href: "tel:+918332080961", label: "Phone" },
               { icon: Linkedin, href: "https://www.linkedin.com/in/ganapathi-raja369/", label: "LinkedIn" },
               { icon: Github, href: "https://github.com/ganapathi-raja369", label: "GitHub" },
             ].map((social, index) => (
               <motion.a
                 key={social.label}
                 href={social.href}
                 target={social.href.startsWith("http") ? "_blank" : undefined}
                 rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                 className="p-3 rounded-full border border-border bg-card/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
                 whileHover={{ scale: 1.1, y: -3 }}
                 whileTap={{ scale: 0.95 }}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 2.1 + index * 0.1 }}
                 title={social.label}
               >
                 <social.icon className="h-5 w-5" />
               </motion.a>
             ))}
           </motion.div>
         </div>
       </div>
 
       {/* Scroll Indicator */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 2.5 }}
         className="absolute bottom-8 left-1/2 -translate-x-1/2"
       >
         <motion.a
           href="#about"
           className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
         >
           <span className="text-xs font-mono">Scroll Down</span>
           <ArrowDown className="h-5 w-5" />
         </motion.a>
       </motion.div>
     </section>
   );
 };