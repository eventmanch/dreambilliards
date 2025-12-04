import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-white">
              DREAM <span className="text-primary">BILLIARDS</span>
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed max-w-sm mx-auto md:mx-0">
              Where precision meets luxury. An exclusive sanctuary for those who appreciate the finer details of the game.
            </p>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest text-primary font-bold">Opening Hours</h4>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li>Mon - Thu: 4pm - 12am</li>
              <li>Fri - Sat: 4pm - 2am</li>
              <li>Sunday: 2pm - 11pm</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest text-primary font-bold">Contact</h4>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li>123 Velvet Lane, Metropolitan District</li>
              <li>(555) 123-4567</li>
              <li>reservations@dreambilliards.com</li>
            </ul>
            
            <div className="flex justify-center md:justify-start gap-6 pt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground uppercase tracking-widest opacity-50">
          © 2024 Dream Billiards. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
