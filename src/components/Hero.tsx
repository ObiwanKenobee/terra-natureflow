import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-terraflow-green/10 via-white to-terraflow-blue/10">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-terraflow-green">
          Redefining Global Commerce in Harmony with Nature
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Experience the future of sustainable logistics powered by nature's wisdom
        </p>
        <Button 
          className="bg-terraflow-green hover:bg-terraflow-green/90 text-white px-8 py-6 text-lg animate-fade-up" 
          style={{ animationDelay: "0.4s" }}
        >
          Discover More
        </Button>
      </div>
    </div>
  );
};