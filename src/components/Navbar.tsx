
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

// Mock user - will be replaced with actual auth
const mockUser = {
  isLoggedIn: false,
  displayName: "John Doe",
  photoURL: "https://github.com/shadcn.png",
};

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(mockUser);

  const handleLogout = () => {
    // Will implement actual logout logic later
    console.log("User logged out");
    setUser({ ...user, isLoggedIn: false });
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm dark:bg-gray-900 sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-recipe-primary">
              Recipe Book
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-recipe-primary dark:text-gray-300 dark:hover:text-recipe-primary font-medium"
            >
              Home
            </Link>
            <Link
              to="/all-recipes"
              className="text-gray-700 hover:text-recipe-primary dark:text-gray-300 dark:hover:text-recipe-primary font-medium"
            >
              All Recipes
            </Link>
            {user.isLoggedIn && (
              <>
                <Link
                  to="/add-recipe"
                  className="text-gray-700 hover:text-recipe-primary dark:text-gray-300 dark:hover:text-recipe-primary font-medium"
                >
                  Add Recipe
                </Link>
                <Link
                  to="/my-recipes"
                  className="text-gray-700 hover:text-recipe-primary dark:text-gray-300 dark:hover:text-recipe-primary font-medium"
                >
                  My Recipes
                </Link>
              </>
            )}
          </div>

          {/* Right side: Auth + Theme */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {user.isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user.photoURL} alt={user.displayName} />
                    <AvatarFallback>
                      {user.displayName?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="font-medium">
                    {user.displayName}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
                <Button
                  variant="default"
                  className="bg-recipe-primary hover:bg-recipe-primary/90"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4 animate-fade-in">
            <Link
              to="/"
              className="text-gray-700 hover:text-recipe-primary dark:text-gray-300 dark:hover:text-recipe-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/all-recipes"
              className="text-gray-700 hover:text-recipe-primary dark:text-gray-300 dark:hover:text-recipe-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              All Recipes
            </Link>
            {user.isLoggedIn && (
              <>
                <Link
                  to="/add-recipe"
                  className="text-gray-700 hover:text-recipe-primary dark:text-gray-300 dark:hover:text-recipe-primary font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Add Recipe
                </Link>
                <Link
                  to="/my-recipes"
                  className="text-gray-700 hover:text-recipe-primary dark:text-gray-300 dark:hover:text-recipe-primary font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Recipes
                </Link>
              </>
            )}
            {!user.isLoggedIn && (
              <div className="flex flex-col space-y-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    navigate("/login");
                    setIsMenuOpen(false);
                  }}
                  className="w-full"
                >
                  Login
                </Button>
                <Button
                  variant="default"
                  className="bg-recipe-primary hover:bg-recipe-primary/90 w-full"
                  onClick={() => {
                    navigate("/register");
                    setIsMenuOpen(false);
                  }}
                >
                  Register
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
