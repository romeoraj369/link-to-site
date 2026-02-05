 import { useState, useEffect } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { Menu, X, Code2, Moon, Sun } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const navLinks = [
   { name: "Home", href: "#home" },
   { name: "About", href: "#about" },
   { name: "Skills", href: "#skills" },
   { name: "Experience", href: "#experience" },
   { name: "Projects", href: "#projects" },
   { name: "Contact", href: "#contact" },
 ];
 
 export const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [isDark, setIsDark] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setScrolled(window.scrollY > 50);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   useEffect(() => {
     if (isDark) {
       document.documentElement.classList.add("dark");
     } else {
       document.documentElement.classList.remove("dark");
     }
   }, [isDark]);
 
   return (
     <motion.nav
       initial={{ y: -100 }}
       animate={{ y: 0 }}
       transition={{ duration: 0.6, ease: "easeOut" }}
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         scrolled ? "glass-effect shadow-lg py-3" : "bg-transparent py-5"
       }`}
     >
       <div className="container mx-auto px-4 md:px-8">
         <div className="flex items-center justify-between">
           {/* Logo */}
           <motion.a
             href="#home"
             className="flex items-center gap-2 text-xl font-heading font-bold text-foreground"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             <div className="relative">
               <Code2 className="h-8 w-8 text-primary" />
               <motion.div
                 className="absolute inset-0 bg-primary/30 rounded-full blur-md"
                 animate={{ scale: [1, 1.2, 1] }}
                 transition={{ duration: 2, repeat: Infinity }}
               />
             </div>
             <span className="hidden sm:inline">
               <span className="text-primary">G</span>anapathi
             </span>
           </motion.a>
 
           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center gap-1">
             {navLinks.map((link, index) => (
               <motion.a
                 key={link.name}
                 href={link.href}
                 className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.1 }}
                 whileHover={{ y: -2 }}
               >
                 {link.name}
                 <motion.span
                   className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-3/4 transition-all duration-300"
                 />
               </motion.a>
             ))}
           </div>
 
           {/* Theme Toggle & Mobile Menu */}
           <div className="flex items-center gap-3">
             <Button
               variant="ghost"
               size="icon"
               onClick={() => setIsDark(!isDark)}
               className="relative overflow-hidden"
             >
               <AnimatePresence mode="wait">
                 {isDark ? (
                   <motion.div
                     key="sun"
                     initial={{ rotate: -90, opacity: 0 }}
                     animate={{ rotate: 0, opacity: 1 }}
                     exit={{ rotate: 90, opacity: 0 }}
                     transition={{ duration: 0.2 }}
                   >
                     <Sun className="h-5 w-5" />
                   </motion.div>
                 ) : (
                   <motion.div
                     key="moon"
                     initial={{ rotate: 90, opacity: 0 }}
                     animate={{ rotate: 0, opacity: 1 }}
                     exit={{ rotate: -90, opacity: 0 }}
                     transition={{ duration: 0.2 }}
                   >
                     <Moon className="h-5 w-5" />
                   </motion.div>
                 )}
               </AnimatePresence>
             </Button>
 
             {/* Mobile Menu Button */}
             <Button
               variant="ghost"
               size="icon"
               className="md:hidden"
               onClick={() => setIsOpen(!isOpen)}
             >
               <AnimatePresence mode="wait">
                 {isOpen ? (
                   <motion.div
                     key="close"
                     initial={{ rotate: -90, opacity: 0 }}
                     animate={{ rotate: 0, opacity: 1 }}
                     exit={{ rotate: 90, opacity: 0 }}
                   >
                     <X className="h-5 w-5" />
                   </motion.div>
                 ) : (
                   <motion.div
                     key="menu"
                     initial={{ rotate: 90, opacity: 0 }}
                     animate={{ rotate: 0, opacity: 1 }}
                     exit={{ rotate: -90, opacity: 0 }}
                   >
                     <Menu className="h-5 w-5" />
                   </motion.div>
                 )}
               </AnimatePresence>
             </Button>
           </div>
         </div>
 
         {/* Mobile Menu */}
         <AnimatePresence>
           {isOpen && (
             <motion.div
               initial={{ opacity: 0, height: 0 }}
               animate={{ opacity: 1, height: "auto" }}
               exit={{ opacity: 0, height: 0 }}
               transition={{ duration: 0.3 }}
               className="md:hidden overflow-hidden"
             >
               <div className="flex flex-col gap-2 pt-4 pb-2">
                 {navLinks.map((link, index) => (
                   <motion.a
                     key={link.name}
                     href={link.href}
                     onClick={() => setIsOpen(false)}
                     className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: index * 0.05 }}
                   >
                     {link.name}
                   </motion.a>
                 ))}
               </div>
             </motion.div>
           )}
         </AnimatePresence>
       </div>
     </motion.nav>
   );
 };