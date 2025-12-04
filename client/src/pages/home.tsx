import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import heroBg from "@assets/generated_images/cinematic_billiards_table_close-up.png";
import loungeBg from "@assets/generated_images/luxury_billiards_lounge_interior.png";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax-like scale */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105 animate-pulse-slow"
            style={{ 
              backgroundImage: `url(${heroBg})`,
              filter: "brightness(0.4)"
            }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-primary text-sm uppercase tracking-[0.3em] mb-6 font-bold">
              Est. 2024
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-8 tracking-tight leading-none">
              Play with <span className="italic text-gradient-gold">Prestige</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              An immersive billiards experience where abstract design meets 
              timeless luxury. Cocktails, cues, and conversation.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link href="/menu">
                <Button className="bg-primary text-primary-foreground px-8 py-6 rounded-none text-sm uppercase tracking-widest hover:bg-white transition-all duration-300">
                  View Menu
                </Button>
              </Link>
              <Button variant="outline" className="border-white/20 text-white px-8 py-6 rounded-none text-sm uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all duration-300 group">
                Our Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />
        </motion.div>
      </section>

      {/* The Experience Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-primary/20 rounded-none" />
              <img 
                src={loungeBg} 
                alt="Lounge Interior" 
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-primary text-sm uppercase tracking-widest font-bold">
                The Atmosphere
              </h3>
              <h2 className="text-5xl font-serif text-white leading-tight">
                A Sanctuary for <br/> the <span className="italic text-primary">Modern Player</span>
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Dream Billiards transcends the traditional pool hall. We have curated a space 
                where lighting, texture, and sound converge to create an abstract 
                escape from the city. 
              </p>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Whether you are here to master the break or simply unwind with a 
                rare bourbon, our lounge offers an unmatched level of privacy and service.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="border-l border-primary/30 pl-6">
                  <h4 className="text-white font-serif text-2xl mb-2">12</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Pro Tables</p>
                </div>
                <div className="border-l border-primary/30 pl-6">
                  <h4 className="text-white font-serif text-2xl mb-2">Top</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Shelf Spirits</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info / Location Strip */}
      <section className="py-20 bg-secondary/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
             <div className="flex items-center gap-6">
               <div className="p-4 border border-white/10 rounded-full">
                 <Clock className="text-primary w-8 h-8" />
               </div>
               <div>
                 <h4 className="text-white font-serif text-xl">Open Late Daily</h4>
                 <p className="text-muted-foreground font-light">Until 2am on Weekends</p>
               </div>
             </div>
             
             <div className="h-12 w-[1px] bg-white/10 hidden md:block" />
             
             <div className="flex items-center gap-6">
               <div className="p-4 border border-white/10 rounded-full">
                 <MapPin className="text-primary w-8 h-8" />
               </div>
               <div>
                 <h4 className="text-white font-serif text-xl">Metropolitan District</h4>
                 <p className="text-muted-foreground font-light">123 Velvet Lane</p>
               </div>
             </div>

             <div className="h-12 w-[1px] bg-white/10 hidden md:block" />

             <Button className="bg-white text-black px-8 py-6 rounded-none hover:bg-primary hover:text-black transition-colors">
               Get Directions
             </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
