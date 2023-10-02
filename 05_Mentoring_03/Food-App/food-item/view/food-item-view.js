
class FoodItemView {

  constructor(foodItem){
    
    this.foodItem = foodItem;
  }

  render(){

    const foodItemDivElement = document.createElement("div");
    foodItemDivElement.setAttribute("id", "item-card");

      const cardTopElement = document.createElement("div");
      cardTopElement.setAttribute("id", "card-top");

        const ratingElement = document.createElement("i");
        ratingElement.setAttribute("class", "fa fa-star");
        ratingElement.setAttribute("id", "rating");
        ratingElement.innerText = this.foodItem.rating;

        const idElement = document.createElement("i");
        idElement.setAttribute("class", "fa fa-heart-o add-to-cart");
        idElement.setAttribute("id", this.foodItem.id);

      cardTopElement.appendChild(ratingElement);
      cardTopElement.appendChild(idElement);
    
      const imageElement = document.createElement("img");
      imageElement.src = this.foodItem.imagePath;

      const nameElement = document.createElement("p");
      nameElement.setAttribute("id", "item-name");
      nameElement.innerText = this.foodItem.name;

      const priceElement = document.createElement("p");
      priceElement.setAttribute("id", "item-price");

      priceElement.innerText = `Price : $ ${this.foodItem.price}`;

  
    foodItemDivElement.appendChild(cardTopElement);
    foodItemDivElement.appendChild(imageElement);
    foodItemDivElement.appendChild(nameElement);
    foodItemDivElement.appendChild(priceElement);

    return foodItemDivElement;
  }

  placeFoodItemFragment(foodCategory, foodItemFragment){

    const foodCategoryElement 
      = document.getElementById(foodCategory.id)

    foodCategoryElement.appendChild(foodItemFragment);
  }

}

export {FoodItemView}