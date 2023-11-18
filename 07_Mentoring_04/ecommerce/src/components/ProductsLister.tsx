import { ProductModel } from "../products"
import { ProductsView } from "./ProductsView"

type ProductsListerModel = {

  addToCart : (productItem : ProductModel) => void 
  removeFromCart : (productItem : ProductModel) => void 
}

const ProductsLister = ({addToCart, removeFromCart} : ProductsListerModel) => {

  return (
    <div style={{backgroundColor : 'lightblue'}}>

      <h2>Products Display</h2>
      <hr/>

      <ProductsView addToCart={addToCart} removeFromCart={removeFromCart}></ProductsView>
    </div>
  )
}

export {ProductsLister}