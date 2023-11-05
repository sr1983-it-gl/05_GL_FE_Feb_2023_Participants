
import { FormEvent, useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"

import {users} from "../users"

import {useNavigate} from "react-router-dom";

const Login = () => {

  // int age
  // age : integer
  // List<String>
  // Set<Employee>

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const doLogin = (event : FormEvent<HTMLFormElement>) => {

      event.preventDefault();

      // Implementation

      // a.b.c
      /*
        if (a.b != null){
          const cValue = a.b.c
        }
      */

      const username = usernameRef?.current?.value;
      const password = passwordRef?.current?.value;

      const matchedUser = users.users.find( (usernamePasswordData) => {

        let result : boolean =(username === usernamePasswordData.username &&
        password === usernamePasswordData.password)

        console.log('Result is ');
        console.log(result);

        return result;
      })

      console.log(matchedUser);
      console.log(`Matching user -> ${matchedUser}`)

      if (matchedUser){

        // MatchedUser is defined 
        // MatchedUser 'true'

        // show Home
        navigate("/home")
      }else{

        // MatchedUser is undefined 

        setError("Username/password combination is wrong...")
      }

  }

  return (
    <div>

      <Form onSubmit={doLogin}>

        {
          error && (
            /* Display the error message */

            <Alert key='danger' variant='danger'>
                {error}
            </Alert>            
          )
        }

        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" ref={usernameRef}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordRef} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

    </div>
  )
}

export { Login }