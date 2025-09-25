
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Impact", href: "/impact" },
    { name: "Services", href: "/services" },
    { name: "Investor Centre", href: "/investors" },
  ];

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50">
      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-primary-foreground">Excel Medical</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                  location.pathname === item.href
                    ? "text-accent bg-accent/10"
                    : "text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="/contact">Join Our Impact</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-primary-foreground/20">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-primary">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  location.pathname === item.href
                    ? "text-accent bg-accent/10"
                    : "text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="/contact" onClick={() => setIsMenuOpen(false)}>Join Our Impact</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
