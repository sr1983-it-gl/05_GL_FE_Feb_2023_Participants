import CartModel, { CartItemModel } from "../cart"
import { CartManager } from "./CartManager"
import { Header } from "./Header"
import { ProductsLister } from "./ProductsLister"

import { Container, Row, Col } from "react-bootstrap"
import products, { ProductModel } from "../products";
import { useState } from "react"

const Home = () => {

  const testDefaultCart = () => {

    const testCartItemsModel : CartItemModel[] = [

      {
        product: products[0],
        quantity : 5      
      },
      {
        product: products[1],
        quantity : 3,      
      },
      {
        product: products[2],
        quantity : 1      
      }
    ]

    const testCartModel : CartModel = {

      cartItemsModel : testCartItemsModel
    }

    return testCartModel;
  }

  const [cart, setCart] = useState(testDefaultCart())

  const addToCart = (productItem : ProductModel) => {

    console.log(`Add to Cart...`);
    const matchingProduct = cart.cartItemsModel.find( (cartItemModel) => (
        cartItemModel.product.id === productItem.id
    ));    

    if (matchingProduct){

      const updatedCartItems  = cart.cartItemsModel.map((cartItem) => {

          if (cartItem.product.id === productItem.id){

            const updatedCartItem = {
              product : cartItem.product,
              quantity: cartItem.quantity + 1
            }

            return updatedCartItem;
          }else{

            const newCartItem = {
              product: cartItem.product,
              quantity: cartItem.quantity
            }

            return newCartItem;
          }
        });

        const updatedCart : CartModel = {
            cartItemsModel: updatedCartItems
        } 

      setCart(updatedCart);
    }else{

      const newCartItem = {
        product: productItem, quantity: 1
      }
      
      const updatedCartItems = 
        // [1, 2, 3, 4, newItem]
        [... cart.cartItemsModel, newCartItem ];

      const updatedCart : CartModel = {
        cartItemsModel : updatedCartItems
      }

      setCart(updatedCart);
    }       
  }

  const removeFromCart = (productItem : ProductModel) => {

    const updatedCartItems : CartItemModel[] = [];
        
    cart.cartItemsModel.forEach((cartItem) => {

      if (cartItem.product.id  === productItem.id){

        if (cartItem.quantity === 1){
          // If Quantity is 1, then 'remove' wil make as 0
          // So no need to add/copy it
        }else{

          let updatedCartItem : CartItemModel = {
            product: cartItem.product,
            quantity: cartItem.quantity - 1
          }             
          updatedCartItems.push(updatedCartItem);
        }
      }else{
        updatedCartItems.push(cartItem);
      }
    })

    const updatedCart : CartModel = {
      cartItemsModel: updatedCartItems
    }

    setCart(updatedCart);       
  }

  return (
    <Container>
        
        <Row>
          <Col lg={12}>{<Header></Header>}</Col>
        </Row>
        <Row>
          <Col lg={9}>{<ProductsLister addToCart={addToCart} removeFromCart={removeFromCart}></ProductsLister>}</Col>
          <Col lg={3}>{<CartManager cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}></CartManager>}</Col>  
        </Row>        
        
    </Container>
  )
}

export {Home}