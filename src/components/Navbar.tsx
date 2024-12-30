import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-terraflow-green">TerraFlow</div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-terraflow-green transition-colors">About</a>
          <a href="#pillars" className="text-gray-600 hover:text-terraflow-green transition-colors">Pillars</a>
          <a href="#vision" className="text-gray-600 hover:text-terraflow-green transition-colors">Vision</a>
          <Button variant="default" className="bg-terraflow-green hover:bg-terraflow-green/90">
            Get Started
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};