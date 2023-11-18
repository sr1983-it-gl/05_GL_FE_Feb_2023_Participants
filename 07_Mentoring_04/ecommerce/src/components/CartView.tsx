import CartModel from "../cart"
import { ProductModel } from "../products"
import { CartItemView } from "./CartItemView"


type CartView = {

  cartModel : CartModel
  addToCart : (productItem : ProductModel) => void 
  removeFromCart : (productItem : ProductModel) => void 

}

const CartView = ({cartModel, addToCart, removeFromCart} : CartView) => {

  return (
    <div>

      {
        cartModel.cartItemsModel.map( (cartItemModelObj) => {

            return (
              <CartItemView cartItemModel={cartItemModelObj} addToCart={addToCart} removeFromCart={removeFromCart}/>
            )
        })
      }

    </div>
  )
}

export {CartView}