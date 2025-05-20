
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-recipe-accent/30 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-recipe-primary mb-6">404</h1>
        <img
          src="https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
          alt="Broken plate"
          className="w-48 h-48 object-cover rounded-full mx-auto mb-8"
        />
        <h2 className="text-2xl font-semibold mb-3">Oops! Recipe Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          It seems the recipe you're looking for has been eaten or doesn't exist.
          Let's get you back to the kitchen!
        </p>
        <Button
          variant="default"
          className="bg-recipe-primary hover:bg-recipe-primary/90"
          onClick={() => navigate("/")}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
