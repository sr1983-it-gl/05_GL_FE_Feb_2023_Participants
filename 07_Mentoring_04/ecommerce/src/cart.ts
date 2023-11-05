import { ProductModel } from "./products"


export type CartItemModel = {

  product: ProductModel
  quantity : number

}


type CartModel = {

  cartItemsModel : CartItemModel[]

}

export default CartModel;