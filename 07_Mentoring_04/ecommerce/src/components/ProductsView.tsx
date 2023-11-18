
import products, { ProductModel } from "../products"
import { ProductView } from "./ProductView"

import {Row} from "react-bootstrap"

type ProductsViewModel = {

  addToCart : (productItem : ProductModel) => void 
  removeFromCart : (productItem : ProductModel) => void 
}

const ProductsView = ({addToCart, removeFromCart} : ProductsViewModel) => {

  return (
    <Row>

      {
        products.map( (productObj) => {

          return (
            <ProductView product={productObj} addToCart={addToCart} removeFromCart={removeFromCart}></ProductView>
          )

        })
      }
    </Row>
  )
}

export {ProductsView}