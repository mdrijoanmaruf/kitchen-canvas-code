
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// Sample data - would be fetched from API
const initialRecipes = [
  {
    id: "1",
    title: "Spaghetti Carbonara",
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    cuisineType: "Italian",
    likeCount: 245,
    preparationTime: 30
  },
  {
    id: "2",
    title: "Chicken Tikka Masala",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1671&q=80",
    cuisineType: "Indian",
    likeCount: 198,
    preparationTime: 45
  },
  {
    id: "3",
    title: "Beef Tacos",
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    cuisineType: "Mexican",
    likeCount: 176,
    preparationTime: 25
  },
  {
    id: "4",
    title: "Vegetable Stir Fry",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    cuisineType: "Chinese",
    likeCount: 154,
    preparationTime: 20
  },
  {
    id: "5",
    title: "Classic Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1699&q=80",
    cuisineType: "American",
    likeCount: 142,
    preparationTime: 35
  },
  {
    id: "6",
    title: "Vegetable Curry",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    cuisineType: "Thai",
    likeCount: 131,
    preparationTime: 40
  },
  {
    id: "7",
    title: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    cuisineType: "American",
    likeCount: 189,
    preparationTime: 60
  },
  {
    id: "8",
    title: "Sushi Rolls",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    cuisineType: "Japanese",
    likeCount: 167,
    preparationTime: 50
  }
];

const cuisineOptions = [
  { value: "all", label: "All Cuisines" },
  { value: "italian", label: "Italian" },
  { value: "mexican", label: "Mexican" },
  { value: "indian", label: "Indian" },
  { value: "chinese", label: "Chinese" },
  { value: "thai", label: "Thai" },
  { value: "japanese", label: "Japanese" },
  { value: "american", label: "American" },
];

const AllRecipes = () => {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [cuisineFilter, setCuisineFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call for filtered recipes
    setTimeout(() => {
      if (cuisineFilter === "all") {
        setRecipes(initialRecipes);
      } else {
        const filtered = initialRecipes.filter(
          recipe => recipe.cuisineType.toLowerCase() === cuisineFilter
        );
        setRecipes(filtered);
      }
      setIsLoading(false);
    }, 500);
  }, [cuisineFilter]);

  return (
    <div>
      <Navbar />
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">All Recipes</h1>
          <div className="w-full md:w-auto">
            <Select
              value={cuisineFilter}
              onValueChange={setCuisineFilter}
            >
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by cuisine" />
              </SelectTrigger>
              <SelectContent>
                {cuisineOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array(4).fill(0).map((_, index) => (
              <div 
                key={index} 
                className="h-64 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg"
              ></div>
            ))}
          </div>
        ) : recipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
                cuisineType={recipe.cuisineType}
                likeCount={recipe.likeCount}
                preparationTime={recipe.preparationTime}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No recipes found</h3>
            <p className="text-gray-500">
              Try changing your filter or check back later for new recipes.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AllRecipes;
