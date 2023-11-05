import { CartManager } from "./CartManager"
import { Header } from "./Header"
import { ProductsLister } from "./ProductsLister"

import { Container, Row, Col } from "react-bootstrap"

const Home = () => {

  return (
    <Container>
        
        <Row>
          <Col lg={12}>{<Header></Header>}</Col>
        </Row>
        <Row>
          <Col lg={9}>{<ProductsLister></ProductsLister>}</Col>
          <Col lg={3}>{<CartManager></CartManager>}</Col>  
        </Row>        
        
    </Container>
  )
}

export {Home}