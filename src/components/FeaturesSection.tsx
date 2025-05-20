
import React from "react";
import { Heart, Search, Plus, Utensils } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Why Use Recipe Book?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-recipe-primary/10 p-4 rounded-full mb-4">
              <Search className="h-8 w-8 text-recipe-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Discover New Recipes</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Find new and exciting recipes from around the world, added by our community of food enthusiasts.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-recipe-primary/10 p-4 rounded-full mb-4">
              <Plus className="h-8 w-8 text-recipe-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Share Your Favorites</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Upload and share your favorite recipes with detailed instructions and mouthwatering images.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-recipe-primary/10 p-4 rounded-full mb-4">
              <Heart className="h-8 w-8 text-recipe-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Save and Like</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Like recipes you enjoy and build your personal collection of favorites for easy access.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-recipe-primary/10 p-4 rounded-full mb-4">
              <Utensils className="h-8 w-8 text-recipe-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cooking Made Easy</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Follow clear, step-by-step instructions to create delicious meals with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
