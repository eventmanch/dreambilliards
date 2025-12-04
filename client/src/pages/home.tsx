import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Star } from "lucide-react";
import heroBg from "@assets/generated_images/cinematic_billiards_table_close-up.png";
import loungeBg from "@assets/generated_images/luxury_billiards_lounge_interior.png";
import { Link } from "wouter";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden bg-noise">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ 
              backgroundImage: `url(${heroBg})`,
              filter: "brightness(0.3) contrast(1.2)"
            }} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex justify-center mb-8">
              <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent" />
            </div>
            
            <h2 className="text-primary/80 text-xs uppercase tracking-[0.5em] mb-8 font-medium">
              The Private Collection
            </h2>
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-thin text-white mb-8 tracking-tighter leading-[0.9] mix-blend-difference">
              DREAM <br/> <span className="italic text-white/90">BILLIARDS</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-md mx-auto mb-16 font-light leading-relaxed tracking-wide">
              An immersive noir sanctuary. <br/>
              Precision. Privacy. Prestige.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <Link href="/menu">
                <Button className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-black hover:border-white px-10 py-7 rounded-none text-xs uppercase tracking-[0.25em] transition-all duration-500 ease-out">
                  Explore The Menu
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 h-32 w-[1px] bg-white/10 overflow-hidden"
        >
          <motion.div 
            className="w-full h-1/2 bg-primary"
            animate={{ y: [-100, 200] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* The Experience Section - Asymmetrical Layout */}
      <section className="py-40 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            <div className="lg:w-5/12 space-y-12 relative z-10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-primary text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  The Atmosphere
                </h3>
                <h2 className="text-5xl md:text-6xl font-serif text-white leading-[1.1] font-light">
                  A Sanctuary for <br/> the <span className="italic text-primary-foreground bg-primary px-2">Modern Player</span>
                </h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed mt-8">
                  Dream Billiards transcends the traditional. Curated lighting, acoustic perfection, and an atmosphere that whispers luxury. 
                  This is not just a game; it is a ritual.
                </p>
                
                <div className="pt-12 flex gap-12">
                  <div>
                    <div className="text-4xl font-serif text-white mb-2">12</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Pro Tables</div>
                  </div>
                  <div>
                    <div className="text-4xl font-serif text-white mb-2">03</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Private Rooms</div>
                  </div>
                  <div>
                    <div className="text-4xl font-serif text-white mb-2">∞</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Possibilities</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-7/12 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative z-10"
              >
                <img 
                  src={loungeBg} 
                  alt="Lounge Interior" 
                  className="w-full h-[700px] object-cover brightness-75 contrast-125"
                />
                {/* Decorative Border Frame */}
                <div className="absolute top-8 -right-8 w-full h-full border border-white/10 -z-10 hidden md:block" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlight Strip */}
      <section className="py-32 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Star, title: "White Glove Service", desc: "Table-side service so you never miss a shot." },
              { icon: Clock, title: "Late Hours", desc: "Open until 2AM for the night owls." },
              { icon: MapPin, title: "Prime Location", desc: "Heart of the Metropolitan District." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center space-y-6 group"
              >
                <div className="flex justify-center">
                  <div className="p-6 rounded-full border border-white/5 group-hover:border-primary/30 transition-colors duration-500">
                    <item.icon className="w-6 h-6 text-primary/80" />
                  </div>
                </div>
                <h3 className="text-xl font-serif text-white">{item.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
