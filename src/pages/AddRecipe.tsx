
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AddRecipeForm from "@/components/AddRecipeForm";

const AddRecipe = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">Add New Recipe</h1>
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <AddRecipeForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddRecipe;
