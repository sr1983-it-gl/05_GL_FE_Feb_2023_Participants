
import {FoodCategory} from "../food-category/model/food-category.js"
import {FoodCategoryFactory} from "../food-category/model/food-category-factory.js"

import {FoodAppView} from "../view/food-app-view.js";

class FoodAppController {

  init(){

    const allFoodCategories = FoodCategoryFactory.getCategories();
    
    const foodAppView = new FoodAppView(allFoodCategories);

    foodAppView.renderMainPanelView();
    foodAppView.renderShortcutPanelView();
  }
}

export {FoodAppController}