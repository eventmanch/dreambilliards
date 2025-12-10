import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import cocktailImg from "@assets/generated_images/luxury_cocktail_in_crystal_glass.png";
import snackImg from "@assets/generated_images/gourmet_bar_snacks_on_slate.png";

const MENU_ITEMS = {
  cocktails: [
    {
    name: "Mozzarella Sticks (6 pcs)",
    description: "Golden-fried cheese sticks served with zesty marinara for the ultimate cheesy crunch",
    price: "9.99",
  },
  {
    name: "Chicken Tenders (5pcs)",
    description: "Served with fries.",
    price: "14.99",
  },
  {
    name: "Famous Samosa Poutine",
    description: "Canadian twist where golden samosas meet rich poutine flavors in a fusion you'll crave again.",
    price: "11.99",
  },
  {
    name: "Onion Rings",
    description: "Crispy battered onion rings served golden and crunchy along with choice of dip.",
    price: "8.99",
  },
  {
    name: "Cue Stick Fries",
    description: "Your game-time crunch—perfectly seasoned Cue-Stick Fries.",
    price: "7.99",
  },
  {
    name: "Waffle Fries",
    description: "Stack 'em, dip 'em, love 'em—our Waffle Fries never miss.",
    price: "8.99",
  },
  {
    name: "Dream Nachos",
    description: "A bold platter of fully loaded nachos stacked with melted cheese, seasoned Vegetables, salsa, and sour cream. Great for sharing.",
    price: "15.99",
  },
  {
    name: "Wings",
    description: "Crispy, succulent wings tossed in your choice of signature sauces. Perfectly golden on the outside and juicy on the inside.",
    price: "15.99",
  }
  ],
  food: [
    {
    name: "Dream Classic 8 OZ Burger",
    description: "A handcrafted burger featuring a juicy beef patty on a toasted brioche bun, topped with fresh lettuce, cheese, tomato, onions, pickles with ketchup and mustard.",
    price: "17.99",
  },
  {
    name: "Ultimate Chicken Crunch",
    description: "A Chicken patty featuring on a toasted brioche bun, topped with fresh lettuce, tomato, onions, with creamy mayo.",
    price: "16.99",
  },
  {
    name: "Plant based Burger/ wrap 6 OZ",
    description: "Vegetarian plant based patty on burger bun or whole wheat wrap, topped with fresh lettuce, tomato, onions, and mayo and ketchup.",
    price: "16.99",
  },
  {
    name: "Poolside Tikki Burger",
    description: "Cue up your taste buds — a crispy potato tikki layered with lettuce, tomato onions, and house sauce on a toasted bun.",
    price: "15.99",
  },

  // Wrap & More
  {
    name: "Chef's Beef Wrap",
    description: "A soft tortilla wrap filled generously with ground beef, topped with fresh lettuce, tomato, onions, pickles with ketchup and mustard.",
    price: "17.99",
  },
  {
    name: "Crispy Chicken Wrap",
    description: "A soft tortilla wrap filled generously with crispy chicken, topped with fresh lettuce, tomato, onions with creamy mayo.",
    price: "16.99",
  },
  {
    name: "Crispy Pepperoni Melt",
    description: "A freshly baked flatbread topped with marinara sauce, melted cheese and premium pepperoni.",
    price: "16.99",
  },

  // Dessert
  {
    name: "Cherry Cheesecake - 1 Slice",
    description: "",
    price: "7.99",
  },
  {
    name: "Tiramisu - 1 Slice",
    description: "",
    price: "8.99",
  }
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
                Appetizers
              </TabsTrigger>
              <TabsTrigger 
                value="food"
                className="px-10 py-4 text-xs uppercase tracking-[0.2em] rounded-none data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none transition-all duration-500"
              >
                Mains
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
