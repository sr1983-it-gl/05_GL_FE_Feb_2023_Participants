
class FoodItem {

  constructor(id, name, price, rating, imagePath, category){

    this.id = id;
    this.name = name;
    this.price = price;
    this.rating = rating;

    // TODO - 
    //  Current Path - images/biryyani
    // Desired path - food-item/model/images/biryani

    const desiredImagePath = `./food-item/model/${imagePath}`
    this.imagePath = desiredImagePath;
    this.category = category;
  }
}

export {FoodItem}

// export default A

//

// import 