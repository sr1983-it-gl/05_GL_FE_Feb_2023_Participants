import CartModel, { CartItemModel } from "../cart"
import { ProductModel } from "../products";
import { CartView } from "./CartView"
import { PricesView } from "./PricesView";

type CartManagerModel = {

  cart: CartModel;
  addToCart : (productItem : ProductModel) => void 
  removeFromCart : (productItem : ProductModel) => void 

}

const CartManager = ({cart, addToCart, removeFromCart} : CartManagerModel) => {

  return (
    <div style={{backgroundColor : 'lightgreen'}}>

        <h2>Cart Items</h2>

        <hr/>

        <CartView cartModel={cart} addToCart={addToCart} removeFromCart={removeFromCart}></CartView>

        <PricesView cart={cart}></PricesView>

    </div>
  )
}

export {CartManager}