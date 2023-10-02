
import {foodItemsDataArray} from "./model/food-items-data.js";
import {FoodItem} from "./model/food-item.js"

class FoodItemUtils {

  static retriveFoodItemBasedOnId(foodItemId){

    const foodItemSampleDataResult = 
      foodItemsDataArray.find( (foodItemSampleData) => {

        return (foodItemSampleData.id === foodItemId)

      }
    )

    const foodItemObj = new FoodItem(
      foodItemSampleDataResult.id,
      foodItemSampleDataResult.name,
      foodItemSampleDataResult.price,
      foodItemSampleDataResult.rating,
      foodItemSampleDataResult.img,
      foodItemSampleDataResult.category);
    return foodItemObj


    // foodItemsDataArray.forEach( (foodItemSampleData) => {

    //   if (foodItemSampleData.id == foodItemId){

    //     const foodItemObj = new FoodItem(
    //       foodItemSampleData.id,
    //       foodItemSampleData.name,
    //       foodItemSampleData.price,
    //       foodItemSampleData.rating,
    //       foodItemSampleData.img,
    //       foodItemSampleData.category
    //     )
        
    //     return foodItemObj;
    //   }
    // })

  }

  static retriveAllFoodItems(foodCategory){

    const allFoodItems = new Array();

    foodItemsDataArray.forEach((foodItemSampleData) => {

      if (foodCategory.id == foodItemSampleData.category){

      // id, name, price, rating, imagePath, category
      const foodItemObj = new FoodItem(
        foodItemSampleData.id,
        foodItemSampleData.name,
        foodItemSampleData.price,
        foodItemSampleData.rating,
        foodItemSampleData.img,
        foodItemSampleData.category
      )

      allFoodItems.push(foodItemObj);

      }

    })

    return allFoodItems;
  }
}

export {FoodItemUtils}