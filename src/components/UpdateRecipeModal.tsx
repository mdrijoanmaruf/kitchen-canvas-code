
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

interface RecipeData {
  id: string;
  title: string;
  image: string;
  ingredients: string[];
  instructions: string;
  cuisineType: string;
  preparationTime: number;
  categories: string[];
}

interface UpdateRecipeModalProps {
  recipe: RecipeData | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (updatedRecipe: RecipeData) => void;
}

const categories = [
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
  { id: "dessert", label: "Dessert" },
  { id: "vegan", label: "Vegan" },
];

const cuisines = [
  { value: "italian", label: "Italian" },
  { value: "mexican", label: "Mexican" },
  { value: "indian", label: "Indian" },
  { value: "chinese", label: "Chinese" },
  { value: "thai", label: "Thai" },
  { value: "japanese", label: "Japanese" },
  { value: "french", label: "French" },
  { value: "american", label: "American" },
  { value: "others", label: "Others" },
];

const UpdateRecipeModal: React.FC<UpdateRecipeModalProps> = ({
  recipe,
  isOpen,
  onClose,
  onUpdate,
}) => {
  const [form, setForm] = useState<RecipeData>({
    id: "",
    title: "",
    image: "",
    ingredients: [],
    instructions: "",
    cuisineType: "",
    preparationTime: 0,
    categories: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (recipe) {
      setForm({
        ...recipe,
      });
    }
  }, [recipe]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleIngredientsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const ingredients = e.target.value.split("\n").filter(line => line.trim());
    setForm(prev => ({ ...prev, ingredients }));
  };

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    setForm((prev) => {
      if (checked) {
        return {
          ...prev,
          categories: [...prev.categories, categoryId],
        };
      } else {
        return {
          ...prev,
          categories: prev.categories.filter((id) => id !== categoryId),
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mock API call - will be replaced with actual API
      console.log("Updating recipe:", form);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onUpdate(form);
      toast.success("Recipe updated successfully!");
      onClose();
    } catch (error) {
      toast.error("Failed to update recipe. Please try again.");
      console.error("Error updating recipe:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Update Recipe</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Recipe Title*</Label>
            <Input
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter recipe title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image URL*</Label>
            <Input
              id="image"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Enter URL to recipe image"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ingredients">Ingredients* (one per line)</Label>
            <Textarea
              id="ingredients"
              name="ingredients"
              value={form.ingredients.join("\n")}
              onChange={handleIngredientsChange}
              placeholder="2 cups flour
1 cup sugar
etc."
              className="min-h-32"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instructions">Instructions*</Label>
            <Textarea
              id="instructions"
              name="instructions"
              value={form.instructions}
              onChange={handleChange}
              placeholder="Enter detailed instructions for your recipe..."
              className="min-h-48"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="cuisineType">Cuisine Type*</Label>
              <Select
                value={form.cuisineType}
                onValueChange={(value) =>
                  setForm((prev) => ({ ...prev, cuisineType: value }))
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select cuisine type" />
                </SelectTrigger>
                <SelectContent>
                  {cuisines.map((cuisine) => (
                    <SelectItem key={cuisine.value} value={cuisine.value}>
                      {cuisine.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="preparationTime">Preparation Time* (minutes)</Label>
              <Input
                id="preparationTime"
                name="preparationTime"
                type="number"
                min="1"
                value={form.preparationTime}
                onChange={handleChange}
                placeholder="e.g. 45"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <Label>Categories* (select at least one)</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`update-${category.id}`}
                    checked={form.categories.includes(category.id)}
                    onCheckedChange={(checked) =>
                      handleCategoryChange(category.id, checked as boolean)
                    }
                  />
                  <Label htmlFor={`update-${category.id}`}>{category.label}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-recipe-primary hover:bg-recipe-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Update Recipe"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateRecipeModal;
