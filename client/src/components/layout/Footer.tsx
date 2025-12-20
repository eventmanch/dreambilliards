import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa6";


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
              <li>Mon-Sun: 11am-2am</li>
            </ul>
          </div>

          
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest text-primary font-bold">Contact</h4>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li>510 Bryne Dr Unit A, Barrie, ON L4N9P6, Canada</li>
              <li>+1(705)503-3789</li>
              <li>dreambilliards@gmail.com</li>
            </ul>
            
            <div className="flex justify-center md:justify-start gap-6 pt-4">
              <a
              href="https://www.instagram.com/dream_billiards_barrie?igsh=MW5rbjdzcHlkMHNubw=="
        className="text-muted-foreground hover:text-pink-600 transition-colors"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.tiktok.com/@dream.billiards?_r=1&_t=ZS-91emtg0xXzL"
        className="text-muted-foreground hover:text-gray-700 dark:text-white dark:hover:text-gray-300 transition-colors"
        aria-label="TikTok"
      >
        <FaTiktok />
      </a>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground uppercase tracking-widest opacity-50">
          © 2025 Dream Billiards. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
