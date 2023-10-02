
import {FoodItemUtils} from "../food-item/food-item-utils.js"
import {FoodItemView} from "../food-item/view/food-item-view.js"
import {FoodCategory} from "../food-category/model/food-category.js"
import {FoodCategoryView} from "../food-category/view/food-category-view.js"

class FoodAppView{

  constructor(foodCategories){

    this.foodCategories = foodCategories;
  }

  renderMainPanelView(){

    console.log("1");

    this.foodCategories.forEach( (foodCategory) => {

      console.log("2");

      const allFoodItemsBelongingToFoodCategory 
        = FoodItemUtils.retriveAllFoodItems(foodCategory)

        console.log("3");

      allFoodItemsBelongingToFoodCategory.forEach( (foodItem) => {

        console.log("4");

          const foodItemView = new FoodItemView(foodItem);

          const foodItemFragment = foodItemView.render();

          foodItemView.placeFoodItemFragment(foodCategory, foodItemFragment)
      })
      
    })
  }

  renderShortcutPanelView(){

    
    this.foodCategories.forEach( (foodCategory) => {

      const foodCategoryView = new FoodCategoryView(foodCategory);
      const foodCategoryFragment = foodCategoryView.render();
      

      const categoryListElement = document.getElementById("category-list");
      categoryListElement.appendChild(foodCategoryFragment);

    })

  }

}

export {FoodAppView}