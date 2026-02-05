 import { motion } from "framer-motion";
 import { Code2, Heart, ArrowUp, Linkedin, Github, Mail, Phone } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const socialLinks = [
   { icon: Mail, href: "mailto:meetme.ganapathi@gmail.com", label: "Email" },
   { icon: Phone, href: "tel:+918332080961", label: "Phone" },
   { icon: Linkedin, href: "https://www.linkedin.com/in/ganapathi-raja369/", label: "LinkedIn" },
   { icon: Github, href: "https://github.com/ganapathi-raja369", label: "GitHub" },
 ];
 
 const quickLinks = [
   { name: "Home", href: "#home" },
   { name: "About", href: "#about" },
   { name: "Skills", href: "#skills" },
   { name: "Experience", href: "#experience" },
   { name: "Projects", href: "#projects" },
   { name: "Contact", href: "#contact" },
 ];
 
 export const Footer = () => {
   const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
   };
 
   return (
     <footer className="relative bg-card border-t border-border">
       {/* Scroll to Top Button */}
       <motion.div
         className="absolute -top-6 left-1/2 -translate-x-1/2"
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
       >
         <Button
           onClick={scrollToTop}
           size="icon"
           className="rounded-full bg-gradient-forest hover:opacity-90 text-white shadow-lg glow-primary"
         >
           <ArrowUp className="h-5 w-5" />
         </Button>
       </motion.div>
 
       <div className="container mx-auto px-4 md:px-8 pt-16 pb-8">
         <div className="grid md:grid-cols-3 gap-12 mb-12">
           {/* Brand */}
           <div>
             <motion.a
               href="#home"
               className="flex items-center gap-2 text-xl font-heading font-bold text-foreground mb-4"
               whileHover={{ scale: 1.02 }}
             >
               <Code2 className="h-6 w-6 text-primary" />
               <span>
                 <span className="text-primary">G</span>anapathi
               </span>
             </motion.a>
             <p className="text-sm text-muted-foreground leading-relaxed mb-6">
               Senior Software Engineer passionate about building scalable applications 
               and elegant solutions with Java, Spring Boot, and React.js.
             </p>
             <div className="flex gap-3">
               {socialLinks.map((social) => (
                 <motion.a
                   key={social.label}
                   href={social.href}
                   target={social.href.startsWith("http") ? "_blank" : undefined}
                   rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                   className="p-2.5 rounded-lg border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                   whileHover={{ scale: 1.1, y: -2 }}
                   whileTap={{ scale: 0.95 }}
                   title={social.label}
                 >
                   <social.icon className="h-4 w-4" />
                 </motion.a>
               ))}
             </div>
           </div>
 
           {/* Quick Links */}
           <div>
             <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
             <nav className="grid grid-cols-2 gap-2">
               {quickLinks.map((link) => (
                 <motion.a
                   key={link.name}
                   href={link.href}
                   className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                   whileHover={{ x: 5 }}
                 >
                   {link.name}
                 </motion.a>
               ))}
             </nav>
           </div>
 
           {/* Contact Info */}
           <div>
             <h3 className="text-lg font-heading font-semibold mb-4">Contact Info</h3>
             <div className="space-y-3 text-sm text-muted-foreground">
               <p className="flex items-center gap-2">
                 <Mail className="h-4 w-4 text-primary" />
                 meetme.ganapathi@gmail.com
               </p>
               <p className="flex items-center gap-2">
                 <Phone className="h-4 w-4 text-primary" />
                 +91 8332080961
               </p>
               <p className="flex items-center gap-2">
                 <Linkedin className="h-4 w-4 text-primary" />
                 ganapathi-raja369
               </p>
             </div>
           </div>
         </div>
 
         {/* Divider */}
         <div className="h-px bg-border mb-8" />
 
         {/* Copyright */}
         <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
           <p className="flex items-center gap-1">
             © {new Date().getFullYear()} Sri Ganapathi Dulla. Made with{" "}
             <Heart className="h-4 w-4 text-destructive fill-current" /> in India
           </p>
           <p className="font-mono text-xs">
             Built with React • Tailwind CSS • Framer Motion
           </p>
         </div>
       </div>
     </footer>
   );
 };