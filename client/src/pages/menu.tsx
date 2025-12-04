import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import cocktailImg from "@assets/generated_images/luxury_cocktail_in_crystal_glass.png";
import snackImg from "@assets/generated_images/gourmet_bar_snacks_on_slate.png";

const MENU_ITEMS = {
  cocktails: [
    {
      name: "The Black 8",
      description: "Premium vodka, coffee liqueur, fresh espresso, vanilla bean.",
      price: "18",
    },
    {
      name: "Golden Break",
      description: "Aged bourbon, honey syrup, angostura bitters, gold leaf.",
      price: "22",
    },
    {
      name: "Velvet Rail",
      description: "Gin, lavender infusion, lemon, egg white, crème de violette.",
      price: "19",
    },
    {
      name: "Side Pocket",
      description: "Mezcal, agave, lime, jalapeño slice, smoked salt rim.",
      price: "20",
    },
  ],
  food: [
    {
      name: "Truffle Sliders",
      description: "Wagyu beef, truffle aioli, brioche bun, aged cheddar.",
      price: "24",
    },
    {
      name: "Artisan Charcuterie",
      description: "Selection of cured meats, imported cheeses, honeycomb, crackers.",
      price: "32",
    },
    {
      name: "Crispy Calamari",
      description: "Saffron aioli, lemon zest, parsley.",
      price: "18",
    },
    {
      name: "Steak Tartare",
      description: "Hand-cut filet mignon, capers, quail egg, crostini.",
      price: "26",
    },
  ],
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Navbar />

      <div className="pt-40 pb-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-primary text-xs uppercase tracking-[0.4em] block mb-6">Culinary & Mixology</span>
          <h1 className="text-6xl md:text-8xl font-serif font-thin mb-8 text-white tracking-tight">
            Curated <span className="italic text-white/50">Tastes</span>
          </h1>
          <div className="w-24 h-[1px] bg-primary/50 mx-auto" />
        </motion.div>

        <Tabs defaultValue="cocktails" className="w-full max-w-6xl mx-auto">
          <div className="flex justify-center mb-20">
            <TabsList className="bg-transparent border border-white/10 p-1 rounded-none h-auto inline-flex">
              <TabsTrigger 
                value="cocktails"
                className="px-10 py-4 text-xs uppercase tracking-[0.2em] rounded-none data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none transition-all duration-500"
              >
                Cocktails
              </TabsTrigger>
              <TabsTrigger 
                value="food"
                className="px-10 py-4 text-xs uppercase tracking-[0.2em] rounded-none data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none transition-all duration-500"
              >
                Provisions
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="cocktails" className="mt-0 focus-visible:outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[3/4] overflow-hidden lg:order-1 order-2"
              >
                <img 
                  src={cocktailImg} 
                  alt="Luxury Cocktail" 
                  className="w-full h-full object-cover opacity-80 hover:scale-105 hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 border border-white/10 pointer-events-none" />
              </motion.div>
              
              <div className="space-y-16 py-8 lg:order-2 order-1">
                {MENU_ITEMS.cocktails.map((item, idx) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    className="group"
                  >
                    <div className="flex justify-between items-end mb-4 relative">
                      <h3 className="text-3xl font-serif text-white font-light group-hover:text-primary transition-colors duration-500">{item.name}</h3>
                      {/* Dotted Leader */}
                      <div className="flex-grow mx-6 border-b border-dotted border-white/20 mb-2 opacity-30" />
                      <span className="text-primary font-sans text-lg tracking-widest">${item.price}</span>
                    </div>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed max-w-md">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="food" className="mt-0 focus-visible:outline-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-16 py-8">
                {MENU_ITEMS.food.map((item, idx) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    className="group"
                  >
                    <div className="flex justify-between items-end mb-4 relative">
                      <h3 className="text-3xl font-serif text-white font-light group-hover:text-primary transition-colors duration-500">{item.name}</h3>
                       {/* Dotted Leader */}
                       <div className="flex-grow mx-6 border-b border-dotted border-white/20 mb-2 opacity-30" />
                      <span className="text-primary font-sans text-lg tracking-widest">${item.price}</span>
                    </div>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed max-w-md">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[3/4] overflow-hidden"
              >
                <img 
                  src={snackImg} 
                  alt="Gourmet Food" 
                  className="w-full h-full object-cover opacity-80 hover:scale-105 hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 border border-white/10 pointer-events-none" />
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
