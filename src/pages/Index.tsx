import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Vision } from "@/components/Vision";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Pillars />
      <Vision />
    </div>
  );
};

export default Index;