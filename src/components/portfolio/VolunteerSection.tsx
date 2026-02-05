 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 import { Heart, Sun, Award, Music, Sprout, Sparkles } from "lucide-react";
 import { Card, CardContent } from "@/components/ui/card";
 
 const volunteerItems = [
   {
     icon: Heart,
     title: "Art of Living Volunteer",
     duration: "15+ Years",
     description: "Dedicated volunteer with the Art of Living foundation, contributing to community wellness and mindfulness programs.",
     color: "primary",
   },
   {
     icon: Sun,
     title: "Semi-Qualified Yoga Instructor",
     duration: "Ongoing",
     description: "Trained in traditional yoga practices, helping others achieve physical and mental well-being.",
     color: "secondary",
   },
   {
     icon: Award,
     title: "Schneider Electric India",
     duration: "As a part of rural develompment",
     description: "Installed solar power solutions for 100+ households in remote Sundarbans islands, West Bengal, providing essential electricity in regions without grid connectivity.",
     color: "accent",
   },
      {
     icon: Music,
     title: "Bhazen Clubbing",
     duration: "Visakhapatnam, Andhra Pradesh",
     description: "Core volunteer in organizing a 2,300+ attendee live Bhajans & Keerthans concert, fully executed by youth volunteers — handling promotions, entry passes, crowd coordination and food distribution with zero external force involvement.",
     color: "primary",
     href: "",
   },
   {
     icon: Sprout,
     title: "Edu-Youth Meet",
     duration: "Part of Drug Free Indian Campaign",
     description: "Played a key role in executing a 50,000+ student Drug-Free India awareness drive (2024), overseeing management, operations, de-escalation of conflicts and smooth event execution.",
     color: "secondary",
   },
    {
      icon: Sparkles,
      title: "And More",
      duration: "More than fingers can count",
      description: "Experiences, lessons and stories that shaped my journey",
      color: "accent",
    },
 ];
 
 export const VolunteerSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
       {/* Background */}
       <motion.div
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
         animate={{ scale: [1, 1.1, 1] }}
         transition={{ duration: 10, repeat: Infinity }}
       />
 
       <div className="container mx-auto px-4 md:px-8 relative" ref={ref}>
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <span className="inline-block px-4 py-1.5 bg-rose/10 text-rose rounded-full text-sm font-mono mb-4">
             Beyond Work
           </span>
           <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
             Volunteer <span className="text-gradient">Experience</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Giving back to the community through service and sustainable initiatives
           </p>
           <div className="w-24 h-1 bg-gradient-forest mx-auto rounded-full mt-4" />
         </motion.div>
 
         {/* Volunteer Cards */}
         <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
           {volunteerItems.map((item, index) => (
             <motion.div
               key={item.title}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.2 + index * 0.15 }}
               whileHover={{ y: -5 }}
             >
               <Card className="h-full border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 text-center group">
                 <CardContent className="p-8">
                   <motion.div
                     className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                     style={{
                       background: item.color === 'primary' 
                         ? 'hsl(var(--primary) / 0.1)' 
                         : item.color === 'secondary' 
                         ? 'hsl(var(--secondary) / 0.1)' 
                         : 'hsl(var(--accent) / 0.1)'
                     }}
                     whileHover={{ scale: 1.1, rotate: 10 }}
                   >
                     <item.icon 
                       className="h-8 w-8" 
                       style={{
                         color: item.color === 'primary' 
                           ? 'hsl(var(--primary))' 
                           : item.color === 'secondary' 
                           ? 'hsl(var(--secondary))' 
                           : 'hsl(var(--accent))'
                       }}
                     />
                   </motion.div>
                   <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                     {item.title}
                   </h3>
                   <p 
                     className="text-sm font-mono mb-4"
                     style={{
                       color: item.color === 'primary' 
                         ? 'hsl(var(--primary))' 
                         : item.color === 'secondary' 
                         ? 'hsl(var(--secondary))' 
                         : 'hsl(var(--accent))'
                     }}
                   >
                     {item.duration}
                   </p>
                   <p className="text-sm text-muted-foreground leading-relaxed">
                     {item.description}
                   </p>
                 </CardContent>
               </Card>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };