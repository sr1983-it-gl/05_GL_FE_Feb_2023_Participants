import { CartItemModel } from "../cart"

import {Container, Row, Col, Button} from "react-bootstrap"
import { ProductModel } from "../products"

type CartItemViewModel = {

  cartItemModel : CartItemModel
  addToCart : (productItem : ProductModel) => void 
  removeFromCart : (productItem : ProductModel) => void 

}

const CartItemView = ({cartItemModel, addToCart, removeFromCart} : CartItemViewModel) => {

  return (
    <Row>

      <Col lg={4}>
      {cartItemModel.product.name}
      </Col>

      <Col lg={2}>
       <Button variant="primary" onClick={ () => {
            removeFromCart(cartItemModel.product)
          }}>-
        </Button>
      </Col>

      <Col lg={2}>
        <Button variant="primary" onClick={ () => {
              addToCart(cartItemModel.product)
            }}>+
        </Button>
      </Col>

      <Col lg={4}>
      {cartItemModel.quantity} - {cartItemModel.product.price}      
      </Col>
       
    </Row>
  )
}

export {CartItemView}

// Product Name, quantiy, price
// Product nname, price -> ProductModel, quantity