import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/lovable-uploads/69087199-9a31-470c-9fef-20343850d889.png"
            alt="Channex logo"
            className="w-8 h-8 rounded-lg object-contain"
          />
          <span className="text-xl font-bold text-foreground font-inter">Channex</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors font-inter">
            About
          </Link>
          <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors font-inter">
            Features
          </Link>
          <Link to="/integrations" className="text-muted-foreground hover:text-foreground transition-colors font-inter">
            Integrations
          </Link>
          <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors font-inter">
            Blog
          </Link>
          <Link to="/start-integration" className="text-muted-foreground hover:text-foreground transition-colors font-inter">
            Start Integration
          </Link>
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors font-inter">
            Pricing
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="font-inter" onClick={() => window.open('https://app.channex.io/', '_blank')}>
            Login
          </Button>
          <Button asChild className="bg-gradient-primary hover:shadow-primary transition-all duration-300 font-inter">
            <Link to="/contact">Contact Sales</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors font-inter">
              About
            </Link>
            <Link to="/features" className="block text-muted-foreground hover:text-foreground transition-colors font-inter">
              Features
            </Link>
            <Link to="/integrations" className="block text-muted-foreground hover:text-foreground transition-colors font-inter">
              Integrations
            </Link>
            <Link to="/blog" className="block text-muted-foreground hover:text-foreground transition-colors font-inter">
              Blog
            </Link>
            <Link to="/start-integration" className="block text-muted-foreground hover:text-foreground transition-colors font-inter">
              Start Integration
            </Link>
            <Link to="/pricing" className="block text-muted-foreground hover:text-foreground transition-colors font-inter">
              Pricing
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start font-inter" onClick={() => window.open('https://app.channex.io/', '_blank')}>
                Login
              </Button>
              <Button asChild className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300 font-inter">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;