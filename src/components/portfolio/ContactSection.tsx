 import { motion, useInView } from "framer-motion";
 import { useRef, useState, useEffect } from "react";
 import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare, Calendar, Coffee, User } from "lucide-react";
 import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { useToast } from "@/hooks/use-toast";
 import FingerprintJS, { Component } from '@fingerprintjs/fingerprintjs';
 import { Location, useLocation } from 'react-router-dom';
 
 const contactCards = [
   {
     icon: Mail,
     title: "Email Me",
     value: "meetme.ganapathi@gmail.com",
     href: "mailto:meetme.ganapathi@gmail.com",
     color: "primary",
   },
   {
     icon: Phone,
     title: "Call Me",
     value: "+91 8332080961",
     href: "tel:+918332080961",
     color: "secondary",
   },
   {
     icon: Linkedin,
     title: "LinkedIn",
     value: "ganapathi-raja369",
     href: "https://www.linkedin.com/in/ganapathi-raja369/",
     color: "accent",
   },
   {
     icon: MapPin,
     title: "Location",
     value: "Visakhapatnam, India",
     href: "#",
     color: "forest",
   },
 ];
 
 const futureTiles = [
   {
     icon: Calendar,
     title: "Schedule a Call",
     description: "Book a meeting with me",
     status: "Coming Soon",
     color: "steel",
   },
   {
     icon: MessageSquare,
     title: "Blog",
     description: "Technical articles & insights",
     status: "Coming Soon",
     color: "teal",
   },
    {
      icon: User,
      title: "Mentorship",
      description: "Career & tech guidance",
      status: "Coming Soon",
      color: "amber",
    },
 ];
 
 export const ContactSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
   const { toast } = useToast();
   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
 
  //  const handleSubmit = (e: React.FormEvent) => {
  //    e.preventDefault();
  //    // Since this is a static site, we'll just show a toast
  //    toast({
  //      title: "Message Sent!",
  //      description: "Thanks for reaching out. I'll get back to you soon!",
  //    });
  //    setFormData({ name: "", email: "", message: "" });
  //  };

      const handleSubmit = () => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
      }, 500);
    };

  const [visitorData, setVisitorData] = useState(null);



// Inside your component:
const location = useLocation();


  useEffect(() => {
    const setFp = async () => {
      // 1. Initialize the agent
      const fpPromise = FingerprintJS.load();
      const fp = await fpPromise;
      const ipResponse = await fetch('https://ipapi.co/json/');
    const networkData = await ipResponse.json();

      // 2. Get the visitor identifier and components
      const result = await fp.get();

      // 3. Structure the JSON body
      const payload = {
        visitorId: result.visitorId,
        confidence: result.confidence.score, // How accurate the ID is
        hardware: {
          cores: result.components.hardwareConcurrency,
          memory: result.components.deviceMemory,
          platform: result.components.platform,
          touchPoints: result.components,
        },
        graphics: {
          canvas: result.components.canvas,
          vendor: result.components.vendor,
        },
        session: {
          url: window.location.href,
          time: new Date().toISOString(),
        },
        location: location,
        network: networkData
      };

      setVisitorData(payload);

      // 4. Send to your API
      sendToApi(payload);
    };

    setFp();
  }, []);

  // const sendToApi = async (data) => {
  //   try {
  //     const response = await fetch('https://script.google.com/macros/s/AKfycbwMVjNiN9y8u2zU_anh31nGCBYKyuWZwdG257K7-AxI_DlTM42WCRwLyYRvBvmsCQ77EA/exec', {
  //       method: 'POST',
  //       // headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(data),
  //     });
  //     console.log('API Response:', response);
  //   } catch (error) {
  //     console.log('Error sending data:', data);
  //     console.error('Error sending fingerprint:', error);
  //   }
  // };

  const sendToApi = async (data) => {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzlNZB54ORPXEvhyOjEo_InF1vgYOe58rigmhKHm3qPfabYTcpPj4uImdUOsmBibwzX/exec', {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "payload=" + encodeURIComponent(JSON.stringify(data)),
      redirect: "follow",
    });

    const text = await response.text();
    console.log("Response:", response);

  } catch (error) {
    console.error("Error:", error);
  }
};

 
   return (
     <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
        title="hidden_iframe"
      />

       {/* Background Elements */}
       <div className="absolute inset-0 pattern-grid opacity-30" />
       <motion.div
         className="absolute -bottom-40 left-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl"
         animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
         transition={{ duration: 12, repeat: Infinity }}
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
             Get In Touch
           </span>
           <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
             Let's <span className="text-gradient">Connect</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Have a project in mind or want to collaborate? I'd love to hear from you!
           </p>
           <div className="w-24 h-1 bg-gradient-steel mx-auto rounded-full mt-4" />
         </motion.div>
 
         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
           {/* Contact Cards */}
           <div className="space-y-6">
             <motion.h3
               initial={{ opacity: 0, x: -20 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ delay: 0.2 }}
               className="text-xl font-heading font-semibold mb-6"
             >
               Reach Out To Me
             </motion.h3>
 
             <div className="grid sm:grid-cols-2 gap-4">
               {contactCards.map((card, index) => (
                 <motion.a
                   key={card.title}
                   href={card.href}
                   target={card.href.startsWith("http") ? "_blank" : undefined}
                   rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                   initial={{ opacity: 0, y: 20 }}
                   animate={isInView ? { opacity: 1, y: 0 } : {}}
                   transition={{ delay: 0.3 + index * 0.1 }}
                   whileHover={{ scale: 1.02, y: -5 }}
                   className="block"
                 >
                   <Card className="border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer h-full">
                     <CardContent className="p-4 flex items-center gap-4">
                       <div 
                         className="p-3 rounded-xl"
                         style={{
                           background: card.color === 'primary' 
                             ? 'hsl(var(--primary) / 0.1)' 
                             : card.color === 'secondary' 
                             ? 'hsl(var(--secondary) / 0.1)' 
                             : card.color === 'accent' 
                             ? 'hsl(var(--accent) / 0.1)' 
                             : 'hsl(var(--forest) / 0.1)'
                         }}
                       >
                         <card.icon 
                           className="h-5 w-5" 
                           style={{
                             color: card.color === 'primary' 
                               ? 'hsl(var(--primary))' 
                               : card.color === 'secondary' 
                               ? 'hsl(var(--secondary))' 
                               : card.color === 'accent' 
                               ? 'hsl(var(--accent))' 
                               : 'hsl(var(--forest))'
                           }}
                         />
                       </div>
                       <div>
                         <p className="text-xs text-muted-foreground">{card.title}</p>
                         <p className="text-sm font-medium text-foreground">{card.value}</p>
                       </div>
                     </CardContent>
                   </Card>
                 </motion.a>
               ))}
             </div>
 
             {/* Future Tiles */}
             <motion.h3
               initial={{ opacity: 0, x: -20 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ delay: 0.5 }}
               className="text-xl font-heading font-semibold mt-10 mb-6"
             >
               Coming Soon
             </motion.h3>
 
             <div className="grid sm:grid-cols-3 gap-4">
               {futureTiles.map((tile, index) => (
                 <motion.div
                   key={tile.title}
                   initial={{ opacity: 0, y: 20 }}
                   animate={isInView ? { opacity: 1, y: 0 } : {}}
                   transition={{ delay: 0.6 + index * 0.1 }}
                   whileHover={{ scale: 1.02 }}
                 >
                   <Card className="border-border/50 bg-muted/50 h-full opacity-75 hover:opacity-100 transition-opacity">
                     <CardContent className="p-4 text-center">
                       <div 
                         className="w-10 h-10 mx-auto mb-3 rounded-xl flex items-center justify-center"
                         style={{
                           background: tile.color === 'steel' 
                             ? 'hsl(var(--steel) / 0.1)' 
                             : tile.color === 'teal' 
                             ? 'hsl(var(--teal) / 0.1)' 
                             : 'hsl(var(--rose) / 0.1)'
                         }}
                       >
                         <tile.icon 
                           className="h-5 w-5" 
                           style={{
                             color: tile.color === 'steel' 
                               ? 'hsl(var(--steel))' 
                               : tile.color === 'teal' 
                               ? 'hsl(var(--teal))' 
                               : 'hsl(var(--rose))'
                           }}
                         />
                       </div>
                       <p className="text-sm font-medium text-foreground">{tile.title}</p>
                       <p className="text-xs text-muted-foreground mt-1">{tile.description}</p>
                       <span className="inline-block mt-2 px-2 py-0.5 bg-border/50 text-muted-foreground text-xs rounded">
                         {tile.status}
                       </span>
                     </CardContent>
                   </Card>
                 </motion.div>
               ))}
             </div>
           </div>
 
           {/* Contact Form */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ delay: 0.4 }}
           >
             <Card className="border-border/50 shadow-xl">
               <CardHeader>
                 <CardTitle className="text-xl font-heading">Send a Message</CardTitle>
                 <CardDescription>
                   Fill out the form below and I'll get back to you soon
                 </CardDescription>
               </CardHeader>
               <CardContent>
                 {/* <form onSubmit={handleSubmit} className="space-y-4"> */}
                 <form
                    action="https://script.google.com/macros/s/AKfycbyd-AWA_ZWWx9hsDmNHOq_MQQ8Fc09K6cW4Pmseeiac4HxJUWne92xFmEMT8at0EYz7/exec"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    target="hidden_iframe"
                  >
                   <div>
                     <Input
                       name="name"
                       placeholder="Your Name"
                       value={formData.name}
                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                       required
                       className="bg-background"
                     />
                   </div>
                   <div>
                     <Input
                       name="email"
                       type="email"
                       placeholder="Your Email"
                       value={formData.email}
                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                       required
                       className="bg-background"
                     />
                   </div>
                   <div>
                     <Textarea
                       name="message"
                       placeholder="Your Message"
                       value={formData.message}
                       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                       required
                       rows={5}
                       className="bg-background resize-none"
                     />
                   </div>
                   <Button 
                     type="submit" 
                     className="w-full bg-gradient-forest hover:opacity-90 text-white"
                     size="lg"
                   >
                     <Send className="h-4 w-4 mr-2" />
                     Send Message
                   </Button>
                 </form>
               </CardContent>
             </Card>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };