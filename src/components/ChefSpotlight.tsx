
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample chef data - would be fetched from API
const chefs = [
  {
    id: 1,
    name: "Alex Chen",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    specialty: "Italian Cuisine",
    recipeCount: 42
  },
  {
    id: 2,
    name: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    specialty: "Indian Cuisine",
    recipeCount: 38
  },
  {
    id: 3,
    name: "Marcus Johnson",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    specialty: "French Cuisine",
    recipeCount: 31
  }
];

const ChefSpotlight = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">
          Featured Contributors
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chefs.map((chef) => (
            <div 
              key={chef.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md flex flex-col items-center text-center"
            >
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={chef.image} alt={chef.name} />
                <AvatarFallback>{chef.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-2">{chef.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-3">{chef.specialty}</p>
              <p className="text-sm">{chef.recipeCount} recipes contributed</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefSpotlight;
