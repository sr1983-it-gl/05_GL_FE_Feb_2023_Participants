
import products from "../products"
import { ProductView } from "./ProductView"

import {Row} from "react-bootstrap"

const ProductsView = () => {

  return (
    <Row>

      {
        products.map( (productObj) => {

          return (
            <ProductView product={productObj} ></ProductView>
          )

        })
      }
    </Row>
  )
}

export {ProductsView}