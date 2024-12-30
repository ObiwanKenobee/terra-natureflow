import { Leaf, Truck, Recycle, Box } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const pillars = [
  {
    title: "Bio-Logistics Architecture",
    description: "Decentralized hubs growing like living networks, optimizing resource distribution.",
    icon: Leaf,
  },
  {
    title: "Flow Technologies",
    description: "Adaptive, renewable energy-powered transport systems inspired by migration patterns.",
    icon: Truck,
  },
  {
    title: "Eco-Supply Loop",
    description: "Closed-loop systems minimizing waste, emphasizing circular economy principles.",
    icon: Recycle,
  },
  {
    title: "TerraPods",
    description: "Self-regulating production units creating goods near demand zones.",
    icon: Box,
  },
];

export const Pillars = () => {
  return (
    <section id="pillars" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-terraflow-green">
          The Foundations of TerraFlow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <Card key={pillar.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-terraflow-green/10 rounded-full flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-terraflow-green" />
                </div>
                <CardTitle className="text-xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};