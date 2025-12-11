import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "The Menu", href: "/menu" },
    // { name: "Private Events", href: "/events" },
    // { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isScrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="group relative z-50">
            <span className="block text-xs tracking-[0.4em] text-primary/80 mb-1 ml-1">EST. 2025</span>
            <span className="text-3xl font-serif font-medium tracking-wide text-foreground mt-1">
              DREAM <span className="italic font-light text-primary">BILLIARDS</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-xs uppercase tracking-[0.2em] transition-all duration-500 hover:text-primary relative group py-2",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full",
                  location === link.href ? "w-full" : "w-0"
                )} />
              </a>
            </Link>
          ))}
          {/* <Button 
            variant="outline" 
            className="border-white/20 text-foreground hover:bg-white hover:text-black uppercase tracking-[0.2em] text-[10px] font-bold rounded-none px-8 py-5 transition-all duration-500"
          >
            Reserve Table
          </Button >  */}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-3xl z-40 flex items-center justify-center transition-all duration-700",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className="text-3xl font-serif italic text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <div className="w-12 h-[1px] bg-white/10 my-4" />
          <Button 
            variant="ghost"
            className="text-primary text-sm uppercase tracking-widest hover:bg-transparent hover:text-white"
          >
            Book a Table
          </Button>
        </div>
      </div>
    </nav>
  );
}
