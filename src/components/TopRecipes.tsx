
import React from "react";
import RecipeCard from "./RecipeCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Sample data - would be fetched from API
const sampleRecipes = [
  {
    id: "1",
    title: "Spaghetti Carbonara",
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    cuisineType: "Italian",
    likeCount: 245
  },
  {
    id: "2",
    title: "Chicken Tikka Masala",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1671&q=80",
    cuisineType: "Indian",
    likeCount: 198
  },
  {
    id: "3",
    title: "Beef Tacos",
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    cuisineType: "Mexican",
    likeCount: 176
  },
  {
    id: "4",
    title: "Vegetable Stir Fry",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    cuisineType: "Chinese",
    likeCount: 154
  },
  {
    id: "5",
    title: "Classic Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1699&q=80",
    cuisineType: "American",
    likeCount: 142
  },
  {
    id: "6",
    title: "Vegetable Curry",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    cuisineType: "Thai",
    likeCount: 131
  }
];

const TopRecipes = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 bg-recipe-accent/50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">Top Recipes</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sampleRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              cuisineType={recipe.cuisineType}
              likeCount={recipe.likeCount}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            variant="default"
            className="bg-recipe-primary hover:bg-recipe-primary/90 px-6 py-2"
            onClick={() => navigate("/all-recipes")}
          >
            See All Recipes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopRecipes;
