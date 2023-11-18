import { Row, Col, Button } from "react-bootstrap"
import CartModel from "../cart"


type PricesViewModel = {

  cart: CartModel
}

const PricesView = ({cart} : PricesViewModel) => {

  const calculateAllItemsPrice = () => {

    let allItemsPrice = 0;

    cart.cartItemsModel.forEach( (cartItemModel) => {

      let itemPrice = cartItemModel.quantity *
      cartItemModel.product.price;


      allItemsPrice = allItemsPrice + itemPrice;
    })

    return allItemsPrice
  }

  const calcualteTaxPrice = () => {

    return (calculateAllItemsPrice() * 10) / 100
    
  }


  const calcualteShippingPrice = () => {

    return 200;
  }

  const calcualteTotalPrice = () => {

    return (calculateAllItemsPrice() + calcualteTaxPrice() + calcualteShippingPrice())
  }


  return (
    <div>

        <hr/>

        <Row>
          <Col>Items Price</Col>
          <Col>{calculateAllItemsPrice()}</Col>
        </Row>

        <Row>
          <Col>Tax Price</Col>
          <Col>{calcualteTaxPrice()}</Col>
        </Row>

        <Row>
          <Col>Shipping Price</Col>
          <Col>{calcualteShippingPrice()}</Col>
        </Row>

      <hr/>

      <Row>
          <Col>Total Price</Col>
          <Col>{calcualteTotalPrice()}</Col>
        </Row>

      <Row>
        <Col>
          <Button>Checkout</Button>
        </Col>
      </Row>
    </div>
  )
}

export {PricesView}