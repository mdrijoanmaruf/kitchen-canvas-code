
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

export interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  cuisineType: string;
  likeCount: number;
  preparationTime?: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  title,
  image,
  cuisineType,
  likeCount,
  preparationTime,
}) => {
  const navigate = useNavigate();

  return (
    <Card className="recipe-card h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow">
          <div className="flex items-center px-2 py-1">
            <Heart className="h-4 w-4 text-recipe-primary mr-1" />
            <span className="text-sm font-medium">{likeCount}</span>
          </div>
        </div>
      </div>
      <CardContent className="pt-4 flex-grow">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="bg-recipe-accent text-recipe-secondary text-xs px-3 py-1 rounded-full">
            {cuisineType}
          </span>
          {preparationTime && (
            <span className="text-xs text-gray-500">
              {preparationTime} min
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="default"
          className="w-full bg-recipe-secondary hover:bg-recipe-secondary/90"
          onClick={() => navigate(`/recipe/${id}`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
