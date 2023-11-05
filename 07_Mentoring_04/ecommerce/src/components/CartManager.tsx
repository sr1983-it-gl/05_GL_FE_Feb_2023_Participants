import CartModel, { CartItemModel } from "../cart"
import { CartView } from "./CartView"

import products from "../products";

const CartManager = () => {

  const testDefaultCart = () => {

    const testCartItemsModel : CartItemModel[] = [

      {
        product: products[0],
        quantity : 5      
      },
      {
        product: products[1],
        quantity : 3,      
      },
      {
        product: products[2],
        quantity : 7      
      }
    ]

    const testCartModel : CartModel = {

      cartItemsModel : testCartItemsModel
    }

    return testCartModel;
  }

  return (
    <div style={{backgroundColor : 'lightgreen'}}>

        <CartView cartModel={testDefaultCart()}></CartView>

    </div>
  )
}

export {CartManager}