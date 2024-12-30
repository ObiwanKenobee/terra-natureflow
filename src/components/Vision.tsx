import { Button } from "./ui/button";

export const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-terraflow-blue/5 to-terraflow-green/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-terraflow-green">
            A Future Built on Love, Nature, and Innovation
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Amazon TerraFlow envisions a logistics system driven by reverence for the planet, 
            historical wisdom, and cutting-edge technology. With every delivery, TerraFlow aims 
            to leave a positive impact—on people, nature, and the future of commerce.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-terraflow-green mb-2">100%</div>
              <div className="text-sm text-gray-600">Renewable Energy</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-terraflow-green mb-2">90%</div>
              <div className="text-sm text-gray-600">Emission Reduction</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-terraflow-green mb-2">50+</div>
              <div className="text-sm text-gray-600">Countries Covered</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-terraflow-green mb-2">1M+</div>
              <div className="text-sm text-gray-600">Trees Planted</div>
            </div>
          </div>
          <Button className="bg-terraflow-green hover:bg-terraflow-green/90">
            Join the Movement
          </Button>
        </div>
      </div>
    </section>
  );
};