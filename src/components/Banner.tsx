
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative bg-gradient-to-r from-recipe-primary to-recipe-secondary text-white py-20">
      <div className="container-custom flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Delicious Recipes
          </h1>
          <p className="text-lg mb-6">
            Find, create, and share mouth-watering recipes from around the world.
            Join our community of food enthusiasts today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              className="bg-white text-recipe-primary hover:bg-gray-100"
              onClick={() => navigate("/all-recipes")}
            >
              Explore Recipes
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate("/register")}
            >
              Join Now
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
              alt="Food"
              className="rounded-lg shadow-md transform translate-y-4 h-32 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1162&q=80"
              alt="Food"
              className="rounded-lg shadow-md h-32 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80"
              alt="Food"
              className="rounded-lg shadow-md h-32 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="Food"
              className="rounded-lg shadow-md transform translate-y-4 h-32 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
