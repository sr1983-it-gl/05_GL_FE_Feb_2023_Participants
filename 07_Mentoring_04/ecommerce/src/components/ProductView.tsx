
import { ProductModel } from "../products";

import { Card, Button, Col } from "react-bootstrap"

type ProductViewModel = {

  product: ProductModel
  addToCart : (productItem : ProductModel) => void 
  removeFromCart : (productItem : ProductModel) => void 

}

const ProductView = ({product, addToCart, removeFromCart}: ProductViewModel) => {

  return (

    <Col className="my-2">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.price}
          </Card.Text>

          <Button variant="primary" onClick={ () => {
            addToCart(product)
          }}>Add To Cart</Button>

        <Button variant="primary" onClick={ () => {
            removeFromCart(product)
          }}>Remove from Cart</Button>

        </Card.Body>
      </Card>
    </Col>
  )
}

export { ProductView }