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
      price: "$18",
    },
    {
      name: "Golden Break",
      description: "Aged bourbon, honey syrup, angostura bitters, gold leaf.",
      price: "$22",
    },
    {
      name: "Velvet Rail",
      description: "Gin, lavender infusion, lemon, egg white, crème de violette.",
      price: "$19",
    },
    {
      name: "Side Pocket",
      description: "Mezcal, agave, lime, jalapeño slice, smoked salt rim.",
      price: "$20",
    },
  ],
  food: [
    {
      name: "Truffle Sliders",
      description: "Wagyu beef, truffle aioli, brioche bun, aged cheddar.",
      price: "$24",
    },
    {
      name: "Artisan Charcuterie",
      description: "Selection of cured meats, imported cheeses, honeycomb, crackers.",
      price: "$32",
    },
    {
      name: "Crispy Calamari",
      description: "Saffron aioli, lemon zest, parsley.",
      price: "$18",
    },
    {
      name: "Steak Tartare",
      description: "Hand-cut filet mignon, capers, quail egg, crostini.",
      price: "$26",
    },
  ],
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-32 pb-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white">
            Curated <span className="text-gradient-gold italic">Menu</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto font-light">
            Exquisite flavors designed to complement the game. 
            Handcrafted cocktails and gourmet accompaniments.
          </p>
        </motion.div>

        <Tabs defaultValue="cocktails" className="w-full max-w-5xl mx-auto">
          <TabsList className="w-full flex justify-center bg-transparent border-b border-white/10 mb-12 rounded-none p-0 h-auto">
            <TabsTrigger 
              value="cocktails"
              className="px-8 py-4 text-lg uppercase tracking-widest rounded-none data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary transition-all"
            >
              Signature Cocktails
            </TabsTrigger>
            <TabsTrigger 
              value="food"
              className="px-8 py-4 text-lg uppercase tracking-widest rounded-none data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary transition-all"
            >
              Gourmet Bites
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cocktails" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/5] overflow-hidden"
              >
                <img 
                  src={cocktailImg} 
                  alt="Luxury Cocktail" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </motion.div>
              
              <div className="space-y-12 py-8">
                {MENU_ITEMS.cocktails.map((item, idx) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex justify-between items-baseline mb-2 border-b border-white/5 pb-2 group-hover:border-primary/50 transition-colors">
                      <h3 className="text-2xl font-serif text-white group-hover:text-primary transition-colors">{item.name}</h3>
                      <span className="text-primary font-mono text-lg">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground font-light text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="food" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-12 py-8 order-2 md:order-1">
                {MENU_ITEMS.food.map((item, idx) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex justify-between items-baseline mb-2 border-b border-white/5 pb-2 group-hover:border-primary/50 transition-colors">
                      <h3 className="text-2xl font-serif text-white group-hover:text-primary transition-colors">{item.name}</h3>
                      <span className="text-primary font-mono text-lg">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground font-light text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/5] overflow-hidden order-1 md:order-2"
              >
                <img 
                  src={snackImg} 
                  alt="Gourmet Food" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
