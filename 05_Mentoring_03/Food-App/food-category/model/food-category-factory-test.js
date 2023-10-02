
import { FoodCategoryFactory } from "./food-category-factory.js";


const allFoodCategories = FoodCategoryFactory.getCategories()

console.log(allFoodCategories.length);
console.log(allFoodCategories);
