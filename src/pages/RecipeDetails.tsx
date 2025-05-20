
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCardDetail from "@/components/RecipeCardDetail";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Sample recipe details - would be fetched from API
const sampleRecipe = {
  id: "1",
  title: "Spaghetti Carbonara",
  image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  ingredients: [
    "400g spaghetti",
    "200g pancetta or guanciale, diced",
    "3 large eggs",
    "50g pecorino cheese, finely grated",
    "50g parmesan cheese, finely grated",
    "Freshly ground black pepper",
    "Salt to taste"
  ],
  instructions: "1. Cook the spaghetti in a large pot of salted boiling water until al dente.\n\n2. While the pasta is cooking, fry the pancetta in a large pan until crispy.\n\n3. In a bowl, whisk together the eggs, grated cheeses, and a generous amount of black pepper.\n\n4. Drain the cooked pasta, reserving some of the cooking water.\n\n5. While the pasta is still hot, quickly add it to the pan with the pancetta (off the heat).\n\n6. Immediately pour in the egg and cheese mixture, stirring continuously. The heat from the pasta will cook the eggs and create a creamy sauce.\n\n7. If the sauce is too thick, add a splash of the reserved pasta water.\n\n8. Serve immediately with additional grated cheese and black pepper on top.",
  cuisineType: "Italian",
  preparationTime: 30,
  categories: ["dinner", "lunch"],
  likeCount: 245,
  userId: "user123"
};

const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<typeof sampleRecipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);

  // Mock current user - would be fetched from auth context
  const currentUserId = "user123"; // For testing

  useEffect(() => {
    // Simulate API call to fetch recipe details
    setIsLoading(true);
    
    setTimeout(() => {
      setRecipe(sampleRecipe);
      
      // Check if current user is the owner
      if (sampleRecipe.userId === currentUserId) {
        setIsOwner(true);
      }
      
      setIsLoading(false);
    }, 1000);
  }, [id]);

  const handleLike = () => {
    // Simulate liking a recipe
    if (recipe) {
      setRecipe({
        ...recipe,
        likeCount: recipe.likeCount + 1
      });
      toast.success("Recipe liked!");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-custom py-12">
        {isLoading ? (
          <div className="flex flex-col gap-4 animate-pulse">
            <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded w-1/3"></div>
            <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4 mt-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full mt-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full mt-2"></div>
          </div>
        ) : recipe ? (
          <>
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h1 className="text-3xl font-bold">{recipe.title}</h1>
              {!isOwner && (
                <Button
                  onClick={handleLike}
                  className="bg-recipe-primary hover:bg-recipe-primary/90 mt-4 sm:mt-0"
                >
                  Like Recipe
                </Button>
              )}
            </div>
            
            <div className="text-lg mb-8">
              {recipe.likeCount} people interested in this recipe
            </div>
            
            <RecipeCardDetail
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
              cuisineType={recipe.cuisineType}
              preparationTime={recipe.preparationTime}
              categories={recipe.categories}
              likeCount={recipe.likeCount}
              isOwner={isOwner}
              onDelete={() => console.log("Delete recipe")}
              onUpdate={() => console.log("Update recipe")}
            />
          </>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">Recipe Not Found</h2>
            <p className="text-gray-500">
              The recipe you're looking for might have been removed or doesn't exist.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RecipeDetails;
