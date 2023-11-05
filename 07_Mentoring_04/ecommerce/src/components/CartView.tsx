import CartModel from "../cart"
import { CartItemView } from "./CartItemView"


type CartView = {

  cartModel : CartModel
}

const CartView = (cartView : CartView) => {
  const cartModel = cartView.cartModel

  return (
    <div>

      {
        cartModel.cartItemsModel.map( (cartItemModelObj) => {

            return (
              <CartItemView cartItemModel={cartItemModelObj} />
            )
        })
      }

    </div>
  )
}

export {CartView}