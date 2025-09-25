
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Training", href: "/training" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/209a189c-f0a9-4e14-9848-809e6bb8fbe5.png" 
                alt="Excel Medical Solutions Logo" 
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-yellow-600 px-3 py-2 rounded-md ${
                  location.pathname === item.href
                    ? "text-yellow-600 bg-yellow-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline">
              <a href="https://www.cognitoforms.com/ExcelEMS/EventMedicalResourceCalculator" target="_blank" rel="noopener noreferrer">Get Quote</a>
            </Button>
            <Button asChild>
              <a href="https://www.cognitoforms.com/XLTeam1/RequestCallBack" target="_blank" rel="noopener noreferrer">Schedule a Call</a>
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
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  location.pathname === item.href
                    ? "text-yellow-600 bg-yellow-50"
                    : "text-gray-700 hover:text-yellow-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button asChild variant="outline" className="w-full">
                <a href="https://www.cognitoforms.com/ExcelEMS/EventMedicalResourceCalculator" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Get Quote</a>
              </Button>
              <Button asChild className="w-full">
                <a href="https://www.cognitoforms.com/XLTeam1/RequestCallBack" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Schedule a Call</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
