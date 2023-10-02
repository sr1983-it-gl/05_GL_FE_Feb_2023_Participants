import { FoodItemUtils } from "../../food-item/food-item-utils.js";
import { FoodCategory } from "./food-category.js";


class FoodCategoryFactory{

  static getCategories(){

    const foodCategories = new Array();

    foodCategories.push(
      
      new FoodCategory("biryani", "Biryani", 
      FoodItemUtils.retriveFoodItemBasedOnId(1).imagePath)
    )
    foodCategories.push(
      new FoodCategory("chicken", "Chicken", 
      FoodItemUtils.retriveFoodItemBasedOnId(10).imagePath)
    )
    foodCategories.push(
      new FoodCategory("paneer", "Paneer", FoodItemUtils.retriveFoodItemBasedOnId(16).imagePath)
    )
    foodCategories.push(
      new FoodCategory("vegetable", "Vegetable", FoodItemUtils.retriveFoodItemBasedOnId(23).imagePath)
    )
    foodCategories.push(
      new FoodCategory("chinese", "Chinese", 
      FoodItemUtils.retriveFoodItemBasedOnId(32).imagePath)
    )

    // TODO - Check the id
    foodCategories.push(
      new FoodCategory("south indian", "South Indian", 
      FoodItemUtils.retriveFoodItemBasedOnId(39).imagePath)
    )

    return foodCategories;
  }
}

export {FoodCategoryFactory}