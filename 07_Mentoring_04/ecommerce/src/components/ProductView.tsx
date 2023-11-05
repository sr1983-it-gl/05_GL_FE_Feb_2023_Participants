
import { ProductModel } from "../products";

import { Card, Button, Col } from "react-bootstrap"

type ProductViewModel = {
  product: ProductModel
}

const ProductView = (productViewModel: ProductViewModel) => {

  const product = productViewModel.product

  return (

    <Col className="my-2">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.price}
          </Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export { ProductView }