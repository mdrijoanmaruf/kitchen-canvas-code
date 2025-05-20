
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Trash, Edit } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface RecipeCardDetailProps {
  id: string;
  title: string;
  image: string;
  ingredients: string[];
  instructions: string;
  cuisineType: string;
  preparationTime: number;
  categories: string[];
  likeCount: number;
  isOwner?: boolean;
  onDelete?: () => void;
  onUpdate?: () => void;
}

const RecipeCardDetail: React.FC<RecipeCardDetailProps> = ({
  id,
  title,
  image,
  ingredients,
  instructions,
  cuisineType,
  preparationTime,
  categories,
  likeCount,
  isOwner = false,
  onDelete,
  onUpdate,
}) => {
  return (
    <Card className="recipe-card">
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          {isOwner && (
            <>
              <Button
                variant="default"
                size="icon"
                className="bg-recipe-primary hover:bg-recipe-primary/90 rounded-full"
                onClick={onUpdate}
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="destructive"
                size="icon"
                className="rounded-full"
                onClick={onDelete}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </div>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-500">
              {preparationTime} min
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="bg-recipe-accent text-recipe-secondary">
            {cuisineType}
          </Badge>
          {categories.map((category) => (
            <Badge key={category} variant="outline">
              {category}
            </Badge>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc pl-5 space-y-1">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <p className="whitespace-pre-line">{instructions}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex items-center">
          <Heart
            className="h-5 w-5 text-recipe-primary mr-2"
            fill="currentColor"
          />
          <span>{likeCount} people interested in this recipe</span>
        </div>
        {!isOwner && (
          <Button
            variant="default"
            className="bg-recipe-primary hover:bg-recipe-primary/90"
          >
            <Heart className="h-4 w-4 mr-2" /> Like
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default RecipeCardDetail;
