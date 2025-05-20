
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCardDetail from "@/components/RecipeCardDetail";
import UpdateRecipeModal from "@/components/UpdateRecipeModal";
import { toast } from "sonner";

// Sample user recipes - would be fetched from API
const sampleUserRecipes = [
  {
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
  },
  {
    id: "2",
    title: "Chicken Tikka Masala",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1671&q=80",
    ingredients: [
      "800g chicken breast, cut into bite-sized pieces",
      "2 cups plain yogurt",
      "2 tablespoons lemon juice",
      "6 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "3 teaspoons ground cumin",
      "2 teaspoons ground turmeric",
      "2 teaspoons garam masala",
      "2 teaspoons ground coriander",
      "2 tablespoons vegetable oil",
      "1 large onion, finely chopped",
      "2 cups tomato sauce",
      "1 cup heavy cream",
      "Fresh cilantro for garnish"
    ],
    instructions: "1. In a large bowl, mix yogurt, lemon juice, garlic, ginger, and spices. Add chicken and marinate for at least 2 hours, preferably overnight.\n\n2. Heat oil in a large pan over medium heat. Add onions and cook until soft and translucent.\n\n3. Add the marinated chicken and cook until the chicken is no longer pink.\n\n4. Pour in the tomato sauce and bring to a simmer. Cook for about 15 minutes until the sauce thickens.\n\n5. Stir in the heavy cream and simmer for an additional 5 minutes.\n\n6. Garnish with fresh cilantro and serve with rice or naan.",
    cuisineType: "Indian",
    preparationTime: 45,
    categories: ["dinner"],
    likeCount: 198,
  }
];

interface Recipe {
  id: string;
  title: string;
  image: string;
  ingredients: string[];
  instructions: string;
  cuisineType: string;
  preparationTime: number;
  categories: string[];
  likeCount: number;
}

const MyRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  useEffect(() => {
    // Simulate API call to fetch user recipes
    setIsLoading(true);
    
    setTimeout(() => {
      setRecipes(sampleUserRecipes);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleDeleteRecipe = (id: string) => {
    // Confirm before deleting
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      // Simulate API call to delete recipe
      setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
      toast.success("Recipe deleted successfully!");
    }
  };

  const handleUpdateRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsUpdateModalOpen(true);
  };

  const handleSaveUpdate = (updatedRecipe: Recipe) => {
    // Simulate API call to update recipe
    setRecipes((prev) =>
      prev.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">My Recipes</h1>

        {isLoading ? (
          <div className="flex flex-col gap-8 animate-pulse">
            <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded"></div>
            <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded"></div>
          </div>
        ) : recipes.length > 0 ? (
          <div className="space-y-10">
            {recipes.map((recipe) => (
              <div key={recipe.id}>
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
                  isOwner={true}
                  onDelete={() => handleDeleteRecipe(recipe.id)}
                  onUpdate={() => handleUpdateRecipe(recipe)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-2xl font-medium mb-4">No Recipes Yet</h3>
            <p className="text-gray-500 mb-6">
              You haven't added any recipes yet. Start sharing your culinary creations!
            </p>
            <a
              href="/add-recipe"
              className="btn-primary inline-block"
            >
              Add Your First Recipe
            </a>
          </div>
        )}
      </div>
      
      <UpdateRecipeModal
        recipe={selectedRecipe}
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        onUpdate={handleSaveUpdate}
      />
      
      <Footer />
    </div>
  );
};

export default MyRecipes;
