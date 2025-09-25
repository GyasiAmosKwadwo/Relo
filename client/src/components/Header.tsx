import { useState } from "react";
import { Link } from "wouter";
import { Search, Menu, X, Home, User, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onSearch?: (query: string) => void;
  onMenuToggle?: () => void;
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
}

export default function Header({ onSearch, onMenuToggle, isDarkMode, onThemeToggle }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
    console.log("Search triggered:", searchQuery);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    onMenuToggle?.();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-md">
              <Home className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl">ReloM8</span>
          </div>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search properties, hostels, hotels..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
                data-testid="input-search"
              />
            </div>
          </form>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/profile">
              <Button variant="ghost" size="sm" data-testid="button-profile">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={onThemeToggle}
              data-testid="button-theme-toggle"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Link href="/login">
              <Button variant="outline" size="sm" data-testid="button-login">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" data-testid="button-signup">
                Sign Up
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background py-4">
            <div className="space-y-4">
              <form onSubmit={handleSearch} className="px-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search properties..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                    data-testid="input-search-mobile"
                  />
                </div>
              </form>
              <div className="flex flex-col space-y-2 px-2">
                <Button variant="ghost" className="justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <div className="flex space-x-2 pt-2">
                  <Link href="/login">
                    <Button variant="outline" size="sm" className="flex-1">
                      Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button size="sm" className="flex-1">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}