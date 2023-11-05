import { CartItemModel } from "../cart"


type CartItemViewModel = {

  cartItemModel : CartItemModel
}

const CartItemView = ({cartItemModel} : CartItemViewModel) => {

  return (
    <div>
      {cartItemModel.product.name} - {cartItemModel.quantity} - {cartItemModel.product.price}
    </div>
  )
}

export {CartItemView}

// Product Name, quantiy, price
// Product nname, price -> ProductModel, quantity